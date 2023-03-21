import { Component , OnInit } from '@angular/core';
import { ServiceService } from './service.service';
import { project } from './DescriptionModel/Description';
import { interval, of, Subscription, Observable} from 'rxjs';
import { delay } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'application';
  gridColumns = 5;
  page = 1;

  projects: project[] = [];

  constructor (private service: ServiceService) {}

  // ngOnInit(): void {
  //   interval(1000).pipe(switchMap() => this.service.getDescription(this.page)
  //   .subscribe)
     //this.service.getDescription(this.page).subscribe((descrapt : Description[] ) => this.description = descrapt) ;
  // }

  ngOnInit(): void {

   this.service.getDescription(this.page).subscribe((descrapt : project[] ) => this.projects = descrapt)

    
  }

  onScroll(): void {

    this.service.getDescription(this.page++).subscribe((descrapt : project[]) => this.projects = descrapt);
  }
}
