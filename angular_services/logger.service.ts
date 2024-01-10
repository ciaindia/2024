import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class LoggerService {

  constructor() { }

  log(msg: any)   { 
    console.log(msg); 
  }

  error(msg: any) { 
    console.error(`%c ${msg}`, "color: red; font-size: 40px;"); 
  }
  warn(msg: any)  { console.warn(msg); }

}

/**
 * https://janapp.netlify.app/.netlify/functions/api/employees/
 * 
 * create service employee and add method getEmployees()
 * create component EmployeeList inject employee service
 * in EmployeeList component and call getEmployees() method on EmployeeList component loading (ngOnInit)
p0 -> using fetch
p1 -> comment fetch and then use axios
p2 -> comment rxjs/ajax and then use rxjs/ajax
*/