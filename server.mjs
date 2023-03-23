import express from 'express';

express()
    .use(express.static('src'))
    .get('/', (req, res) => res.sendFile('login.html', { root: './src/html' }))
    .get('/:path', (req, res) => res.sendFile(`${req.params.path.replace(/\.html/g, '')}.html`, { root: './src/html' }))
    .listen(35349, () => console.log('Listening on port 35349!'));