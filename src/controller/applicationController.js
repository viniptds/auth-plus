const models = require('../data/models')
const applications = models.applications;
const asyncWrapper = require('../middlewares/async');
const { createCustomError } = require('../errors/custom-error')


const getAllApplications = asyncWrapper(async (req, res) => {
    res.json( await applications.findAll());
}); 

const createApplication = asyncWrapper(async (req, res) => {
   
}); 

const getApplication =  asyncWrapper(async (req, res) => {
    _application.findByPk(req.params.id);
}); 

const updateApplication =  asyncWrapper(async (req, res) => {
   var updateApplication = {};
    return Gig.update(updateGig, { where: { id: req.params.id} });
}); 

const deleteApplication =  asyncWrapper(async (req, res) => {
    _application.findAll();  
}); 

module.exports = {
    getAllApplications,
    getApplication,
    createApplication,
    updateApplication,
    deleteApplication
};