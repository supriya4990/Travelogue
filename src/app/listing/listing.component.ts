import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { TravelougueService} from '../travelougue.service';
import {Router} from '@angular/router';
import { ActivatedRoute, Route } from '@angular/router';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.css']
})
export class ListingComponent implements OnInit {

  public travel = [];
  
  public url_id: string = '';
  public selectedSort: string = '';
  
  onSelect(p) {
    this.router.navigate(['/listingdetails',p]);
  }

  onSort(event: any) {
    //update the ui
    this.selectedSort = event.target.value;

    this._travelougueService.getSortTravelListing(this.selectedSort)
      .subscribe(data => { 
        console.log(this.travel);
        this.travel = data
      });
  }

  constructor(private _travelougueService: TravelougueService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    //get the response of travel listing data from db.json file.
    this._travelougueService.getTravelListing()
      .subscribe(data => { 
        console.log(this.travel);
        this.travel = data
      });

    let p =  this.route.params.subscribe( param => this.url_id = param['id'] );
  }

}
