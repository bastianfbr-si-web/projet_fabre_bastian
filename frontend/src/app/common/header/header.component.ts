import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SearchComponent } from "./search/search.component";

@Component({
    selector: 'app-header',
    standalone: true,
    templateUrl: './header.component.html',
    styleUrl: './header.component.css',
    imports: [RouterLink, SearchComponent]
})
export class HeaderComponent {

}
