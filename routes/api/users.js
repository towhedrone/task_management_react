const express = require('express');
const router =express.Router();
const {check, validationResult} = require('express-validator/check');

const User = require('../../.models/User');

//@route GET api/users
//@desc Test route
//@access public
router.post('/',
[
    check('name', 'Name is required')
    .not()
    .isEmpty(),
    check('email', 'Please include a valide email').isEmail(),
    check('password', 'Please enter a correct password with 6 or more charecter').isLength({min: 6})
],async(req,res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()});

    }

    const{ name, email, password} = req.body;
    try{
        let user = await User.findOne({email});
        if(user){
            res.status(400).json({errors: [{msg: 'User Already Exist'}]});
        }
    //get user Gravator
    //Encrypt Password
    //Return jsonwebtoken
    res.send('User route');
    }catch(err){
        console.error(err.message);
        res.status(500).send('Server error');
        
    }
    
}
);

module.exports = router;