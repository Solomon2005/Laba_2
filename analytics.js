export function calculateAverage(data) {
    if (data.length === 0) return 0;
    const total = data.reduce((sum, student) => sum + student.score, 0);
    return total / data.length;
}

export function addLetterGrade(data) {
    return data.map(student => {
        let letter;
        if (student.score >= 90) letter = "A";
        else if (student.score >= 75) letter = "B";
        else letter = "C";

        return { ...student, letter }; // возвращаем новый объект с полем letter
    });
}