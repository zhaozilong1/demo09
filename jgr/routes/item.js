var express = require('express');
var router = express.Router();
var mysql     =require('mysql');
var connection = mysql.createPool({
    host:"localhost",
    user:"root",
    password:"zhao19940801",
    database:"aaa"
})

/* GET home page. */
router.get('/list', function(req, res, next) {
    connection.query("SELECT id,name FROM news",function (err,rows) {
        res.header("Access-Control-Allow-Origin","*");
        if(err) throw err
        res.send(rows)
    })
});
router.post('/con1', function(req, res, next) {
    connection.query("SELECT * FROM news where id=" + req.body.id,function (err,rows) {
        res.header("Access-Control-Allow-Origin","*");
        if(err) throw err
        res.send(rows)
    })
});

module.exports = router;
