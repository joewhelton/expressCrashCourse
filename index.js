const express = require('express');
const path = require('path');

const logger = require('./middleware/logger');
const app = express();

//init logger middleware
//app.use(logger);

//Set static folder
app.use(express.static(path.join(__dirname, 'public')));

//Members API routes
app.use('/api/members', require('./routes/api/members'));

// app.get('/', (req, res) => {
//    //res.send("<h1>Joe!!</h1>");
//     res.sendFile(path.join(__dirname, 'public', 'index.html'));
// });


const PORT = process.env.PORT || 5005;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));