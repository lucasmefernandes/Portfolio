import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Products } from '../../models/products';

@Injectable({
  providedIn: 'root'
})
export class ApisService {

  constructor(@Inject(HttpClient) private http: HttpClient) { }

  public getProdutcs(): Observable<Products[]> {
    return this.http.get<Products[]>(`assets/jsons/produtcs.json`);
  }
}
