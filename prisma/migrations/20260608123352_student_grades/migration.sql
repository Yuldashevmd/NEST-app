-- CreateTable
CREATE TABLE "student_grades" (
    "id" VARCHAR(50) NOT NULL,
    "studentId" VARCHAR(50) NOT NULL,
    "class_subjectId" VARCHAR(50) NOT NULL,
    "teacherId" VARCHAR(50) NOT NULL,
    "grade" DOUBLE PRECISION NOT NULL,
    "gradeType" VARCHAR(50) NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "student_grades_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "student_grades" ADD CONSTRAINT "student_grades_studentId_fkey" FOREIGN KEY ("studentId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "student_grades" ADD CONSTRAINT "student_grades_teacherId_fkey" FOREIGN KEY ("teacherId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "student_grades" ADD CONSTRAINT "student_grades_class_subjectId_fkey" FOREIGN KEY ("class_subjectId") REFERENCES "class_subjects"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
