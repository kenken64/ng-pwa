import { Component, OnInit } from '@angular/core';
import { CryptonewsService } from './cryptonews.service';
import { Post } from './post.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'ng-pwa';
  posts: Post[] = [];
  
  constructor(private cryptoSvc: CryptonewsService) {}

  ngOnInit() {
    this.cryptoSvc
      .fetchCryptoNews()
      .subscribe(fetchedPosts => (this.posts = fetchedPosts));
  }

}
