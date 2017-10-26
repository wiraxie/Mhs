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
  title = 'table data mhs';
    // public modalRef: BsModalRef;
    // constructor(private modalService: BsModalService) {}

    // public openModal(template: TemplateRef<any>) {
    // this.modalRef = this.modalService.show(template);
    // }
    
  public id: number ;
  public nama: string;
  public angkatan: number;
  public jurusan: string;
  public alamat: string;
  public email: string;
  public telp: number;
  public mhs: Array<{id: number, nama: string, angkatan: number, jurusan: string, alamat: string, email: string, telp: number}> = [];

  selectedId = this.id;

  addData() 
  {
    this.mhs.push( {id: this.id, nama: this.nama, angkatan: this.angkatan, jurusan: this.jurusan, alamat:this.alamat, email: this.email, telp: this.telp } );
  }

  //penampung
  public newId;
  public newNama;
  public newAngkatan;
  public newJurusan;
  public newAlamat;
  public newEmail;
  public newTelp;
  public newMhs: Array<{newId: number, newNama: string, newAngkatan: number, newJurusan: string, newAlamat: string, newEmail: string, newTelp: number}> = [];
  
  editData(id): void
  {
    this.selectedId;
  }
}