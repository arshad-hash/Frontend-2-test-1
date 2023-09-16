const data = [
    { name: "john", age: 24, profession: "developer" },
    { name: "jane", age: 27, profession: "admin" },
  ];
  
  // 1. Print Developers
  function printDeveloper() {
    const developers = data.filter(item => item.profession === "developer");
  const developerNames = developers.map(developer => developer.name);
  console.log(developerNames);
  }
  
  // 2. Add Data
  function addData() {
    // Collect data from the user using prompts
  const name = prompt("Enter name:");
  const age = parseInt(prompt("Enter age:"));
  const profession = prompt("Enter profession:");

  // Create a new object with the collected data
  const newData = {
    name: name,
    age: age,
    profession: profession,
  };

  // Push the new object into the data array
  data.push(newData);

  // Log the updated data array (you can also display it differently)
  console.log("Data array after adding:", data);
    
  }
  
  // 3. Remove Admins
  function removeAdmin() {
     // Use the filter method to create a new array without admin objects
  const nonAdmins = data.filter(item => item.profession !== "admin");

  // Update the data array with the filtered result
  data.length = 0; // Clear the original data array
  Array.prototype.push.apply(data, nonAdmins); // Push the filtered data back into the original array

  // Log the updated data array (you can also display it differently)
  console.log("Data array after removing admins:", data);
  }
  
  // 4. Concatenate Array
  function concatenateArray() {const dummyArray = [
    { name: "alice", age: 30, profession: "manager" },
    { name: "bob", age: 22, profession: "designer" },
  ];

  // Concatenate the data array and the dummy array
  const concatenatedArray = data.concat(dummyArray);

  // Log the concatenated array (you can also display it differently)
  console.log("Concatenated Array:", concatenatedArray);
}

    
  // 5. Average Age
  function averageAge() {
    if (data.length === 0) {
        console.log("Data array is empty.");
        return;
      }
    
      const totalAge = data.reduce((sum, item) => sum + item.age, 0);
      const average = totalAge / data.length;
    
      console.log("Average Age:", average);
    }
  
  
  // 6. Age Check
  function checkAgeAbove25() {
    const isAbove25 = data.some(item => item.age > 25);

    if (isAbove25) {
      console.log("At least one person is older than 25.");
    } else {
      console.log("No one is older than 25.");
    }
  }
  
  
  // 7. Unique Professions
  function uniqueProfessions() {
    const professionsSet = new Set(); // Use a Set to collect unique professions

  data.forEach(item => {
    professionsSet.add(item.profession);
  });

  const uniqueProfessionsArray = Array.from(professionsSet); // Convert Set to an array

  console.log("Distinct Professions:", uniqueProfessionsArray);
}
  
  
  // 8. Sort by Age
  function sortByAge() {
    data.sort((a, b) => a.age - b.age); // Use a custom sorting function

    console.log("Sorted by Age (Ascending Order):", data);
  }
  
  // 9. Update Profession
  function updateJohnsProfession() {
      // Find John's entry in the data array
  const john = data.find(item => item.name === "john");

  if (john) {
    john.profession = "manager"; // Update John's profession
    console.log("John's profession updated to 'manager'");
  } else {
    console.log("John not found in the data.");
  }
}

  
  
  // 10. Profession Count
  function getTotalProfessions() { let developerCount = 0;
    let adminCount = 0;
  
    data.forEach(item => {
      if (item.profession === "developer") {
        developerCount++;
      } else if (item.profession === "admin") {
        adminCount++;
      }
    });
  
    console.log("Total Developers:", developerCount);
    console.log("Total Admins:", adminCount);
  }
  

  