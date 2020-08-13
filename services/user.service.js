const User = require('../models/user.model');

/*
refer to Model class from mongoose documentation to find all classes we can use
https://mongoosejs.com/docs/api/model.html#model_Model.create
*/

/* Create a User - params: user JSON data
*/
const Create = async (data) => {
    try {
        const user = await User.create(data);
        return user;
    } catch (error) {
        console.log('error', error)
    }
}

/* Find all Users
*/
const Find = async () => {
    try {
        const user = await User.find({});
        return user;
    } catch (error) {
        console.log('error', error)
    }
}

/* Find one User - params: query to filter
*/
const FindOne = async (query) => {
    try {
        const user = await User.findOne(query);
        return user;
    } catch (error) {
        console.log('error', error)
    }
}

/* Find one User - params: query to filter
*/
const FindOneAndUpdate = async (filter, data) => {
    try {
        const user = await User.findOneAndUpdate(filter,{...data});
        return user;
    } catch (error) {
        console.log('error', error)
    }
}

const DeleteOne = async (filter) => {
    try {
        const user = await User.deleteOne(filter);
        return user;
    } catch (error) {
        console.log('error', error);
    }
}

module.exports = {
    Create,
    Find,
    FindOne,
    FindOneAndUpdate,
    DeleteOne,
}