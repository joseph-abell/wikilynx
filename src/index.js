var component = require('./component');
var app = document.createElement('div');

require('./main.scss');


document.body.appendChild(app);

app.appendChild(component());