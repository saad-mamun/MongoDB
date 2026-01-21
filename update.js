db.inventory.updateOne(
  // jekono akta property dia catch kora hoy
  { likes: 2 },
  // tarport proyojon anujai update kora hoy
  {
    $set: { body: "News title", category: "News Commend" },
    $currentDate: { lastModified: true },
  }
);

db.inventory.insertMany([
  {
    item: "Canvas",
    qty: 150,
    size: { h: 28, w: 26, uom: "cm" },
    status: "A",
  },
  {
    item: "mat",
    qty: 160,
    size: { h: 28, w: 26.5, uom: "cm" },
    status: "A",
  },
  {
    item: "computer",
    qty: 10,
    size: { h: 28, w: 90.6, uom: "cm" },
    status: "A",
  },
]);


// update

db.inventory.updateOne(
  { item: "Canvas" },
  {
    $set: { "size.uom": "m", status: "P" },
    $currentDate: { lastModified: true },
  }
);

db.inventory.updateMany(
  { qty: { $lt: 200 } },
  {
    $set: { "size.uom": "m", status: "M" },
    $currentDate: { lastModified: true },
  }
);