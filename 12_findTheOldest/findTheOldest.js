const findTheOldest = function(people) {
    return people.reduce((oldest, person) => {
      const currentYear = new Date().getFullYear();
      const deathYear = person.yearOfDeath || currentYear;
      const age = deathYear - person.yearOfBirth;
  
      const oldestDeathYear = oldest.yearOfDeath || currentYear;
      const oldestAge = oldestDeathYear - oldest.yearOfBirth;
  
      return age > oldestAge ? person : oldest;
    });
  };
  
  // Example usage
  const people = [
    {
      name: 'John',
      birth: 1900,
      death: 1980
    },
    {
      name: 'Jane',
      birth: 1910,
      death: 1990
    },
    {
      name: 'Jim',
      birth: 1920
    }
  ];
  
  console.log(findTheOldest(people)); // Object for 'Jane'
  

// Do not edit below this line
module.exports = findTheOldest;
