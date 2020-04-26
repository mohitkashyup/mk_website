import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html'
})
export class PortfolioComponent implements OnInit {

  constructor() {
    this.tabActive('all');
  }

  ngOnInit(): void {
  }

  tabActiveType:any={};
  tabActive(tab:any)
  {
    this.tabActiveType = {};
    this.tabActiveType[tab] = true; 
  }

}
