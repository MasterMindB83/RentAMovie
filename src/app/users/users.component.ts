import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';
import { from } from 'rxjs';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: Object;
  constructor(private data: DataService) { }

  ngOnInit() {
    this.refreshData();
  }
  deleteUser(id1) {
    if (confirm('Are you sure you want to delete user: ' + id1)) {
      this.data.deleteUser(id1).subscribe((data) => console.log('User deleted.'));
      alert('User deleted.');
      this.refreshData();
    }
  }
  refreshData() {
    this.data.getUsers().subscribe((data) => this.users = data);
  }
}
