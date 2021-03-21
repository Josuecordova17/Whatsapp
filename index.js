const colors=require('colors')
const express=require('express')
const app=express()
const router =  express.Router()
const morgan=require('morgan')
const WhatsAppWeb =  require('baileys')
const client = new WhatsAppWeb() 
app.use(morgan('dev'))
app.use(express.json())
app.listen(3000,()=>{
//
console.log('servidor en puerto 3000'.yellow)
})
const Whatsapp = require('./whatsapp')
app.post('/w/c',(req, res) => {
    client.connect()
    .then (([user, chats, contacts, unread]) => {
        res.jsonp({mensaje: 'Autenticación exitosa'});
    })
    .catch (err => console.log(err) )
})
function mandar() {
        options = {
            quoted: null,
            timestamp: new Date()
        }
        setInterval(() => {
            client.sendTextMessage(`50497896210@s.whatsapp.net`, "Te quiero Jackie 💛", options)
            .then( console.log('Mensake enviado'))    
        }, 30*1000);
    }
setInterval(() => {
    mandar()
}, 10*1000);
    