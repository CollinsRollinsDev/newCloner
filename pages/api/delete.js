import dbConnect from '../../utils/dbConnect';
import Message from '../../models/Message';

dbConnect();
let proceed;

export default async function handler(req, res) {
    
    const {id} = req.query;

      const message = await Message.findOne({
        _id: id,
      });

        if(message){
            const deleted = message.delete()
           if(deleted){
            res.json({
                success: true,
            })
           }
        }

}
  