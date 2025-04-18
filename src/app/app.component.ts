import { Component } from '@angular/core';
import { HeaderComponent } from './header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  styleUrls: [],
  imports: [
    HeaderComponent
  ],
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'first-angular-app';
}
