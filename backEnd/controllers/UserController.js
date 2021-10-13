const userModel = require("../models/UserModel");
//Encriptar contraseñas
const bcrypt = require('bcryptjs');
const token = require('../services/token');

module.exports = {

    add: async (req, res, next) => {
        try {
            let checkUser = await userModel.findOne({
                email: req.body.email
            })
            if (!checkUser) {
                req.body.password = await bcrypt.hash(req.body.password, 10);
                const reg = await userModel.create(req.body);
                res.status(200).json(reg)
            } else {
                res.status(404).send({
                    message: "El usuario ya existe!"
                });
            }
        } catch (error) {
            res.status(500).send({
                message: "Ocurrió un error interno!"
            });
            next(error);
        }
    },

    login: async (req, res, next) => {
        try {
            let checkUser = await userModel.findOne({
                email: req.body.email,
                state: 1
            });
            if (checkUser) {
                let match = await bcrypt.compare(req.body.password, checkUser.password);
                if (match) {
                    let tokenReturn = await token.encode(checkUser);
                    res.status(200).json({
                        checkUser,
                        tokenReturn
                    })
                } else{
                    res.status(401).send({
                        message: "Contraseña incorrecta!"
                    });
                }
            } else {
                res.status(404).send({
                    message: "Usuario no registrado!"
                });
            }
        } catch (error) {
            res.status(500).send({
                message: "Ocurrió un error interno!"
            });
            next(error);
        }
    }
}