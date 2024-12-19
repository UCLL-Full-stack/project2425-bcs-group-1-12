/**
 * @swagger
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *           description: Unique identifier for the user.
 *         firstName:
 *           type: string
 *           description: The first name of the user.
 *         lastName:
 *           type: string
 *           description: The last name of the user.
 *         email:
 *           type: string
 *           description: The email address of the user.
 *         password:
 *           type: string
 *           description: The password of the user.
 *     Volunteer:
 *       allOf:
 *         - $ref: '#/components/schemas/User'
 *         - type: object
 *           properties:
 *             goals:
 *               type: array
 *               items:
 *                 type: string
 *               description: List of assigned goals for the volunteer.
 */


import express, { Request, Response, NextFunction } from 'express';
import userService from '../service/user.service';
import { VolunteerType } from '../types';

const userRouter = express.Router();

/**
 * @swagger
 * /users:
 *   get:
 *     summary: Get a list of all users.
 *     responses:
 *       200:
 *         description: A list of users
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/User'
 */
userRouter.get('/', async (req: Request, res: Response, next: NextFunction) => {
    try {
        const users = userService.getAllUsers();
        res.status(200).json(users);
    } catch (error) {
        next(error);
    }
});

/**
 * @swagger
 * /users:
 *   post:
 *     summary: Add a new user (volunteer).
 *     description: This endpoint allows adding a new volunteer to the system.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               firstName:
 *                 type: string
 *                 description: First name of the volunteer
 *                 example: "John"
 *               lastName:
 *                 type: string
 *                 description: Last name of the volunteer
 *                 example: "Doe"
 *               email:
 *                 type: string
 *                 description: Email address of the volunteer
 *                 example: "john.doe@example.com"
 *               password:
 *                 type: string
 *                 description: Password for the volunteer's account
 *                 example: "StrongPassword1!"
 *     responses:
 *       201:
 *         description: Successfully added new volunteer
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 *                   description: Unique ID of the created volunteer
 *                   example: "generated-unique-id"
 *                 firstName:
 *                   type: string
 *                   description: First name of the volunteer
 *                   example: "John"
 *                 lastName:
 *                   type: string
 *                   description: Last name of the volunteer
 *                   example: "Doe"
 *                 email:
 *                   type: string
 *                   description: Email address of the volunteer
 *                   example: "john.doe@example.com"
 *                 password:
 *                   type: string
 *                   description: Password for the volunteer's account
 *                   example: "StrongPassword1!"
 *       400:
 *         description: Invalid request body or missing parameters
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Invalid input, missing required fields"
 */
userRouter.post('/', async (req: Request, res: Response, next: NextFunction) => {
    try {
        const volunteerInput: VolunteerType = req.body;
        const newVolunteer = userService.addUser(volunteerInput); // addUser method adds a volunteer
        res.status(201).json(newVolunteer);
    } catch (error) {
        res.status(400).json({ message: (error as Error).message });
    }
});

/**
 * @swagger
 * /users/{id}:
 *   delete:
 *     summary: Delete a user by ID.
 *     description: Remove a specific user by their unique ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The user ID
 *     responses:
 *       200:
 *         description: User deleted successfully
 *       404:
 *         description: User not found
 */
userRouter.delete('/:id', async (req: Request, res: Response, next: NextFunction) => {
    try {
        const id = req.params.id;
        userService.deleteUserById(id);
        res.status(200).json({ message: `User with ID ${id} deleted successfully.` });
    } catch (error) {
        res.status(404).json({ message: (error as Error).message });
    }
});

/**
 * @swagger
 * /users/{id}/assign-goal:
 *   post:
 *     summary: Assign a goal to a volunteer.
 *     description: Assign a specific goal to a volunteer by their unique ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The unique ID of the volunteer.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *                 description: The title of the goal.
 *                 example: "Fundraising for medical aid"
 *               description:
 *                 type: string
 *                 description: A brief description of the goal.
 *                 example: "Raise $5000 for medical equipment."
 *               targetAmount:
 *                 type: number
 *                 description: The amount required to achieve the goal.
 *                 example: 5000
 *     responses:
 *       200:
 *         description: Goal assigned successfully.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Goal assigned successfully to volunteer with ID: {id}."
 *       404:
 *         description: Volunteer not found.
 *       400:
 *         description: Invalid input.
 */
userRouter.post('/:id/assign-goal', async (req: Request, res: Response, next: NextFunction) => {
    try {
        const id = req.params.id;
        const goalInput = req.body; // Assuming input is validated elsewhere
        const message = userService.assignGoalToVolunteer(id, goalInput);
        res.status(200).json({ message });
    } catch (error) {
        res.status(400).json({ message: (error as Error).message });
    }
});

export { userRouter };
