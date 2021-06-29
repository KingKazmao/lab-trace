var Rollbar = require("rollbar");
var rollbar = new Rollbar({
    accessToken: '032d9867d71b48f3b520b4bfda22ef00',
    captureUncaught: true,
    captureUnhandledRejections: true
});

try {
    fakeFunction();
} catch (err) {
    console.log(err)
    rollbar.error(err);
    return res.sendStatus(400);
};



//fake function
fakeFunction();
 catch (err) {
    console.log(err)
    rollbar.error(err);
    return res.sendStatus(400);
};

rollbar.log("Big money");

app.use(express.json())

app.get('/', function(req, res) {
res.sendFile(path.join(__dirname, '/public/index.html'))
})

getQuerySubmit.addEventListener('click', () => {
    axios
        .get(http://localhost:6666/api/inventory?item=${queryInput.value})
        .then(res => addToView(res.data))
});




const port = process.env.PORT || 6666

app.listen(port, function()
{console.log(working on ${port})
})

