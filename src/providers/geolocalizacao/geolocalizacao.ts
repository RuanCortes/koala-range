import { Injectable, ViewChild, ElementRef } from '@angular/core';
import { Platform } from 'ionic-angular';
import 'rxjs/add/operator/map';
import { Geolocation, GeolocationOptions, Geoposition, PositionError } from '@ionic-native/geolocation';

declare var google;
declare var circle;

@Injectable()
export class GeolocalizacaoProvider {
    @ViewChild('map') mapElement: ElementRef;
    private platform: Platform;
    map: any;
    private _latLng: any;
    options : GeolocationOptions;
    currentPos : Geoposition;
    private circle: any;
    raio = 100;
    latit;
    cityCircle;

    constructor( 
                private geolocation : Geolocation 
               ) {

        console.log('Hello GeolocalizacaoProvider Provider');
    }

    getUserPosition(){
    	this.options = {
    		enableHighAccuracy : true
		};
	
		this.geolocation.getCurrentPosition(this.options).then((pos : Geoposition) => {

            this.currentPos = pos;

            this.latit = pos.coords.latitude;
            console.log(this.latit);

            console.log(pos);
                        
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
            console.log("Antes Circle" + this.latit);
            return this.latit;
        },
        (err : PositionError)=>{
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
    
    getLatitude(){
        this.getUserPosition();
        let lati = this.latit;
        return lati;
    }

}
