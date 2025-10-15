import express from "express";
const router = express.Router();

let users = [
  {
    id: 1,
    fullName: "Karl Culi",
    username: "karlculi",
    password: "password123"
  },
  {
    id: 2,
    fullName: "Maria Santos",
    username: "marias",
    password: "securePass456"
  },
  {
    id: 3,
    fullName: "John Dela Cruz",
    username: "johndc",
    password: "myPassword789"
  },
  {
    id: 4,
    fullName: "Ana Reyes",
    username: "anarey",
    password: "anaPass2025"
  },
  {
    id: 5,
    fullName: "Mark Lopez",
    username: "marklopez",
    password: "mark1234"
  }
];

// Gets all users
router.get('/api/users', (req, res) => {
  return res.status(200).send(users);
});

// Get specific user
router.get('/api/users/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const user = users.find(user => user.id === id)

  if (!user) {
    return res.status(404).send({ msg: `User with ID of ${id} was not found.` });
  }
  return res.status(200).send(user);
});

// Create a user
router.post('/api/users/', (req, res) => {
  const newUser = {
    id: users.length + 1,
    ...req.body
  };

  const existingUsername = users.find(user => user.username === newUser.username);

  if (existingUsername) {
    return res.status(400).send({ msg: 'Username not available. Please try another one.' });
  }

  users.push(newUser);
  return res.status(201).send(users);
});

// Updates all fields of a user
router.put('/api/users/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const findUserIndex = users.findIndex(user => user.id === id);

  if (findUserIndex === -1) {
    return res.status(404).send({ msg: `User with ID of ${id} was not found.` });
  }

  const findUser = {
    id: id,
    ...req.body
  };

  users[findUserIndex] = findUser;

  return res.status(200).send(users);
});

// Updates a specific field of a user
router.patch('/api/users/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const findUserIndex = users.findIndex(user => user.id === id);

  if (findUserIndex === -1) {
    return res.status(404).send({ msg: `User with ID of ${id} was not found.` });
  }

  const findUser = {
    ...users[findUserIndex],
    ...req.body
  };

  users[findUserIndex] = findUser;

  return res.status(200).send(users);
});

// Deletes a user
router.delete('/api/users/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const findUserIndex = users.findIndex(user => user.id === id);

  if (findUserIndex === -1) {
    return res.status(404).send({ msg: `User with ID of ${id} was not found.` });
  }

  users = users.filter(user => user.id !== id);

  return res.status(200).send(users);
});

export default router;
