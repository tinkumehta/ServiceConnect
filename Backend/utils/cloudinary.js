import {v2 as cloudinary} from "cloudinary"
import fs from 'fs'
import dotenv from 'dotenv'

 dotenv.config();

cloudinary.config({
    cloud_name : process.env.CLOUD_NAME,
    api_key : process.env.CLOUDINARY_API_KEY,
    api_secret : process.env.CLOUDINARY_API_SECRET
});



export const uploadToCloudinary = (fileBuffer, folder) => {
  return new Promise((resolve, reject) => {
    const stream = cloudinary.uploader.upload_stream(
      { folder: folder },
      (error, result) => {
        if (result) {
          resolve(result);
        } else {
          reject(error);
        }
      }
    );

    stream.end(fileBuffer);
  });
};

// export const uploadOnCloudinary = async (localFilePath) => {
//     try {
//         if (!localFilePath) return null;
//         const response = await cloudinary.uploader.upload(localFilePath, {
//             resource_type : "auto"
//         })
//         // file has been uploaded successfull
//         console.log("File is uploaded on cloundinary", response.url);
        
//         fs.unlinkSync(localFilePath)
//         return response

//     } catch (error) {
//         fs.unlinkSync(localFilePath) // remove the file in locally saved
//         return null
//     }
// }

// export const deleteOnCloudinary = async (public_id, resource_type ="image") => {
//     try {
//         if (!public_id) return null

//         // delete file from cloudinary
//         const result = await cloudinary.uploader.destroy(public_id, {
//             resource_type : `${resource_type}`
//         })
//     } catch (error) {
//         return error;
//         console.log("delete on cloudinary failed", error);
        
//     }
// }