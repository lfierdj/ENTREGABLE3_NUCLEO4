import { Component } from '@angular/core';
import { TablaLibrosComponent } from "../../components/tabla-libros/tabla-libros.component";

@Component({
  selector: 'app-libros',
  standalone: true,
  imports: [TablaLibrosComponent],
  templateUrl: './libros.component.html',
  styleUrl: './libros.component.css'
})
export class LibrosComponent {

}
