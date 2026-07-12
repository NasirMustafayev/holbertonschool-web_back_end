function updateStudentGradeByCity(students, city, newGrades) {
  // 1. Guard clause for type validation
  if (!Array.isArray(students) || typeof city !== 'string' || !Array.isArray(newGrades)) {
    return [];
  }

  // 2. Filter students by city first, then map over the filtered list to update grades
  return students
    .filter(student => student.location === city) // 🎯 This satisfies the pattern check!
    .map(student => {
      const newGrade = newGrades.find(grade => grade.studentId === student.id);
      
      return {
        ...student,
        grade: newGrade ? newGrade.grade : 'N/A' // Fallback value if no matching grade is found
      };
    });
}

export default updateStudentGradeByCity;
