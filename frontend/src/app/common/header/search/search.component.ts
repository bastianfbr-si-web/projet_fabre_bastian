import { Component } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { catchError, debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
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
    this.filteredSmartphones$ = this.createFiltersObservable();
    this.marques = this.apiService.getMarques();
  }

  private createFiltersObservable(): Observable<Smartphone[]> {
    console.log(this.marqueFilter.value);
    return this.searchInput.pipe(
      switchMap(nom =>
        this.apiService.searchSmartphones({
          nom: nom,
          marque: this.marqueFilter.value,
          prixMin: this.prixMin.value?.valueOf(),
          prixMax: this.prixMax.value?.valueOf()
        })
      ),
      distinctUntilChanged(),
      debounceTime(300),
      catchError(() => of([])),
    );
  }

  marqueChange(value: string): void {
    this.marqueFilter.next(value);
    this.filteredSmartphones$ = this.createFiltersObservable();
  }

  prixMinChange(value: number | null): void {
    this.prixMin.next(value);
    this.filteredSmartphones$ = this.createFiltersObservable();
  }

  prixMaxChange(value: number | null): void {
    this.prixMax.next(value);
    this.filteredSmartphones$ = this.createFiltersObservable();
  }

  trackByFn(index: number, item: string): string {
    return item;
  }
}
