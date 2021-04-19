import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  headerTitulo = 'Home';
  listasCards = [0, 1];

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  pesquisar(): void {
    this.router.navigate(['/pesquisar']);
  }
}
