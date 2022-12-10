const models = require('../data/models')
const users = models.users;
const asyncWrapper = require('../middlewares/async');
const { createCustomError } = require('../errors/custom-error')

const getAllUsers = asyncWrapper(async (req, res) => {
    const usrs = await users.findAll();
    return res.status(200).json(usrs);
}); 

const getUser = asyncWrapper(async (req, res) => {
    const user = await users.findByPk(req.params.id)
    if (!user) {
      return next(createCustomError(`No user with id : ${req.params.id}`, 404))
    }
    res.status(200).json(user)
}); 

const createUser = asyncWrapper(async (req, res) => {
    const user = await users.create(req.body);
    res.status(201).json(user);
}); 

const updateUser = asyncWrapper(async (req, res) => {
    const user = await users.update(req.body, { where: { id: req.params.id }});
    res.status(200).json(user);
}); 

const deleteUser = asyncWrapper(async (req, res) => {
    const user = await users.destroy({ where: {id: req.params.id}});
    res.status(200).json(user);
}); 

module.exports = {
    getAllUsers,
    getUser,
    createUser,
    updateUser,
    deleteUser
};