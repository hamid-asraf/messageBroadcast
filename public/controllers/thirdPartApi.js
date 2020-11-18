
const axios = require("axios");
const { logger } = require('../../helper/logger');

const url = "https://jsonplaceholder.typicode.com/comments";


/**
 * This is function will return temporary data to the frontend
 * @param {*} req the request information of the api
 * @param {*} res is hold the response objcet of the api
 */
exports.getTempData = async(req, res) => {
    try {
        const response = await axios.get(url);
        const data = response.data;
        res.status(200).json({success: true, data})
    } catch (e) {
        logger.error(String(e.message));
        res.send({success: false, message: e.message});
    }
}