let express = require("express");
let app = express();
let fs = require("fs");

app.get("/", function (req, res, next) {
    res.send("Welcome...");
});

app.get("/get_meta_data/:module_name/:screen_name", function (req, res, next) {
    let {module_name, screen_name} = req.params;
    let fileName = `./src/ui-config/specification/${module_name}/${screen_name}.json`;
    
    res.set("Content-Type", "application/json");

    fs.readFile(fileName, (err, data) => {
        if (err) {
            return res.status(404).send("Please provide correct module_name and screen_name ...");
        }
        res.send(data);
    });
})

app.listen(8000, function () {
    console.log("Listening on port:", 8000);
});