import Student from '../models/Student.js';

export async function findAll(){
    return Student.find();
}

export async function findById(id){
    return Student.findById(id);
}

export async function create(data){
    const student = new Student(data);
    return student.save();
}

export async function update(id,data) {
    return Student.findByIdAndUpdate(id, data, { new: true });
}

export async function remove(id){
    return Student.findByIdAndDelete(id);
}