const userController = require('../controllers/userController');

const Router = require('express').Router
const router = new Router();

router.post('/create_new_user',userController.createNewUser)

module.exports = router