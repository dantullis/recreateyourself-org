/* eslint-disable @typescript-eslint/no-unused-vars */
import { Component, OnInit } from '@angular/core';

import { faCircle, faHeart } from '@fortawesome/free-solid-svg-icons';

// paths alias in tsconfig.json
import { environment } from '@environments/environment';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  public faCircle = faCircle;
  public faHeart = faHeart;
  public uiversion: string = environment.uiversion;
  public year: number = new Date().getFullYear();

  // constructor() {}

  ngOnInit(): void {
    const temp = '';
  }
}
