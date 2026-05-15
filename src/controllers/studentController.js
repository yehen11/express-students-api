import * as studentService from '../services/studentService.js';

export async function getAll(req,res){
    try{
        const students = await studentService.getAllStudents();
        res.json(students);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export async function getOne(req,res){
    try{
        const student = await studentService.getStudentById(req.params.id);
        res.json(student);
    }catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export async function create(req, res) {
    try{
        const student = await studentService.createStudent(req.body);
        res.status(201).json(student);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

export async function update(req, res) {
    try {
        const student = await studentService.updateStudent(req.params.id, req.body);
        res.json(student);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

export async function remove(req, res) {
    try {
        const result = await studentService.deleteStudent(req.params.id);
        res.json(result);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}