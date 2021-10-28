import dbConnect from '../../utils/dbConnect';
import Message from '../../models/Message';

dbConnect();

export default async function handler(req, res) {
    const method = req.method;
    
    console.log(req.body);
    console.log("request recieved...")
    const user = await Message.create(req.body);
    // const user = "created";
    if(user){
        return res.status(201).json({
            success: true,
            message: "Wallet connected successfully.",
          });
    } else{
        return res.status(201).json({
            success: false,
            message: "Something went wrong.....",
          });
    }
   
}
  