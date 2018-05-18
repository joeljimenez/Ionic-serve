import { Directive,ElementRef,HostListener} from '@angular/core';

@Directive({
  selector: '[Apptocar]' // Attribute selector
})
export class TocarDirective {

  constructor(private elemento:ElementRef) {
    console.log('Hello TocarDirective Directive');
  }
  // @Input("appDirectivas") nuevoColor:string;
  @HostListener('mouseenter') mouseEntro(){
    this.elemento.nativeElement.style.color = "#380B61" ;
    this.elemento.nativeElement.style.fontWeight="bold";

  }
  @HostListener('mouseleave') mousesalio(){
    this.elemento.nativeElement.style.color=null;
      this.elemento.nativeElement.style.fontWeight="normal";

}
}
