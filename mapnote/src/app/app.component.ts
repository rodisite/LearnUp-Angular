import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'mapnote';

  public attributes = {name: 'value1'};

  public onClick() {
    this.attributes = {name: 'value2'};
  }

  public productFormGroup = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(4)]),
    price: new FormControl(null , [Validators.required, Validators.min(0)]),
    id: new FormControl(),
    categories: new FormControl([])
  })

  public onSubmit() {
    if (this.productFormGroup.invalid) {
      alert ('THE FORM IS NOT VALID!');
      return;
    }

    console.log(this.productFormGroup.value);
  }

  public generateId() {
    this.productFormGroup.get('id').setValue(Math.random().toString(36).substring(2))
  }
}
