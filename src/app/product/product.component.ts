import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product', // Bu kısım bu componentin cagrı adı.
  // Bunu bir yerde geçtiğinde .html dosyasını o kısma ekleyecek.
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
