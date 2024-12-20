/*
  Warnings:

  - A unique constraint covering the columns `[patientId]` on the table `MedicalCase` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "MedicalCase_patientId_key" ON "MedicalCase"("patientId");
