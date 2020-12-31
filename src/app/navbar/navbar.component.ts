import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  onModal: boolean =  false;

  constructor() { }

  ngOnInit(): void {
  }

  toggleModal() {
    this.onModal = !this.onModal;
    console.log(this.onModal);
  }
}
