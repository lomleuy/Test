const names = ["total", "pisey", "kanda", "leuy"];
const newName = names.map((name) => {
  console.log(name);
});
const number = [12, 34, 55, 67, 23, 100];
const newNum = number.map(function (number) {
  return number * 2;
});
console.log(newNum);
const people = [
  {
    name: "Leuy",
    sex: "Male",
    position: "developer",
  },
  {
    name: "Baby",
    sex: "Female",
    position: "SiemReap",
  },
  {
    name: "Mom",
    sex: "Female",
    position: "Oddor",
  },
  {
    name: "Li Heng",
    sex: "Male",
    position: "SiemReap",
  },
];
const newPeople = people.map((person) => {
  return {
    name: person.name + " lom",
    sex: person.sex.toUpperCase(),
    position: person.position.toUpperCase(),
  };
});
console.log(newPeople);
console.log(people);

const food = ["ege", "dog", "Cat", "Meow"];
function show(name) {
  console.log(name + "Leuy");
}

//filter() in javascript
//create new array with array element that passed a test
//does return new array
const peoples = [
    {
      name: "Leuy",
      age:16,
      sex: "Male",
      position: "developer",
    },
    {
      name: "Baby",
      age:15,
      sex: "Female", 
      position: "SiemReap",
    },
    {
      name: "Mom",
      age:22,
      sex: "Female",
      position: "Oddor",
    },
    {
      name: "Li Hong",
      age:19,
      sex: "Male",
      position: "SiemReap",
    },
    {
        name: "Sok Li",
        age:26,
        sex: "Male",
        position: "SiemReap",
      },
      
  ];
  //find a young people use filter()
  /*const youngpeo=peoples.filter((person)=>{
    return person.age<=18;
  })*/
  function showmale(person){
    return person.position==="SiemReap";
  }
  const position=peoples.filter(showmale);
  const male=peoples.filter((person)=>{
    return person.sex==="Male";
  })
  console.log(male);
  