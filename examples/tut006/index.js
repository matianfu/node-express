var express = require('express');

// TODO
var handlebars = require('express-handlebars')
    .create({ defaultLayout:'main' });

var app = express();

// TODO
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');

app.set('port', process.env.PORT || 3000);

app.get('/', (req, res) => {
	// TODO
    // res.type('text/plain');
    // res.send('This is Homepage!');    
    res.render('home');
});

app.get('/about', (req, res) => {
	// TODO
    // res.type('text/plain');
    // res.send('This is About page!');
    res.render('about');
});

app.use((req, res) => {
	// TODO
    // res.type('text/plain');
    res.status(404);
 	// TODO
    // res.send('404 - Not Found');
    res.render('404');
});

app.use((req, res) => {
	// TODO
    // res.type('text/plain');
    res.status(500);
    // TODO
    // res.send('500 - Internal Error');
    res.render('500');
});

app.listen(app.get('port'), () => {
    console.log('Express started on http://localhost:' + 
        app.get('port') + '; press Ctrl-C to terminate.');
});



