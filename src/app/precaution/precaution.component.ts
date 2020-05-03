import { Component, OnInit } from '@angular/core';
import { PrecautionService } from '../core/services/precaution.service';
import { IPrecaution } from '../shared/interfaces/precaution';

@Component({
  selector: 'app-precaution',
  templateUrl: './precaution.component.html',
  styleUrls: ['./precaution.component.scss'],
})
export class PrecautionComponent implements OnInit {
  precautions: IPrecaution[] = [];
  constructor(private precautionService: PrecautionService) {}

  ngOnInit(): void {
    this.precautions = this.precautionService.getPrecautions();
  }
}
