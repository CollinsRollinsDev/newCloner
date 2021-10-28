import dbConnect from '../../utils/dbConnect';
import User from '../../models/User';
import { sign } from 'jsonwebtoken';
import cookie from 'cookie';

dbConnect();

let proceed;

export default async function handler(req, res) {
    
    const method = req.method;

    if (method === "POST") {
      const user = await User.findOne({
        username: req.body.username,
      });

        if(user){
            (await user.username) === req.body.username && (await user.password) === req.body.password
        ? (proceed = true)
        : (proceed = false);
        }

        if(proceed){
            const userData = {
                username: user.username,
                access: "granted"
            };
            let token = sign( userData, '33e2ee24-0626-4e37-907a-909b5b3db991', { expiresIn: '1h'});
            res.setHeader('Set-Cookie', cookie.serialize('auth', token, {
                httpOnly: false,
                secure: process.env.NODE_ENV !== 'development',
                sameSite: 'strict',
                maxAge: 3600,
                path: '/'
            }))
            
            res.status(200).json({
                success:true,
                message: 'Welcome Admin'
              });
        }  else {
            return res.status(200).json({
              success: false, 
              message: `Sorry, something went wrong. Consider checking your password.`,
            });
          }
    }
}
  