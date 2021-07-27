import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  teamTravelerIsShown : boolean=false;
  cteamTravelerIsShown : boolean=false;
  instaSalleIsShown : boolean=false;
  instaSalleIsShown2 : boolean=false;
  mauticMonitoringIsShown : boolean=false;
  portfolioIsShown : boolean=false;
  pokedexIsShown : boolean=false;
  riddleIsShown: boolean=false;
  constructor() { }
  detailOnClick(project:String){
    if(project=="teamTraveler"){
      this.teamTravelerIsShown = !this.teamTravelerIsShown;
      this.instaSalleIsShown=false;
      this.instaSalleIsShown2=false;
      this.mauticMonitoringIsShown=false;
      this.portfolioIsShown =false;
      this.pokedexIsShown=false;
      this.riddleIsShown=false;
    }
    else if(project=="instaSalle") {
      this.instaSalleIsShown = !this.instaSalleIsShown;
      this.teamTravelerIsShown=false;
      this.portfolioIsShown =false;
      this.pokedexIsShown=false;
      this.riddleIsShown=false;
      this.mauticMonitoringIsShown=false;
      this.instaSalleIsShown2=false;
    }
    else if(project=="instaSalle2") {
      this.instaSalleIsShown2 = !this.instaSalleIsShown2;
      this.teamTravelerIsShown=false;
      this.portfolioIsShown =false;
      this.pokedexIsShown=false;
      this.riddleIsShown=false;
      this.mauticMonitoringIsShown=false;
      this.instaSalleIsShown=false;
    }
    else if(project=="mauticMonitoring"){
      this.mauticMonitoringIsShown = !this.mauticMonitoringIsShown;
      this.teamTravelerIsShown=false;
      this.portfolioIsShown =false;
      this.pokedexIsShown=false;
      this.riddleIsShown=false;
      this.instaSalleIsShown=false;
      this.instaSalleIsShown2=false;
    }
    else if(project=="portfolio"){
      this.portfolioIsShown = !this.portfolioIsShown;
      this.teamTravelerIsShown=false;
      this.mauticMonitoringIsShown =false;
      this.pokedexIsShown=false;
      this.riddleIsShown=false;
      this.instaSalleIsShown=false;
      this.instaSalleIsShown2=false;
    }
    else if(project=="pokedex"){
      this.pokedexIsShown = !this.pokedexIsShown;
      this.teamTravelerIsShown=false;
      this.mauticMonitoringIsShown =false;
      this.portfolioIsShown=false;
      this.riddleIsShown=false;
      this.instaSalleIsShown=false;
      this.instaSalleIsShown2=false;
    }
    else if(project=="riddleIsShown"){
      this.riddleIsShown = !this.riddleIsShown;
      this.teamTravelerIsShown=false;
      this.mauticMonitoringIsShown =false;
      this.portfolioIsShown=false;
      this.pokedexIsShown=false;
      this.instaSalleIsShown=false;
      this.instaSalleIsShown2=false;
    }
    

  }
  
  ngOnInit(): void {
  }
}
