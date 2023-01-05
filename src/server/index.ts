import { connect } from 'mongoose';
import { Path } from "../enums/path";
import cookieParser from 'cookie-parser';

const express = require('express')
const cors = require('cors')
const authMe = require('./routes/authRouter')
const authSocial = require('./routes/authSocialRouter')
const register = require('./routes/registerRouter')
const login = require('./routes/loginRouterRouter')
const logout = require('./routes/logoutRouter')
const createReview = require('./routes/createReviewRouter')
const editReview = require('./routes/editReviewRouter')
const changeAvatar = require('./routes/changeAvatarRouter')
const reviews = require('./routes/reviewsRouter')
const review = require('./routes/reviewRouter')
const users = require('./routes/usersRouter')
const getUser = require('./routes/userRouter')
const appSettings = require('./routes/appSettingsRouter')


const { config } = require('dotenv')

require("dotenv").config();
config()

async function run() {
    await connect(process.env.DB_HOST);
}

run().catch(err => console.log(err));

const app = express();

process.on('unhandledRejection', (reason, p) => {
    console.log(reason, p)
})

const corsOptions = {
    origin: ["https://byshlata.github.io", "http://localhost:3000", "https://vercel.com", "https://reviewer-rust.vercel.app", "https://reviewer-rust.vercel.app/"],
    credentials: true,
    optionsSuccessStatus: 200,
    methods: ['GET', 'PUT', 'POST', 'DELETE'],
}


app.use(cors(corsOptions))
app.use(express.json())
app.use(cookieParser());

app.use(`${Path.PrivacyPolicy}`, express.static('public'))
app.use(`${Path.Review}`, review)
app.use(`${Path.Reviews}`, reviews)
app.use(`${Path.Register}`, register)
app.use(`${Path.Social}`, authSocial)
app.use(`${Path.Login}`, login)
app.use(`${Path.Logout}`, logout)
app.use(`${Path.Auth}`, authMe)
app.use(`${Path.ChangeAvatar}`, changeAvatar)
app.use(`${Path.CreateReview}`, createReview)
app.use(`${Path.EditReview}`, editReview)
app.use(`${Path.User}`, getUser)
app.use(`${Path.Users}`, users)
app.use(`${Path.AppSettings}`, appSettings)

const port = process.env.PORT || 5050

app.listen(port, () => {
    console.log(`server is listening on port ${port}`);
});

