-- AlterTable
ALTER TABLE "_VolunteerGoals" ADD CONSTRAINT "_VolunteerGoals_AB_pkey" PRIMARY KEY ("A", "B");

-- DropIndex
DROP INDEX "_VolunteerGoals_AB_unique";
