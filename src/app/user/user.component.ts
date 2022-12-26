import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersService } from '../users.service';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
  title = 'Cricketers';
  activatedRoute: any;
  userId: any;
  user: any;
  users: any;
  editMode: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private userService: UsersService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((param) => {
      this.userId = param.get('id');
      this.user = this.userService.getAllUsers.find((x) => x.id == this.userId);
    });

    // snapshot
    //  this.editMode = Boolean(this.activatedRoute.snapshot.queryParamMap.get('edit'));

      this.route.queryParamMap.subscribe((param) => {
      this.editMode = Boolean(param.get('edit'));
    });
    console.log(this.editMode);
  }

  appendQueryParam() {
    this.router.navigate(['/user', this.userId], {
      queryParams: { edit: true },
    });
  }
}
