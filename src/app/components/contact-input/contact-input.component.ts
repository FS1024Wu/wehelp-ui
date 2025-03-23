import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-contact-input',
  standalone: true,
  imports: [FormsModule, NgIf],  // ✅ Explicitly import FormsModule for [(ngModel)]
  templateUrl: './contact-input.component.html',
  styleUrls: ['./contact-input.component.css']
})
export class ContactInputComponent {
  @Input() type: 'phone' | 'email' = 'phone';
  @Input() label: string = 'Contact';

  @Output() phoneNumberChange = new EventEmitter<string>();
  @Output() emailChange = new EventEmitter<string>();
  @Output() preferredMethodChange = new EventEmitter<string>();


  emailUser: string = '';
  emailDomain: string = '';
  emailExtension: string = '';

  email: string = '';
  phoneNumber: string = '';
  preferredMethod: 'text' | 'email' | 'phone' = 'text';

  onPhoneNumberChange() {
    this.phoneNumberChange.emit(this.phoneNumber);
  }
  onEmailChange() {
    this.email = `${this.emailUser}@${this.emailDomain}.${this.emailExtension}`;
    this.emailChange.emit(this.email);
  }
  onPreferredMethodChange(value: string) {
    this.preferredMethod = value as 'text' | 'email' | 'phone';
    this.preferredMethodChange.emit(this.preferredMethod);
  }


  /** ✅ Validate phone number format */
  isPhoneValid(): boolean {
    return /^[2-9]\d{2}\d{3}\d{4}$/.test(this.phoneNumber);
  }

  /** ✅ Validate email format (excluding domain, which is auto-appended) */
  isEmailValid(): boolean {
    return /^[a-zA-Z0-9._%+-]+$/.test(this.emailUser);
  }


}
