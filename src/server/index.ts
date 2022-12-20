import { connect } from 'mongoose';
import { Path } from "../enums/path";
const express = require('express')
const cors = require('cors')
const register = require('./routes/registerRouter')
const login = require('./routes/loginRouter')
const logout = require('./routes/logoutRouter')
const authMe = require('./routes/authRouter')
const createReview = require('./routes/createReview')
const changeAvatar = require('./routes/changeAvatar')
const getSortByDataReview = require('./routes/reviewSortByData')
const { config } = require('dotenv')
import cookieParser from 'cookie-parser';
import { createDataLiveCookie } from "utils/createDataLiveCookie";
config()
/// mongodb://localhost:8080/userBase
async function run() {
    await connect(process.env.DB_HOST);
}

run().catch(err => console.log(err));

const app = express();

process.on('unhandledRejection', (reason, p) => {
    console.log(reason, p)
})

const corsOptions = {
    origin: ["https://byshlata.github.io", "http://localhost:3000"],
    credentials: true,
    optionsSuccessStatus: 200,
    methods: ['GET', 'PUT', 'POST', 'DELETE'],
}


app.use(cors(corsOptions))
app.use(express.json())
app.use(cookieParser());

app.use(`${Path.PrivacyPolicy}`, express.static('public'))

app.use(`${Path.Register}`, register)
app.use(`${Path.Login}`, login)
app.use(`${Path.Logout}`, logout)
app.use(`${Path.Auth}`, authMe)
app.use(`${Path.ChangeAvatar}`, changeAvatar)
app.use(`${Path.CreateReview}`, createReview)
app.use(`${Path.Reviews}`, getSortByDataReview)

const port = process.env.PORT || 5050

app.listen(port, () => {
    console.log(`server is listening on port ${port}`);
});

