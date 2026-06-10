export function findTopStudent(data) {
    if (data.length === 0) return null;
    return data.reduce((max, student) => student.score > max.score ? student : max, data[0]).name;
}

export function filterFailed(data, passScore = 60) {
    return data
        .filter(student => student.score < passScore)
        .map(student => student.name);
}