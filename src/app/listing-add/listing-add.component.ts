import { Component, OnInit } from '@angular/core';
import { TravelougueService } from '../travelougue.service';
import { FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-listing-add',
  templateUrl: './listing-add.component.html',
  styleUrls: ['./listing-add.component.css']
})
export class ListingAddComponent implements OnInit {

  public travelDetail : any;
  public url_id;
  addTravelForm;
  submitted;
  constructor(private _travelougueService: TravelougueService, private router: Router, private fb: FormBuilder, private route: ActivatedRoute) {
    this.addTravelForm = fb.group({
      title: ['', [Validators.required, Validators.maxLength(20)]],
      description: ['', Validators.required],
      imageurl: ['', Validators.required],
      date: ['', Validators.required]
    });
   }

   //Getting the control of form fields having formControlName
   get f() {
    return this.addTravelForm.controls;
    }

   register() {
        this.submitted = true;

            if (this.addTravelForm.invalid) {
              return;
            }

            if (!this.url_id) {
              this._travelougueService.saveTravelDetails(JSON.stringify(this.addTravelForm.value))
            .subscribe( 
                      data => {
                        this._travelougueService.onShowSuccess("Added Successfully");
                        //Redirect to listing page after deletion.
                        this.router.navigate(['/listingdetails',this.url_id]);
                      },
                      (err) => {
                        alert("Error In Delete");
                      }
                  );
            } else {
              this._travelougueService.updateTravelDetails(JSON.stringify(this.addTravelForm.value), this.url_id)
                .subscribe(
                      data => {
                        this._travelougueService.onShowSuccess("Updated Successfully");             
                        //Redirect to listing page after deletion.
                        this.router.navigate(['/listingdetails',this.url_id]);
                      },
                      (err) => {
                        alert("Error In Delete");
                      }
                );
            }
    }

 
  ngOnInit() { 
      /* EDIT OPERATION - FETCH DATA */ 
      //Read url parameter 
      this.url_id = this.route.snapshot.params.id;
      if(this.url_id){}
        //get the response of travel listing data from API Or db.json file.
        this._travelougueService.getTravelDetails(this.url_id)
        .subscribe(data => {         
          this.travelDetail = data
          // console.log(this.travelDetail.description);
        });
        
        // console.log(this.travelDetail.description);
      }
  }

