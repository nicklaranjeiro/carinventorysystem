import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { CarService } from '../car.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {

  /** Based on the screen size, switch from standard to one column per row */
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    
    map(({ matches }) => {
      if (matches) {
        return [
          { title: 'Card 1', cols: 1, rows: 1, stats: 1000 },
          { title: 'Card 2', cols: 1, rows: 1, stats: 40 },
          { title: 'Card 3', cols: 2, rows: 1, stats: 400 },
        ];
      }

      return [
        { title: 'Number of Cars', cols: 1, rows: 1, stats: 1000},
        { title: 'Different types of cars', cols: 1, rows: 1, stats: 40},
        { title: 'Number of satisfied customers', cols: 2, rows:1, stats: 400},

      ];
    })
  );

  constructor(private breakpointObserver: BreakpointObserver, private carService: CarService) {}

  ngOnInit(): void {
    this.getCars();
  }

  getCars(){
    this.carService.getCars().subscribe((data: {}) => {
      console.log(data);
      return data;
    });
  }


}
