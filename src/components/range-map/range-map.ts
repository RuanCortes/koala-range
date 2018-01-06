import { Component } from '@angular/core';
import { Geofence } from '@ionic-native/geofence';

/**
 * Generated class for the RangeMapComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
    selector: 'range-map',
    templateUrl: 'range-map.html'
})
export class RangeMapComponent {

    raio = 100;
    text: string;

    constructor() {
        this.raio = 100;
    }

    setRaio(param){
        this.raio = param;
        console.log("O valor do raio é: " + this.raio);
    }

}
