import { Component, inject } from '@angular/core';
import { RouterLink, Router } from '@angular/router';
import { LoginComponent } from '../../pages/login/login.component';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {
  servicio = inject(LoginService)
  constructor(private Router:Router){}
  token: any

  ///Cerrar Sesion
  logout() {
    localStorage.removeItem("token")
    localStorage.removeItem("rol2")
    window.location.href=('login')
  }
  
  ocultar = localStorage.getItem('token')
  rol2= localStorage.getItem('rol2')
  }



