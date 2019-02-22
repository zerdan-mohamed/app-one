import {Injectable} from '@angular/core';
import {Http} from '@angular/http';

@Injectable()
export class GalleryService {

  constructor(private http: Http) {
  }

  search(motCle: string, size: number, page: number) {
    /*l'appel http*/
    return this.http.get('https://pixabay.com/api/?key=11682271-ce47b1a80fb4f6e1e0ab9e768' +
      '&q=' + motCle + '&per_page=' + size + '&page=' + page)
      .map(resp =>
        resp.json()
      );
  }
}
