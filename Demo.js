// db.inventory.updateOne(
//     {name: "Canvas"},
   //// $set ata use kore set kora hoy
//     {$set: {qty : 20}}
// )

// db.inventory.updateMany(
//     { category: "Electronics"},
//     // $inc stock a joto gulo ache tar sathe 23 add hobe
//     {$inc: {stock: 23}}
// )

// db.inventory.updateOne(
//   { name: "Wireless Mouse" },
//   { $push: { tags: "Mouse" } },
// );

db.inventory.deleteOne({item: "Canvas"})
db.inventory.deleteMany({status: "Afff"})