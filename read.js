db.inventory.find()    // Fetch All Documents
db.inventory.find({})    
db.inventory.find({likes: 4}) //
db.inventory.find({tags: { $in : ["news", "liton" ] }});

// AND
db.inventory.find({ category: "event", likes: { $lt: 4 } });

// OR
db.inventory.find( { $or: [ {tags: "news"} , { likes: {$lt: 3 } } ] } );

  
db.inventory.find({category : "News"});

// Jesob poperty chai segula jemon name, price, _id emon..
db.inventory.find({}, {name: 1, price: 1, _id: 0})





