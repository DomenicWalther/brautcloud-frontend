import { Component } from '@angular/core';
import { UntypedFormGroup, ReactiveFormsModule, FormGroup } from '@angular/forms';
import { FormlyForm, FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';

@Component({
  selector: 'app-onboarding',
  imports: [ReactiveFormsModule, FormlyForm],
  templateUrl: './onboarding.html',
  styles: ``,
})
export class Onboarding {
  form = new FormGroup({});
  model = { email: 'email@gmail.com' };
  fields: FormlyFieldConfig[] = [
    {
      key: 'email',
      type: 'input',
      props: {
        label: 'Email address',
        placeholder: 'Enter email',
        required: true,
      },
    },
  ];

  onSubmit(model: { email: string }) {
    console.log(model);
  }
}
