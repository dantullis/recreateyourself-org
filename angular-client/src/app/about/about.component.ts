/* eslint-disable @typescript-eslint/no-unused-vars */
import { Component, OnInit } from '@angular/core';

import { faCircle, faCircleInfo } from '@fortawesome/free-solid-svg-icons';

// app imports
import { environment } from 'src/environments/environment';
import {
  SeoSocialShareData,
  SeoSocialShareService,
} from '../services/seo-social-share';
import { JsonLdService } from '../services/json-ld';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {
  faCircle = faCircle;
  faCircleInfo = faCircleInfo;

  constructor(
    private seoService: SeoSocialShareService,
    private jsonLdService: JsonLdService
  ) {}

  ngOnInit(): void {
    const seoData: SeoSocialShareData = {
      title: 'About RecreateYourself',
      author: environment.author,
      description: 'recreate yourself recreateyourself',
      // image: environment.appUrl + 'assets/images/logo-dark.png',
      // imageAuxData: ImageAuxData;
      keywords: 'recreate yourself, recreateyourself',
      section: 'about',
      type: 'website',
      url: environment.appUrl + 'about',
      // published: string;
      // modified: string;
    };
    this.seoService.setData(seoData);

    const jsonLd = this.jsonLdService.getObject('LocalBusiness', {
      name: 'RecreateYourself',
      // image: environment.appUrl + 'assets/images/logo-dark.png',
      url: environment.appUrl,
      // telephone: '+18283981840',
      // address: this.jsonLdService.getObject('PostalAddress', {
      //   streetAddress: '81 Broadway St Suite 201',
      //   addressLocality: 'Asheville',
      //   postalCode: '28801',
      //   addressCountry: 'US',
      //   addressRegion: 'NC'
      // }, undefined),
      priceRange: '$$$',
    });

    this.jsonLdService.setData(jsonLd);
  }
}
