import Client from "../model/userModel.js"


//controller for creating new client in mongodb database
export const create = async(req,res)=>{
    try{
        const clientData = new Client(req.body);
        const {name} = clientData;
        const clientExist =  await Client.findOne({name})
        if (clientExist)
        {
            return(res.status(400).json({message:"client already exist"}));
        }
        const savedClient = await clientData.save();
        res.status(200).json(savedClient);
    }
    catch (error) {
            res.status(500).json({error:error.message});
    }
} 



// controller called fetch to fetch all collections form database marouane
export const fetch = async (req,res) => {
    try{
        const clientData = await Client.find();
        if(Client.length === 0)
        {
            res.status(404).json({message:"Client collection empty"})
        }
        return(res.json(clientData));
    }
    catch (error) {
        res.status(500).json({error : error.message})
    }
}

// controller for deleting client from database 
export const deleteClient = async (req,res)=>{
    try{
        const id = req.params.id;
        const clientExist = await Client.findById({_id: id});
        if(!clientExist){
            return (res.status(404).json({message:"Client not found"}));
        }
        await Client.findByIdAndDelete(id);
        res.status(201).json(req.body.name+" deleted successfully");
    }
    catch(error){
        res.status(500).json({error:error.message});
    }
}


// controller to update client record in the database
export const update= async(req,res)=>{
    try{
        const id = req.params.id;
        const clientExist = await Client.findById({_id: id});
        if(!clientExist){
            return (res.status(404).json({message:"Client not found"}));
        }
        await Client.findByIdAndUpdate(id,req.body,{new:true})
        res.status(201).json(clientExist.id+" updated succesfully");
    }
    catch(error){
        res.status(500).json({error:error.message});
    }
}