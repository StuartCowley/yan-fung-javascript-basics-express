const createPerson = (name, age) => {
  let person = {
    "name" : name, 
    "age":age,
  };
  return person;
};

const getName = object => {
  return object.name;
};

const getProperty = (property, object) => {
  return object[property];
};

const hasProperty = (property, object) => {
  return object.hasOwnProperty(property);
};

const isOver65 = person => {
  if (person.age > 65){
    return true;
  } else {
    return false;
  }
};

const getAges = people => {
  return people.map(({ age }) => age);
}

const findByName = (name, people) => {
 return people.find(people => people.name === name);
};

const findHondas = cars => {
  return cars.filter(cars => cars.manufacturer === 'Honda');
};

const averageAge = people => {
  return people.reduce((sum, person) => sum + person.age, 0) / people.length;
};

const createTalkingPerson = (name, age) => {
  let person = {
    "name" : name, 
    "age":age,
    "introduce": function(newFriend) {
      return `Hi ${newFriend}, my name is ${this.name} and I am +${this.age}!`;
    }
  };
  return person;
};

module.exports = {
  createPerson,
  getName,
  getProperty,
  hasProperty,
  isOver65,
  getAges,
  findByName,
  findHondas,
  averageAge,
  createTalkingPerson
};
