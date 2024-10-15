const bcrypt = require('bcrypt')
const { status } = require('express/lib/response')
const jwt = require('jsonwebtoken')

require('dotenv').config()

const SALT_ROUNDS = parseInt(process.env.SALT_ROUNDS)
const APP_SECRET = process.env.APP_SECRET


const hashPassword = async (password) => {
    let hashPassword = await bcrypt.hash(password, SALT_ROUNDS)
    return hashPassword
}

const comparePassword = async (storedPassword, password) => {
    let passwordMatch = await bcrypt.compare(password, storedPassword)
    return passwordMatch
}

const createToken = (payload) =>{
    let token = jwt.sign(payload, APP_SECRET)
    return token
}

const verifyToken = (req, res, next)=>{
    const {token} = res.locals
    try {
        let payload = jwt.verify(token, APP_SECRET)
        if (payload){
            res.locals.payload = payload
            return next()
        }
        res.status(401).send({status: "Error", msg:"Unauthorized"})
    } catch (error) {
        console.log(error)
        res.status(401).send({ status: 'Error', msg: 'Verify Token Error!' })
      }
    }

    const stripToken = (req, res, next) =>{
        try {
            const token = req.headers['authorization'].split(' ')[1]
            if (token) {
                res.locals.token = token
                return next()
            }
            res.status(401).send({status: "Error", msg:"Unauthorized"})  
              } catch (error) {
            console.log(error)
            res.status(401).send({ status: 'Error', msg: 'Strip Token Error!' })
          }
    }

    module.exports = {
        stripToken,
        verifyToken,
        createToken,
        comparePassword,
        hashPassword,
    }
