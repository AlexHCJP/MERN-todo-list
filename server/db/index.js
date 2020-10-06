import mongoose from 'mongoose'
import {db} from 'config'

export function setUpConnection(){
    mongoose.connect(`mongodb://${db.host}:${db.port}/${db.database}`, function (err) {
        if (err) throw err;
        console.log('Successfully connected');
    })
};