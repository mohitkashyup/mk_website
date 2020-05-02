import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
    selector: 'app-portfolio',
    templateUrl: './portfolio.component.html'
})
export class PortfolioComponent implements OnInit {
    
    constructor(private titleService: Title, private metaService: Meta) {
        this.tabActive('all');
    }
    
    ngOnInit(): void {
        this.titleService.setTitle("Mohit Kashyup  - UI/UX and HTML Developer || My Portfolio || My Work");
        this.metaService.addTags([
            {name: 'keywords', content: 'mohit kashyup, mohit kashyup faridabad, html developer, ui/ux developer, cms development faridabad, mohit html developer, angular js, materializecss, angular material, bootstrap developer, 8860774311'},
            {name: 'description', content: 'Hi, Im a UI/UX and front-end developer. I specialize in html, css, scss development. I love to build high quality responsive websites, web applications and mobile applications, 8860774311'},
            {name: 'robots', content: 'index, follow'},
            {property: 'og:title', content: 'Mohit Kashyup - UI/UX and HTML developer'},
            {property: 'og:type', content: 'article'},
            {property: 'og:url', content: 'index.html'},
            {property: 'og:image', content: 'mohit-kashyup.jpg'},
            {property: 'og:description', content: 'Hi, Im a UI/UX and front-end developer. I specialize in html, css, scss development. I love to build high quality responsive websites, web applications and mobile applications.,8860774311'},
            {property: 'og:keywords', content: 'mohit kashyup, mohit kashyup faridabad, html developer, ui/ux developer, cms development faridabad, mohit html developer, angular js, materializecss, angular material, bootstrap developer,8860774311'},
            {property: 'og:site_name', content: 'Mohit Kashyup personal website'},
        ]);
    }
    
    tabActiveType:any={};
    tabActive(tab:any)
    {
        this.tabActiveType = {};
        this.tabActiveType[tab] = true; 
    }
    
}
