import express from 'express'
import cors from 'cors'

const app = express()

app.use("/", (req, res) => {
    res.send('Hello World')    
})

const port = 8000

app.listen(port, () => {
    console.log(`My server is now starting at ${port}` )
})