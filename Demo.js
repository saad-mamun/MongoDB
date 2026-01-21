db.inventory.find();
db.inventory.find({"category" : "Electronics", price: { $lt: 1500}})
