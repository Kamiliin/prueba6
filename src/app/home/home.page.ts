import { Component, OnInit } from '@angular/core';


declare var google;

interface Marker{
  position: {
    lat: number,
    lng: number,
  };
  title: string;
}

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  public data = ['Duoc uc','El Abrazo','Ciudad Satelite','Plaza de Arma Padre Hurtado','Totus Padre Hurtado','Miraflores','Cruze de Peñaflor'];
  public results = [...this.data];

  map = null;

  markers: Marker[]=[
    {
      position: {
        lat: -33.5114161, lng: -70.752297
      },
      title:'Duoc uc'
    },
    {
      position: {
        lat: -33.541931,lng: -70.778493
      },
      title:'EL Abrazo'
    },
    {
    position: {
      lat:-33.553848,lng: -70.795680
    },
    title:'Ciudad Satelite'
    },
    {
      position: {
      lat:  -33.569552,lng: -70.815973
      },
      title:'Plaza de Arma Padre Hurtado'
    },
    {
      position: {
      lat: -33.571537,lng: -70.818693
      },
      title:'Totus Padre Hurtado'
    },
    {
      position: {
      lat: -33.602784,lng: -70.850896
      },
      title:'Miraflores'
    },
    {
      position: {
      lat: -33.609697,lng: -70.857475
      },
      title:'cruze de peñaflor'
    },
  ]

  constructor() {}

  handleChange(event) {
    const query = event.target.value.toLowerCase();
    this.results = this.data.filter(d => d.toLowerCase().indexOf(query) > -1);
  }

  ngOnInit() {
    this.loadMap();
  }

  loadMap (){
    //create a new map by passing HTMLElement
    const mapEle: HTMLElement = document.getElementById('map');
    //create latLng object
    const myLatLng = {lat: -33.5114161, lng: -70.752297};
    //create map
    this.map = new google.maps.Map(mapEle,{
      center: myLatLng,
      zoom: 12
    });
    google.maps.event.addListenerOnce(this.map, 'idle', () =>{
      mapEle.classList.add('show-map');
      this.renderMarkers();
    });
  }

  renderMarkers(){
    this.markers.forEach(marker =>{
      this.addMarker(marker);
    });
  }

  addMarker(marker: Marker){
    return new google.maps.Marker({
      position: marker.position,
      map:this.map,
      title: marker.title
    });
  }
  }
