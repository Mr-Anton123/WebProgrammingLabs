// export interface Description {
     // anime : any;
     // character: any;
     // quote: any;
//     id: any,
//     title:any,
//     price:any,
//     category:any,
//     description:any,
//     image:any,
// }

// interface Description {
//   id: number;
//   title: string;
//   price: number;
//   description: string;
//   category: string;
//   image: any;
// }


// export class prodject {
//     constructor
//     (
//       public id: number, public title: string,
//       public price: number, public description: string,
//       public category: string, public image: any
//     )

// }


export interface project {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: any;
}

export interface cart {
  id: number;
  userId: number;
  date: string;
  __v: number;

}
