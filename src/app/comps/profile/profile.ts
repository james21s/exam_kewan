import { Component } from '@angular/core';
@Component({
  selector: 'app-profile',
  imports: [],
  templateUrl: './profile.html',
  styleUrl: './profile.css',
})
export class Profile {
  fname: String ='Kewan';
  lname: String = 'Keith james';
  age: number = 22;
  email: string= 'Example@gmail.com';
  gender: string = 'Male';
  enrolment: string = 'Enrolled'
  isenrolled: boolean = true;
}
