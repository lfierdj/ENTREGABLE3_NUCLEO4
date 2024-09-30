import { Component, inject } from '@angular/core';
import { LibrosService } from '../../services/libros.service';

@Component({
  selector: 'app-tabla-libros',
  standalone: true,
  imports: [],
  templateUrl: './tabla-libros.component.html',
  styleUrl: './tabla-libros.component.css'
})
export class TablaLibrosComponent {
  servicio = inject(LibrosService)
  libros:any
  
  ngOnInit(){
    this.servicio.getLibro().subscribe(a =>{
      this.libros = a
    })
  }

  delete(id: any){
    this.servicio.deleteLibro(id).subscribe()
      alert("Libro eliminado")
  }
}

