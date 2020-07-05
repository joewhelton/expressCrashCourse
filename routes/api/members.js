const express = require('express');
const router = express.Router();
const members = require('../../model/Members');

router.get('/', (req, res) => {
    res.json(members);
});

router.get('/:id', (req, res) => {
    let found = members.some(member => member.userId === parseInt(req.params.id));
    //res.send(req.params.id);
    if(found) {
        res.json(members.filter(member => member.userId == parseInt(req.params.id)));
    } else {
        res.status(400).json({msg: `member not found, no ID for ${req.params.id}`});
    }
});


// Create Member
router.post()

module.exports = router;