import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { ListingComponent } from './listing/listing.component';
import { RouterModule, Routes } from '@angular/router';
import { ListingDetailsComponent } from './listing-details/listing-details.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
//For flash messages (After install: npm install angular2-flash-messages --save)
import { FlashMessagesModule, FlashMessagesService } from 'angular2-flash-messages';
import { ListingAddComponent } from './listing-add/listing-add.component';
//Form Save Feature
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
//Material Design
import { MatButtonModule, MatCardModule, MatInputModule, MatSnackBarModule, MatToolbarModule, MatFormFieldModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { LayoutComponent } from './layout/layout.component';

const routes: Routes = [
  // { path: '',
  //   redirectTo: 'login',
  //   pathMatch:'full'
  // },
  { path: 'listingdetails/:id',
    component: ListingDetailsComponent
  },
  { path: 'listing',
    component: ListingComponent
  },
  { path: 'listingadd/:id',
    component: ListingAddComponent
  },
  { path: 'listingadd',
    component: ListingAddComponent
  },
  { path: 'login',
    component: LoginComponent
  },
  { path: 'signup',
  component: SignupComponent
  },
  { path: '*' ,
    redirectTo:'listing'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    ListingComponent,
    ListingDetailsComponent,
    PageNotFoundComponent,
    ListingAddComponent,
    LoginComponent,
    SignupComponent,
    LayoutComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FlashMessagesModule.forRoot(),
    RouterModule.forRoot(routes),
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule, MatCardModule, MatInputModule, MatSnackBarModule, MatToolbarModule, MatFormFieldModule,
    BrowserAnimationsModule
  ],
  exports: [RouterModule, LayoutComponent],
  providers: [
    FlashMessagesService
  ],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
  ]
})
export class AppModule { }
