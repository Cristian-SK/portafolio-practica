import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { InfoPage } from '../interfaces/info-page.interface';

@Injectable({
  providedIn: 'root'
})
export class InfoPageService {

  info: InfoPage = {};
  cargada = false;

  constructor( private http: HttpClient) { 

    console.log('Services page information done');

    //Leer JSON archive
    this.http.get('assets/data/data-pagina.json')
      .subscribe((resp:InfoPage) => {
        //console.log(resp);

        this.cargada = true;
        this.info = resp;
        console.log(resp);

      });

  }
}
