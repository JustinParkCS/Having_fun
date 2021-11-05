const express = require('express')
const app = express()

const port = process.env.PORT || 5000


app.use('*', (req, res) => {
    res.send('Hello World')
})

app.listen(port, () => {
    console.log(`Server staring on port ${port}`)
})