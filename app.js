import express from 'express'
import {} from 'dotenv/config' // gives us access to processdotenv
import routes from './routes/routes.js'
import connectDB from './db/connect.js'
import bodyParser from 'body-parser'

const app = express()

app.use(express.static('public'))
app.use(bodyParser.json())
app.use('/', routes)
// LOAD ROUTES INTO OUR MAIN FILE


const PORT = process.env.PORT || 3000

const init = async() => {
    try {
        await connectDB(process.env.DB)
        console.log('Connected to the database...')
        app.listen(PORT, () => console.log(`Listening on port: ${PORT}`))
    } catch (err) {
        console.log(err)

    }
}
init()