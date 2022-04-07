const mongodb=require('mongodb')
const MongoClient=mongodb.MongoClient

const connectionUrl='mongodb://127.0.0.1:27017'
const databaseName="QUIZ"

MongoClient.connect(connectionUrl,{ useNewUrlParser:true},(error,client)=>{
    if (error){
         console.log('Unable to connect to the database')
    }
    else{
        // const db=client.db(databaseName)
        // db.collection('ques_pool').find({}).then(data)=>{
        //     console.log(data)
        // }
        console.log('asd')
        }

    
})