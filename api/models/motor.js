


module.exports = {

    tableName: "motor",
    attributes: {
        mid: {
            type: "number",


        },
        mname: { type: 'string' },
        myear: { type: 'number' },
        mcolour: { type: 'string' },
        wheels: { type: 'number' },
        mnumber: { type: 'number' }
        
    },
//-------------------------------------------------------------------------------------------------------------    
    getMotordata: async function (data) {
        //
        console.log(data)
        
        return await motor.find()
   
    },
    createMotordata: async function (data) {
        await motor.create(data)

        return await motor.find()

    },
    updateMotordata: async function (id, data) {
        var newId = {};
        newId.id = id;
        return await motor.updateOne(newId).set(data)

    },
    deleteMotordata: async function (id) {

        var newId = {}
        newId.id = id
        return await vechicle.destroyOne(id)


    },
    


};
