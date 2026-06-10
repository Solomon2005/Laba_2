import { calculateAverage, addLetterGrade } from './analytics.js';
import { findTopStudent, filterFailed } from './utils.js';

const grades = [
    { name: "Макар", score: 85 },
    { name: "Денис", score: 92 },
    { name: "Анна", score: 78 },
    { name: "Даша", score: 88 },
    { name: "Студент_X", score: 45 }
];

console.log("Анализ успеваемости");

console.log(`Средний балл группы: ${calculateAverage(grades).toFixed(2)}`);

console.log(`Лучший студент: ${findTopStudent(grades)}`);

console.log(`Список должников: ${filterFailed(grades, 60).join(', ')}`);

console.log("Итоговый массив с буквенными оценками:");
console.table(addLetterGrade(grades));