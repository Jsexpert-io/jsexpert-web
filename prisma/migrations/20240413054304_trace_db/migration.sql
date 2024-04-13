/*
  Warnings:

  - Added the required column `attributes` to the `Trace` table without a default value. This is not possible if the table is not empty.
  - Added the required column `endTimeUnixNano` to the `Trace` table without a default value. This is not possible if the table is not empty.
  - Added the required column `kind` to the `Trace` table without a default value. This is not possible if the table is not empty.
  - Added the required column `parentSpanId` to the `Trace` table without a default value. This is not possible if the table is not empty.
  - Added the required column `projectId` to the `Trace` table without a default value. This is not possible if the table is not empty.
  - Added the required column `spanId` to the `Trace` table without a default value. This is not possible if the table is not empty.
  - Added the required column `startTimeUnixNano` to the `Trace` table without a default value. This is not possible if the table is not empty.
  - Added the required column `traceId` to the `Trace` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Trace" ADD COLUMN     "attributes" JSONB NOT NULL,
ADD COLUMN     "endTimeUnixNano" TEXT NOT NULL,
ADD COLUMN     "kind" INTEGER NOT NULL,
ADD COLUMN     "parentSpanId" TEXT NOT NULL,
ADD COLUMN     "projectId" TEXT NOT NULL,
ADD COLUMN     "spanId" TEXT NOT NULL,
ADD COLUMN     "startTimeUnixNano" TEXT NOT NULL,
ADD COLUMN     "traceId" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "Trace" ADD CONSTRAINT "Trace_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "Project"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
