class Student {
    constructor(firstName, lastName, birthYear, grades = []) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthYear = birthYear;
        this.grades = grades;
        this.attendance = new Array(25).fill(null);
        this._attendanceIndex = 0;
    }

    getAge() {
        const currentYear = new Date().getFullYear();
        return currentYear - this.birthYear;
    }

    getAverageGrade() {
        if (this.grades.length === 0) return 0;
        const sum = this.grades.reduce((acc, val) => acc + val, 0);
        return sum / this.grades.length;
    }

    present() {
        if (this._attendanceIndex < 25) {
            this.attendance[this._attendanceIndex] = true;
            this._attendanceIndex++;
        } else {
            console.warn(`${this.firstName} ${this.lastName}: Відвідуваність вже заповнена!`);
        }
    }

    absent() {
        if (this._attendanceIndex < 25) {
            this.attendance[this._attendanceIndex] = false;
            this._attendanceIndex++;
        } else {
            console.warn(`${this.firstName} ${this.lastName}: Відвідуваність вже заповнена!`);
        }
    }

    summary() {
        const avgGrade = this.getAverageGrade();
        const attended = this.attendance.filter(v => v === true).length;
        const totalMarked = this.attendance.filter(v => v !== null).length;
        const attendanceRate = totalMarked > 0 ? attended / totalMarked : 0;

        if (avgGrade > 90 && attendanceRate > 0.9) {
            return "Молодець!";
        } else if (avgGrade > 90 || attendanceRate > 0.9) {
            return "Добре, але можна краще";
        } else {
            return "Редиска!";
        }
    }
}

const student1 = new Student("Саша", "Дерюгін", 2001, [95, 100, 92, 90]);
const student2 = new Student("Соломія", "Іщченко", 2004, [85, 88, 91]);
const student3 = new Student("Максим", "Іваненко", 2004, [60, 65, 70]);


for (let i = 0; i < 20; i++) student1.present();
for (let i = 0; i < 5; i++) student1.absent();

for (let i = 0; i < 10; i++) student2.present();
for (let i = 0; i < 10; i++) student2.absent();

for (let i = 0; i < 5; i++) student3.absent();


console.log(`${student1.firstName}:`, student1.summary());
console.log(`${student2.firstName}:`, student2.summary());
console.log(`${student3.firstName}:`, student3.summary());

