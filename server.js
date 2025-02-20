const express= require("express")
const app= express()
const PORT=3000

app.use(express.json())
const users =[
    {email:"alice@example.com",password:"alice123"},
    {email:"bob@example.com",password:"bob123"},
    {email:"charlie@example.com",password:"charlie123"},
]
app.put("/users",(res,req)=>{
  const user= users.find(u => u.email==req.query.email)


})
app.delete("/users",(res,req)=>{
  const index= users.findIndex(u => u.index==req.query.index)
  if(index != -1){
    splice.index(users)
    res.json({message:"User deleted succesfully"})
  }else{
    res.status(404).json({message:"Email not found"})
  }
  
})


app.listen(PORT,()=>console.log(`Server is running at  http://localhost:${PORT}/`))

