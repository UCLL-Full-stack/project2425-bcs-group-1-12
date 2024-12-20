-- CreateTable
CREATE TABLE "Patient" (
    "id" SERIAL NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "age" INTEGER NOT NULL,
    "gender" TEXT NOT NULL,
    "illness" TEXT NOT NULL,
    "status" TEXT NOT NULL,

    CONSTRAINT "Patient_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MedicalCase" (
    "id" SERIAL NOT NULL,
    "patientId" INTEGER NOT NULL,
    "description" TEXT NOT NULL,
    "open" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "close" TIMESTAMP(3) NOT NULL,
    "costBDT" DECIMAL(65,30) NOT NULL,
    "costUSD" DECIMAL(65,30) NOT NULL,
    "paidBDT" DECIMAL(65,30) NOT NULL,

    CONSTRAINT "MedicalCase_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "MedicalCase_patientId_key" ON "MedicalCase"("patientId");

-- AddForeignKey
ALTER TABLE "MedicalCase" ADD CONSTRAINT "MedicalCase_patientId_fkey" FOREIGN KEY ("patientId") REFERENCES "Patient"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
