import { Component } from '@angular/core';
import { User } from '../../user.model';
import { FormDataService } from '../../form-data.service';

@Component({
  selector: 'app-bacheca',
  templateUrl: './bacheca.component.html'
})
export class BachecaComponent {
  user: User;

  constructor(private formDataService: FormDataService) {}

  ngOnInit() {
    this.formDataService.user$.subscribe(user => {
      this.user = user;
    });
    console.log('Bacheca', this.user);
  }

}
