import { Component } from '@angular/core';
import { ApisService } from '../../core/services/api/apis.service';
import { Products } from '../../core/models/products';

@Component({
  selector: 'app-necessity',
  imports: [],
  templateUrl: './necessity.component.html',
  styleUrl: './necessity.component.scss',
})
export class NecessityComponent {
  products: Products[] = []

  constructor(private api: ApisService) {

  }

  ngOnInit(): void {
    this.api.getProdutcs().subscribe({
      next: (value) => {
        this.products = value
      },
      error: (err) => {

      },
    })
  }

}
