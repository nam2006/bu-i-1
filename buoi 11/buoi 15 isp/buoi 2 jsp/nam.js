data = [
    {
      name: "boombayah",
      author: "blackpink",
      duration: 1.5,
    },
    {
      name: "animal",
      author: "maron5",
      duration: 2,
    },
    {
      name: "Tháng tư là lời nói dối của em",
      author: "Hà Anh Tuấn",
      duration: 3,
    },
    {
      name: "Rolling in the deep",
      author: "Adele",
      duration: 3,
    },
  ];
  //bai1
  let filterduration = data.filter(function(namm) {
    return namm.duration == 3;
});
console.log(filterduration);
  //bai2
let mapauthor = data.map(function(element){
    return element.author
})
// bai3
console.log(mapauthor)
 for(const item of data){
    console.log(item.name)
 }