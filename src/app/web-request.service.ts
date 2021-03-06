import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { InventoryItem } from './inventory/inventory-datasource';

@Injectable({
  providedIn: 'root'
})
export class WebRequestService {

  readonly ROOT_URL;

  constructor(private http: HttpClient) { 
  }

  get(): Observable<InventoryItem[]>{
    return this.http.get<InventoryItem[]>('http://localhost:3000/inventory');
  }

  // post(uri: string, payload: Object){
  //   return this.http.post('${this.ROOT_URL}/${url}', payload);
  // }

  // patch(uri: string, payload: Object){
  //   return this.http.patch('${this.ROOT_URL}/${url}', payload);
  // }
}
