document.getElementById('button1').addEventListener('click', loadEmployee);

document.getElementById('button2').addEventListener('click', loadEmployees);


function loadEmployee() {

     const xhr = new XMLHttpRequest();

     xhr.open('Get', 'employee.json', 'false');

     xhr.onload = function () {
          if (this.status == 200) {
               const employee = JSON.parse(this.responseText)
               // document.getElementById('employee').innerHTML = employee;
               // document.getElementById('employee').innerHTML = this.responseText;


               const output = `<ul>
                                   <li>ID: ${employee.id}</li>
                                   <li>Name: ${employee.name}</li>
                                   <li>Company: ${employee.company}</li>
                                   <li>Job: ${employee.job}</li>
                               </ul>
                             `

               document.getElementById('employee').innerHTML = output;

          }
     }
     xhr.send();
}

function loadEmployees() {

     const xhr = new XMLHttpRequest();

     xhr.open('Get', 'employees.json', 'false');

     xhr.onload = function () {
          if (this.status == 200) {

               const employees = JSON.parse(this.responseText);
               let output = '';

               employees.forEach(element => {

                    output += `<ul>
                                   <li>ID: ${element.id}</li>
                                   <li>Name: ${element.name}</li>
                                   <li>Company: ${element.company}</li>
                                   <li>Job: ${element.job}</li>
                              </ul>
                              `


               });

               document.getElementById('employees').innerHTML = output;
          }
     }
     xhr.send();
}