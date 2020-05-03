import { Injectable } from '@angular/core';
import { INews } from 'src/app/shared/interfaces/news';

@Injectable({
  providedIn: 'root',
})
export class NewsService {
  private news: INews[];

  constructor() {
    this.news = [
      {
        title:
          'Covid-19 Death Toll in Ahmedabad District in Gujarat Crosses 200-mark',
        description:
          'With 23 more people succumbing to coronavirus infection on Sunday, the death toll in Ahmedabad district of Gujarat crossed the 200-mark, officials said',
        summary:
          'This is the highest single-day COVID-19 death toll recorded in the district so far, they said. With this, the death toll in the district has gone up to 208, the officials said.',
        details: `Besides, 274 fresh coronavirus cases were reported on Sunday, which took the tally of such patients in the district to 3,817.

          Nineteen of 23 patients, who died on Sunday, who suffered from co-morbid conditions, an official release said.
          
          The authorities discharged 71 patients from hospitals, which took the number of recovered patients in the district to 533`,
        imageUrl:
          'https://s.yimg.com/ny/api/res/1.2/S65IZMoyofXNlQaI1ZSphQ--~A/YXBwaWQ9aGlnaGxhbmRlcjtzbT0xO3c9ODAw/https://media.zenfs.com/en/news18_coronavirus_edition_222/ec749a936a6a184cc6e5b739bd5bd63e',
      },
      {
        title:
          'Coronavirus India News highlights: Mumbai reports 441 fresh cases; Kejriwal says time to reopen Delhi',
        description:
          'Highlights of the novel coronavirus pandemic and its socio-economic impact. Total confirmed cases in India have risen to 39,980',
        summary:
          'Confirmed COVID-19 cases in India stand at 40,263. The death toll from the outbreak in India is at 1,306. Maharashtra, Gujarat and Delhi have reported the highest number of cases. Indian armed forces will be thanking corona warriors today.',
        details: `The novel coronavirus, or COVID-19, pandemic has spread across 187 countries and territories. Today is the fortieth day of India’s nationwide lockdown, which has been extended till May 17. Restrictions have been eased in non-hotspot areas`,
        imageUrl:
          'https://www.hindustantimes.com/rf/image_size_960x540/HT/p2/2020/05/03/Pictures/_12970cae-8d4f-11ea-8bae-d48e751bd032.jpg',
      },
    ];
  }
  getAllNews(): INews[] {
    // making a copy and revering the array for latest first sort
    return [...this.news].reverse();
  }
  addNews(latestNews: INews): void {
    this.news.push(latestNews);
  }
}
