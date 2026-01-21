db.inventory.insertMany(
  [
    {
      name: "Liton Ahmed",
      email: "liton@example.com",
      age: 25,
      isVerified: true,
      createdAt: "2025-07-01T12:00:00Z",
    },
    {
      name: "Sara Khan",
      email: "sara.khan@example.com",
      age: 29,
      isVerified: false,
      createdAt: "2025-07-02T15:30:00Z",
    },
    {
      name: "John Doe",
      email: "john.doe@example.com",
      age: 34,
      isVerified: true,
      createdAt: "2025-07-03T10:15:00Z",
    },
    {
      name: "Ayesha Akter",
      email: "ayesha@example.com",
      age: 22,
      isVerified: false,
      createdAt: "2025-07-05T08:45:00Z",
    },
    {
      name: "Tanvir Hasan",
      email: "tanvir@example.com",
      age: 30,
      isVerified: true,
      createdAt: "2025-07-06T17:00:00Z",
    },
  ],
);


// deleteOne
db.inventory.deleteOne({name: "Ayesha Akter"})

db.inventory.deleteMany({}) //all delete


