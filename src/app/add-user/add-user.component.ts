import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { CanComponentLeave } from '../guards/un-saved.guard';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css'],
})
export class AddUserComponent implements CanComponentLeave {
  userName: FormControl = new FormControl();

  canLeave(): boolean {
    if (this.userName.dirty) {
      return window.confirm('You have some Unsaved Changes.. Please Confirm');
    }
    return true;
  }
}
