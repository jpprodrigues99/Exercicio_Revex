import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LabseqService } from '../labseq.service';

@Component({
  selector: 'app-labseq',
  templateUrl: './labseq.component.html',
  styleUrls: ['./labseq.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule]
})
export class LabseqComponent implements OnInit {
  n: number = 0;
  result: number = 0;

  constructor(private labseqService: LabseqService) { }

  ngOnInit(): void {
  }

  calculateLabseq(): void {
    
    this.labseqService.getLabseqValue(this.n)
      .subscribe(value => this.result = value);
  }
}
