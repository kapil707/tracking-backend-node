const express = require('express');
const router = express.Router();
const users = require('../MOCK_DATA.json');

router.get('/api/',(req,res)=>{
    return res.send(users)
});

router.get('/',(req,res)=>{
    //return res.send("about page")
    const html = `<ul>
        ${users.map((user)=>`<li>${user.first_name}</li>`).join('')}
    </ul>`;
    return res.send(html)
});

module.exports = router;