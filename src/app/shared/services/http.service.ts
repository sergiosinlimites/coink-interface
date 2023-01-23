import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

type SuccessReponse<T> = {
  info: any;
  results: T
}

type HttpResponse<T> = SuccessReponse<T>;

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(
    private http: HttpClient
  ) { }


  get<T = any>(endpoint = ''): Observable<HttpResponse<T>> {
    return this.http.get<HttpResponse<T>>(`https://rickandmortyapi.com/api/${endpoint}`);
  }
}
