/*
  Warnings:

  - You are about to drop the column `month` on the `Tab` table. All the data in the column will be lost.
  - You are about to drop the column `year` on the `Tab` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Tab" DROP COLUMN "month",
DROP COLUMN "year",
ADD COLUMN     "dateCreated" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;
