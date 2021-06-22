let Student = [];

Student[0] = { id: "a001", name: "walter", marks: 45, city: "Chennai" };
Student[1] = { id: "a002", name: "thomas", marks: 30, city: "Madurai" };
Student[2] = { id: "a003", name: "lincoln", marks: 28, city: "Karur" };
Student[3] = { id: "a004", name: "wayne", marks: 65, city: "Chennai" };
Student[4] = { id: "a005", name: "clark", marks: 75, city: "Chennai" };
Student[5] = { id: "a006", name: "lothbrok", marks: 45, city: "Banglore" };

Student.sort(function(a, b) {
    var nameA = a.name.toUpperCase(); // ignore upper and lowercase
    var nameB = b.name.toUpperCase(); // ignore upper and lowercase
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
  
    // names must be equal
    //return 0;
  });
 
    console.log(Student);
    Student.sort(function(a, b) {
        var CityA = a.city.toUpperCase(); // ignore upper and lowercase
        var CityB = b.city.toUpperCase(); // ignore upper and lowercase
        if (CityA < CityB) {
          return -1;
        }
        if (CityA > CityB) {
          return 1;
        }
      
        // names must be equal
        //return 0;
      });
    
    
        console.log(Student);
