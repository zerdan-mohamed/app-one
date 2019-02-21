import {Injectable} from '@angular/core';

@Injectable()
export class AboutService {
  user = {
    nom: 'mohamed',
    email: 'med@gmail.com',
    tel: 123456789
  }

  messages = [
    {date: new Date(), txt: 'message n1'},
    {date: new Date(), txt: 'message n2'},
    {date: new Date(), txt: 'message n3'}
  ];


  addMessage(m) {
    m.date = new Date();
    this.messages.push(m);
  }


  getAllMessages() {
    return this.messages;
  }

  getUser() {
    return this.user;
  }
}
