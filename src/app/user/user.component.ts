import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  /**Entrada del componente desde otra parte */
  @Input() nameUser;

  constructor() { }

  ngOnInit() {
  }

}
