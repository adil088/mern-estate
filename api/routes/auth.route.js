import express from 'express'
import { signin, signup, google, signOut} from '../controllers/auth.controller.js';

const router = express.Router();

router.post('/signup', signup) // signup function is in controllers
router.post('/signin', signin)
router.post('/google', google)
router.get('/signout', signOut)

export default router;