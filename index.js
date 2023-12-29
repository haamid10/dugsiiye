const express = require('express')
const app = express()

app.use(express.json())
app.get('/', (req, res) =>{
    res.send('Hello World')
})
app.post('/',(req, res) => {
    const  {name, email , password} = req.body;
    if(!name || !email || !password){
        res.status(400).send('please provide all the details')
    }   
    res.status(201).send(`Thank you ${name, email, password} for your valuable feedback`)
    console.log(req.body)

})



const PORT= 3000;
app.listen(PORT ,()=>{
    console.log(`server is running on port ${PORT}`)
})