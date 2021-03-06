import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { InventoryDataSource, InventoryItem } from './inventory-datasource';
import { CarService } from '../car.service';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})

export class InventoryComponent implements AfterViewInit, OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatTable) table: MatTable<InventoryItem>;
  dataSource: InventoryDataSource;

  constructor(public carService: CarService) {
  }

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['stocknumber', 'year', 'make', 'model', 'trim', 'status', 'vin', 'instockdate'];
  names = [ "In Stock", "Sold", "Deal Pending", "In Trade"];

  ngOnInit() {
    this.dataSource = new InventoryDataSource();
    this.getCars();
    // this.carService.getCars().subscribe((data: InventoryItem[]) => {
    //   console.log(data);
    //   this.dataSource.data = data;
    // });
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    // this.table.dataSource = this.dataSource;
  }

  getCars(){
    this.carService.getCars().subscribe((data: InventoryItem[]) => {
      console.log(data);
      this.dataSource.data = data;
      this.table.dataSource = data;
      console.log(data);
      return data;
    });
  }

  updateStatus(newStatus, id){
    console.log(newStatus.target.value);
    this.carService.updateCar(id, newStatus.target.value).subscribe(() =>{

    });
  }
}
