import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {AboutComponent} from './about/about.component';
import {AboutService} from '../services/about.service';
import {RouterModule, Routes} from '@angular/router';
import {ContactsComponent} from './contacts/contacts.component';
import {HomeComponent} from './home/home.component';
import {GalleryComponent} from './gallery/gallery.component';
import {GalleryService} from '../services/gallery.service';

const routes: Routes = [
  {path: 'about', component: AboutComponent},
  {path: 'contacts', component: ContactsComponent},
  {path: 'home', component: HomeComponent},
  {path: 'gallery', component: GalleryComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'}
]

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ContactsComponent,
    HomeComponent,
    GalleryComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [AboutService,
    GalleryService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
