import * as studentRepository from '../repositories/studentRepository.js';

export async function getAllStudents(){{}
    return studentRepository.findAll();
}

export async function getStudentById(id) {

    const student = await studentRepository.findById(id);
    if(!student) {
        throw new Error('Student not found');
    }
    return student;
}

export async function createStudent(data) {

    const { name, age, course } = data;
    if(!name || !age || !course){
        throw new Error (`Name, age and course are required fields`);
    }

    if (typeof age !== "number" || age <= 0 || age > 100) {
        throw new Error("Age must be a number between 1 and 100");
    }

    return studentRepository.create({ name, age, course });
    
}

export async function updateStudent(id, data){
    const student = await studentRepository.update(id, data);
    if(!student) {
        throw new Error('Student not found');
    }
    return student;
}

export async function deleteStudent(id){
    const student = await studentRepository.remove(id);

    if(!student) throw new Error('Student not found');
    return { message: 'Student deleted successfully' };
}