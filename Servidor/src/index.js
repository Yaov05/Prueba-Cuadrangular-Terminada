/*La aplicación consiste en un cuadrangular de futbol, en el que se registran 4 equipos y se hace un
todos contra todos. Se debe poder registrar el marcador de los partidos y se debe poder ver una tabla 
con las pocisiones
*/
const app = require('./app');


app.listen(app.get('port'));
console.log('serve on port', app.get('port'));