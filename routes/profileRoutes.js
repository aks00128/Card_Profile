function test(app) {
    var mysql = require('mysql');
    var connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'card@123',
        database: 'carddb'
    });
    var fileName = '';
    var path = require('path');
    var http = require('http');
    var multer = require('multer');
    var storage = multer.diskStorage({
        destination: './uploads/',
        filename: function (req, file, cb) {
            fileName = file.originalname.replace(path.extname(file.originalname), "") + '-' + Date.now() + path.extname(file.originalname);
            cb(null, fileName);
        }
    })
    var upload = multer({ storage: storage })
    var flag = false;
    connection.connect(function (err) {
        if (err) {
            console.log("Error in database");
            flag = false;

        } else {
            console.log('connected');
            flag = true;
        };
    });


    app.post('/savedata', upload.single('file'), function (req, res, next) {
        /*console.log('Uploade Successful ', req.file, JSON.stringify(req.body));*/

        var profileData = JSON.parse(req.body.data);
        if (flag) {
            var insertQuery = 'INSERT INTO profile_master (`full_name`,`image_path_1`,`image_path_2`,`skills`) VALUES ("' + profileData.name + '","' + profileData.age + '","' + fileName + '","' + profileData.skills + '")'
            console.log(insertQuery);
            connection.query(insertQuery, function (error, results, fields) {
                if (error) throw error;
                console.log('The solution is: ', results, fields);
                if (results) return 'success';
            });
        } else {
            return res.json({ "Error": "Please configure the dataBase" });
        }

    });

    app.get('/getProfile', function (req, res, next) {
        /*console.log(req.param);*/
        if (flag) {
            var getQuery = 'SELECT * FROM profile_master WHERE id=1'//+userid.id+'';
            console.log(getQuery);
            connection.query(getQuery, function (error, result, fields) {
                if (error) throw error;
                console.log('The solution is: ', result[0]);
                if (result) return res.json(result[0]);
            });

        } else {
            return res.json({ "success": 'withoutDatabase' });
        }
    });

    app.post('/authenticate', upload.single('file'), function (req, res, next) {
        console.log('In authenticate ', req.body);
        var data = JSON.parse(req.body.data);
        if (flag) {
            var query = 'SELECT * FROM user_master WHERE username = "' + data.username + '" AND password = "' + data.password + '"';
            console.log(query);
            connection.query(query, function (error, result) {
                if (error) throw error;
                console.log('The solution is: ', result[0]);
                if (result) return res.json(result[0]);
            });
        } else {
            return res.json({ "success": 'withoutDatabase' });
        }


    });

}

module.exports = test
