const {cloudinary}=require("./cloudinary.config.js")

const uploadonCloudinary=async (localFilepath)=>{
    try {
        const result = await cloudinary.uploader.upload(localFilepath);
        console.log("Upload successful:", result);
        return result;
      } catch (error) {
        console.error("Error uploading image:", error);
      }
}
module.exports={
    uploadonCloudinary,
}