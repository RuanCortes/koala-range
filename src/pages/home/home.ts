import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController, Platform, NavParams, MenuController, App } from 'ionic-angular';

import { Geofence } from '@ionic-native/geofence';
import { Geolocation, GeolocationOptions, Geoposition, PositionError } from '@ionic-native/geolocation'; 

declare var google;
declare var circle;

@Component({
	selector: 'page-home',
	templateUrl: 'home.html'
})
export class HomePage {
	@ViewChild('map') mapElement: ElementRef;
	private platform: Platform;
	map: any;
	private _latLng: any;
  	options : GeolocationOptions;
	currentPos : Geoposition;
	private circle: any;
	raio = 100;
	cityCircle;

	constructor(public navCtrl: NavController, private geolocation : Geolocation, public app : App) {
		
	}

	getUserPosition(){
    	this.options = {
    		enableHighAccuracy : true
		};
	
		this.geolocation.getCurrentPosition(this.options).then((pos : Geoposition) => {

			this.currentPos = pos;     

			console.log(pos);
			this.addMap(pos.coords.latitude,pos.coords.longitude);
			
			this.cityCircle = new google.maps.Circle({
				strokeColor: '#FF0000',
				strokeOpacity: 0.8,
				strokeWeight: 2,
				fillColor: '#FF0000',
				fillOpacity: 0.35,
				map: this.map,
				center: new google.maps.LatLng(this.currentPos.coords.latitude, this.currentPos.coords.longitude),
				radius: 100	
			});

		},(err : PositionError)=>{
			console.log("error : " + err.message);
		   })
	}
 
  	ionViewDidEnter(){
    	this.getUserPosition();
	}

	setRaio(param){
		this.raio = param;
		console.log("O valor do raio é: " + this.raio);
		
		this.cityCircle.setRadius(param);

		return this.raio;
	}
	

  	addMap(lat,long){
		
		let latLng = new google.maps.LatLng(lat, long);

		let mapOptions = {
			center: latLng,
			zoom: 15,
			mapTypeId: google.maps.MapTypeId.ROADMAP
		}

		this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
	}
}

/*
this.geolocation.getCurrentPosition().then((resp) => {
					this.lat = resp.coords.latitude;
					this.lon = resp.coords.longitude;
				}).catch((error) => {
					console.log('Error getting location', error);
				});
				
				let watch = this.geolocation.watchPosition();
				watch.subscribe((data) => {
					// data can be a set of coordinates, or an error (if an error occurred).
					// data.coords.latitude
					// data.coords.longitude
			});
*/

/*
constructor(public navCtrl: NavController, private platform: Platform, private geolocation: Geolocation, private geofence: Geofence) {
		this.platform.ready().then(() => {
			geofence.initialize().then(
				() => console.log('Geofence Plugin Ready'),
				(err) => console.log(err)
			);
		});
	}

	setGeofence(value: number){
		this.geolocation.getCurrentPosition({
				enableHighAccuracy: true
		}).then((resp) => {

			var longitude = resp.coords.longitude;
			var latitude = resp.coords.latitude;
			var radius = value;

			let fence = {
				id: "Ruan",
				longitude: longitude,
				latitude: latitude,
				radius: radius
			}
		})
	}
*/
