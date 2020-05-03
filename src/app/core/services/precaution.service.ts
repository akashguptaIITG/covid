import { Injectable } from '@angular/core';
import { IPrecaution } from 'src/app/shared/interfaces/precaution';

@Injectable({
  providedIn: 'root',
})
export class PrecautionService {
  private precautions: IPrecaution[];

  constructor() {
    this.precautions = [
      {
        description: 'Wash your hands often',
      },
      {
        description: 'Avoid close contact',
      },
      {
        description:
          'Cover your mouth and nose with a cloth face cover when around others',
      },
      {
        description: 'Cover coughs and sneezes',
      },
      {
        description: 'Clean and disinfect',
      },
      {
        description: 'Avoiding crowded areas and sick people.',
      },
    ];
  }
  getPrecautions() {
    return this.precautions;
  }
}
