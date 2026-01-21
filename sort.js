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

db.inventory.find().limit(1) // 1st document er jonno
db.inventory.find().skip(1) // skip er vitor joto value theber tar port hote dekhar jonno

db.inventory.find().sort({qty: 1}) // index akare 
db.inventory.find().sort({qty: -1})  //  reverse


// Using pagination using MongoDB find and limit 

1 to 10
NOB = 8
db.blog.find().skip((PAGEnO-1)*8).limit(NOB)
pageno = 1 db.blog.find().skip(0).limit(8)
pageno = 2 db.blog.find().skip(8).limit(8)
