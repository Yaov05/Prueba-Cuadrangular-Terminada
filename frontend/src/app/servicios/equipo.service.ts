import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Equipos } from '../modelos/equipo';
import { Partido } from '../modelos/partido';

@Injectable({
  providedIn: 'root'
})
export class EquipoService {

  URL_API = 'http://localhost:4000/editar'
  URL_API2 = 'http://localhost:4000/editar/O'

  equipos: Equipos[];
  selectedEquipo: Equipos = {
    nombre: '',
    partidosjugados: 0,
    puntos: 0,
    difgol: 0,
    golfavor: 0
  };
  partido: Partido = {
    nombre1: '',
    nombre2: '',
    goles1: 0,
    goles2: 0,
  }

  constructor(private http: HttpClient) {
    this.equipos = [];
  }

  obtenerEquipos() {
    return this.http.get<Equipos[]>(this.URL_API);
  }
  registrarEquipo(equipo: Equipos) {
    return this.http.post(this.URL_API, equipo);
  }
  eliminarEquipo(nombre: String) {
    return this.http.delete(`${this.URL_API}/${nombre}`);
  }
  actualizarEquipo() {

  }
  partidos(partido: Partido) {
    return this.http.put(this.URL_API, partido);
    /*
    if (partido.goles1 > partido.goles2) {
      return this.http.put(`${this.URL_API}/${partido.nombre1}`, partido);
    } else if (partido.goles2 > partido.goles1) {
      return this.http.put(`${this.URL_API}/${partido.nombre2}`, partido);
    }
    else {
      return this.http.put(this.URL_API2, partido);
    }*/
  }
}
