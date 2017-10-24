import { Component } from '@angular/core';
import { TemplateRef } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/modal-options.class';
import { NgIf } from '@angular/common';

 @Component({
  selector: 'app-root',
  styleUrls:['app.component.css'],
  templateUrl:'app.component.html',
  //template:`<h1 align="center">ini adalah template</h1>`
})

export class AppComponent 
{
  title = 'ini tengah';
  
    // public modalRef: BsModalRef;
    // constructor(private modalService: BsModalService) {}

    // public openModal(template: TemplateRef<any>) {
    // this.modalRef = this.modalService.show(template);
    // }
  
}
