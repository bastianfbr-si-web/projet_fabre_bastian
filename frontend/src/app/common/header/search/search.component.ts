import { Component } from '@angular/core';
import { BehaviorSubject, combineLatest, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ApiService } from '../../../services/api.service';
import { Smartphone } from '../../../pages/smartphones/models/smartphone';
import { AsyncPipe, CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@Component({
  providers: [ApiService],
  selector: 'app-search',
  standalone: true,
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  imports: [AsyncPipe, CommonModule, FormsModule, HttpClientModule]
})
export class SearchComponent {
  filteredSmartphones$: Observable<Smartphone[]>;
  searchInput = new BehaviorSubject<string>('');
  marqueFilter = new BehaviorSubject<string>('');

  // Supposons que `marques` soit une liste statique de marques pour l'exemple
  // Dans une application réelle, cela pourrait également provenir d'un service
  marques: string[] = ['Google', 'Honor', 'Samsung', 'Xiaomi'];

  constructor(private apiService: ApiService) {
    this.filteredSmartphones$ = combineLatest([this.apiService.getSmartphones(), this.searchInput, this.marqueFilter]).pipe(
      map(([smartphones, searchInput, marqueFilter]) => {
        return smartphones.filter(smartphone =>
          smartphone.nom.toLowerCase().includes(searchInput.toLowerCase()) &&
          (marqueFilter ? smartphone.marque === marqueFilter : true)
        );
      })
    );
  }

  trackByFn(index: number, item: string): string {
  return item;
}

}
