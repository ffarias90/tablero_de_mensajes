const { Router } = require('express');
const { Message, Comment } = require('../db')
const router = Router();

//ejemplo de inicio del sistema. imprime una variable de sesion en la vista.
/*router.get("/", (req, res) => {
    res.render("index");
});*/

//mostrar mensajes
router.get("/", async(req, res) => {

    //const messages = await Message.findAll();
    const messages = await Message.findAll({
        include: [{ model: Comment }]
    });
    res.render("index.ejs", { messages: messages });
    //como se llama la variable : valor que va a tener
});

//mostrar comentarios
/*router.get("/", async(req, res) => {

    const comments = await Comment.findAll();

    res.render("index.ejs", { comments: comments });
    //como se llama la variable : valor que va a tener
});*/

//crear nuevos mensajes
router.post("/message/new", async(req, res) => {

    const author = req.body.name;
    const message = req.body.message;

    // usamos modelos para agregar nuevas citas
    const new_message = await Message.create({
        author: req.body.name,
        message: req.body.message
    });
    res.redirect("/");
});

//crear nuevos comentarios
router.post("/comment/new", async(req, res) => {

    const author = req.body.name2;
    const comment = req.body.comment;
    const MessageId = req.body.messageId;

    // usamos modelos para agregar nuevos comentarios
    const new_comment = await Comment.create({
        author: req.body.name2,
        comment: req.body.comment,
        MessageId: req.body.messageId
    });
    res.redirect("/");
});











module.exports = router;