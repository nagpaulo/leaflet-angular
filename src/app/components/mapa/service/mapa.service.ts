import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as L from 'leaflet';
import { PopupService } from './popup.service';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { ProdutoListDemoComponent } from '../../produto-list-demo/produto-list-demo.component';
import { Product } from '../../produto-list-demo/entity/product';
import { MessageService } from 'primeng/api';

@Injectable({
  providedIn: 'root'
})
export class MapaService {
  capitals: string = '/assets/data/usa-capitals.geojson';
  ref!: DynamicDialogRef;

  constructor(
    private http: HttpClient,
    private popupService:PopupService,
    private messageService: MessageService
  ) { }

  makeCapitalMarkers(map: L.Map, service: DialogService): void {
    this.http.get(this.capitals).subscribe((res: any) => {
      for (const c of res.features) {
        const lon = c.geometry.coordinates[0];
        const lat = c.geometry.coordinates[1];
        const marker = L.marker([lat, lon]);
        //marker.bindPopup(this.popupService.makeCapitalPopup(c.properties)).on('click',(e) => {alert(e); console.log(e)});
        marker.bindPopup(this.popupService.makeCapitalPopup(c.properties)).on('click',(e) => this.show(service));
        marker.addTo(map);
      }
    });
  }

  show(dialogService: DialogService) {
    const ref = dialogService.open(ProdutoListDemoComponent, {
      header: 'Choose a Product',
      width: '70%',
      contentStyle: {"max-height": "500px", "overflow": "auto"},
      baseZIndex: 10000
    });

    this.ref.onClose.subscribe((product: Product) =>{
      if (product) {
          this.messageService.add({severity:'info', summary: 'Product Selected', detail: product?.name});
      }
    });
  }

  ngOnDestroy() {
    if (this.ref) {
        this.ref.close();
    }
  }

  makeCapitalCircleMarkers(map: L.Map): void {
    this.http.get(this.capitals).subscribe((res: any) => {

      const maxPop = Math.max(...res.features.map((x:any) => x.properties.population), 0);
      for (const c of res.features) {
        const lon = c.geometry.coordinates[0];
        const lat = c.geometry.coordinates[1];
        const circle = L.circleMarker([lat, lon], { radius: MapaService.scaledRadius(c.properties.population, maxPop) });
        circle.bindPopup(this.popupService.makeCapitalPopup(c.properties));
        circle.addTo(map);
      }
    });
  }

  markerClick(map: L.Map): void {
    this.http.get(this.capitals).subscribe((res: any) => {
      for (const c of res.features) {
        const lon = c.geometry.coordinates[0];
        const lat = c.geometry.coordinates[1];
        const market = new L.Marker([lat,lon]).on('click', MapaService.markerOnClick);
        market.addTo(map);
      }
    });
  }

  static markerOnClick(e: any)
  {
    alert("hi. you clicked the marker at " + e.latlng);
  }

  static scaledRadius(val: number, maxVal: number): number {
    return 20 * (val / maxVal);
  }
}
