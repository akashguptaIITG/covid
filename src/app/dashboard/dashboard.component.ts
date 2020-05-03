import { Component, OnInit } from '@angular/core';
import { IState } from '../shared/interfaces/state';
import { DataService } from '../core/services/data.service';
import { IDistrict } from '../shared/interfaces/district';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  stateWiseData: IState[] = [];
  constructor(private dataService: DataService) {}
  ngOnInit(): void {
    this.dataService.getStateWiseData().subscribe((data) => {
      this.stateWiseData = data.statewise;
      console.log(this.stateWiseData);
    });
  }
}
