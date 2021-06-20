const motorservice=require("../services/motorservice.js")

var jwt = require('jsonwebtoken');
function generateToken(user_id,user_name)
{
return jwt.sign({
  user_id: 1,
  user_name:'kavin'
}, 'secret');
}
console.log(generateToken())
async function verifyToken(req)
{
let authHeader=req.headers["authorization"]
let token = authHeader && authHeader.split(" ")[1];
console.log("token",token)
jwt.verify(token,'secret',(err,resp)=>{
    console.log("error",err)
if(!err){
    return true
}
else{
    return false
}    
})
}


module.exports = {
        	
    getMotordata: async function (req, res) {
        let authHeader = req.headers["authorization"]
        let token = authHeader && authHeader.split(" ")[1];
        jwt.verify(token, 'secret',async function (err, resp)  {
            if(!err)
            {
                if (req.param('mid')) {
                    let data = req.param('mid')
                    let result = await motorservice.getMotordata(data);
                    console.log("result", result);
                    res.json(result);
                }
                if (!req.param('mid')) {
                    return res.badRequest("Empty vid")
                }
            }
            else
            {
                res.badRequest("You are not authorized")
            }
        })
},
    createMotordata: async function(req,res){
        let authHeader = req.headers["authorization"]
        let token = authHeader && authHeader.split(" ")[1];
        jwt.verify(token, 'secret',async function (err, resp)  {
            if(!err)
            {
                if(req.body && req.body.mname && req.body.myear && req.body.mcolour && req.body.wheels&&req.body.mnumber ){
                    {       
                         let data = req.body
                         let result = await motorservice.createMotordata(data);
                         if(result){
                           sails.log('updated' );
                         }
                         else{
                           sails.log('not updated');
                       }
                       res.json(result);
                     }
                 }
                


  }
            else
            {
                res.badRequest("You are not authorized")
            }
        })
         
    
    },
    updateMotordata:  async function(req,res){
        let authHeader = req.headers["authorization"]
        let token = authHeader && authHeader.split(" ")[1];
        jwt.verify(token, 'secret',async function (err, resp)  {
            if(!err)
            {
                if(req.param("id") && req.body.mname && req.body.myear && req.body.mcolour,
                req.body.wheels)
                {
                
                let id = req.param("id")
                let data = req.body
                let result = await motorservice.updateMotordata(id,data);
                if(result)
                {
                    console.log(`Given Id = `+req.param("id")+` is Updated Sucessfully`)
                }
                else
                {
                    console.log('values not Updated')
                }
                res.json(result);
               }


  }
            else
            {
                res.badRequest("You are not authorized")
            }
        })
       
    },
    deleteMotordata: async function(req,res){
        let authHeader = req.headers["authorization"]
        let token = authHeader && authHeader.split(" ")[1];
        jwt.verify(token, 'secret',async function (err, resp)  {
            if(!err)
            {
                if(req.param('id')){
                    let id=req.param('id')
                    let result=await motorservice.deleteMotordata(id);
                    if(result)
                    {
                        console.log(" Given Id="+req.param('id')+' is Deleted Sucessfully')
                    }
                    else
                    {
                        console.log("Not Deleted")
                    }
                    res.json(result)
                }


  }
            else
            {
                res.badRequest("You are not authorized")
            }
        })
       

    },
    
      
}