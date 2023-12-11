import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css'],
  providers: [MessageService]
})
export class ContactoComponent implements OnInit{
  contactForm!:FormGroup;

  ngOnInit() {
    this.contactForm = new FormGroup({
      nombre: new FormControl('',[Validators.required]),
      email:new FormControl('',[Validators.required, Validators.email]),
      mensaje:new FormControl('',[Validators.required])
    })
  }


  public onsave(){
    console.log(this.contactForm);
  }

  showTopCenter() {
    this.messageService.add({ key: 'tc', severity: 'success', summary: '', detail: 'Mensaje enviado con éxito' });
  }


  constructor(private messageService: MessageService) {}
  public sendMessage():void {
    if(this.contactForm.invalid) return;
    fetch(
      `https://portafolio-f57e0-default-rtdb.europe-west1.firebasedatabase.app/mensaje.json`,
      {
        method: "POST",
        body: JSON.stringify({
          nombre: this.contactForm.value.nombre,
          email: this.contactForm.value.email,
          mensaje: this.contactForm.value.mensaje
        }),
        headers: { "Content-type": "application/json; charset=UTF-8" },
      }
    )
      .then((res) => (res.ok ? res.json() : Promise.reject(res)))
      .then((json) => {
         this.showTopCenter()
      });
  }
}
