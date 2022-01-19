const express=require('express')
const app=express()
const morgan=require('morgan')
const path=require('path')

app.set('view engine', 'ejs')
app.set('port', 3000 || process.env.PORT)
app.set('appName', 'sf film api')
app.set('views', path.join(__dirname))

app.use(morgan('dev'))
app.use(express.urlencoded({extended:false}))
app.use(express.json())
app.use(express.static(path.join(__dirname)))

app.get('/',(req,res)=>{
    res.sendFile('index.html')
})

app.use('/results',require('./src/api-call'))

app.listen(app.get('port'), ()=>{
    console.log(app.get('appName')+" está arriba")
    console.log(__dirname)
})