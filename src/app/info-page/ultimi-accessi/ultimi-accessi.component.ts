import { Component } from '@angular/core';
import { FormDataService } from '../../form-data.service';
import { User } from '../../user.model';

@Component({
  selector: 'app-ultimi-accessi',
  templateUrl: './ultimi-accessi.component.html'
})
export class UltimiAccessiComponent {
  user: User;

  constructor(private formDataService: FormDataService) {}

  ngOnInit() {
    this.formDataService.user$.subscribe(user => {
      this.user = user;
    });
    console.log('Bacheca', this.user);
  }
}
