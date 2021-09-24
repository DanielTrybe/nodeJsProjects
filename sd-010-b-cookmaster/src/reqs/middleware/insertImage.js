const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
  destination: (req, file, callback) => {
      // const folderName = path.join(__dirname, '..', '..', 'uploads');
      const folderName = path.join('src', 'uploads');
      // const folderName = 'src/uploads';
      callback(null, folderName);
  },
  filename: (req, file, callback) => {
    const { id } = req.params;
    callback(null, `${id}.jpeg`);
  },
});

const insertImage = multer({ storage });

module.exports = { insertImage };