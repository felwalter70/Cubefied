const express = require('express');
const app = express();

app.use(express.json());

let customers = [
    { id: 1, name: "Fel" },
    { id: 2, name: "Machado" },
    { id: 3, name: "Samu" },
    { id: 4, name: "Cordero" }
]

app.get("/customers", (req, res) => {
    return res.json(customers);
});

app.get("/customers/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const customer = customers.find(customer => customer.id === id);
    const status = customer ? 200 : 404;

    return res.status(status).json(customer);
});

app.post("/customers", (req, res) => {
    const { name } = req.body;
    const newId = customers[customers.length - 1].id + 1;

    const newCustomer = {id: newId, name: name};

    customers.push(newCustomer);

    return res.status(201).json(newCustomer);
});

app.put("/customers/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const { name } = req.body;
    const index = customers.findIndex(customer => customer.id === id);

    const status = index >= 0 ? 200 : 404;

    if (index >= 0) {
        const newName = name;
    
        customers[index].name = newName;
    }

    return res.status(status).json(customers[index]);
});

app.delete("/customers/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const index = customers.findIndex(customer => customer.id === id);
    
    const status = index >= 0 ? 200 : 404;
    
    if (index >= 0) {
        customers.splice(index, 1);
    }

    return res.status(status).json();
});

app.listen(9000);