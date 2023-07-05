import express from 'express';
import { login, profile, verifytoken } from '../controllers/login';

const router = express.Router()

// router.route("/").get(login);
router.route("/").post(login);
router.route('/profile').post(verifytoken,profile)


export default router