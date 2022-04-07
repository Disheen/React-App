const mongoose =require('mongoose')
const connectionUrl='mongodb://127.0.0.1:27017'
const databaseName="Survey"

mongoose.connect(`${connectionUrl}/${databaseName}`,{useNewUrlParser:true})

const Resp=mongoose.model('response',{
    name:{
        type:String
    },
    resp:{
        type:String
    },
    question:{
        type:String
    }
})
const Ques_pool=mongoose.model('ques',{
    surveyname:{
        type:String
    },
    questiontext:{
        type:String,
    },
    scaletype:{
        type:String
    },
    varname:{
        type:String,
    },
    option1:{
        type:String
    },
    option2:{
        type:String,
    },
    option3:{
        type:String
    },
    option4:{
        type:String,
    },
    option5:{
        type:String
    },
    option6:{
        type:String,
    },
    option7:{
        type:String
    }
})
module.exports={Ques_pool,Resp}