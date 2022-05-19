import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Post } from './post';
import { PostService } from './post.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {

  name = 'Daniel';
  condition = false;
  items = [1, 2, 3];
  posts: Post[] = [];
  dispose: Subscription | any = null;
  constructor(private service: PostService) {

  }

  handlerClick(evento: Event) {
    /*  const newItems = [...this.items];
      newItems.push(newItems.length + 1);
      this.items = [...newItems];*/
    this.items.push(this.items.length + 1);
  }

  handlerItem(ev: number) {
    console.log(ev);
  }

  ngOnInit(): void {
    this.dispose = this.service.getAll().subscribe(posts => this.posts = posts)
  }

  ngOnDestroy(): void {
    this.dispose && this.dispose.unsubscribe();
  }

}
