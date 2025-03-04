const express = require('express');
const app = express();
var cors = require('cors');

app.use(
    cors({
        credentials: true,
        origin: 'https://pedantic-pike-9868a1.netlify.app/'
    })
);
app.options('*', cors());

app.get('/', (req, res) => res.send('I modified my API'));

app.listen(process.env.PORT || 3000, function() {
    console.log('server running on port 3000', '');
});
