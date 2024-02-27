import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Category } from '../interfaces/category';
import { Product } from '../interfaces/product';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  constructor() { }

  createDb() {
    const categories = [
      {id: 1, categoryName: "Computer"},
      {id: 2, categoryName: "T-Shirt"},
      {id: 3, categoryName: "Electronic"}
    ];

    const products = [
      {id: 1, name: "Sneakers Shoes", stock: 10, price: 5000, photo: "https://img.freepik.com/free-photo/fashion-shoes-sneakers_1203-7529.jpg?w=1380&t=st=1709002793~exp=1709003393~hmac=79f00fcd1b70978810d09ed99b0114db825f4e9a90f72a3aca725c06044c8641"},
      {id: 2, name: "Sports Shoes", stock: 5, price: 6000, photo: "https://img.freepik.com/free-photo/pair-trainers_144627-3799.jpg?w=996&t=st=1709002836~exp=1709003436~hmac=ea867bdf9a3d48c76c3a832a7e247ec3c348cdcbb9a1dd40c36df949c4ffce8d"},
      {id: 3, name: "Basketball Shoes", stock: 6, price: 8000, photo: "https://img.freepik.com/free-psd/running-shoes-sneakers-transparent-background_84443-1634.jpg?w=826&t=st=1709002869~exp=1709003469~hmac=9861d5333f83ed7ec1c1f2580fcdef13eb1272568796cc553d48946ace2674e6"},
      {id: 4, name: "Running Shoes", stock: 4, price: 10000, photo: "https://img.freepik.com/free-psd/running-shoes-sneakers-transparent-background_84443-1627.jpg?w=826&t=st=1709002909~exp=1709003509~hmac=baadb8d7067cdb49b6a1ab42351133c1692265ee4fc00e3dc7058784bc0dc32c"}
    ]

    return {categories, products};
  }

  // genId(categories: Category[]) : number {
  //   return categories.length > 0 ? Math.max(...categories.map(c => c.id)) + 1 : 11;
  // }

  genId(products: Product[]) : number {
    return products.length > 0 ? Math.max(...products.map(c => c.id)) + 1 : 11;
  }
}
