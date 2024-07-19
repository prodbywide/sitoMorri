import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class FormDataService {
  private formDataSubject = new BehaviorSubject<any>(null);
  formData$ = this.formDataSubject.asObservable();

  setFormData(data: any) {
    this.formDataSubject.next(data);
  }

  getFormData() {
    return this.formDataSubject.getValue();
  }



  private userSource = new BehaviorSubject<User>({ Username: '', NomeCognome: '', DataNascita: '', ImgUrl: '', UltimiAccessi: [] });
  user$ = this.userSource.asObservable();

  setUser(user: User) {
    this.userSource.next(user);
  }
}