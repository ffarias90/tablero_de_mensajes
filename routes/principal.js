const { Router } = require('express');
const { Message } = require('../db')
const router = Router();

//ejemplo de inicio del sistema. imprime una variable de sesion en la vista.
/*router.get("/", (req, res) => {
    res.render("index");
});*/

//mostrar mensajes
router.get("/", async(req, res) => {

    //primero encontramos todas las citas
    const messages = await Message.findAll();
    res.render("index.ejs", { messages: messages });
    //como se llama la variable : valor que va a tener
});


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

//eliminar citas
/*router.get('/quotes/delete/:id', async(req, res) => {
    //encontramos la cita a eliminar mediante su id
    const quote = await Quote.findByPk(req.params.id);
    //una vez encontrada la eliminamos
    await quote.destroy();
    //mensaje de eliminado
    req.flash('mensaje', 'quote deleted');
    //redirigimos hacia la lista de citas
    res.redirect("/quotes", );
});

//editar citas
router.get('/quotes/edit/:id', async(req, res) => {
    //encontramos la cita a eliminar mediante su id
    const quote = await Quote.findByPk(req.params.id);
    let mensaje = req.flash("mensaje");
    let error = req.flash("error");
    //primero encontramos todas las citas
    const quotes = await Quote.findAll();
    res.render("edit", { quote, mensaje, error });
    //como se llama la variable : valor que va a tener
});

router.post('/quote/edit/:id', async(req, res) => {
    let mensaje = req.flash("mensaje");
    //encontramos la cita a editar mediante su id
    const quote = await Quote.findByPk(req.params.id);
    quote.author = req.body.author;
    quote.quote = req.body.quote;

    await quote.save();

    res.redirect("/quotes");
    //como se llama la variable : valor que va a tener
});
*/



module.exports = router;