import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';
import { from } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {

  id: number;
  username: string;
  name: string;
  constructor(private data: DataService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.data.getUser(this.route.snapshot.paramMap.get('id')).subscribe((data) => {
      this.id = data[0].id;
      this.username = data[0].username;
      this.name = data[0].name;
    });
  }
  save() {
    this.data.updateUser(this.id, this.username, this.name).subscribe((data) => console.log('User updated.'));
    alert('User updated.');
  }
}
