/* eslint-disable @typescript-eslint/no-unused-vars */
import { Component, OnInit } from '@angular/core';

// app imports
import { environment } from 'src/environments/environment';
import {
  SeoSocialShareData,
  SeoSocialShareService,
} from '../services/seo-social-share';
import { JsonLdService } from '../services/json-ld';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {
  constructor(
    private seoService: SeoSocialShareService,
    private jsonLdService: JsonLdService
  ) {}

  ngOnInit(): void {
    const seoData: SeoSocialShareData = {
      title: 'Contact RecreateYourself',
      author: environment.author,
      description: 'about recreateyourself',
      // image: environment.appUrl + 'assets/images/logo-dark.png',
      // imageAuxData: ImageAuxData;
      keywords: 'contact, recreateyourself',
      section: 'contact',
      type: 'website',
      url: environment.appUrl + 'contact',
      // published: string;
      // modified: string;
    };
    this.seoService.setData(seoData);

    const jsonLd = this.jsonLdService.getObject('LocalBusiness', {
      name: 'Contact RecreateYourself',
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
