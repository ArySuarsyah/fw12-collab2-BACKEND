const { response } = require('express');
const userModels = require('../models/users.model');



exports.createUsers = (req, res) => {
    userModels.register(req.body, (err, data) => {
        if (err) {
            return response.status(400).json({
                succes: false,
                message: err.message
            })
        } else {
            return response.status(200).json({
                succes: true,
                message: "succes",
                data: data.row[0]
            })
        }
    })
};


