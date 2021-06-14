import { Component, OnInit } from '@angular/core';
import { EquipoService } from '../../servicios/equipo.service';
import { NgForm } from "@angular/forms";
import { Equipos } from '../../modelos/equipo'
import { Partido } from '../../modelos/partido';

@Component({
  selector: 'app-equipo',
  templateUrl: './equipo.component.html',
  styleUrls: ['./equipo.component.css']
})
export class EquipoComponent implements OnInit {

  equipo: Equipos[] = [];
  selectedE: Equipos = {
    nombre: '',
    partidosjugados: 0,
    puntos: 0,
    difgol: 0,
    golfavor: 0
  };

  constructor(public equipoService: EquipoService) {
  }

  ngOnInit(): void {
    this.getEquipos();
  }

  getEquipos() {
    this.equipoService.obtenerEquipos().subscribe(
      res => {
        this.equipoService.equipos = res;
      },
      err => console.log(err)
    );
  }
  agregarEquipo(form: NgForm) {
    this.equipoService.registrarEquipo(form.value).subscribe(
      res => {
        this.getEquipos();
        form.reset();
        alert(res);
      },
      err => console.log(err)
    )
  }

  borrarEquipo(nombre: String) {
    if (confirm('¿Esta seguro de que desea eliminar el equipo?')) {
      this.equipoService.eliminarEquipo(nombre).subscribe(
        (res) => {
          this.getEquipos();
        },
        (err) => console.log(err)
      );
    }
  }

  partido(form: NgForm) {
    this.equipoService.partidos(form.value).subscribe(
      (res) => {
        this.getEquipos();
        form.reset();
      },
      (err) => console.log(err)
    );
  }
}
