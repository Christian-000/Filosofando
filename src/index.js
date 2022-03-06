import app from "./app";
import startDB from "./database";

app.listen(app.get('port'));
console.log('Server ON')

startDB();