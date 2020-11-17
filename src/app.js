const path = require('path')
const express = require('express')
const hbs = require('hbs')

const app = express()
const port = process.env.PORT || 3000
 
// Define paths for Express config
const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

// Set up handlebars engine and views location
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

// Setup static directory
app.use(express.static(publicDirectoryPath))
  
app.get('', (req, res) => {
    res.render('index', {
        name: 'Aleena',
        title: 'Weather'
    })
})

app.get('/help', (req, res) => {
    res.render('help', {
        name: 'William',
        title: "About Help",
        helpText: ' This is some helpful text.'
    } )
} )

app.get('/about', (req, res) => {
    res.render('about', {
        name: 'Alen',
        title:'This is a about title'
    })
})
app.get('/weather', (req, res) => {
    if (!req.query.address) {
        return res.send({
            error: 'You must provide an address!'
        })
    }
    res.send({
        forecast: 'It is snowing.',
        location: 'New Delhi',
        address: req.query.address
    })
})

app.get('/products', (req, res) => {
    if (!req.query.search) {
        res.send({
            error: 'You must provide a search term.'
        })
    }
    res.send({
        products: []
    })
})
app.get('/help/*', (req, res) => {
    res.render('404', {
        title: '404',
        name: 'Emily',
        errorMessage: 'Page not found.'
    })
})

app.get('*', (req, res) => {
    res.render('404', {
        title: '404',
        name: 'Swift',
        errorMessage: 'Page not found.'
    })
})

app.listen(port, () => {
    console.log('Server is up on port ' +port)
})