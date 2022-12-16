//bai1
arr1 = [1, 2, 4, 5, 6];
arr2 = [1, 6, 8, 9, 0];
console.log(arr1);
console.log(arr2);
const filter = arr1.filter(value => arr2.includes(value));
console.log(filter);

//bai2
arr = [1, 54, 6, 7];
const newArr = arr.map(arr => {
    return arr + 5;
});
console.log(newArr);


//bai4
players = [
    { id: 11, name: 'Messi', age: 33 },
    { id: 12, name: 'Ronaldo', age: 34 },
    { id: 13, name: 'Young', age: 35 },
    { id: 14, name: 'Mane', age: 21 },
    { id: 15, name: 'Salah', age: 24 },
]

const player = (array, key) => {
    const initialValue = {};
    return array.reduce((obj, item) => {
      return {
        ...obj,
        [item[key]]: item,
      };
    }, initialValue);
  }

const playyer = player(players, 'id');

console.log(playyer)