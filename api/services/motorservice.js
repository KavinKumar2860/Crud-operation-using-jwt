const motor = require("../models/motor.js");


module.exports={
    getMotordata:async function(data){
        return await motor.getMotordata(data);
    
      

        },
    createMotordata:async function(data){
      
        return await motor. createMotordata(data);
        
    },
    updateVechicledata: async function(id,data){
        return await motor.updateMotordata(id,data);
    },
    deleteMotordata:async function(id){
        return await motor.deleteMotordata(id);
    }
   
}