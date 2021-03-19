import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth.service';
import {ChildComponent} from '../child/child.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  data: any ;
  constructor(private auth: AuthService) {
  }

  ngOnInit(): void {
  this.auth.getAll().subscribe(res => {
    this.data = res;
    console.log(this.data);
  });
  }
}
