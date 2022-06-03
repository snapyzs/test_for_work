const {Note} = require('../models/models');
const ExtError = require("../error/extError");

class NoteController {
    async getAll(req,res,next) {
        const data = await Note.findAll();
        return res.json(data);
    }
    async create(req,res,next) {
        const {title,description} = req.body;
        if (!title || !description) {
            return next(ExtError.badRequest("Title or Description empty!"));
        }
        const note = await Note.create({title,description});
        return res.json({note});
    }
    async update(req,res,next) {
        const {id,title,description} = req.body
        const data = await Note.update({title,description},{where:{id}});
        return res.json(Boolean(data));
    }
    async delete(req,res,next) {
        const {id} = req.body
        const data = await Note.destroy({where:{id}});
        return res.json(Boolean(data));
    }
}

module.exports = new NoteController();