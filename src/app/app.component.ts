import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  downloadCV() {
    const link = document.createElement('a');
    link.href = 'assets/CV_Shahd_Mostafa.pdf';
    link.download = 'CV_Shahd_Mostafa.pdf';
    link.click();
  }

}
