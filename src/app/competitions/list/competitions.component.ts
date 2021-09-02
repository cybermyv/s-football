import { Component, OnInit } from '@angular/core';
import { CompetitionsService } from '../competitions.service';

@Component({
  selector: 'app-competitions',
  templateUrl: './competitions.component.html',
  styleUrls: ['./competitions.component.scss']
})
export class CompetitionsComponent implements OnInit {

  public competitionsList: any = [];

  constructor(private readonly competitionsService: CompetitionsService) { }

  ngOnInit(): void {
    this.initCompetitions();
  }

  initCompetitions() {
    this.competitionsService.loadCompetitions().subscribe(
      data => {
        this.competitionsList = data
      },
      err => console.log(err)
    );
  }

}
