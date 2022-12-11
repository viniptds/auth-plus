const models = require('../data/models')
const claims = models.claims;
const asyncWrapper = require('../middlewares/async');
const { createCustomError } = require('../errors/custom-error')

const getAllClaims = asyncWrapper(async (req, res) => {
    const allClaims = await claims.findAll();
    return res.status(200).json(allClaims);
}); 

const getClaim =  asyncWrapper(async (req, res) => {
  const claim = await claims.findByPk(req.params.id)
  if (!claim) {
    return next(createCustomError(`No claim with id : ${req.params.id}`, 404))
  }
  res.status(200).json(claim)
}); 

const createClaim = asyncWrapper(async (req, res) => {
    const claim = await claims.create(req.body);
    res.status(201).json(claim);
}); 

const updateClaim =  asyncWrapper(async (req, res) => {
  const claim = await claims.update(req.body, { where: { id: req.params.id }});
  res.status(200).json(claim);
}); 

const deleteClaim =  asyncWrapper(async (req, res) => {
    const claim = await claims.destroy({ where: {id: req.params.id}});
    res.status(200).json(claim);
}); 

module.exports = {
    getAllClaims,
    getClaim,
    createClaim,
    updateClaim,
    deleteClaim
};