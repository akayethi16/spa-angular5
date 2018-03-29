import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  rForm : FormGroup;
  name: string;
  email: string;
  phone: number;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.rForm = fb.group({
      'name':[null, Validators.required],
      'email':[null, Validators.required],
      'phone':[null, Validators.required]
    })
  }

  addPost(post){
    this.name = post.name ;
    this.email = post.email;
    this.phone = post.phone;
  }

}
