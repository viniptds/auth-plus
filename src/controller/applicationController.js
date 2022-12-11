const models = require('../data/models')
const applications = models.applications;
const asyncWrapper = require('../middlewares/async');
const { createCustomError } = require('../errors/custom-error')

const getAllApplications = asyncWrapper(async (req, res) => {
    const apps = await applications.findAll();
    return res.status(200).json(apps);
}); 

const getApplication =  asyncWrapper(async (req, res) => {
  const app = await applications.findByPk(req.params.id)
  if (!app) {
    return next(createCustomError(`No app with id : ${req.params.id}`, 404))
  }
  res.status(200).json(app)
}); 

const createApplication = asyncWrapper(async (req, res) => {
    const app = await applications.create(req.body);
    res.status(201).json(app);
}); 

const updateApplication =  asyncWrapper(async (req, res) => {
  const app = await applications.update(req.body, { where: { id: req.params.id }});
  res.status(200).json(app);
}); 

const deleteApplication =  asyncWrapper(async (req, res) => {
    const app = await applications.destroy({ where: {id: req.params.id}});
    res.status(200).json(app);
}); 

module.exports = {
    getAllApplications,
    getApplication,
    createApplication,
    updateApplication,
    deleteApplication
};