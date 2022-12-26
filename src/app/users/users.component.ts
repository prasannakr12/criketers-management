import { Component } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent {
  users: {
    id: number;
    fname: string;
    lname: string;
    salary: number;
    city: string;
    dob: Date;
  }[] = [];

  constructor(private userService: UsersService) {}
  ngOnInit() {
    this.users = this.userService.getAllUsers;
    console.log(this.users);
  }
}
