/* eslint-disable @typescript-eslint/no-unused-vars */
import { Component, OnInit } from '@angular/core';

import { faCircle, faRunning } from '@fortawesome/free-solid-svg-icons';

// app imports
import { environment } from 'src/environments/environment';
import {
  SeoSocialShareData,
  SeoSocialShareService,
} from '../services/seo-social-share';
import { JsonLdService } from '../services/json-ld';

@Component({
  selector: 'app-physical-activity',
  templateUrl: './physical-activity.component.html',
  styleUrls: ['./physical-activity.component.scss'],
})
export class PhysicalActivityComponent implements OnInit {
  faCircle = faCircle;
  faRunning = faRunning;

  constructor(
    private seoService: SeoSocialShareService,
    private jsonLdService: JsonLdService
  ) {}

  ngOnInit(): void {
    const seoData: SeoSocialShareData = {
      title: 'Guide to Physical Activity',
      author: environment.author,
      description: 'physical activity recreate yourself recreateyourself',
      // image: environment.appUrl + 'assets/images/logo-dark.png',
      // imageAuxData: ImageAuxData;
      keywords: 'physical, activity, recreate, yourself, recreateyourself',
      section: 'physical activity',
      type: 'website',
      url: environment.appUrl + 'physical-activity',
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
