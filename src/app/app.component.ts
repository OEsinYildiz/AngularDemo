import {Component} from '@angular/core';
import {FavoriteChangedEventsArgs} from './favorite/favorite.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'intro';
  post = {
    title: 'Title',
    isFavorite: true
  };
  courses = [1, 2];

  // EventHandler
  onFavoriteChange(eventArgs: FavoriteChangedEventsArgs): void{
    console.log('Favorite changed ', eventArgs);
  }
}
