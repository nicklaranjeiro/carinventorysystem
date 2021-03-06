import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { InventoryItem } from './inventory/inventory-datasource';
import { WebRequestService } from './web-request.service';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  constructor(private wrService: WebRequestService) { }

  getCars(){
    return this.wrService.get();
  }
}
