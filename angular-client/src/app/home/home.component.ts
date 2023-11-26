/* eslint-disable @typescript-eslint/no-unused-vars */
import { Component, OnInit } from '@angular/core';

import {
  faCircle,
  faCircleInfo,
  faFaceSmile,
  faGifts,
  faHatCowboy,
  faHeartPulse,
  faPeopleGroup,
  faPlus,
  faRunning,
  faSchool,
  faShirt,
  faSpa,
} from '@fortawesome/free-solid-svg-icons';

// app imports
import { environment } from 'src/environments/environment';
import {
  SeoSocialShareData,
  SeoSocialShareService,
} from '../services/seo-social-share';
import { JsonLdService } from '../services/json-ld';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  faCircle = faCircle;
  faCircleInfo = faCircleInfo;
  faFaceSmile = faFaceSmile;
  faGifts = faGifts;
  faHatCowboy = faHatCowboy;
  faHeartPulse = faHeartPulse;
  faPeopleGroup = faPeopleGroup;
  faPlus = faPlus;
  faRunning = faRunning;
  faSchool = faSchool;
  faShirt = faShirt;
  faSpa = faSpa;

  constructor(
    private seoService: SeoSocialShareService,
    private jsonLdService: JsonLdService
  ) {}

  ngOnInit(): void {
    const seoData: SeoSocialShareData = {
      title: 'Recreating yourself is a process of discovery and growth',
      author: environment.author,
      description:
        'Recreating yourself is a process of self-discovery and personal growth',
      // image: environment.appUrl + 'assets/images/logo/logo.png',
      // imageAuxData: ImageAuxData;
      keywords: 'recreate yourself, recreateyourself',
      section: 'home',
      type: 'website',
      url: environment.appUrl,
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
