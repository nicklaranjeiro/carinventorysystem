import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { InventoryItem } from './inventory/inventory-datasource';

@Injectable({
  providedIn: 'root'
})
export class WebRequestService {

  constructor(private http: HttpClient) { 
  }

  get(): Observable<InventoryItem[]>{
    return this.http.get<InventoryItem[]>('http://localhost:3000/inventory');
  }

  // post(uri: string, payload: Object){
  //   return this.http.post('${this.ROOT_URL}/${url}', payload);
  // }

  patch(id, payload: Object){
    console.log('http://localhost:3000/inventory/' + id);

    return this.http.patch('http://localhost:3000/inventory/' + id, payload);
  }
}
