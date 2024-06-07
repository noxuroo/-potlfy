class UserController{
    createNewUser = (req, res, next) => {console.log(1); res.status(200).json({message:'fsdklafjksdlfjklsdlfksdkf'})}
}

module.exports = new UserController()