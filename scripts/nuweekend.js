var salaryTotal = 0.00;

var allEmployees = [];

var debug = true;

var employeeCorral = function () {
  if(debug) console.log('in employeeCorral');

  //get user imput
  var firstName = document.getElementById('firstNameIn').value;
  var lastName = document.getElementById('lastNameIn').value;
  var idNumber = document.getElementById('idNumberIn').value;
  var jobTitle = document.getElementById('jobTitleIn').value;
  var yearlySalary = document.getElementById('yearlySalaryIn').value;

  //assemble new eployee object
  var newEmployee = {
    'firstName': firstName,
    'lastName': lastName,
    'idNumber': idNumber,
    'jobTitle': jobTitle,
    'yearlySalary': yearlySalary
  };

  //clear the fields
  document.getElementById("firstNameIn").value = '';
  document.getElementById("lastNameIn").value = '';
  document.getElementById("idNumberIn").value = '';
  document.getElementById("jobTitleIn").value = '';
  document.getElementById("yearlySalaryIn").value = '';

  //push to allEmployees global
  allEmployees.push( newEmployee );
  //if(debug) console.log( 'added employee: ' + newEmployee.firstName );

  listEmployees();
  monthlySalaryUpdate();
  return;
  };

var deleteEmployee = function () {
  //if(debug) console.log( 'in deleteEmployee');
  //get user input
  var firstName = document.getElementById("deleteFirstName").value;
  var lastName = document.getElementById("deleteLastName").value;
  var idNumber = document.getElementById("deleteIdNumber").value;
  //loop through allEmployees and check for given name
for(var i=0; i<allEmployees.length; i++) {
  //check that I have found the right name
  if ( allEmployees[i].firstName == firstName ) {
    //I have found the right person
    //if ( debug ) console.log( 'found and deleted ' + allEmployees[i].firstName );
    allEmployees.splice(i,1);

    //clear the fields
    document.getElementById("deleteFirstName").value = '';
    document.getElementById("deleteLastName").value = '';
    document.getElementById("deleteIdNumber").value = '';

    listEmployees();
    //call function to update removal of employee salary total
    monthlySalaryUpdate();
    return;
  }
}
//no such employee
alert('no such employee!');
};

//calculate total monthly salary expenses
var monthlySalaryUpdate = function() {
  //if(debug) console.log('in monthlySalaryUpdate');
  //need this to define salaryTotalMonthly
  var salaryTotalMonthly = '';
  //need this to prevent over adding
  var salaryTotal = 0;

  for ( i = 0; i<allEmployees.length; i++) {
  //need to define thisEmpSalary and give it a value and make it a number
  var thisEmpSalary = parseFloat(allEmployees[i].yearlySalary);
  //divide by 12 to give monthly total
  salaryTotal += thisEmpSalary / 12;
  salaryTotal = Math.round((salaryTotal + 0.00001) * 100) / 100;
  salaryTotalMonthly ='<span id="salaryAmount"> $' + salaryTotal + '</span>';
}
//display salaryTotalMonthly as HTML of this div
    document.getElementById("salaryAmount").innerHTML = salaryTotalMonthly;

listEmployees();
return;
};

var listEmployees = function() {
  if(debug) console.log('in listEmployees');
  var employeeOutputText = '';
  document.getElementById("employeeOutputDiv").innerHTML = '';
  for ( i = 0; i<allEmployees.length; i++) {
    //add employee to outputString
    employeeOutputText += '<p>' + "Name: " + allEmployees[i].firstName + ' ' + allEmployees[i].lastName + ', ID Number: ' + allEmployees[i].idNumber + ', Job Title: ' + allEmployees[i].jobTitle + ', Yearly Salary: $' + allEmployees[i].yearlySalary + '</p>';
  }
  //display employeeOutputText as HTML of this div
      document.getElementById("employeeOutputDiv").innerHTML = employeeOutputText;

};
