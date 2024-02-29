import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
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
  smartphones$: Observable<Smartphone[]>;
  filteredSmartphones$: Observable<Smartphone[]>;
  searchInput: string = '';

  constructor(private apiService: ApiService) {
    this.smartphones$ = this.apiService.getSmartphones();
    this.filteredSmartphones$ = this.smartphones$;
  }

  onSearchChange(searchValue: string): void {
    this.searchInput = searchValue;
    this.filterSmartphones();
  }

  filterSmartphones(): void {
    this.filteredSmartphones$ = this.smartphones$.pipe(
      map(smartphones =>
        smartphones.filter(smartphone =>
          smartphone.nom.toLowerCase().includes(this.searchInput.toLowerCase())
        )
      )
    );
  }
}
