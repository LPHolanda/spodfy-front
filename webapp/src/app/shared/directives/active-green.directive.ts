import { Directive, ElementRef, HostListener, OnInit, Renderer2 } from '@angular/core';

@Directive({
    selector: '[activeGreen]',
})
export class ActiveGreenDirective implements OnInit { 

    clicked = false;

    constructor(private el: ElementRef, private render: Renderer2) {}

    ngOnInit() {
        
    }

    @HostListener('click', ['$event.target'])
    active() {
        if(this.clicked) {
            console.log(this.clicked);
            this.render.setStyle(this.el.nativeElement, 'background-color', 'black');

        } else {
            console.log(this.clicked);
            this.render.setStyle(this.el.nativeElement, 'background-color', '#1ED760');
        }

        this.clicked = !this.clicked;
    }
}