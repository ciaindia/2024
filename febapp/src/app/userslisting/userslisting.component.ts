import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ajax } from 'rxjs/ajax';

@Component({
  selector: 'app-userslisting',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './userslisting.component.html',
  styleUrl: './userslisting.component.css'
})
export class UserslistingComponent {
  users = []

  ngOnInit() {
    // alert("hello from ng on init")

    const users = ajax("https://reqres.in/api/users?page=1");

    users.subscribe(
      (res: any) => {
        console.log(res)
        this.users = res['response']['data']
      }
    );

    // fetch("https://reqres.in/api/users?page=1")
    // .then(res => res.json())
    // .then(res => {

    //   console.table(res.data)

    //   this.users = res.data

    // })
  }


  deleteUser(id: any) {
    // alert(id)

    fetch(`https://reqres.in/api/users/${id}`)
      .then(res => res.json())
      .then(res => {

        alert(JSON.stringify(res))

      })
  }
}
