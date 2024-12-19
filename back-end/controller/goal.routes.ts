/**
 * @swagger
 * components:
 *   schemas:
 *     Goal:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *           description: Unique identifier for the goal.
 *         name:
 *           type: string
 *           description: Name of the goal.
 *         description:
 *           type: string
 *           description: Detailed description of the goal.
 *         targetAmount:
 *           type: number
 *           description: Target amount to be raised for the goal.
 *         currentAmount:
 *           type: number
 *           description: Current amount raised so far.
 *         photo:
 *           type: string
 *           description: URL or path to the goal's photo.
 */

import express, { NextFunction, Request, Response } from 'express';
import goalService from '../service/goal.service';
import { GoalInput } from '../types';

const goalRouter = express.Router();

/**
 * @swagger
 * /goals:
 *   get:
 *     summary: Get a list of all goals.
 *     responses:
 *       200:
 *         description: A list of goals
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Goal'
 */
goalRouter.get('/', async (req: Request, res: Response, next: NextFunction) => {
    try {
        const goals = await goalService.getAllGoals();
        res.status(200).json(goals); // Return 200 and JSON representation
    } catch (error) {
        res.status(500).json({ message: 'Internal server error' });
    }
});

/**
 * @swagger
 * /goals/{id}:
 *   get:
 *     summary: Get a goal by ID
 *     description: Retrieve a specific goal by its unique ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The goal ID
 *     responses:
 *       200:
 *         description: A goal object
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Goal'
 *       404:
 *         description: Goal not found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 */
goalRouter.get('/:id', async (req: Request, res: Response, next: NextFunction) => {
    try {
        const id = req.params.id;
        const goal = await goalService.getGoalById(id);
        res.status(200).json(goal);
    } catch (error) {
        res.status(404).json({ message: (error as Error).message });
    }
});

/**
 * @swagger
 * /goals:
 *   post:
 *     summary: Add a new goal
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Goal'
 *           example:
 *             title: "Provide Clean Water"
 *             photo: {}
 *             description: "A project to supply clean drinking water to rural areas."
 *             targetAmount: 10000
 *     responses:
 *       201:
 *         description: Goal added successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Goal'
 */
goalRouter.post('/', async (req: Request, res: Response, next: NextFunction) => {
    try {
        const goalData: GoalInput = req.body;
        //const newGoal = 
        const newGoal = await goalService.addGoal(goalData);
        res.status(201).json(newGoal);
    } catch (error) {
        res.status(400).json({ message: (error as Error).message });
    }
});

/**
 * @swagger
 * /goals/{id}:
 *   put:
 *     summary: Update a goal by ID
 *     description: Update all fields of a goal by its unique ID. The entire goal object must be provided.
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The goal ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               description:
 *                 type: string
 *               targetAmount:
 *                 type: number
 *               currentAmount:
 *                 type: number
 *               photo:
 *                 type: string
 *             example:
 *               name: "Updated Goal Name"
 *               description: "Updated description of the goal."
 *               targetAmount: 20000
 *               currentAmount: 5000
 *               photo: "File"
 *     responses:
 *       200:
 *         description: Goal updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Goal'
 *       404:
 *         description: Goal not found
 *       400:
 *         description: Invalid request data
 */
goalRouter.put('/:id', async (req: Request, res: Response, next: NextFunction) => {
    try {
        const id = req.params.id;
        const updateData = req.body;

        // Validate if all required fields are provided in the body (for full update)
        const { name, description, targetAmount, currentAmount, photo } = updateData;
        if (!name || !description || targetAmount === undefined || currentAmount === undefined || !photo) {
            return res.status(400).json({ message: 'All fields (name, description, targetAmount, currentAmount, photo) are required.' });
        }

        // Call the service to update the goal by ID
        const updatedGoal = await goalService.updateGoalById(id, {
            title: name,  // mapping 'name' to 'title'
            description,
            requiredAmount: targetAmount,  // mapping 'targetAmount' to 'requiredAmount'
            //currentAmount,
            photo: new File([photo], 'uploadedPhoto'), // Assuming photo is a base64 or URL and needs conversion to a File object
        });

        // Send the updated goal back to the client
        res.status(200).json(updatedGoal);
    } catch (error) {
        if ((error as Error).message === 'Goal not found') {
            res.status(404).json({ message: (error as Error).message });
        } else {
            res.status(400).json({ message: (error as Error).message });
        }
    }
});



/**
 * @swagger
 * /goals/{id}:
 *   delete:
 *     summary: Delete a goal by ID
 *     description: Delete a specific goal by its unique ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The goal ID
 *     responses:
 *       200:
 *         description: Goal deleted successfully
 *       404:
 *         description: Goal not found
 */
goalRouter.delete('/:id', async (req: Request, res: Response, next: NextFunction) => {
    try {
        const id = req.params.id;
        await goalService.deleteGoalById(id);
        res.status(200).json({ message: `Goal with ID ${id} deleted successfully.` });
    } catch (error) {
        res.status(404).json({ message: (error as Error).message });
    }
});

export { goalRouter };
