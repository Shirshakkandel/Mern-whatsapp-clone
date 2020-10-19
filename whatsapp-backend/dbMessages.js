// export default mongoose.model('messagecontent', whatsappSchema)
import mongoose from "mongoose"

const whatsappSchema= mongoose.Schema({
    message: String,
    name:String,
    timestamp:String,
    received:Boolean,
})

export default mongoose.model('messagecontent', whatsappSchema)
//like creating table name messageContent with schema whatsappSchema 
// sql 

