let peoples = [
  {
    name : "Andi",
    gender : "Male"
  },
  {
    name : "Siti",
    gender : "Female"
  },
  {
    name : "Cindy",
    gender : "Female"
  }
];
let female = peoples.filter(people => {
  return people.gender === "Male";
});
console.log(female)
