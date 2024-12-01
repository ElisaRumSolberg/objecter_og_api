//1. create an array of 5 person objects, the objhects should contain first name last name, age and job properties, jobb should be a boolean.
//------------------------------------------------------------------------------------------------------------------------
const people = [
    { firstName: "Elisa", lastName: "Solberg", age: 33, job: true },
    { firstName: "Jane", lastName: "Smith", age: 30, job: false },
    { firstName: "Melissa", lastName: "Brown", age: 20, job: true },
    { firstName: "Bob", lastName: "Johnson", age: 18, job: false },
    { firstName: "Alissa", lastName: "Aksel", age: 28, job: true }
];


//2. print First and last name of the first person in the array. using dot notation on firstname and bracket notation last name
//------------------------------------------------------------------------------------------------------------------------

console.log(people[0].firstName); // Dot Notation
console.log(people[0]["lastName"]); // Bracket Notation


//3. That was tiresome.. just so much typing. Lets write a method to that we never need to that again..
//create a method in every person object that returns first and last name, call it fullName. This can be done manually for each one or with a loop.


//------------------------------------------------------------------------------------------------------------------------

people.forEach(person => {
    person.fullName = function () {
        return `${this.firstName} ${this.lastName}`;
    };
});

//Print fullName of the second person in the array by calling the method.

console.log(people[1].fullName());

//4. Its the third person's birthday! And their job status changed. Update their age and job status using dot notation.
//------------------------------------------------------------------------------------------------------------------------

people[2].age += 1; 
people[2].job = !people[2].job; 
console.log(people[2]);


//5. Person three is throwing a giant party! create a function called fotballPubben(). The function should check if the person is over 18, print "party time" if they are and "too young" if they are not. It should also print the name of the person.

//------------------------------------------------------------------------------------------------------------------------

function fotballPubben(person) {
    if (person.age > 18) {
        console.log(`${person.fullName()} - Party Time!`);
    } else {
        console.log(`${person.fullName()} - Too Young.`);
    }
}

// use a loop to call the function for every person in the array.
people.forEach(fotballPubben);

//6. It's time for school! Create a function called university. It should take in an person object as well as type of degree (bachelors or masters) as arguments.
// The function should update age and add two properties called "degree" and "student loan". The value of age, degree and student loan should change depending on what degree
//was passed into the function. 
//------------------------------------------------------------------------------------------------------------------------

function university(person, degree) {
    if (degree === "bachelors") {
        person.age += 3;
        person.degree = "Bachelors";
        person.studentLoan = 20000;
    } else if (degree === "masters") {
        person.age += 2; 
        person.degree = "Masters";
        person.studentLoan = 30000;
    }
    return person;
}

//Send one person to uni and print the result.
const personAtUni = university(people[3], "bachelors");
console.log(personAtUni);

// 7. API TIME!
// Read the documentation of this dog API: https://dog.ceo/dog-api/documentation/
// Fetch 4 dogs of the same breed or sub-breed and display them in the DOM
//feel free to change the ID of the images and/or add css.
//------------------------------------------------------------------------------------------------------------------------

const apiUrl = "https://dog.ceo/api/breed/husky/images/random/4";


fetch(apiUrl)
  .then(response => response.json()) // Parse response to JSON
  .then(data => {
    
    const images = data.message;

    
    document.getElementById("dog1").src = images[0];
    document.getElementById("dog2").src = images[1];
    document.getElementById("dog3").src = images[2];
    document.getElementById("dog4").src = images[3];
  })
  .catch(error => {
    console.error("Error fetching data from the API:", error);
  });


//BONUS!!
//create a way for you to change the breed of the dogs displayed on your page
//------------------------------------------------------------------------------------------------------------------------------------------------


document.getElementById("fetchDogs").addEventListener("click", () => {
    const breed = document.getElementById("breed").value.toLowerCase();
    const apiUrl = `https://dog.ceo/api/breed/${breed}/images/random/4`;
  
    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        const images = data.message;
        document.getElementById("dog1").src = images[0];
        document.getElementById("dog2").src = images[1];
        document.getElementById("dog3").src = images[2];
        document.getElementById("dog4").src = images[3];
      })
      .catch(error => {
        console.error("Error fetching data:", error);
      });
  });
  
