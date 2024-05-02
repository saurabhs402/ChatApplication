const mongoose = require('mongoose')
const path=require('path')
const dotenv = require('dotenv')
const cors = require("cors");
dotenv.config({ path: './.env' })
const {app,server} =require('./Socket/socket')
const express = require("express")
const authRouter = require('./Routes/authRouter')
const messageRouter = require('./Routes/messageRouter')
const cookieParser = require('cookie-parser')
const userRouter = require("./Routes/userRouter")
const geminiRouter=require("./Routes/geminiRouter")


process.on('uncaughtException', function (err) {
    console.log((err.name + "- " + err.message));

    console.log('Uncaught Exception occured!! Shutting Down...')


    process.exit(1);


})




mongoose.connect(process.env.CONN_STR, {
    useNewUrlParser: true
}).then(function (conn) {
    // conn is a connection object
    //console.log(conn)
    console.log("DB connection successful")
}).catch(function (err) {
    console.log(err.message);
})
//Ends


app.use(cors({
    exposedHeaders: ['Set-Cookie']
}))

app.use(express.json());
app.use(cookieParser())


app.use('/api/auth', authRouter)
app.use('/api/messages', messageRouter)
app.use('/api/users', userRouter)
app.use('/api/gemini',geminiRouter)

// here we are not creating diff. app using express 
//if we do so app.js and server.js are not remain connected

// create+listen to the server
//  __dirname = path.resolve();
const port = process.env.PORT || 3001;

// app.get("*", (req, res) => {
//     res.sendFile(path.join(__dirname, "frontend", "dist", "index.html"));
// });

server.listen(port, function () {
    console.log(port)
    console.log('Server has started')
})

/**Below error handler's are backup for the unknown event */
process.on('unhandledRejection', function (err) {
    console.log((err.name + "- " + err.message));

    console.log('Unhandled Rejection occured!! Shutting Down...')

    server.close(function () {
        process.exit(1);

    })
})

