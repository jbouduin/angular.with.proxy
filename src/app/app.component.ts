import { Component, AfterViewInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  title = 'Template';
  greeting: string;

  ngAfterViewInit(): void {
    this.http.get('/api/hello').subscribe(data => this.greeting = data.message);
  }

  constructor(private http: HttpClient) { }
}
