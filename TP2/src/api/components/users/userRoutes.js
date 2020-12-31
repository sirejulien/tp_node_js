const express= require('express');
const userController=require('./userController');

const router=express.Router();

router.route('/users')

    .get([
        userController.readAll
    ])

    .post([
        userController.createOne
    ])

router.route('/users/:id')

    .get([
        userController.readOneById
    ])

    .patch([
        userController.updateOneById
    ])

    .delete([
        userController.deleteOneById
    ])
module.exports=router;