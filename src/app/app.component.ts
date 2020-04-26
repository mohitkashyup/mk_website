import { Component, OnInit, Renderer2 } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'my-app';

  constructor( private render: Renderer2 ) { }

  status:boolean = false

  ngOnInit() {
    AOS.init();
  }

  toggleNavigation() 
  {
    this.status = !this.status;
    if(this.status) {
        this.render.addClass(document.body, 'open');
    }
    else {
        this.render.removeClass(document.body, 'open');
    }
}


}
