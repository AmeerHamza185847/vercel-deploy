import express from 'express';

const PORT = 8000;
const app = express();

// middleware for JSON
app.use(express.json());

// Fetching all users
app.get('/api/users', (req, res) => {
    res.send("Fetching all Users!");
})

// Adding users
app.post('/users', (req, res) => {
    const userData = req.body;
    res.status(200).json({ message: "User added successfully!", data: userData })
})

// updating users
app.put('/users/:id', (req, res) => {
    const updateUserId = req.params.id;
    console.log("updateUserId ===>", updateUserId);
    res.status(200).send({ message: `user updated successfully with id ${updateUserId}` })
})

// delete user
app.delete('/users/:id', (req, res) => {
    const deleteUserId = req.params.id;
    console.log("deleteUserId ===>", deleteUserId);
    res.status(200).send({ message: `User deleted successfully with id ${deleteUserId}` })
})

app.listen(PORT, (req, res) => {
    console.log(`Server is listening at PORT ${PORT}`);
})