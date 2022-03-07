const app = require('./app');
const startDB = require('./database');


app.listen(app.get('port'));
console.log('Server ON')

startDB();