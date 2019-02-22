import {Component, OnInit} from '@angular/core';
import {Http} from '@angular/http';

import 'rxjs/add/operator/map';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  pagePhotos: any;
  /*pagePhotos: any = {hits : []};*/

  pages: Array<number> = [];
  totalPages: number;

  motCle: string = '';

  /* solution in 'tslint.json' : no-inferrable-types : false */
  currentPage: number = 1;

  size: number = 8;

  constructor(private http: Http) {
  }

  ngOnInit() {
  }

  onSearch(dataForm) {
    /* l'appel http qui charge et convertir le contenu de la response Http en format Json */
    this.http.get('https://pixabay.com/api/?key=11682271-ce47b1a80fb4f6e1e0ab9e768' +
      '&q=' + dataForm.motCle + '&per_page=8&page=' + this.currentPage)
      .map(resp =>
        resp.json()
      )
      .subscribe(data => {
        this.pagePhotos = data;
        this.totalPages = data.totalHits / this.size;
        if (data.totalHits % this.size !== 0) ++this.totalPages;

        this.pages = new Array(this.totalPages);
      });
  }

  goToPage(i) {
    this.currentPage = i + 1;
    this.onSearch({motCle: this.motCle});
  }
}
