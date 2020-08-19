const { Router } = require('express');
const router = Router();

router.get('/', (req, res) => {
    res.json({"Title": "Hello World"});
});


router.get('/test', (req, res) => {
    const data = {
        "name": "Charly",
        "website": "charly.com"
    }
    res.json({data});
});

module.exports = router;