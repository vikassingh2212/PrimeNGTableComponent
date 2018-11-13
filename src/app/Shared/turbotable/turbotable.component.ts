import { Component, OnInit, Input } from '@angular/core';
import { LazyLoadEvent } from 'primeng/primeng';
import { DataService } from 'src/app/Services/data.service';

@Component({
  selector: 'app-turbotable',
  templateUrl: './turbotable.component.html',
  styleUrls: ['./turbotable.component.css']
})
export class TurbotableComponent implements OnInit {

  @Input() headerEnabled: boolean = true;
  @Input() path: string = '';
  @Input() displayedCols: any[] = [];
  @Input() lazyLoadingEnabled: boolean = false;
  @Input() paginationEnabled: boolean = false;
  @Input() columnSortMode: string = 'off';
  @Input() pageSize: number = 10;
  @Input() pageSizeOptions: number[] = [10, 20, 30, 40, 50];
  @Input() totalRecordSize: number = 100;
  @Input() rowSelectionMode: string = 'single';
  @Input() columnFilterEnabled: boolean = false;
  @Input() globalFilterEnabled: boolean = false;

  loading: boolean = true;
  displayedRows: any[] = [];

  constructor(private dataService: DataService) {

  }

  ngOnInit() {

    if (!this.lazyLoadingEnabled) {
      alert('init');
      this.dataService.getData(this.path).subscribe(data => {
        this.displayedRows = data;
      });

    }
  }

  loadLazy(event: LazyLoadEvent) {
    this.loading = true;

    // in a real application, make a remote request to load data using state metadata from event
    // event.first = First row offset
    // event.rows = Number of rows per page
    // event.sortField = Field name to sort with
    // event.sortOrder = Sort order as number, 1 for asc and -1 for dec
    // filters: FilterMetadata object having field as key and filter value, filter matchMode as value

    // imitate db connection over a network
    console.log(JSON.stringify(event));
    console.log(event);
    console.log(event.first, (event.first + event.rows));

    this.dataService.getDataFiltered(this.path, event).subscribe(data => {
      this.displayedRows = data;
      this.loading = false;
    });

  }
}
