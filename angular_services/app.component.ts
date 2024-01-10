import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoggerService } from './logger.service';
import { EmployeeListComponent } from './employee-list/employee-list.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FormsModule, ReactiveFormsModule, EmployeeListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})


export class AppComponent {

  constructor(private logger : LoggerService) {}

  logLog() { 
    // alert('from logLog()')
    this.logger.log("I am from app component log") 
  }

  logError() { 
    // alert('from logError()')
    this.logger.error("Error found here") 
  }
  logWarn() { alert('from logWarn') }









  employeeForm = new FormGroup({
    name : new FormControl(''),
    contact_number: new FormControl(''),
    address: new FormControl(''),
    salary: new FormControl(''),
    employee_id: new FormControl(''),
    role: new FormControl('')
  });


  ngOnInit() {
    
    fetch("https://janapp.netlify.app/.netlify/functions/api/employees/659c090aab6fd1a13593a603")
    .then(res => res.json())
    .then(result => {
        console.log(result)

        this.employeeForm.setValue({
          name : result['name'],
          contact_number: result['contact_number'] + '',
          address: result['address'],
          salary: result['salary'],
          employee_id: result['employee_id'],
          role: result['role'],
        });

    });
  }

  
  putData() {
    console.log(this.employeeForm.value)
    
    const url = "https://janapp.netlify.app/.netlify/functions/api/employees/"
    
    // var data = {
    //   "id": "659c090aab6fd1a13593a603",
    //   "name": this.employeeForm.value['name'],
    //   "contact_number": this.employeeForm.value['contact_number'],
    //   "address": this.employeeForm.value['address'],
    //   "salary": Number(this.employeeForm.value['salary']),
    //   "employee_id": Number(this.employeeForm.value['employee_id']),
    //   "role": this.employeeForm.value['role']
    // }

    var data = {
      "id": "659c090aab6fd1a13593a603",
      "name": "gaurav",
      "salary": 80000
    }

    fetch(url, {
      method: "PUT",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    .then((response) => response.json())
    .then((data) => { 
      console.log(data)
    })

  }







  
  postData() {
    console.log(this.employeeForm.value)
    
    const url = "https://janapp.netlify.app/.netlify/functions/api/employees/"
    
    var data = {
      "name": this.employeeForm.value['name'],
      "contact_number": this.employeeForm.value['contact_number'],
      "address": this.employeeForm.value['address'],
      "salary": Number(this.employeeForm.value['salary']),
      "employee_id": Number(this.employeeForm.value['employee_id']),
      "role": this.employeeForm.value['role']
    }

    fetch(url, {
      method: "POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    .then((response) => response.json())
    .then((data) => { 
      console.log(data)
    })

  }


  /*
  router.post("/employees", async (req, res) => {
    doc = req.body;
    let u = await emp(doc);
    let result = u.save();
    res.send(doc);
  })
*/


  // profileForm = new FormGroup({
  //   firstName: new FormControl(''),
  //   lastName: new FormControl(''),
  // });


  // onSubmit() {
  //   console.log(this.profileForm.value)
  //   // alert(1)
  //   //fetch function to post data in mongodb
  // }










  // name = new FormControl('def val');













  // num : number = 1
  // output : string = 'Output will appear here'


  // findSqr() {
  //   this.output = `Square of ${this.num} is ${this.num * this.num}`  
  // }



//CW: WAP to read 2 numbers and find multiplication
//use ngModel to map properties with textboxes


  // title = 'janapp';
  // data = [{'first_name' : "Anil"}, {'first_name':"Sunil"}]

  // ngOnInit() {
  //   // this.hitMe()
  //   this.loadDataFromReqres()
  // }

  // loadDataFromReqres() {
  //   fetch("https://reqres.in/api/users?page=1")
  //   .then(res => res.json())
  //   .then(res => {
  //     console.table(res['data'])
  //     this.data = res['data']
  //   })
  // }

  // hitMe() {
  //   alert("I am from hit me function")
  // }
}
