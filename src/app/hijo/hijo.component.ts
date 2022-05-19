import { Component, EventEmitter, Input, OnInit, Output, OnDestroy, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.css']
})
export class HijoComponent implements OnInit, OnDestroy, OnChanges {

  @Input() items: number[] = [];
  @Output() eventItem = new EventEmitter<number>();

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes)
  }

  ngOnDestroy(): void {
    console.log("destroy")
  }

  handlerClick(data: number) {
    this.eventItem.emit(data)
  }

  ngOnInit(): void {
    console.log("onInit")
  }





}
