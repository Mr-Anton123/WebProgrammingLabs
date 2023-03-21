import { Injectable , OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { cart, project } from './DescriptionModel/Description'
import { interval, Observable , of ,} from 'rxjs';
import { map } from 'rxjs/operators';
import { mergeMap } from 'rxjs/operators';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  #limit: number = 200;
  responseble: any ;
  responseble1: any ;
  projects: project[]=[]; 
  carts: cart[] = [];
  

  constructor(private http: HttpClient) { }

  getDescription(page: number): Observable<project[]> {

    for(let i = 0; i < 20; i++){

      this.http.get(`https://fakestoreapi.com/products`)
        .pipe(delay(1000))
        .subscribe( (responseble) => {

        this.responseble = responseble;
      
        let description : project =
        {
          id : this.responseble[i].id,
          title : this.responseble[i].title,
          price: this.responseble[i].price,
          description: this.responseble[i].description,
          category: this.responseble[i].category,
          image: this.responseble[i].image,
        };

        this.projects.push( description );
        console.log(description);


      });
   }

   return of (this.projects ).pipe(delay(1000));
    
 }


}


// this.http.get(`https://fakestoreapi.com/carts`)
//         .subscribe( (responseble1) => {

//         this.responseble1 = responseble1;
      
//         let cartin : cart =
//         {

//           id: this.responseble1[i].id,
//           userId: this.responseble1[i].userId,
//           date: this.responseble1[i].date,
//           __v: this.responseble1[i].date,

//         };
//         this.carts.push( cartin );
//         console.log(cartin);
//       });



