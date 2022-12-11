const models = require('../data/models')
const roles = models.roles;
const asyncWrapper = require('../middlewares/async');
const { createCustomError } = require('../errors/custom-error')

const getAllRoles = asyncWrapper(async (req, res) => {
    const allRoles = await roles.findAll();
    return res.status(200).json(allRoles);
}); 

const getRole =  asyncWrapper(async (req, res) => {
  const role = await roles.findByPk(req.params.id)
  if (!role) {
    return next(createCustomError(`No role with id : ${req.params.id}`, 404))
  }
  res.status(200).json(claim)
}); 

const createRole = asyncWrapper(async (req, res) => {
    const role = await roles.create(req.body);
    res.status(201).json(role);
}); 

const updateRole =  asyncWrapper(async (req, res) => {
  const role = await Roles.update(req.body, { where: { id: req.params.id }});
  res.status(200).json(role);
}); 

const deleteRole =  asyncWrapper(async (req, res) => {
    const role = await Roles.destroy({ where: {id: req.params.id}});
    res.status(200).json(role);
}); 

module.exports = {
    getAllRoles,
    getRole,
    createRole,
    updateRole,
    deleteRole
};