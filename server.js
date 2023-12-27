/**
 * DEPENDENCIES
 */
// import the express library
const express = require('express')
const PORT= 3000
// import the pokemon.js
const pokemon = require('./models/pokemon.js')
/**
 * APPLICATION OBJECT - This is the center of our express universe
 */
const app = express()
/**
 * MIDDLEWARE
 * Special Utilities that run before our routes
 */
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
 * Show
 */
app.get('/pokemon/:id', (req, res) => {
    const id = req.params.id
    const onePokemon = pokemon[id]
    // res.send(onePokemon)
    res.render('show.ejs', {onePokemon})
})

/**
 * SERVER LISTENER - tells our app to listen for req on a certain port
 */
app.listen(3000, () => {
    console.log(`server is listening on ${PORT}`)
})