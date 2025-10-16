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


// @desc  Gets all users
// @route GET api/users
export const getUsers = (req, res, next) => {
  return res.status(200).send(users);
};


// @desc  Gets specific user
// @route GET api/users/:id
export const getUser = (req, res, next) => {
  const id = parseInt(req.params.id);
  const user = users.find(user => user.id === id)

  if (!user) {
    const error = new Error(`User with ID of ${id} was not found.`);
    error.status = 404;
    return next(error);
  }
  return res.status(200).send(user);
}


// @desc  Creates a user
// @route POST api/users/
export const createUser = (req, res, next) => {
  const newUser = {
    id: users.length + 1,
    ...req.body
  };

  const existingUsername = users.find(user => user.username === newUser.username);

  if (existingUsername) {
    const error = new Error(`Username not available. Please try another one.`);
    error.status = 400;
    return next(error);
  }

  users.push(newUser);
  return res.status(201).send(users);
};


// @desc  Updates a user
// @route PUT api/users/:id
export const updateUser = (req, res, next) => {
  const id = parseInt(req.params.id);
  const findUserIndex = users.findIndex(user => user.id === id);

  if (findUserIndex === -1) {
    const error = new Error(`User with ID of ${id} was not found.`);
    error.status = 404;
    return next(error);
  }

  const findUser = {
    id: id,
    ...req.body
  };

  users[findUserIndex] = findUser;

  return res.status(200).send(users);
};


// @desc  Updates a specific user
// @route PATCH api/users/:id
export const patchUser = (req, res, next) => {
  const id = parseInt(req.params.id);
  const findUserIndex = users.findIndex(user => user.id === id);

  if (findUserIndex === -1) {
    const error = new Error(`User with ID of ${id} was not found.`);
    error.status = 404;
    return next(error);
  }

  const findUser = {
    ...users[findUserIndex],
    ...req.body
  };

  users[findUserIndex] = findUser;

  return res.status(200).send(users);
};


// @desc  Deletes a user
// @route DELETE api/users/:id
export const deleteUser = (req, res, next) => {
  const id = parseInt(req.params.id);
  const findUserIndex = users.findIndex(user => user.id === id);

  if (findUserIndex === -1) {
    const error = new Error(`User with ID of ${id} was not found.`);
    error.status = 404;
    return next(error);
  }

  users = users.filter(user => user.id !== id);

  return res.status(200).send(users);
};