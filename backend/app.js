const express=require('express')
const app=express()
const {Ques_pool,Resp}=require('./mongoose')
const port=3000
const bodyparser=require('body-parser')
const createCsvWriter = require('csv-writer').createObjectCsvWriter;
const csvWriter = createCsvWriter({
    path: './Response.csv',
    header: [
        {id: 'name', title: 'NAME'},
        {id: 'resp', title: 'Response'},
        {id: 'question', title: 'Question'}
    ]
});

const cors=require("cors");
const corsOptions ={
   origin:'*', 
   credentials:true,            //access-control-allow-credentials:true
   optionSuccessStatus:200,
}

app.use(cors(corsOptions)) // Use this after the variable declaration
app.use(bodyparser.json())
const urlencodedparser=bodyparser.urlencoded({extended: false})
app.use(bodyparser.urlencoded({
    extended: false
}));
app.use(express.json());
 app.post('/addResponse',urlencodedparser,(req,res)=>{
     console.log('POST')
     console.log(req.body.data)
     req.body.data.forEach(row=>{
        const resp=new Resp(row)
         resp.save().then(()=>{
            console.log('Success')
        }).catch((error)=>{
            console.log('error')
            console.log(error)
        })
    })
     res.setHeader("Content-type", "application/json").send(req.body)
 })
 app.get('/getQuestions',(req,res)=>{
     Ques_pool.find({}).then((data)=>{
         console.log('Get')
         console.log(data)
         
         res.setHeader('Access-Control-Allow-Origin', '*').status(200).send(data)
         
     }).catch((error)=>{
         console.log(error)
     })
    
})

app.get('/Download',(req,res)=>{
    Resp.find({}).then((data)=>{
        console.log('Get')
        console.log(data)
        csvWriter.writeRecords(data).then(() => {
        console.log('...Done');
    });
        res.setHeader('Access-Control-Allow-Origin', '*').status(200).send('Data Downloaded')
        
    }).catch((error)=>{
        console.log(error)
    })  
})

 app.listen(port,()=>{
     console.log('Server is running')
 })