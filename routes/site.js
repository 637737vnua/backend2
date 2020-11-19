const express = require('express');
const router = express.Router();

const siteController = require('../app/controllers/SiteController');

// newsController.index



router.get('/search', siteController.search);
router.get('/Van-hoc-nghe-thuat', siteController.vanhoc);
router.get('/Van-hoa-xa-hoi', siteController.xahoi);
router.get('/Thieu-nhi', siteController.thieunhi);
router.get('/Truyen', siteController.truyen);
router.get('/Lien-he', siteController.lienhe);
router.get('/dang-ky', siteController.dangky);


router.get('/', siteController.index);

module.exports = router;
