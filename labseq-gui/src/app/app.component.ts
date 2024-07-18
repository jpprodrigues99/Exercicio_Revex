import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LabseqComponent } from './labseq/labseq.component';
  
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,LabseqComponent],
  
  
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'labseq-gui';
}
