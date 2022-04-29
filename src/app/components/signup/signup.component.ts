import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

import { UserDTO } from 'src/app/models/UserDTO';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  @Output() doRegister = new EventEmitter<UserDTO>();

  hide = true;
  name = new FormControl('', [Validators.required]);
  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [Validators.required]);

  constructor() {}

  ngOnInit(): void {}

  register() {
    let user = {
      name: this.name.value,
      email: this.email.value,
      password: this.password.value,
    };
    this.doRegister.emit(user);
    console.log(user);
  }

  getErrorMessage() {
    if (
      this.email.hasError('required') ||
      this.name.hasError('required') ||
      this.password.hasError('required')
    ) {
      return 'Você deve preencher o campo';
    }

    return this.email.hasError('email') ? 'Email inválido' : '';
  }
}
