const mongoose = require('mongoose')

const database_connection = 
    'mongodb+srv://baba:baba123@cluster0.gqr2r.gcp.mongodb.net/my_database';

const db = () => {
    try {
        mongoose.connect(database_connection, {
            useNewUrlParser: true,
        });
    }catch(error){
        console.log('error in db connection ', error);
    }
};

module.exports = {
    db,
}