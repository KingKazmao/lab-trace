const express = require('express')
const path = require('Path');
const app = express();
const Rollbar = require("rollbar");
const rollbar = new Rollbar({
  accessToken: '032d9867d71b48f3b520b4bfda22ef00',
  captureUncaught: true,
  captureUnhandledRejections: true
    
})

app.use(express.json())
    rollbar.log('Big money')

    rollbar.error('UH OHHHHHH')
    resizeBy.sendFile(path.join(__dirname, '/public/index.html'))
})
const port = process.env.PORT || 6666;
app.listen(port, function(){
    console.log(` Server jamming on ${port}`)
});