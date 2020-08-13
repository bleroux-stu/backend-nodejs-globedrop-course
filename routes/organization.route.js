const express = require('express');
const router = express.Router();
 
const organizationController = require('../controllers/organization.controller');

router.get('/organization', organizationController.GetAllOrganizations);
router.get('/organization/:_id', organizationController.GetOrganizationById);
router.post('/organization', organizationController.AddOrganization);
router.put('/organization/:organization_id', organizationController.UpdateOrganization);
router.delete('/organization/:organization_id', organizationController.DeleteOrganization);

module.exports = router;