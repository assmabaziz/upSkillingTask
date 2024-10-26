import { Component, inject } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { SendDataService } from '../../core/services/send-data.service';

@Component({
  selector: 'app-contact-us',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.scss',
})
export class ContactUsComponent {
  isSuccess: boolean = false;
  private readonly _SendDataService = inject(SendDataService);
  private readonly _FormBuilder = inject(FormBuilder);
  sendDataForm: FormGroup = this._FormBuilder.group({
    name: [
      null,
      [Validators.required, Validators.minLength(4), Validators.maxLength(15)],
    ],
    email: [null, [Validators.required, Validators.email]],
    phone: [
      null,
      [Validators.required, Validators.pattern(/^01[0125][0-9]{8}$/)],
    ],
  });
  sendUserDta(): void {
    if (this.sendDataForm.valid) {
      // console.log(this.sendDataForm.value);
      this._SendDataService.sendData(this.sendDataForm.value).subscribe({
        next: (res: any) => {
          console.log(res);
          this.isSuccess = true;
        },
        error: (err) => {
          console.log(err);
        },
      });
    }
  }
}
