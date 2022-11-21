const http = require('http');
const url = require('url');
const fs = require('fs');
const path = require('path');
const qs = require('querystring');
const customer = require('./data/customer');
const Handlebars = require('handlebars');


registerpartials();

// let template = Handlebars.compile("<p>{{msg}}</p>");
// var res = template({msg: "Hello From handlebars"});
// console.log(res);

const server = http.createServer(function (req, res) {
    const link = url.parse(req.url, true);
    const query = link.query;
    const page = link.pathname;

//--------------------HomePage ------------------
    if (page == "/") {

        customer.getAll((err, result) => {

            var context = { data: result };
            let t = renderTemplate('index', context);
            // console.log(context);
            res.end(t);

        });

    }
    //-----------  create------------
    else if (page == "/customer/create" && req.method == "GET") {
        let template = renderTemplate('create', {});
        res.end(template);
    }
   //------------------update---------------------
    else if (page == "/customer/update" && req.method == "GET") {
        let template = renderTemplate('update', {});
        res.end(template);
    }
    //-------------delete------------------------------
    else if (page == "/customer/delete" && req.method == "GET") {
        let template = renderTemplate('delete', {});
        res.end(template);
    }


//------------------------for insertion -------------------------
    else if (page == "/customer/create" && req.method == "POST") {
        let formData = '';
        req.on('data', function (data) {
            formData += data.toString();

        });
        req.on('end', function () {
            let userData = qs.parse(formData);
            customer.addOne(userData.name, userData.email, userData.age, userData.country, (err, result) => {
                var context = {
                    result: {

                        success: true,
                        errors: []
                    }
                };

                if (err) {
                    console.log(err);
                    context.result.success = false;

                }
                let t = renderTemplate('create', context);
                res.end(t);


            });

        });
    }
    //-----------------------------update--------------------------
    else if (page == "/customer/update" && req.method == "POST") {
        let formData = '';
        req.on('data', function (data) {
            formData += data.toString();

        });
        req.on('end', function () {
            let userData = qs.parse(formData);
            customer.updateOne(userData.name, userData.email, userData.age, userData.country,userData.id, (err, result) => {
                var context = {
                    result: {

                        success: true,
                        errors: []
                    }
                };

                if (err) {
                    console.log(err);
                    context.result.success = false;

                }
                let t = renderTemplate('update', context);
                res.end(t);


            });

        });
    }

    //-----------------------deletion----------------------
    else if (page == "/customer/delete" && req.method == "POST"){
        let formData = '';
        req.on('data', function (data) {
            formData += data.toString();

        });
        req.on('end', function () {
            let userData = qs.parse(formData);
            customer.deleteOne(userData.id,(err, result) => {
                var context = {
                    result: {

                        success: true,
                        errors: []
                    }
                };

                if (err) {
                    console.log(err);
                    context.result.success = false;

                }
                let t = renderTemplate('delete', context);
                res.end(t);


            });

        });  
    }


});
server.listen(80);

function renderTemplate(name, data) {

    var filePath = path.join(__dirname, "templates", name + ".hbs");
    let templateText = fs.readFileSync(filePath, "utf8");
    let template = Handlebars.compile(templateText);
    return template(data);
}


function registerpartials() {

    var filePath = path.join(__dirname, "templates", "partials", "navbar.hbs");
    let templateText = fs.readFileSync(filePath, 'utf8');
    Handlebars.registerPartial("navbar", templateText)
}