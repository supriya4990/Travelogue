import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { TravelougueService } from '../travelougue.service';

@Component({
  selector: 'app-listing-details',
  templateUrl: './listing-details.component.html',
  styleUrls: ['./listing-details.component.css']
})

export class ListingDetailsComponent implements OnInit {

  public id: string;
  public travelDetail = [];

  constructor(private route: ActivatedRoute, private router: Router, private _travelougueService: TravelougueService) {
  }



  onShowInfo() {
    //this.flashMessage.info('Info message');
  }

  onShowWarning() {
   // this.flashMessage.warning('Info message');
  }

  onShowError() {
   // this.flashMessage.danger('Danger message');
  }

  openModal(id: string) {
    alert("Do you really want to delete this travel entry: " + id + "?");
    this._travelougueService.deleteTravelDetails(id).subscribe(
      data => {
        this._travelougueService.onShowSuccess("Deleted Successfully");

        //Redirect to listing page after deletion.
        this.router.navigate(['/listing']);
      }, (err) => {
        alert("Error In Delete");
      });
  }

  ngOnInit() {
    //Read url parameter 
    const url_id = this.route.snapshot.params.id;

    //get the response of travel listing data from API Or db.json file.
    this._travelougueService.getTravelDetails(url_id)
      .subscribe(data => {
        this.travelDetail = data
      });

  }

}
