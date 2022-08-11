import express from 'express'
import mongoose from 'mongoose'
import Cors from 'cors'
import Videos from './dbModel.js'
//app config
const app = express()
const port = process.env.PORT || 9000
const connection_url = 'mongodb+srv://admin:admin@cluster0.xuroohn.mongodb.net/tiktokDB?retryWrites=true&w=majority'

//middlewares
app.use(express.json())
app.use(Cors())
//DB Config
mongoose.connect(connection_url)

//API endpoints
app.get('/', (req, res) => res.status(200).send("Tiktok mern clone"))

app.post('/v2/posts', (req, res) => {
    const dbVideos = req.body
    Videos.create(dbVideos, (err, data) => {
        if(err)
            res.status(500).send(err)
        else
            res.status(201).send(data)
    })
})

app.get('/v2/posts', (req, res) => {
    Videos.find((err, data) => {
        if(err)
            res.status(500).send(err)
        else
            res.status(200).send(data)
    })
})


//listen
app.listen(port, () => console.log(`Listining on localhost: ${port}`))