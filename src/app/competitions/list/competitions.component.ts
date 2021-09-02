import { Component, OnInit } from '@angular/core';
import { CompetitionsService } from '../competitions.service';

@Component({
  selector: 'app-competitions',
  templateUrl: './competitions.component.html',
  styleUrls: ['./competitions.component.scss']
})
export class CompetitionsComponent implements OnInit {

  competitionsList: any = [
    {
      "id": 2144,
      "area": {
        "id": 2000,
        "name": "Afghanistan"
      },
      "name": "Playoffs 2/3",
      "code": null,
      "plan": "TIER_FOUR",
      "currentSeason": {
        "id": 212,
        "startDate": "2018-05-22",
        "endDate": "2018-05-27",
        "currentMatchday": null
      },
      "numberOfAvailableSeasons": 1,
      "lastUpdated": "2018-07-13T13:34:06Z"
    }
  ];

  displayColumns: string[] = ['id', 'name', 'code', 'plan', 'numberOfAvailableSeasons', 'lastUpdated'];

  constructor(private readonly competitionsService: CompetitionsService) { }

  ngOnInit(): void {
    this.initCompetitions();
  }

  initCompetitions() {
    this.competitionsService.loadCompetitions().subscribe(
      data => {
        this.competitionsList = data.competitions
      },
      err => console.log(err)
    );
  }

}
