import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor(public translate:TranslateService) {
    translate.addLangs(['en','deu','fr']);
    translate.setDefaultLang('en');
    const browserLang=translate.getBrowserLang();
    translate.use(browserLang?.match(/en|deu|fr/) ? browserLang : 'en');
  }

  ngOnInit(): void {
  }

}
