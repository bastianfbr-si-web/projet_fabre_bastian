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
  prixMin = new BehaviorSubject<number | null>(null);
  prixMax = new BehaviorSubject<number | null>(null);

  marques: Observable<string[]>;

  constructor(private apiService: ApiService) {
    this.filteredSmartphones$ = combineLatest([
      this.apiService.getSmartphones(),
      this.searchInput,
      this.marqueFilter,
      this.prixMin,
      this.prixMax
    ]).pipe(
      map(([smartphones, searchInput, marqueFilter, prixMin, prixMax]) => {
        return smartphones.filter(smartphone => {
          const nomMatch = smartphone.nom.toLowerCase().includes(searchInput.toLowerCase());
          const marqueMatch = marqueFilter ? smartphone.marque === marqueFilter : true;
          const prixMinMatch = prixMin != null ? smartphone.prix >= prixMin : true;
          const prixMaxMatch = prixMax != null ? smartphone.prix <= prixMax : true;
          return nomMatch && marqueMatch && prixMinMatch && prixMaxMatch;
        });
      })
    );
    this.marques = this.apiService.getMarques();
  }

  prixMinChange(value: number | null): void {
    this.prixMin.next(value);
  }

  prixMaxChange(value: number | null): void {
    this.prixMax.next(value);
  }

  trackByFn(index: number, item: string): string {
    return item;
  }
}
