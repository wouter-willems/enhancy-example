import {Component} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'enhancy-example';

  public myForm = new FormGroup({
    firstName: new FormControl('Wouter', [Validators.required]),
    likesPants: new FormControl(true, []),
  })

  // needs to be a lambda
  public saveForm = async (values: any, allRenderedValues: any) => {
    console.log(values)
    console.log(allRenderedValues)
  };
}
