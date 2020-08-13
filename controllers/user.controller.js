const UserService = require('../services/user.service');
const { User } = require('../models/user.model');

const GetAllUsers = async (req, res) => {
    try {
        const users = await UserService.Find();
        return res.status(200).json({
            message: 'All Users',
            data: users
        });
    } catch (error) {
        console.log('error', error);
    }
};

const GetUserById = async (req, res) => {
    try {
        const {_id} = req.params;
        const user = await UserService.FindOne({_id});
        return res.status(200).json({
            message: 'User fetched',
            data: user
        });
    } catch (error) {
        console.log('error', error);
    }
};

const AddUser = async (req,res) => {
    try {
        const {
            username,
            name,
            email,
            password,
            language,
            country,
            userType,
        } = req.body

        const existing_user = await UserService.FindOne({username});

        if(existing_user){
            return res.status(409).json({
                message: 'Data exists'
            });
        }

        const new_user = await UserService.Create({
            username,
            name,
            email,
            password,
            language,
            country,
            userType,
        });

        return res.status(200).json({
            message: 'New user created',
            data: new_user,
        })

    } catch (error) {
        console.log('error', error)
    }
}

const UpdateUser = async (req, res) => {
    try {
        const {_id} = req.params;
        const {
            username,
            name,
            email,
            password,
            language,
            country,
            userType,
        } = req.body;

        const existing_user = await UserService.FindOne({_id});

        if(!existing_user){
            return res.status(409).json({
                message: 'Data not found'
            });
        };

        const updated_user = await UserService.FindOneAndUpdate(
            { _id },
            {
                username,
                name,
                email,
                password,
                language,
                country,
                userType,
            }
        );

        return res.status(200).json({
            message: 'User updated',
            data: updated_user,
        });
    } catch (error) {
        console.log('error', error);
    }
}

const DeleteUser = async (req,res) => {
    try {
        const { _id } = req.params;
        await UserService.DeleteOne({_id});
        return res.status(200).json({
            message: 'User deleted'
        });
    } catch (error) {
        console.log('error', error);
    }
}

module.exports = {
    GetAllUsers,
    GetUserById,
    AddUser,
    UpdateUser,
    DeleteUser,
}