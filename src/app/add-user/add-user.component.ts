import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  username: string;
  name: string;
  constructor(private data: DataService) { }

  ngOnInit() {
  }
  addUser() {
    this.data.addUser(this.username, this.name).subscribe((data) => console.log('User added.'));
    alert('User added.');
  }
}
