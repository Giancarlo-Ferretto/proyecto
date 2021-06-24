import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Filter } from './interfaces/filter';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})

export class SearchBarComponent implements OnInit {
  filterModel:Filter = {filter:"0", input:""};
  @Output() filter = new EventEmitter<Filter>();

  constructor() { }

  ngOnInit(): void {
  }

  onFilterChange() {
    this.filter.emit(this.filterModel);
  }
}