const express = require('express');
const { createAdvertisement, getAdvertisement, updateAdvertisement } = require('../controller/userController'); // ✅ Correct
const upload = require('../middleware/img.multer');
const router = express.Router();

router.post('/adminfeature', createAdvertisement);
router.get('/', getAdvertisement);

router.put('/:id', upload.single('images'), (req, res, next) => {
  next();
}, updateAdvertisement);
// router.get('/socialmedia', longLivedToken, getPageAccessToken);
// router.get('/socialmedia/pagedata', getPageData);





module.exports = router;
