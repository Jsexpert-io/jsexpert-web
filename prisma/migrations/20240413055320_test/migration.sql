/*
  Warnings:

  - A unique constraint covering the columns `[traceidSpanId]` on the table `Trace` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `traceidSpanId` to the `Trace` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Trace" ADD COLUMN     "traceidSpanId" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Trace_traceidSpanId_key" ON "Trace"("traceidSpanId");
