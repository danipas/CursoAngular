import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ErrorService {

  private subject: Subject<boolean> = new Subject<boolean>();
  constructor() { }

  show() {
    this.subject.next(true);
  }

  hide() {
    this.subject.next(false);
  }

  asObservable(): Observable<boolean> {
    return this.subject.asObservable();
  }
}
