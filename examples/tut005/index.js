var express = require('express');

var app = express();

app.set('port', process.env.PORT || 3000);

app.get('/', (req, res) => {
    res.type('text/plain');
    res.send('This is Homepage!');    
});

app.get('/about', (req, res) => {
    res.type('text/plain');
    res.send('This is About page!');
});

app.use((req, res) => {
    res.type('text/plain');
    res.status(404);
    res.send('404 - Not Found');
});

app.use((req, res) => {
    res.type('text/plain');
    res.status(500);
    res.send('500 - Internal Error');
});

app.listen(app.get('port'), () => {
    console.log('Express started on http://localhost:' + 
        app.get('port') + '; press Ctrl-C to terminate.');
});



