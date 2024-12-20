/*
  Warnings:

  - Made the column `close` on table `MedicalCase` required. This step will fail if there are existing NULL values in that column.
  - Made the column `costUSD` on table `MedicalCase` required. This step will fail if there are existing NULL values in that column.
  - Made the column `paidBDT` on table `MedicalCase` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "MedicalCase" ALTER COLUMN "close" SET NOT NULL,
ALTER COLUMN "costUSD" SET NOT NULL,
ALTER COLUMN "paidBDT" SET NOT NULL;
