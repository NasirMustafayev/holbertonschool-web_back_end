function getStudentIdsSum(arr){
    return arr.reduce((sum, student) => sum + student.id, 0)
}

export default getStudentIdsSum
