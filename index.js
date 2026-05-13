import express from "express";

const app = express();
app.use(express.json());  // parse JSON bodies

// in-memory data — like a simple array instead of a database
const students = [
    { id: 1, name: "Bawantha", age: 20, course: "CS" },
    { id: 2, name: "Kumar", age: 21, course: "IT" },
];

// GET all students
app.get("/students", (req, res) => {
    res.json(students);
});

// GET one student by id
app.get("/students/:id", (req, res) => {
    const id      = parseInt(req.params.id);
    const student = students.find(s => s.id === id);

    if (!student) {
        return res.status(404).json({ message: "Student not found" });
    }

    res.json(student);
});

// POST — add a new student
app.post("/students", (req, res) => {
    const { name, age, course } = req.body;

    const newStudent = {
        id: students.length + 1,
        name,
        age,
        course
    };

    students.push(newStudent);
    res.status(201).json(newStudent);
});

// DELETE — remove a student
app.delete("/students/:id", (req, res) => {
    const id    = parseInt(req.params.id);
    const index = students.findIndex(s => s.id === id);

    if (index === -1) {
        return res.status(404).json({ message: "Student not found" });
    }

    students.splice(index, 1);
    res.json({ message: "Student deleted" });
});

// start server
app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});