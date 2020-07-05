const express = require('express');
const router = express.Router();
const members = require('../../model/Members');
const uuid = require('uuid');

router.get('/', (req, res) => {
    res.json(members);
});

router.get('/:id', (req, res) => {
    let found = members.some(member => member.userId === parseInt(req.params.id));
    //res.send(req.params.id);
    if(found) {
        res.json(members.filter(member => member.userId === parseInt(req.params.id)));
    } else {
        res.status(400).json({msg: `member not found, no ID for ${req.params.id}`});
    }
});


// Create Member
router.post('/', (req, res) => {
   //res.send(req.body);
    let newMember = {
        userId: uuid.v4(),
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        phoneNumber: req.body.phoneNumber,
        emailAddress: req.body.emailAddress
    };

    if(!newMember.firstName || !newMember.emailAddress){
        res.status(400).json({ msg: "Name and email are required"});
    } else {
        members.push(newMember);
        res.status(200).json(members);
    }
});

module.exports = router;