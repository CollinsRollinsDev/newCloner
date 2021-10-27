import dbConnect from '../../utils/dbConnect';
import Message from '../../models/Message';

dbConnect();

export default async function handler(req, res) {
    const method = req.method;

    const user = await Message.create(req.body);
    if(user){
        return res.status(201).json({
            success: true,
            message: "User created successfully! You can now login.",
          });
    } else{
        return res.status(201).json({
            success: false,
            message: "Something went wrong.....",
          });
    }
   
}
  