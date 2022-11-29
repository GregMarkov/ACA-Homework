class University {
    constructor(){
        this.teachers = []
        this.students = []
    }

    addMember(member){
        if (member.role === 'teacher') {
            this.teachers.push(member)
        } else {
            this.students.push(member)
        }
    }
    removeMember(member){
        if (member.role === 'teacher') {
            this.teachers = this.teachers.filter(item => item !== member)
        } else {
            this.students = this.students.filter(item => item !== member)
        }
    }
    startLesson(){
        this.teachers.forEach(element => element.energy -= 10);
        this.students.forEach(element => element.energy -= 5);
    }
}

const myUniversity = new University();

class UniversityMember {
    constructor (name, age, role) {
        this.name = name;
        this.age = age;
        this.role = role;
        this.energy = 24;
    }
    info (){
        return this;
    }
}

class Teacher extends UniversityMember{
    constructor(name, age){
        super(name, age);
        this.role = 'teacher';
    }
}

class Student extends UniversityMember{
    constructor(name, age, energy){
        super(name, age, energy);
        this.role = 'student';
    }
}


const t1 = new Teacher ('Mike', 35);
const t2 = new Teacher ('David', 40);
const s1 = new Student ('Susan', 25);
const s2 = new Student ('Alex', 24);
const s3 = new Student ('Andy', 37);

