const User  = require("../Model/UserModel");

//DATA DISPLAY
const getAllUsers = async (req,res,next) => {

    let users;
    //Get all users
    try{
        users = await User.find();
    }
    catch(err){
        console.log(err);
    }

    //not found
    if(!users){
        return res.status(404).json({
            message: "User not found"
        })
    }
    //Display All Users
    return res.status(200).json({
        users
    })
};

//DATA INSERT
const addUsers = async (req,res,next) => {

    const {name,gmail,age,address} = req.body;

    let users;

    try{
        users = new User({name,gmail,age,address});
        await users.save();
    }
    catch(err){
        console.log(err);
    }

    //not insert users
    if(!users){
        return res.status(404).json({
            message: "User not insert"
        })
    }
    return res.status(200).json({
        users
    })




};

//GET BY ID
const getById = async (req,res,next) => {

    const id = req.params.id;

    let user;

    try{
        user = await User.findById(id);
    }
    catch(err){
        console.log(err);
    }

    // not available user
    if(!user){
        return res.status(404).json({
            message: "not match user id"
        })
    }
    return res.status(200).json({
        user
    })

}

//UPDATE USER DETAILS
const updateUser = async (req,res,next) => {

    const id = req.params.id;
    const {name,gmail,age,address} = req.body;

    let users;

    try{
        users = await User.findByIdAndUpdate
        (id, 
            {name: name, 
            gmail: gmail, 
            age: age, 
            address: address});
        
        users = await users.save();
    }
    catch{
        console.log(err);
    }

    if(!users){
        return res.status(404).json({
            message: "Unable to update User Details",
        })
    }
    return res.status(200).json({
        users
    })





}

//DELETE USER
const deleteUser = async (req,res,next) => {

    const id = req.params.id;

    let user;

    try{
        user = await User.findByIdAndDelete(id);
    }
    catch(err){
        console.log(err);
    }

    if(!user){
        return res.status(404).json({
            message: "Unable to delete user",
        })
    }
    return res.status(200).json({
        user
    })

}




exports.getAllUsers = getAllUsers;
exports.addUsers = addUsers;
exports.getById = getById;
exports.updateUser = updateUser;
exports.deleteUser = deleteUser;