const cloudinary = require('cloudinary').v2;
const process = require('process');
const dotenv = require('dotenv');

dotenv.config();

cloudinary.config({
	cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
	api_key: process.env.CLOUDINARY_API_KEY,
	api_secret: process.env.CLOUDINARY_API_SECRET,
});

async function handleUpload(file) {
	const res = await cloudinary.uploader.upload(file, {
		resource_type: 'auto',
	});
	return res;
}
module.exports = {
	cloudinary,
	handleUpload,
};
