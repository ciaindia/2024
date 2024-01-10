import { Injectable } from '@angular/core';
import axios from 'axios';
import { ajax } from 'rxjs/ajax';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor() { }

  getEmployees() {
    console.log(" I am from getEmployees Service ")

    // fetch("https://janapp.netlify.app/.netlify/functions/api/employees/")
    // .then(res => res.json())
    // .then(result => {
    //   console.table(result)
    // })

    //npm i axios
    //https://www.npmjs.com/package/axios

    // axios.get('https://janapp.netlify.app/.netlify/functions/api/employees/')
    // .then(function (response) {
    //   // handle success
    //   console.table(response['data']);
    // })

    const apiData = ajax.get('https://janapp.netlify.app/.netlify/functions/api/employees/')
    apiData.subscribe(res => {
      console.log(res.status, res.response)
      console.table(res.response)
    })

  }
}
