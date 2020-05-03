import { Component, OnInit } from '@angular/core';
import { IDistrict } from 'src/app/shared/interfaces/district';
import { DataService } from 'src/app/core/services/data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-district-list',
  templateUrl: './district-list.component.html',
  styleUrls: ['./district-list.component.scss'],
})
export class DistrictListComponent implements OnInit {
  state: string = '';
  districtWiseData: IDistrict[] = [];
  constructor(
    private dataSerivce: DataService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.state = this.activatedRoute.snapshot.params.state;
    if (this.state) {
      this.dataSerivce.getDistrictWiseData().subscribe((data) => {
        for (let state in data) {
          if (state.toLocaleLowerCase() !== this.state.toLocaleLowerCase()) {
            continue;
            // skipping loop if state does not match
          }
          for (let district in data[state]['districtData']) {
            this.districtWiseData.push({
              state,
              district,
              ...data[state]['districtData'][district],
            });
          }
        }
        this.districtWiseData.sort((a, b) => b.confirmed - a.confirmed);
        console.log(this.districtWiseData);
      });
    }
  }
}
