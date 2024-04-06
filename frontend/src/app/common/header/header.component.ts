import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SearchComponent } from "./search/search.component";
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { SmartphoneState } from '../../store/states/smartphones-state';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-header',
    standalone: true,
    templateUrl: './header.component.html',
    styleUrl: './header.component.css',
    imports: [CommonModule, RouterLink, SearchComponent]
})
export class HeaderComponent {
  constructor(private store: Store) { }

  @Select (SmartphoneState.getNbSmartphones) nbSmartphones$!: Observable<number>;
}
