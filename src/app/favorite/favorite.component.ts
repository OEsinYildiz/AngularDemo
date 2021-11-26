import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit {
 @Input('isFavorite')  isSelected: boolean | undefined;
 @Output('change') click = new EventEmitter();

 canSave = true;

  constructor() {
  }

  ngOnInit(): void {
  }

  onClick(): void {
    this.isSelected = !this.isSelected;
    this.click.emit({newValue: this.isSelected});
  }

}

export interface FavoriteChangedEventsArgs{
  newValue: boolean;
}

