import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor() {}

  getAllUsers = [
    {
      id: 1,
      fname: 'Virat',
      lname: 'Kohli',
      salary: 200000,
      city: 'Delhi',
      dob: new Date('11/05/1988'),
    },
    {
      id: 2,
      fname: 'Sachin',
      lname: 'Tendulkar',
      salary: 250000,
      city: 'Mumbai',
      dob: new Date('04/24/1973'),
    },
    {
      id: 3,
      fname: 'Mahendra Singh',
      lname: 'Dhoni',
      salary: 350000,
      city: 'Ranchi',
      dob: new Date('07/07/1981'),
    },
    {
      id: 4,
      fname: 'Rahul',
      lname: 'Dravid',
      salary: 280000,
      city: 'Karnataka',
      dob: new Date('01/11/1973'),
    },
  ];
}
