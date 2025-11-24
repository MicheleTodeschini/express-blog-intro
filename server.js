const { log } = require('console')
const express = require('express')

const app = express()

const PORT = 3000

app.use(express.static('public'))

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);

})

app.get("/", (req, res) => {
    res.send(`<h1>Server deò mio blog</h1>`)
})

const ricette = [
    {
        titolo: "Ciambellone",
        contenuto: "Foto ciambellone",
        immagine: "/img/ciambellone.jpeg",
        tags: ["Torte", "Dolci", "Buono"]
    },
    {
        titolo: "Cracker alla barbabietola",
        contenuto: "Foto Cracker",
        immagine: "/mig/cracker_barbabietola.jpeg",
        tags: ["Salati", "Aperitivo", "Buono"]
    },
    {
        titolo: "Pane fritto Dolce",
        contenuto: " foto pane fritto dolce",
        immagine: "/img/pane_fritto_dolce.jpeg",
        tags: ["Dolce", "Fritto", "Non da usare coi patè di acciughe"]
    },
    {
        titolo: "Pasta di barbabietola",
        contenuto: "Foto pasta di barbabietola",
        immagine: "/img/pasta_barbabietola.jpeg",
        tags: ["Pasta", "Gluten Free", "Meh se non ti piace la barbabietola"]
    },
    {
        titolo: "Torta paesana",
        contenuto: "Foto torta paesana",
        immagine: "/img/torta_paesana.jpeg",
        tags: ["Torta", "Dolce", "Molto Buono"]
    },
]