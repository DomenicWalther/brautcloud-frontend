import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-multi-step-form',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './multi-step-form.html',
  styles: ``,
})
export class MultiStepForm {
  currentStep = 1;
  step1Form: FormGroup;
  step2Form: FormGroup;
  step3Form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.step1Form = this.fb.group({
      name: ['', Validators.required],
      partnerName: ['', Validators.required],
      weddingDate: ['', Validators.required],
      weddingLocation: ['', Validators.required],
    });
    this.step2Form = this.fb.group({
      isPublic: ['', Validators.required],
      galleryPassword: ['', Validators.required],
      isGuestCommentAllowed: ['', Validators.required],
    });
    this.step3Form = this.fb.group({
      coverPhoto: ['', Validators.required],
    });
  }

  nextStep() {
    if (this.currentStep < 3) {
      this.currentStep++;
    }
  }

  previousStep() {
    if (this.currentStep > 1) {
      this.currentStep--;
    }
  }

  onSubmit() {
    const formData = {
      ...this.step1Form.value,
      ...this.step2Form.value,
      ...this.step3Form.value,
    };
    console.log(formData);
  }
}
