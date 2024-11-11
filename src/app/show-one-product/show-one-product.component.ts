import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-show-one-product',
  templateUrl: './show-one-product.component.html',
  styleUrls: ['./show-one-product.component.css']
})
export class ShowOneProductComponent {
@Input()p:any;
@Output()increaseLike=new EventEmitter();
sendNotifToParent(p:any){
  this.increaseLike.emit(p);
}
}