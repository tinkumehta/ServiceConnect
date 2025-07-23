import jwt from 'jsonwebtoken'
import { User } from '../models/User.models.js';


const verifyToken = async (req, res, next) => {
    let token;
   
    if (
        req.headers.authorization && 
        req.headers.authorization.startsWith('Bearer')
    ){
        token = req.headers.authorization.split(' ')[1];
    }

    if (!token) {
        return res.status(401).json({
            success : false,
            message : 'Not authorized',
        });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = await User.findById(decoded._id).select('_id');
        next();
    } catch (error) {
         console.error(err);
    return res.status(401).json({
      success: false,
      message: 'Invalid token',
    });

    }
};

export {verifyToken}