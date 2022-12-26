import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { UsersService } from './users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'routing';
  users!: [];

  constructor(private userService: UsersService) {}
  ngOnInit() {
    this.userService.getAllUsers;
  
    }
  }

