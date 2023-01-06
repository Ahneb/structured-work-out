const { Router } = require('express');

const User = require('../../models/User');

const userRouter = new Router();

//login api
userRouter.post('/login', async(req, res) => {
    const { email, password } = req.body;

    //set user to the email being passed in
    const user = await User.findOne({ where: {email}});

    //if user doesnt exist return error
    if (!user) {
        res.status(401).end('User not Found');
        return;
    };

    res.end();
})

//signup api
userRouter.post('/', async(req, res) => {
    const { username, email, password,  } = req.body;

    //set user to the username being passed in
    let user = await User.findOne({ where: {username}});

    //check to see if username has been used already
    if (user) {
        res.status(409).end('Username taken');
        return;
    };

    //set user to the email being passed in
    user = await User.findOne({ where: {email}});

    //check to see if email has been used already
    if (user) {
        res.status(409).end('Email taken');
        return;
    };

    
    
    res.end();
})

module.exports = userRouter;