const express = require('express');
const cors = require('cors');
require('dotenv').config();
const app = express();

const dbConfig = require('./db')
const roomsRoute = require('./routes/roomsRoute')
const usersRoute = require('./routes/usersRoute')
const bookingRoute = require('./routes/bookingsRoute')
// Middleware
app.use(cors());
app.use(express.json());
app.use("/api/rooms", roomsRoute);
app.use("/api/users",usersRoute);
app.use('/api/bookings',bookingRoute);







app.listen(process.env.port,()=> console.log(`Node Server Started Successfully using nodemon http://localhost:${process.env.port}`));
dbConfig();
app.get('/',(req,res)=>{
    res.send("Hello World!")
})