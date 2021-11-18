import mongoose from 'mongoose'
import bcrypt from 'bcryptjs'
require("babel-polyfill");

const { Schema, model } = mongoose

const schema = new Schema({
    username: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    school: { type: Schema.Types.ObjectId, ref: 'School' },
    rol: { type: String }
})

schema.methods.encryptPassword = async(pass) => {
    const salt = await bcrypt.genSalt(10)
    const hash = await bcrypt.hash(pass, salt)
    return hash
}
schema.methods.matchPassword = async function(pass) {
    return await bcrypt.compare(pass, this.password)
}

export default model('User', schema)