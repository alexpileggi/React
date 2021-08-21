class Student {
    constructor(name, email, community) {
        this.name = name;
        this.email = email;
        this.community = community;
    }
}

class Bootcamp {
	constructor(name,level,students = []) {
		this.name = name;
		this.level = level;
		this.students = students;
	}
	registerStudent(student) {
		const studentEmail = regStudent => regStudent.email === student.email;
		const registerEmail = this.students.some(studentEmail);
        if (!registerEmail) {
			this.students.push(student);
			console.log(`Registering ${student.email} to the bootcamp ${this.name}.`);	
		}
		else {
            console.log(`The student ${student.email} is already registered to the ${this.name} bootcamp!`);
        }
		return this.students;
	}
}
