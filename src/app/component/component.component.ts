import { Component, OnInit } from '@angular/core';
import { HttpService } from '../services/http.service';

@Component({
  selector: 'app-component',
  templateUrl: './component.component.html',
  styleUrls: ['./component.component.scss'],
})
export class ComponentComponent implements OnInit {
  error: boolean;

  objetosPesados: any[] = [
    {
      date: '11/11/11',
      time: '00:00:00',
      net: '1',
      unit: '9',
    },
  ];

  dataEstadistaca: any[] = [
    {
      data: '00000',
    },
  ];

  constructor(private httpService: HttpService) {}

  ngOnInit(): void {}

  getConnection() {
    this.error = !this.error;
    // this._httpService.getConnection.subscribe(data => this.data = data);
  }

  submitForm() {
    alert('Datos subidos');
  }
}
