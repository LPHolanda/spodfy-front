import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input()
  titulo: string;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  logout(): void {
    this.router.navigate(['/autenticacao']);
  }

  voltar(): void {
    this.router.navigate(['/home']);
  }
}
