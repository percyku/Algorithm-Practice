class HashTable {
  // m = hashtable size
  constructor(size) {
    this.size = size;
    this.table = [];
    for (let i = 0; i < this.size; i++) {
      this.table.push([]);
    }
  }

  //parse string to integer
  parse(str) {
    let result = 0;
    for (let i = 0; i < str.length; i++) {
      result += str.charCodeAt(i); //MDN
    }
    return result % this.size;
  }
  //division method
  hash1(key) {
    return key % this.size;
  }

  //multiplication method
  hash2(key) {
    let parseKey = 0;
    if (typeof key !== "number") {
      parseKey = this.parse(key);
    } else {
      parseKey = key;
    }
    let A = (Math.sqrt(5) - 1) / 2;
    return Math.floor(this.size * ((parseKey * A) % 1));
  }

  set(key, value) {
    let index = this.hash2(key);
    this.table[index].push({ key, value });
  }

  get(key) {
    let index = this.hash2(key);
    for (let i = 0; i < this.table[index].length; i++) {
      if (this.table[index][i].key == key) {
        return this.table[index][i];
      }
    }
    return null;
  }

  printAll() {
    console.log(this.table);
  }
}

let myHashTable = new HashTable(7);

myHashTable.set(11424, "Kile");
myHashTable.set(6254, "James");
myHashTable.set(4171, "Drake");
myHashTable.set(554, "Kevin");

console.log(myHashTable.get(4171));
console.log(myHashTable.get(11424));
console.log(myHashTable.get(11424123));

//CSS
myHashTable.set("white", "#FFFFF");
myHashTable.set("magenta", "#FF00FF");
myHashTable.set("red", "#FF0000");

console.log(myHashTable.get("white").value);

myHashTable.printAll();
