const express = require('express')
// const bodyParser = require('body-parser')

const app = express()

app.get('/api', (req, res) => {
    console.log('got it')

    res.send({message: 'data' })
    res.end()
})

const port = 3535

app.listen(port, err => {
    if(err) console.error(err)
    else {
        console.log(`api running at port: ${port}`)
    }
})
