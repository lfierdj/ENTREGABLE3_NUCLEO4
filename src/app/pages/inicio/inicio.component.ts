import { Component } from '@angular/core';
import { TablaInicioComponent } from "../../components/tabla-inicio/tabla-inicio.component";

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [TablaInicioComponent],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent {

}
