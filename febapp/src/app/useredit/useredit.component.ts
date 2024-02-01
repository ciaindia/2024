import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import axios from 'axios';

@Component({
  selector: 'app-useredit',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './useredit.component.html',
  styleUrl: './useredit.component.css'
})
export class UsereditComponent {

  constructor(private route: ActivatedRoute) {}

  userForm = new FormGroup({
    name: new FormControl('prefilled name'),
    job: new FormControl('prefilled job'),
  });

  ngOnInit() {
    var id = this.route.snapshot.paramMap.get('id');
    // alert(id)

    axios.get(`https://reqres.in/api/users/${id}`)
    .then((response) => {
      console.log(response.data)
      // alert(JSON.stringify(response.data));
      
      //https://angular.io/guide/reactive-forms
      this.userForm.patchValue({
        name: response.data.data['first_name'],
        job: "abc job",
      })

    });

  }

  onSubmit() {
    // alert(JSON.stringify(this.userForm.value))
    //https://www.npmjs.com/package/axios
    
    axios.put('https://reqres.in/api/users/2', {
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
