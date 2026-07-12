function updateStudentGradeByCity(students, city, newGrades) {
  if (!Array.isArray(students) || typeof city !== 'string' || !Array.isArray(newGrades)) {
    return [];
  }

  const updatedStudents = students.map(student => {
    if (student.location === city) {
      const newGrade = newGrades.find(grade => grade.studentId === student.id);
      if (newGrade) {
        return { ...student, grade: newGrade.grade };
      }
    }
    return student;
  });

  return updatedStudents;
}

export default updateStudentGradeByCity;
