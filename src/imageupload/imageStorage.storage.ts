import { diskStorage } from 'multer';
import { join } from 'path';
function makeUUID(length){
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * 
 charactersLength));
   }
   return result;
}
export const imageStorage = diskStorage({
  // Specify where to save the file
  destination: (req, file, cb) => {
    cb(null, join(__dirname, "..", "..", "/static/img"))
  },
  // Specify the file name
  filename: (req, file, cb) => {
    cb(null, makeUUID(32) + ".jpg");
  },

});
