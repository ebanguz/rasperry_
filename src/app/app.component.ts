import { Component } from '@angular/core';
import { HttpService } from './services/http.service';

@Component({
  selector: 'app-root',
  template: '<app-component></app-component>',
  styles: [''],
})
export class AppComponent {
  title = 'rasperry_';

  error: boolean;

  // constructor(public _httpService: HttpService) {}

  getConnection() {
    this.error = !this.error;

    // this._httpService.getConnection.subscribe(data => this.data = data);
  }
}
