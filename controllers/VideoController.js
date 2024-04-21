import path from "path"
import Video from "../models/videoModel.js";
import fs from "fs"
export const getAlllVideo = async(req, res)=> {
     try {
          const videos = await Video.findAll({});
          res.json(videos)
     } catch (error) {
          console.log(error);
     }
}


export const createVideo = async(req,res)=>{
    
         if(req.files == null) return res.json({nsg: "ویدیو انتخاب نکردید"}) 
         const file = req.files.file;
         const fileSize = file.data.length;
         const ext = path.extname(file.name);
         let dateNow = Math.round(Date.now());
         const fileName = dateNow + ext;
         const url = `${req.protocol}://${req.get("host")}/videos/${fileName}`;
         const allowedType  = ['.mp4'];

         if(!allowedType.includes(ext.toLowerCase())){
              return res.json({msg: " .mp4 *  ویدیو نامعتبر است از فرمت مجاز استفاده کنید "})
         }
         if(fileSize > 5000000) return res.json({msg: "حجم ویدیو نباید بیشتر از 5 مگابایت باشد"})
         file.mv(`./public/videos/${fileName}`, async(err)=>{
               if(err) return res.json({msg: err.message})
               try {
                    await Video.create({video: fileName, url: url})
                    res.json({msg:"ویدیو افزوده شد"})
               } catch (error) {
                    console.log(err.message);
               }
         })
}

export const getSingleVideo = async(req,res)=>{
     try {
          const video = await Video.findOne({order: [['createdAt', "DESC"]]})
          res.json(video)
     } catch (error) {
          console.log(error);
     }
}


export const deleteVideo = async(req,res) =>{
     const video = await Video.findOne({
          where: {
               id: req.params.id
          }
     })
     
     if(!video) return res.json({msg: "ویدیو پیدا نشد."})

     try {
          const filePath = `./public/videos/${video.video}`
          fs.unlinkSync(filePath)
          await Video.destroy({
               where: {
                    id: req.params.id
               }
          })

          res.json({msg: "ویدیو با موفقیت حذف شد"})
     } catch (error) {
          console.log(error)
     }
}