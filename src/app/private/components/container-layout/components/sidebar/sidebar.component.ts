import {Component} from '@angular/core';

export interface NavBarItemInterface {
  caption: string;
  url: string;
  icon: string | null;
  position: string | null;
  childMenuItems: NavBarItemInterface[];
  isNgRute: boolean;
}

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent {
}
