import dbConnect from '../../utils/dbConnect';
import Message from '../../models/Message';

dbConnect();


export default async function handler(req, res) {
    // find all message
    const message = await Message.find({});

    console.log(message)

    if(message){
        return res.status(201).json({
            success: true,
            message: message,
          });
    }
}
  