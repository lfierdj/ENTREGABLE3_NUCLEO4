import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { LibrosService } from '../../services/libros.service';
import { FormAgregarComponent } from '../form-agregar/form-agregar.component';

@Component({
  selector: 'app-gestionlibros',
  standalone: true,
  imports: [FormAgregarComponent, RouterLink, FormsModule],
  templateUrl: './gestionlibros.component.html',
  styleUrl: './gestionlibros.component.css'
})
export class GestionlibrosComponent {
  ruta = inject(Router)

  cerrarSesion(){
    //localStorage.setItem("token", 'false')
    localStorage.removeItem('login')
    this.ruta.navigateByUrl('home')
    location.reload()
  }
  servicios = inject(LibrosService)
  libros : any

  ngOnInit(){
    this.servicios.getLibro().subscribe(p=>{
      this.libros = p
    })
  }
  delete(autor: any){
      this.servicios.deleteLibro(autor).subscribe()
      alert("Libro eliminado")
      location.reload()

  }
}

