// Imports v2 of cloudinary
import { v2 as cloudinary } from "cloudinary";

// Config of cloudinary
cloudinary.config(
    {
        cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
        api_key: process.env.CLOUDINARY_CLOUD_API_KEY,
        api_secret: process.env.CLOUDINARY_CLOUD_API_SECRET
    }
);

// Export cloudinary
export default cloudinary;