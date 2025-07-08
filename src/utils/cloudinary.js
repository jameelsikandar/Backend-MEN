import { v2 as cloudinary } from 'cloudinary'
import fs from 'fs'

cloudinary.config(
    {
        cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
        api_key: process.env.CLOUDINARY_API_KEY,
        api_secret: process.env.CLOUDINARY_API_SECRET
    }
)


const uploadOnCloudinary = async function (localfilepath) {
    try {
        if (!localfilepath) return null;

        //upload file on cloudinary
        const response = await cloudinary.uploader.upload(localfilepath, {
            resource_type: 'auto'
        })

        //file has been uploaded
        // console.log("File has been uploaded on cloudinary", response.url);
        fs.unlinkSync(localfilepath)
        return response;
    } catch (error) {
        fs.unlinkSync(localfilepath) // remove the locally saved temp file as the upload operation failed
        return null;
    }
}


export { uploadOnCloudinary }
