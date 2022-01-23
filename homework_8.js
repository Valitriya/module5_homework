let childrenAge = new Map();
    childrenAge.set("Jonny", 13);
    childrenAge.set("Toby", 8);
    childrenAge.set("Joy", 18);
    childrenAge.set("Kiki", 5);
    childrenAge.set("Benny", 7);

for ([value, key] of childrenAge) {
  console.log(`Name: ${value}, Age: ${key}`);
}
