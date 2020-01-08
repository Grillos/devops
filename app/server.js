const app = require('./src/config/custom-express')
const port = process.env.PORT
app.get('/', function (req, res) {
    res.send('App up and running!');
  });

app.listen(port, function(){
    console.log(`Server running in port ${port}`)
})
