import dotenv from "dotenv"

dotenv.config()

export const config = {
    db : {
        URI : process.env.DB_URI || "mongodb+srv://rmonterrosa:dObSxsR5BYz6LiV0@miprimercluster.87lyo.mongodb.net/Nexus?retryWrites=true&w=majority&appName=MiPrimerCluster"      

    },
    server : {
        PORT : process.env.PORT || 4000
    },
    CLOUDINARY:{
        cloudinary_name: process.env.CLOUDINARY_NAME,
        cloudinary_api_key: process.env.CLOUDINARY_API_KEY,
        cloudinary_api_secret: process.env.CLOUDINARY_API_SECRET
    }
}