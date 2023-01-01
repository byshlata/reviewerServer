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
const getSortByDataReview = require('./routes/reviewSortByDataRouter')
const getReview = require('./routes/review')
const searchByReview = require('./routes/searchByReview')
const searchByTag = require('./routes/searchByTag')
const authSocial = require('./routes/authSocialRouter')
const createComment = require('./routes/createComment')
const reviewsUser = require('./routes/reviewsUser')
const likeReview = require('./routes/reviewLike')
const starReview = require('./routes/reviewStar')
const changeStatus = require('./routes/changeStatus')
const changeRights = require('./routes/changeRights')
const users = require('./routes/users')
const getUser = require('./routes/userRouter')
const { config } = require('dotenv')
import cookieParser from 'cookie-parser';

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
app.use(`${Path.Review}`, getReview)
app.use(`${Path.Review}`, searchByReview)
app.use(`${Path.Review}${Path.Tag}`, searchByTag)
app.use(`${Path.Review}${Path.Like}`, likeReview)
app.use(`${Path.Review}${Path.Star}`, starReview)
app.use(`${Path.Review}${Path.User}`, reviewsUser)
app.use(`${Path.Review}${Path.User}`, reviewsUser)
app.use(`${Path.Social}`, authSocial)
app.use(`${Path.CreateComment}`, createComment)
app.use(`${Path.Reviews}${Path.Delete}`, getReview)
app.use(`${Path.Users}`, users)
app.use(`${Path.User}`, getUser)
app.use(`${Path.Users}${Path.Delete}`, users)
app.use(`${Path.Users}${Path.ChangeStatus}`, changeStatus)
app.use(`${Path.Users}${Path.ChangeRights}`, changeRights)

const port = process.env.PORT || 5050

app.listen(port, () => {
    console.log(`server is listening on port ${port}`);
});

