/**
 * DEPENDENCIES
 */
// import the express library
const express = require('express')
const PORT= 3000
// import the pokemon.js
const pokemon = require('./models/pokemon.js')
// import morgan
const morgan = require('morgan')
// import method override
const methodOverride = require('method-override')



/**
 * APPLICATION OBJECT - This is the center of our express universe
 */
const app = express()
/**
 * MIDDLEWARE
 * Special Utilities that run before our routes
 */
app.use(express.static("public"))
app.use(express.urlencoded({extended: true}))
app.use(morgan('dev'))
app.use(methodOverride("_method"))

/**
 * ROUTES - INDUCES
 */


/**
 * Index
 */
app.get('/pokemon', (req, res) => {
    // res.send(pokemon)
    res.render('index.ejs', {pokemon})
})

/**
 * New
 */
app.get('/pokemon/new', (req, res) => {
    res.render('new.ejs')
})

/**
 * Create
 */
app.post('/pokemon', (req, res) => {
    const body = req.body
    // res.send(body)
    pokemon.push(body)
    res.redirect('/pokemon')
})

/**
 * Delete
 */
app.delete('/pokemon/:id', (req, res) => {
    const id = req.params.id
    pokemon.splice(id, 1)
    res.redirect('/pokemon')
})







/**
 * Show - always put last
 */
app.get('/pokemon/:id', (req, res) => {
    const id = req.params.id
    const thePokemon = pokemon[id]
    // res.send(thePokemon)
    res.render('show.ejs', {thePokemon})
})

/**
 * SERVER LISTENER - tells our app to listen for req on a certain port
 */
app.listen(3000, () => {
    console.log(`server is listening on ${PORT}`)
})