import express from 'express';
import loginUser from '../../usecases/users/LoginUser.js';
import registerUser from '../../usecases/users/RegisterUser.js';
import authController from '../controllers/AuthController.js';
import User from '../../entities/User.js';
import UserRepository from '../repositories/UserRepository.js';
const router = express.Router();

const userRepo = new UserRepository();
const loginUserUsecase = new loginUser(userRepo);
const registerUserUsecase = new registerUser(userRepo);
const authControllerInstance = new authController({
  loginUser: loginUserUsecase,
  registerUser: registerUserUsecase
});

router.get('/login', (req,res)=> res.render('login',{error: null}));
router.get('/register', (req,res)=> res.render('register',{error: null}));

router.post('/login', (req, res) =>  authControllerInstance.login(req, res) );
router.post('/register', (req, res) =>  authControllerInstance.register(req, res));
router.get('/logout', (req, res) => authControllerInstance.logout(req, res));
export default router;