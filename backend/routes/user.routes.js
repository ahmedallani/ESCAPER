const router =require('express').Router();
// const authController=require('../controllers/auth.controller')


// const multer =require('multer')
// const upload=multer()

router.post("api/register",authController.signUp)
router.post('api/login',authController.signIn)
router.get('api/logout',authController.logOut)


module.exports=router;