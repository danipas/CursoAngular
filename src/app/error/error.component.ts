import { Component, OnInit } from '@angular/core';
import { ErrorService } from '../error.service';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent implements OnInit {

  error = false;
  constructor(private errorService: ErrorService) { }

  ngOnInit(): void {
    this.errorService.asObservable().subscribe(error => this.error = error)
  }

}
