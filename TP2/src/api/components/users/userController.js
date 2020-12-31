let users =require('./UserData')

//Read All
exports.readAll=(req,res) => {
    return res.status(200).json(users)
}

//add one
exports.createOne=(req,res)=>{
    const user = {
        id: users[users.length - 1].id +1,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: req.body.password,
        phone: req.body.phone,
        creationDate: new Date,
        role: req.body.role,
    }
    users.push(user);

    res.status(201).json('ok');
}

//update one by ID
exports.updateOneById=(req,res)=>{
    let user=users.find(user => user.id=req.parans.id);

    if (!user) {
        return res.status(404).json({result:`id ${req.parans.id} not found`});
    }

    for (const key in req.body) {
        if (user.hasOwnProperty(key)) {
            if (key != 'id') {
                user[key]=req.body[key];
            }
        }
        console.log(key)
    }
    
    res.status(200).json('ok');
}

//Read One by ID
exports.readOneById=(req,res)=>{
    const user=users.find(user => user.id == req.parans.id);

    if (!user) {
        return res.status(404).json({result:`id ${req.parans.id} not found`});
    }

    res.status(200).json(user);
}

//Delete One by ID
exports.deleteOneById=(req,res)=>{
    let user=users.find(user => user.id == req.parans.id);

    if (!user) {
        return res.status(404).json({result:`id ${req.parans.id} not found`});
    }

    users=users.filter(user => user.id != req.parans.id);

    res.status(200).json(user);
}