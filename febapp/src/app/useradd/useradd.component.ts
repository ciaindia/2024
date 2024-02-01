import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import axios from 'axios';

@Component({
  selector: 'app-useradd',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './useradd.component.html',
  styleUrl: './useradd.component.css'
})
export class UseraddComponent {
  userForm = new FormGroup({
    name: new FormControl(''),
    job: new FormControl(''),
  });

  onSubmit() {
    // alert(JSON.stringify(this.userForm.value))
    //https://www.npmjs.com/package/axios
    
    axios.post('https://reqres.in/api/users', {
      name: this.userForm.value['name'],
      job: this.userForm.value['job']
    })
    .then(function (response) {
      console.log(response);
      alert(JSON.stringify(response.data))
      window.location.href = 'listing'
    })
    .catch(function (error) {
      console.log(error);
    });
  }
}
