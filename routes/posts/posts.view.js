module.exports = (req, res) => {
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
    res.render('posts', { posts: posts })
}