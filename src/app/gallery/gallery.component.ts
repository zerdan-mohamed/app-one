import {Component, OnInit} from '@angular/core';
import {Http} from '@angular/http';

import 'rxjs/add/operator/map';
import {GalleryService} from '../../services/gallery.service';

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

  constructor(private galleryService: GalleryService) {
  }

  ngOnInit() {
  }

  onSearch(dataForm) {
    /* attender la reponse et convertir le contenu de la response Http en format Json */
    this.galleryService.search(this.motCle, this.size, this.currentPage)
      .subscribe(data => {
        this.pagePhotos = data;
        this.totalPages = Math.ceil(data.totalHits / this.size);

        this.pages = new Array(this.totalPages);
      }, err => {
        console.log(err);
      });
  }

  goToPage(i) {
    this.currentPage = i + 1;
    this.onSearch({motCle: this.motCle});
  }
}
