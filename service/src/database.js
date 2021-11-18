import mongoose from 'mongoose'
import { config } from './config.js'

mongoose.connect(config.MONGODB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true,
    })
    .then(db => console.log('Mongodb is connected to', db.connection.host))
    .catch(e => console.log(e))