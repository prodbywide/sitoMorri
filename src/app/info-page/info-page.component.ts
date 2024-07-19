import { Component } from '@angular/core';
import { FormDataService } from '../form-data.service';
import { Router } from '@angular/router';
import { User } from '../user.model';

@Component({
  selector: 'app-info-page',
  templateUrl: './info-page.component.html'
})
export class InfoPageComponent {
  info: any;

  // Oggetti utente
  luca: User = {
    Username: "lucadale",
    NomeCognome: "Luca D'Alessandro",
    DataNascita: "10 settembre 1997",
    ImgUrl: "/images/luca.jpg",
    UltimiAccessi: [
      "21:32",
      "01:59",
      "02:11",
      "02:25",
      "02:38",
      "02:52",
      "03:41",
      "12:02",
      "12:11",
      "13:23",
      "13:47",
      "14:00",
      "14:18",
      "15:59",
      "16:27",
      "16:48",
      "17:09",
      "17:31"
    ]
  };

  anna: User = {
    Username: "annaverdi",
    NomeCognome: "Anna Verdi",
    DataNascita: "30 Novembre 1983",
    ImgUrl: "",
    UltimiAccessi: [
      "21:35",
      "01:57",
      "02:13",
      "02:27",
      "02:39",
      "02:54",
      "03:45",
      "12:05",
      "12:15",
      "13:25",
      "13:50",
      "14:05",
      "14:20",
      "16:01",
      "16:30",
      "16:50",
      "17:12",
      "17:35"
    ]
  };

  // Dati utente finale
  user: User;

  constructor(private formDataService: FormDataService, private router: Router) {}

  ngOnInit() {
    this.formDataService.formData$.subscribe(data => {
      this.info = data;
      if (this.info.username === 'lucadale') {
        this.user = this.luca;
      } else {
        this.user = this.anna;
      }
    });   
    console.log(this.user)
    this.formDataService.setUser(this.user)
  }

  // Redirect al login
  goToLogin() {
    this.router.navigate(['/login']);
  }

}
