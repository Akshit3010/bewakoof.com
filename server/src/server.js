const  {connect,db}  = require('./Configs/db')
const app = require('./index')
const PORT = 8000
app.listen(PORT,async()=>{
try{ 
await connect()
console.log('Database Connected',db)}
 catch(err){
 console.log({err:err.message})
}
 console.log('listeninig on PORT',PORT)
})