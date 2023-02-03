const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    const posts = [{
        songTitle: 'Let It Be',
        createdAt: new Date(),
        description: 'A song about letting things be in times of trouble'
    },
    {
        songTitle: 'Nowhere Man',
        createdAt: new Date(),
        description: "A song about a man who knows not where he's going to"
    },
    {
        songTitle: 'Lovely Rita',
        createdAt: new Date(),
        description: 'A song about a meter maid'
    }
]
    res.render('../templates/views/posts/index', { posts: posts })
})

router.get('/new', (req, res) => {
    res.render('../templates/views/posts/new')
})

router.post('/', (req, res) => {
    res.render('../templates/views/posts/')
})

module.exports = router