import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';  // Import the data service

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  data: any = {};  // Variable to store the fetched data

  constructor(private dataService: DataService) {}

  ngOnInit() {
    // Fetch data from the backend when the component is initialized
    this.dataService.getData().subscribe((response) => {
      this.data = response;  // Store the response in the data variable
      console.log('Data from backend:', this.data);  // Log the data in the console
    });
  }
}

