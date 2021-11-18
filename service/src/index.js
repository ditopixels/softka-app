import './database.js'
import app from './app.js'

app.listen(app.get('port'), (req, res) => {
    console.log('Server on port', app.get('port'));
});