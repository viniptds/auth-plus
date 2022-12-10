const User = require('../data/models/user');
const _asyncWrapper = require('../middlewares/async');
const { createCustomError } = require('../errors/custom-error')

const getAllUsers = _asyncWrapper(async (req, res) => {
  
}); 

const createUser = _asyncWrapper(async (req, res) => {
  
}); 

const getUser = _asyncWrapper(async (req, res) => {
  
}); 

const updateUser = _asyncWrapper(async (req, res) => {
  
}); 

const deleteUser = _asyncWrapper(async (req, res) => {
  
}); 

module.exports = {
    getAllUsers,
    getUser,
    createUser,
    updateUser,
    deleteUser
};