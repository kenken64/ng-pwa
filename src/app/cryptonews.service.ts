import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from './post.model';

@Injectable({
  providedIn: 'root'
})
export class CryptonewsService {
  constructor(private http:HttpClient ) { }

  fetchCryptoNews(){
    return this.http.get<Post[]>('https://cryptocontrol.io/api/v1/public/news?language=en&key=7873e14330441e7b3754c33d7900e5f9');
  }
 
}
