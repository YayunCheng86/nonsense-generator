const express = require('express')
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const generateNonsense = require('./generate_nonsense')
const app = express()
const port = 3000 

app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')
app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended:true }))

app.get('/', (req, res) => {
    res.render('index')
})

app.post('/', (req, res) => {
    let target = req.body.inlineRadioOptions
    let nonsense = generateNonsense(target)

    // 為了保留使用者上次選的按鈕 (user可以一直按submit btn讓同一個職位產生不同幹話)
    let isEngineer = false
    let isDesigner = false
    let isEntrepreneur = false
    if (target === 'engineer') isEngineer = true
    else if (target === 'designer') isDesigner = true
    else if (target === 'entrepreneur') isEntrepreneur = true
    
    res.render('index', { nonsense, target, isEngineer, isDesigner,isEntrepreneur })
})

app.listen(port, () => {
    console.log(`This is listening on http://localhost:${port}`)
})