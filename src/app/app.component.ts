import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'travelouge';
  url: string;
    constructor(private router: Router, private activatedRoute: ActivatedRoute) {
  }


  // console.log(url);

  ngOnInit() {
    const url = this.router.url;
    console.log(this.router, url, this.activatedRoute);
    // 1st parameter is a flash message text
    // 2nd parameter is optional. You can pass object with options.
    
}
  // public clickedEvent: Event;

  // childEventClicked(titleParam: Event) {
  //   this.clickedEvent = titleParam;
  // }

}
