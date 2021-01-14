import { Component,ViewChild,ElementRef } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  searchText;
  selectedList: number;
  listDetails = [
    { id: 1, date:'Jul 1',name: 'Competitive Intelligence', entitiesCount: 0 ,description: ['A Private Limited','B Private Limited','C Private Limited']},
    { id: 2, date:'Apr 2',name: 'My Vendors' , entitiesCount: 0 ,description: ['D Private Limited','E Private Limited','F Private Limited']},
    { id: 3, date:'June 3',name: 'My customers' , entitiesCount:0 ,description: ['G Private Limited','H Private Limited','I Private Limited']},
    { id: 4, date:'Apr 4',name: 'Test_30_results' , entitiesCount: 28,description: ['J Private Limited','K Private Limited','L Private Limited'] },
    { id: 5, date:'Jul 5',name: 'To_index' , entitiesCount: 10,description: ['M Private Limited','N Private Limited','O Private Limited'] },
    { id: 6, date:'Apr 6',name: 'KPMG' , entitiesCount: 34,description: ['P Private Limited','Q Private Limited','R Private Limited'] },
    { id: 7, date:'May 7',name: 'Error Case' , entitiesCount: 24,description: ['S Private Limited','T Private Limited','U Private Limited'] },
    { id: 8, date:'May 10',name: 'Two Companies' , entitiesCount:2 ,description: ['V Private Limited','X Private Limited','Y Private Limited']},
    { id: 9, date:'Jul 11',name: 'Custom' , entitiesCount:30 ,description: ['A Private Limited','B Private Limited','C Private Limited']},
    { id: 10, date:'Jul 14',name: 'Mumbai' , entitiesCount: 3 ,description: ['M Private Limited','N Private Limited','O Private Limited']}
  ];
  @ViewChild('filter', {static: false}) filter: ElementRef;

  showDetails(index){
    this.selectedList = index;
  }
}
