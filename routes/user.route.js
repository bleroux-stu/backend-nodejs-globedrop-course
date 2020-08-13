const express = require('express');
const router = express.Router();

const userController = require('../controllers/user.controller');

router.get('/user', userController.GetAllUsers);
router.get('/user/:_id', userController.GetUserById);
router.post('/user', userController.AddUser);
router.put('/user/:_id', userController.UpdateUser);
router.delete('/user/:_id', userController.DeleteUser);

module.exports = router;