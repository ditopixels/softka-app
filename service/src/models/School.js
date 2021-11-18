import mongoose from 'mongoose'

const {Schema,model} = mongoose

const schema = new Schema({
    name:{type:String,required:true},
    code:{type:String,required:true},
    /*
    AQUI VAN LOS OTROS CAMPOS QUE SE PUEDEN HACER DESPUES DEL REGISTRO
    */
    
})


export default model('School',schema)
