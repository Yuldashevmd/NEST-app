/*
  Warnings:

  - You are about to drop the `teacher_classes` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "teacher_classes" DROP CONSTRAINT "teacher_classes_subject_id_fkey";

-- DropForeignKey
ALTER TABLE "teacher_classes" DROP CONSTRAINT "teacher_classes_user_id_fkey";

-- DropTable
DROP TABLE "teacher_classes";

-- CreateTable
CREATE TABLE "teacher_subject" (
    "id" VARCHAR(50) NOT NULL,
    "user_id" TEXT NOT NULL,
    "subject_id" TEXT NOT NULL,

    CONSTRAINT "teacher_subject_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "teacher_subject_subject_id_user_id_key" ON "teacher_subject"("subject_id", "user_id");

-- AddForeignKey
ALTER TABLE "teacher_subject" ADD CONSTRAINT "teacher_subject_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "teacher_subject" ADD CONSTRAINT "teacher_subject_subject_id_fkey" FOREIGN KEY ("subject_id") REFERENCES "subjects"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
