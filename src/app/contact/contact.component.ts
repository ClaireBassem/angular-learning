import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule, FormGroup, Validators} from '@angular/forms';
import { CommonModule } from '@angular/common';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import { createInvalidDomainValidator} from './invalidEmailDomain'

const invalidEmailDomain = createInvalidDomainValidator(['gmail.com', 'outlook.com']);
@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, MatSlideToggleModule, MatInputModule, MatSelectModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {

  contactForm = new FormGroup({
    senderName: new FormControl('', Validators.required),
    senderEmail: new FormControl('', [Validators.required, Validators.email, invalidEmailDomain]),
    senderMessage: new FormControl('', [Validators.required, Validators.minLength(10)])
  })
 

  submitForm(){
    // if(this.senderNameControl.dirty){
    //   alert("You changed name.")
    // }
    console.log(this.contactForm.valid);
  }
}
