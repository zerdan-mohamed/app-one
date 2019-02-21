import {Component, OnInit} from '@angular/core';
import {AboutService} from '../../services/about.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  user: any;
  /*user = {nom: String, email: String, tel: umber};*/

  messages = [];

  message = {
    date: null,
    txt: ''
  };

  constructor(private aboutService: AboutService) {
    this.user = this.aboutService.getUser();
    this.messages = this.aboutService.getAllMessages();
  }

  ngOnInit() {
  }

  onAddMessage(m) {
    /*console.log(m);*/
    this.aboutService.addMessage(m);
    this.message.txt = '';
    this.messages = this.aboutService.getAllMessages();
  }
}
