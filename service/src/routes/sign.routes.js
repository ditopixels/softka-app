import {Router} from 'express'
import { 
    renderLogin, 
    renderRegister,
    validationLogin,
    validationRegister

} from '../controllers/sign.controller.js'
import {noIsAuth} from '../helpers/auth.js'


const router = Router()

router.get('/signin',noIsAuth, renderLogin)
router.post('/signin',validationLogin)

router.get('/signup',renderRegister)
router.post('/signup',validationRegister)

router.get('/logout',(req,res)=>{
    req.logOut()
    res.redirect('/')
})

export default router