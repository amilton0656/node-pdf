const express = require('express')

const app = express()

const geradorPdf = require('./geradorEjs')

app.get("/", (req, res) => res.send('Hello world!'))

app.get('/pdf', (req, res) => {
    geradorPdf()
    res.send('PDF gerado')
})

app.listen(8010, () => console.log('Server ON: 8010'))