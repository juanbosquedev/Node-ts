import app from './app'

const {PORT} = process.env

app.listen(PORT, ()=>{
    console.log(`server is runing on PORT ${PORT}`)
})