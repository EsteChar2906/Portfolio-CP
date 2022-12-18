import { Component, OnInit } from '@angular/core';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';
import { environment } from '../../environments/environment';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  private SERVICE_ID: string = environment.SERVICE_ID;
  private TEMPLATE_ID: string = environment.TEMPLATE_ID;
  private PUBLIC_KEY: string = environment.PUBLIC_KEY;
  public sendEmail(e: Event){
    e.preventDefault();
    emailjs.sendForm(this.SERVICE_ID, this.TEMPLATE_ID, e.target as HTMLFormElement, this.PUBLIC_KEY)
    .then((result: EmailJSResponseStatus) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  }

  ngOnInit(){}

}
