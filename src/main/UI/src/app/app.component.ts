import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {HttpClient, HttpResponse,HttpHeaders} from "@angular/common/http";
import { Observable } from 'rxjs';
import {map} from "rxjs/operators";





@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  englishWelcomeMessage$!: Observable<string>;
  frenchWelcomeMessage$!: Observable<string>;

  constructor(private httpClient:HttpClient){}

  private baseURL:string='http://localhost:8080';

  private getUrl:string = this.baseURL + '/room/reservation/v1/';
  private postUrl:string = this.baseURL + '/room/reservation/v1';
  public submitted!:boolean;
  roomsearch! : FormGroup;
  rooms! : Room[];
  request!:ReserveRoomRequest;
  currentCheckInVal!:string;
  currentCheckOutVal!:string;

    ngOnInit(){

      this.englishWelcomeMessage$ = this.httpClient.get(this.baseURL + '/welcome?lang=en-US', { responseType: 'text' });
      this.frenchWelcomeMessage$ = this.httpClient.get(this.baseURL + '/welcome?lang=fr-CA', { responseType: 'text' });


      this.roomsearch= new FormGroup({
        checkin: new FormControl(' '),
        checkout: new FormControl(' ')
      });

 //     this.rooms=ROOMS;


    const roomsearchValueChanges$ = this.roomsearch.valueChanges;

    // subscribe to the stream
    roomsearchValueChanges$.subscribe(x => {
      this.currentCheckInVal = x.checkin;
      this.currentCheckOutVal = x.checkout;
    });
  }

  onSubmit({ value, valid }: { value: Roomsearch; valid: boolean }) {
    this.getAll().subscribe((rooms: unknown) => {
      this.rooms = Object.values(rooms as Record<string, Room[]>)[0];
      this.rooms.forEach((room) => {
        room.priceCAD = (Number(room.price) * 1.3).toFixed(2); // Arbitrary conversion to CAD
        room.priceEUR = (Number(room.price) * 0.9).toFixed(2); // Arbitrary conversion to EUR
      });
    });
  }
  reserveRoom(value:string){
      this.request = new ReserveRoomRequest(value, this.currentCheckInVal, this.currentCheckOutVal);

      this.createReservation(this.request);
    }
    createReservation(body:ReserveRoomRequest) {
      let bodyString = JSON.stringify(body); // Stringify payload
      let headers = new Headers({'Content-Type': 'application/json'}); // ... Set content type to JSON
     // let options = new RequestOptions({headers: headers}); // Create a request option

     const options = {
      headers: new HttpHeaders().append('key', 'value'),

    }

      this.httpClient.post(this.postUrl, body, options)
        .subscribe(res => console.log(res));
    }

  /*mapRoom(response:HttpResponse<any>): Room[]{
    return response.body;
  }*/

    getAll(): Observable<any> {


       return this.httpClient.get(this.baseURL + '/room/reservation/v1?checkin='+ this.currentCheckInVal + '&checkout='+this.currentCheckOutVal, {responseType: 'json'});
    }

  }



export interface Roomsearch{
    checkin:string;
    checkout:string;
  }




export interface Room{
  id:string;
  roomNumber:string;
  price:string;
  priceCAD:string;
  priceEUR:string;
  links:string;
}
export class ReserveRoomRequest {
  roomId:string;
  checkin:string;
  checkout:string;

  constructor(roomId:string,
              checkin:string,
              checkout:string) {

    this.roomId = roomId;
    this.checkin = checkin;
    this.checkout = checkout;
  }
}

/*
var ROOMS: Room[]=[
  {
  "id": "13932123",
  "roomNumber" : "405",
  "price" :"20",
  "links" : ""
},
{
  "id": "139324444",
  "roomNumber" : "406",
  "price" :"30",
  "links" : ""
},
{
  "id": "139324888",
  "roomNumber" : "407",
  "price" :"40",
  "links" : ""
}
]*/

