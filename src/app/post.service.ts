import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Post } from './post';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http:HttpClient) { }

  getAll():Observable<Post[]>{
   // const url = `${environment.URL}/posts/3`;
    // APLICAR PIPE FLASH OUTPIPE
    const url = `${environment.URL}/posts`;
    return this.http.get<Post[]>(url).pipe(map( post => post));    
  }
}
