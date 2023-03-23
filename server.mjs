import express from 'express';

express()
    .use(express.static('src'))
    .get('/', (req, res) => res.sendFile('index.html', { root: './src' }))
    .get('/:path', (req, res) => res.sendFile(`${req.params.path.replace(/\.html/g, '')}.html`, { root: './src' }))
    .listen(35349, () => console.log('Listening on port 35349!'));