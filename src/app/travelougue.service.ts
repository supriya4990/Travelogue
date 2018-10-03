import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import {Http ,Response, Headers, RequestOptions} from "@angular/http";
import { ITravelougue } from './travelougue';
import { FlashMessagesService } from 'angular2-flash-messages';
// @ts-ignore
import {Observable} from '../node_modules/rxjs/Observable';
import {HttpHeaders, HttpParams} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class TravelougueService {

  public _url = 'http://localhost/travelougephp/items/read.php';//'./assets/data/db.json';
  public _deleteUrl = 'http://localhost/travelougephp/items/delete.php';//'./assets/data/db.json';
  public _detailUrl = 'http://localhost/travelougephp/items/view.php';//'./assets/data/db-details.json';
  public _saveUrl = 'http://localhost/travelougephp/items/save.php';//'./assets/data/db-details.json';
  public _loginUrl = 'http://localhost/travelougephp/items/login.php';//'./assets/data/db-details.json';
  public _signupUrl = 'http://localhost/travelougephp/items/signup.php';//'./assets/data/db-details.json';

  constructor( public http: HttpClient, private _flashMessagesService: FlashMessagesService) { }

  // Example of get sample data from http request
  getTravelListing(): Observable<ITravelougue[]> {
    return this.http.get<ITravelougue>(this._url);
  }

  getTravelDetails(id): Observable<ITravelougue[]> {
    return this.http.get<ITravelougue>(this._detailUrl+"?id="+id);
  }

  deleteTravelDetails(id): Observable<ITravelougue>{
    return this.http.post<ITravelougue>(this._deleteUrl+"?id="+id,[]);
  }

  saveTravelDetails(data: string){
    const headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
    const body = new HttpParams().set('data', data);
    return this.http.post(this._saveUrl, body, {headers});
  }

  updateTravelDetails(data: string, id): Observable<ITravelougue[]> {
    const headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
    const body = new HttpParams().set('data', data);
    return this.http.post(this._saveUrl+"?id="+id, body, {headers});
  }

  // Flash Success Message
  onShowSuccess(FlashMessage) {
    this._flashMessagesService.show(FlashMessage, { cssClass: 'alert-success', timeout: 1000 });
    this._flashMessagesService.grayOut(true);
  }

  getSortTravelListing(sort: any): Observable<ITravelougue[]>{
    const headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
    const body = new HttpParams().set('sort', sort);
    return this.http.post(this._url, body, {headers});
  }

  checkLoginDetails(data: string){
    const headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
    const body = new HttpParams().set('data', data);
    return this.http.post(this._loginUrl, body, {headers});
  }

  saveUserDetails(data: string){
    const headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
    const body = new HttpParams().set('data', data);
    return this.http.post(this._signupUrl, body, {headers});
  }
}
