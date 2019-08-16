var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "Akbar123!",
    database: "bamazon"
});

connection.connect(function(err) {
    if (err) throw (err);
    console.log("connected as id " + connection.threadId);
    show();
});

function show() {
    connection.query("SELECT * FROM products", function(err, res) {
        if (err) throw (err);
        console.log("~~~~~~~~~~~~~~~~~~Welcome to Bamazon!~~~~~~~~~~~~~~~~~~");
        console.log("Check out our inventory:");
        console.log("================================================================================================");
        for (i = 0; i < res.length; i++) {
            console.log("ID: " + res[i].id + " || " + "Product: " + res[i].product_name + " || " + "Price: " + res[i].price);
            console.log("================================================================================================");
        }
        askToShop();
    })
};

function askToShop() {
    inquirer.prompt([{
        name: "shop",
        type: "confirm",
        message: "Would you like to shop at Bamazon?"
    }]).then(function(response) {
        if (response.shop === true) {
            makePurchase();
        } else {
            console.log("Oh well, maybe next time?");
            connection.end();
        }
    })
};

function makePurchase() {
    inquirer.prompt([{
            name: "buy",
            type: "input",
            message: "What is the ID number of the product you'd like to purchase?"
        },
        {
            name: "quantity",
            type: "input",
            message: "How many would you like to purchase?"
        }
    ]).then(function(response) {
        connection.query("SELECT * FROM products WHERE ?", {
            id: response.buy
        }, function(err, res) {
            if (err) throw (err)
            if (res[0].stock_quantity >= response.quantity) {
                console.log("It's been purchased!");

                //Update database with new quantity://
                var newQuantity = res[0].stock_quantity - parseInt(response.quantity);
                var totalAmount = parseInt(response.quantity) * res[0].price;

                updatedQuantity(response.buy, newQuantity);
                console.log("Total Amount Due: $" + totalAmount);
                askToShop();
            } else {
                console.log("Sorry, we don't have enough in stock!");
                askToShop();
            }
        })
    })
}

function updatedQuantity(buy, quantity) {
    connection.query("UPDATE products SET ? WHERE ?", [{
            stock_quantity: quantity
        },
        {
            id: buy
        }
    ], function(err, results) {

    });


}