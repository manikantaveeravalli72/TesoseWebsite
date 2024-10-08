import { AfterViewInit, Component, inject, OnInit } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';
import { ContactUsComponent } from '../contact-us/contact-us.component';
import { AboutUsComponent } from '../about-us/about-us.component';
import { InvestorsComponent } from '../investors/investors.component';
import { CareersComponent } from '../careers/careers.component';
import { DoMoreComponent } from '../do-more/do-more.component';

import { LoadJsDynamicallyService } from '../../load-js-dynamically.service';

declare var $: any;

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [DoMoreComponent,AboutUsComponent,InvestorsComponent,CareersComponent,ContactUsComponent,FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements AfterViewInit,OnInit {
  public dynamicScriptLoader = inject(LoadJsDynamicallyService);

  ngOnInit(): void {
     
    this.loadScripts();
  }

  ngAfterViewInit() {

  }

  private loadScripts() {
    this.dynamicScriptLoader.load(
      'clientlib-dependencie',
      'customdev',
      'jquery',
      'query-ui',
      'burger-menu',
      'type',
      'custom',
      'clientlib-base',
      'granite',
      'shared',
      'jquery.scrollify.min',
      'utils',
      'clientlib-commons',
      'container',
    ).then(data => {
      console.log('loaded.')
    }).catch(error => console.log(error));
  }
}
