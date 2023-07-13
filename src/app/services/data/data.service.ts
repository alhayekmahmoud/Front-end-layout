import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataService {

  constructor() {}

  public getBrands() {
    return [
      { id: 1, img: 'assets/images/home/Brands/l1.png' },
      { id: 2, img: 'assets/images/home/Brands/l2.png' },
      { id: 3, img: 'assets/images/home/Brands/l3.png' },
      { id: 4, img: 'assets/images/home/Brands/l4.png' },
      { id: 5, img: 'assets/images/home/Brands/l5.png' },
      { id: 6, img: 'assets/images/home/Brands/l6.png' },
      { id: 7, img: 'assets/images/home/Brands/l7.png' },
      { id: 8, img: 'assets/images/home/Brands/l8.jpg' },
      { id: 9, img: 'assets/images/home/Brands/l9.jpg' },
      { id: 10, img: 'assets/images/home/Brands/l10.jpg' },
    ];
  }

  public getExpertsReview() {
    return  [
      { id: 1, img: 'assets/images/home/expertReview/ex1.jpg' },
      { id: 2, img: 'assets/images/home/expertReview/ex2.jpg' },
      { id: 3, img: 'assets/images/home/expertReview/ex3.jpg' },
    ];
  }

  public getBestOffers(){
    return [
      {id:1, img:'assets/images/home/bestOffer/o1.jpg'},
      {id:2, img:'assets/images/home/bestOffer/o2.jpg'},
      {id:3, img:'assets/images/home/bestOffer/o4.jpg'},
      {id:4, img:'assets/images/home/bestOffer/o5.jpg'},
      {id:5, img:'assets/images/home/bestOffer/o6.jpg'},
    ]



  }
  public getNewTopCars(){
    return [

      {
        id: '1',
        name: 'BMW',
        price: 700,
        category: 'er5',
        img: 'assets/images/home/newCars/BMW5.jpg',
        mileage: 21.21,
        Engine:1197,
        transmission: 'Manual and AMT',
        fueltype: 'petrol',
        seatingCapacity: 2
      },
      {
        id: '2',
        name: 'BMW',
        price: 700,
        category: 'er6',
        img: 'assets/images/home/newCars/BMW6.jpg',
        mileage: 21.21,
        Engine:1197,
        transmission: 'Manual and AMT',
        fueltype: 'petrol',
        seatingCapacity: 2
      },
      {
        id: '3',
        name: 'BMW',
        price: 700,
        category: 'er7',
        img: 'assets/images/home/newCars/BMW7.jpg',
        mileage: 21.21,
        Engine:1197,
        transmission: 'Manual and AMT',
        fueltype: 'petrol',
        seatingCapacity: 2
      },

      {
      id: '6',
      name: 'BMW',
      price: 700,
      category: 'er10',
      img: 'assets/images/home/newCars/BMW10.jpg',
      mileage: 21.21,
      Engine:1197,
      transmission: 'Manual and AMT',
      fueltype: 'petrol',
      seatingCapacity: 2
    },

    {
      id: '7',
      name: 'VW',
      price: 700,
      category: 'er1',
      img: 'assets/images/home/newCars/vw1.jpg',
      mileage: 21.21,
      Engine:1197,
      transmission: 'Manual and AMT',
      fueltype: 'petrol',
      seatingCapacity: 2
    },
    {
      id: '8',
      name: 'VW',
      price: 700,
      category: 'er2',
      img: 'assets/images/home/newCars/vw2.jpg',
      mileage: 21.21,
      Engine:1197,
      transmission: 'Manual and AMT',
      fueltype: 'petrol',
      seatingCapacity: 2
    },
    {
      id: '9',
      name: 'VW',
      price: 700,
      category: 'er3',
      img: 'assets/images/home/newCars/vw3.jpg',
      mileage: 21.21,
      Engine:1197,
      transmission: 'Manual and AMT',
      fueltype: 'petrol',
      seatingCapacity: 2
    },

    {
      id: '13',
      name: 'Mercedes',
      price: 700,
      category: 'er1',
      img: 'assets/images/home/newCars/MERCIDES1.jpg',
      mileage: 21.21,
      Engine:1197,
      transmission: 'Manual and AMT',
      fueltype: 'petrol',
      seatingCapacity: 2
    },
    {
      id: '14',
      name: 'Mercedes',
      price: 700,
      category: 'er2',
      img: 'assets/images/home/newCars/MERCIDES2.jpg',
      mileage: 21.21,
      Engine:1197,
      transmission: 'Manual and AMT',
      fueltype: 'petrol',
      seatingCapacity: 2
    },
    {
      id: '15',
      name: 'Mercedes',
      price: 700,
      category: 'er3',
      img: 'assets/images/home/newCars/MERCIDES3.jpg',
      mileage: 21.21,
      Engine:1197,
      transmission: 'Manual and AMT',
      fueltype: 'petrol',
      seatingCapacity: 2
    },

    ]
  }
  public getOldTopCars(){
    return [


      {id:10, name:'VW', price:700, category:'er4', img:'assets/images/home/newCars/vw4.jpg'},
      {id:11, name:'VW', price:700, category:'er5', img:'assets/images/home/newCars/vw5.jpg'},
      {id:12, name:'VW', price:700, category:'er6', img:'assets/images/home/newCars/vw6.jpg'},

      {id:16, name:'Mercedes', price:700, category:'er4', img:'assets/images/home/newCars/MERCIDES4.jpg'},
      {id:17, name:'Mercedes', price:700, category:'er5', img:'assets/images/home/newCars/MERCIDES5.jpg'},
      {id:18, name:'Mercedes', price:700, category:'er6', img:'assets/images/home/newCars/MERCIDES6.jpg'},

      {id:4, name:'BMW', price:700, category:'er8', img:'assets/images/home/newCars/BMW8.jpg'},
      {id:5, name:'BMW', price:700, category:'er9', img:'assets/images/home/newCars/BMW9.jpg'},
      {id:6, name:'BMW', price:700, category:'er10', img:'assets/images/home/newCars/BMW10.jpg'},

    ]
  }
  public getNewNewLunchedCars(){
    return [
      {
      id: '9',
      name: 'VW',
      price: 700,
      category: 'er3',
      img: 'assets/images/home/newCars/vw3.jpg',
      mileage: 21.21,
      Engine:1197,
      transmission: 'Manual and AMT',
      fueltype: 'petrol',
      seatingCapacity: 2
    },
    {
      id: '10',
      name: 'VW',
      price: 700,
      category: 'er4',
      img: 'assets/images/home/newCars/vw4.jpg',
      mileage: 21.21,
      Engine:1197,
      transmission: 'Manual and AMT',
      fueltype: 'petrol',
      seatingCapacity: 2
    },

     {
      id: '15',
      name: 'Mercedes',
      price: 700,
      category: 'er3',
      img: 'assets/images/home/newCars/MERCIDES3.jpg',
      mileage: 21.21,
      Engine:1197,
      transmission: 'Manual and AMT',
      fueltype: 'petrol',
      seatingCapacity: 2
    },
    {
      id: '16',
      name: 'Mercedes',
      price: 700,
      category: 'er4',
      img: 'assets/images/home/newCars/MERCIDES4.jpg',
      mileage: 21.21,
      Engine:1197,
      transmission: 'Manual and AMT',
      fueltype: 'petrol',
      seatingCapacity: 2
    },
    {
      id: '3',
      name: 'BMW',
      price: 700,
      category: 'er7',
      img: 'assets/images/home/newCars/BMW7.jpg',
      mileage: 21.21,
      Engine:1197,
      transmission: 'Manual and AMT',
      fueltype: 'petrol',
      seatingCapacity: 2
    },
    {
      id: '4',
      name: 'BMW',
      price: 700,
      category: 'er8',
      img: 'assets/images/home/newCars/BMW8.jpg',
      mileage: 21.21,
      Engine:1197,
      transmission: 'Manual and AMT',
      fueltype: 'petrol',
      seatingCapacity: 2
    }
    ];
  }

  public getOldNewLunchedCars(){
    return [

      {id:1, name:'BMW', price:700, category:'er5', img:'assets/images/home/newCars/BMW5.jpg'},
      {id:2, name:'BMW', price:700, category:'er6', img:'assets/images/home/newCars/BMW6.jpg'},

      {id:7, name:'VW', price:700, category:'er1', img:'assets/images/home/newCars/vw1.jpg'},
      {id:8, name:'VW', price:700, category:'er2', img:'assets/images/home/newCars/vw2.jpg'},

      {id:13, name:'Mercedes', price:700, category:'er1', img:'assets/images/home/newCars/MERCIDES1.jpg'},
      {id:14, name:'Mercedes', price:700, category:'er2', img:'assets/images/home/newCars/MERCIDES2.jpg'},

    ];
  }

  public getAllCars(){
    return [
      {
        id: '1',
        name: 'BMW',
        price: 700,
        category: 'er5',
        img: 'assets/images/home/newCars/BMW5.jpg',
        mileage: 21.21,
        Engine:1197,
        transmission: 'Manual and AMT',
        fueltype: 'petrol',
        seatingCapacity: 2
      },
      {
        id: '2',
        name: 'BMW',
        price: 700,
        category: 'er6',
        img: 'assets/images/home/newCars/BMW6.jpg',
        mileage: 21.21,
        Engine:1197,
        transmission: 'Manual and AMT',
        fueltype: 'petrol',
        seatingCapacity: 2
      },
      {
        id: '3',
        name: 'BMW',
        price: 700,
        category: 'er7',
        img: 'assets/images/home/newCars/BMW7.jpg',
        mileage: 21.21,
        Engine:1197,
        transmission: 'Manual and AMT',
        fueltype: 'petrol',
        seatingCapacity: 2
      },
      {
        id: '4',
        name: 'BMW',
        price: 700,
        category: 'er8',
        img: 'assets/images/home/newCars/BMW8.jpg',
        mileage: 21.21,
        Engine:1197,
        transmission: 'Manual and AMT',
        fueltype: 'petrol',
        seatingCapacity: 2
      },
      {
        id: '5',
        name: 'BMW',
        price: 700,
        category: 'er9',
        img: 'assets/images/home/newCars/BMW9.jpg',
        mileage: 21.21,
        Engine:1197,
        transmission: 'Manual and AMT',
        fueltype: 'petrol',
        seatingCapacity: 2
      },
      {
        id: '6',
        name: 'BMW',
        price: 700,
        category: 'er10',
        img: 'assets/images/home/newCars/BMW10.jpg',
        mileage: 21.21,
        Engine:1197,
        transmission: 'Manual and AMT',
        fueltype: 'petrol',
        seatingCapacity: 2
      },

      {
        id: '7',
        name: 'VW',
        price: 700,
        category: 'er1',
        img: 'assets/images/home/newCars/vw1.jpg',
        mileage: 21.21,
        Engine:1197,
        transmission: 'Manual and AMT',
        fueltype: 'petrol',
        seatingCapacity: 2
      },
      {
        id: '8',
        name: 'VW',
        price: 700,
        category: 'er2',
        img: 'assets/images/home/newCars/vw2.jpg',
        mileage: 21.21,
        Engine:1197,
        transmission: 'Manual and AMT',
        fueltype: 'petrol',
        seatingCapacity: 2
      },
      {
        id: '9',
        name: 'VW',
        price: 700,
        category: 'er3',
        img: 'assets/images/home/newCars/vw3.jpg',
        mileage: 21.21,
        Engine:1197,
        transmission: 'Manual and AMT',
        fueltype: 'petrol',
        seatingCapacity: 2
      },
      {
        id: '10',
        name: 'VW',
        price: 700,
        category: 'er4',
        img: 'assets/images/home/newCars/vw4.jpg',
        mileage: 21.21,
        Engine:1197,
        transmission: 'Manual and AMT',
        fueltype: 'petrol',
        seatingCapacity: 2
      },
      {
        id: '11',
        name: 'VW',
        price: 700,
        category: 'er5',
        img: 'assets/images/home/newCars/vw5.jpg',
        mileage: 21.21,
        Engine:1197,
        transmission: 'Manual and AMT',
        fueltype: 'petrol',
        seatingCapacity: 2
      },
      {
        id: '12',
        name: 'VW',
        price: 700,
        category: 'er6',
        img: 'assets/images/home/newCars/vw6.jpg',
        mileage: 21.21,
        Engine:1197,
        transmission: 'Manual and AMT',
        fueltype: 'petrol',
        seatingCapacity: 2
      },

      {
        id: '13',
        name: 'Mercedes',
        price: 700,
        category: 'er1',
        img: 'assets/images/home/newCars/MERCIDES1.jpg',
        mileage: 21.21,
        Engine:1197,
        transmission: 'Manual and AMT',
        fueltype: 'petrol',
        seatingCapacity: 2
      },
      {
        id: '14',
        name: 'Mercedes',
        price: 700,
        category: 'er2',
        img: 'assets/images/home/newCars/MERCIDES2.jpg',
        mileage: 21.21,
        Engine:1197,
        transmission: 'Manual and AMT',
        fueltype: 'petrol',
        seatingCapacity: 2
      },
      {
        id: '15',
        name: 'Mercedes',
        price: 700,
        category: 'er3',
        img: 'assets/images/home/newCars/MERCIDES3.jpg',
        mileage: 21.21,
        Engine:1197,
        transmission: 'Manual and AMT',
        fueltype: 'petrol',
        seatingCapacity: 2
      },
      {
        id: '16',
        name: 'Mercedes',
        price: 700,
        category: 'er4',
        img: 'assets/images/home/newCars/MERCIDES4.jpg',
        mileage: 21.21,
        Engine:1197,
        transmission: 'Manual and AMT',
        fueltype: 'petrol',
        seatingCapacity: 2
      },
      {
        id: '17',
        name: 'Mercedes',
        price: 700,
        category: 'er5',
        img: 'assets/images/home/newCars/MERCIDES5.jpg',
        mileage: 21.21,
        Engine:1197,
        transmission: 'Manual and AMT',
        fueltype: 'petrol',
        seatingCapacity: 2
      },
      {
        id: '18',
        name: 'Mercedes',
        price: 700,
        category: 'er6',
        img: 'assets/images/home/newCars/MERCIDES6.jpg',
        mileage: 21.21,
        Engine:1197,
        transmission: 'Manual and AMT',
        fueltype: 'petrol',
        seatingCapacity: 2
      },
    ];

  }


  public getAllNewCars(){
    return [
      {
        id: '16',
        name: 'Mercedes',
        price: 700,
        category: 'er4',
        img: 'assets/images/home/newCars/MERCIDES4.jpg',
        mileage: 21.21,
        Engine:1197,
        transmission: 'Manual and AMT',
        fueltype: 'petrol',
        seatingCapacity: 2
      },
      {
        id: '17',
        name: 'Mercedes',
        price: 700,
        category: 'er5',
        img: 'assets/images/home/newCars/MERCIDES5.jpg',
        mileage: 21.21,
        Engine:1197,
        transmission: 'Manual and AMT',
        fueltype: 'petrol',
        seatingCapacity: 2
      },
      {
        id: '18',
        name: 'Mercedes',
        price: 700,
        category: 'er6',
        img: 'assets/images/home/newCars/MERCIDES6.jpg',
        mileage: 21.21,
        Engine:1197,
        transmission: 'Manual and AMT',
        fueltype: 'petrol',
        seatingCapacity: 2
      },
      {
        id: '5',
        name: 'BMW',
        price: 700,
        category: 'er9',
        img: 'assets/images/home/newCars/BMW9.jpg',
        mileage: 21.21,
        Engine:1197,
        transmission: 'Manual and AMT',
        fueltype: 'petrol',
        seatingCapacity: 2
      },
      {
        id: '6',
        name: 'BMW',
        price: 700,
        category: 'er10',
        img: 'assets/images/home/newCars/BMW10.jpg',
        mileage: 21.21,
        Engine:1197,
        transmission: 'Manual and AMT',
        fueltype: 'petrol',
        seatingCapacity: 2
      },

      {
        id: '7',
        name: 'VW',
        price: 700,
        category: 'er1',
        img: 'assets/images/home/newCars/vw1.jpg',
        mileage: 21.21,
        Engine:1197,
        transmission: 'Manual and AMT',
        fueltype: 'petrol',
        seatingCapacity: 2
      },
      {
        id: '8',
        name: 'VW',
        price: 700,
        category: 'er2',
        img: 'assets/images/home/newCars/vw2.jpg',
        mileage: 21.21,
        Engine:1197,
        transmission: 'Manual and AMT',
        fueltype: 'petrol',
        seatingCapacity: 2
      },
      {
        id: '9',
        name: 'VW',
        price: 700,
        category: 'er3',
        img: 'assets/images/home/newCars/vw3.jpg',
        mileage: 21.21,
        Engine:1197,
        transmission: 'Manual and AMT',
        fueltype: 'petrol',
        seatingCapacity: 2
      },
      {
        id: '10',
        name: 'VW',
        price: 700,
        category: 'er4',
        img: 'assets/images/home/newCars/vw4.jpg',
        mileage: 21.21,
        Engine:1197,
        transmission: 'Manual and AMT',
        fueltype: 'petrol',
        seatingCapacity: 2
      },
      {
        id: '11',
        name: 'VW',
        price: 700,
        category: 'er5',
        img: 'assets/images/home/newCars/vw5.jpg',
        mileage: 21.21,
        Engine:1197,
        transmission: 'Manual and AMT',
        fueltype: 'petrol',
        seatingCapacity: 2
      },
      {
        id: '12',
        name: 'VW',
        price: 700,
        category: 'er6',
        img: 'assets/images/home/newCars/vw6.jpg',
        mileage: 21.21,
        Engine:1197,
        transmission: 'Manual and AMT',
        fueltype: 'petrol',
        seatingCapacity: 2
      },

      {
        id: '13',
        name: 'Mercedes',
        price: 700,
        category: 'er1',
        img: 'assets/images/home/newCars/MERCIDES1.jpg',
        mileage: 21.21,
        Engine:1197,
        transmission: 'Manual and AMT',
        fueltype: 'petrol',
        seatingCapacity: 2
      },
      {
        id: '14',
        name: 'Mercedes',
        price: 700,
        category: 'er2',
        img: 'assets/images/home/newCars/MERCIDES2.jpg',
        mileage: 21.21,
        Engine:1197,
        transmission: 'Manual and AMT',
        fueltype: 'petrol',
        seatingCapacity: 2
      },
      {
        id: '15',
        name: 'Mercedes',
        price: 700,
        category: 'er3',
        img: 'assets/images/home/newCars/MERCIDES3.jpg',
        mileage: 21.21,
        Engine:1197,
        transmission: 'Manual and AMT',
        fueltype: 'petrol',
        seatingCapacity: 2
      },

      {
        id: '1',
        name: 'BMW',
        price: 700,
        category: 'er5',
        img: 'assets/images/home/newCars/BMW5.jpg',
        mileage: 21.21,
        Engine:1197,
        transmission: 'Manual and AMT',
        fueltype: 'petrol',
        seatingCapacity: 2
      },
      {
        id: '2',
        name: 'BMW',
        price: 700,
        category: 'er6',
        img: 'assets/images/home/newCars/BMW6.jpg',
        mileage: 21.21,
        Engine:1197,
        transmission: 'Manual and AMT',
        fueltype: 'petrol',
        seatingCapacity: 2
      },
      {
        id: '3',
        name: 'BMW',
        price: 700,
        category: 'er7',
        img: 'assets/images/home/newCars/BMW7.jpg',
        mileage: 21.21,
        Engine:1197,
        transmission: 'Manual and AMT',
        fueltype: 'petrol',
        seatingCapacity: 2
      },
      {
        id: '4',
        name: 'BMW',
        price: 700,
        category: 'er8',
        img: 'assets/images/home/newCars/BMW8.jpg',
        mileage: 21.21,
        Engine:1197,
        transmission: 'Manual and AMT',
        fueltype: 'petrol',
        seatingCapacity: 2
      },
    ];

  }

  public getAllOLdCars(){
    return [
      {
        id: '1',
        name: 'BMW',
        price: 700,
        category: 'er5',
        img: 'assets/images/home/newCars/BMW5.jpg',
        mileage: 21.21,
        Engine:1197,
        transmission: 'Manual and AMT',
        fueltype: 'petrol',
        seatingCapacity: 2
      },
      {
        id: '2',
        name: 'BMW',
        price: 700,
        category: 'er6',
        img: 'assets/images/home/newCars/BMW6.jpg',
        mileage: 21.21,
        Engine:1197,
        transmission: 'Manual and AMT',
        fueltype: 'petrol',
        seatingCapacity: 2
      },
      {
        id: '3',
        name: 'BMW',
        price: 700,
        category: 'er7',
        img: 'assets/images/home/newCars/BMW7.jpg',
        mileage: 21.21,
        Engine:1197,
        transmission: 'Manual and AMT',
        fueltype: 'petrol',
        seatingCapacity: 2
      },
      {
        id: '4',
        name: 'BMW',
        price: 700,
        category: 'er8',
        img: 'assets/images/home/newCars/BMW8.jpg',
        mileage: 21.21,
        Engine:1197,
        transmission: 'Manual and AMT',
        fueltype: 'petrol',
        seatingCapacity: 2
      },
      {
        id: '5',
        name: 'BMW',
        price: 700,
        category: 'er9',
        img: 'assets/images/home/newCars/BMW9.jpg',
        mileage: 21.21,
        Engine:1197,
        transmission: 'Manual and AMT',
        fueltype: 'petrol',
        seatingCapacity: 2
      },
      {
        id: '6',
        name: 'BMW',
        price: 700,
        category: 'er10',
        img: 'assets/images/home/newCars/BMW10.jpg',
        mileage: 21.21,
        Engine:1197,
        transmission: 'Manual and AMT',
        fueltype: 'petrol',
        seatingCapacity: 2
      },

      {
        id: '7',
        name: 'VW',
        price: 700,
        category: 'er1',
        img: 'assets/images/home/newCars/vw1.jpg',
        mileage: 21.21,
        Engine:1197,
        transmission: 'Manual and AMT',
        fueltype: 'petrol',
        seatingCapacity: 2
      },
      {
        id: '8',
        name: 'VW',
        price: 700,
        category: 'er2',
        img: 'assets/images/home/newCars/vw2.jpg',
        mileage: 21.21,
        Engine:1197,
        transmission: 'Manual and AMT',
        fueltype: 'petrol',
        seatingCapacity: 2
      },
      {
        id: '9',
        name: 'VW',
        price: 700,
        category: 'er3',
        img: 'assets/images/home/newCars/vw3.jpg',
        mileage: 21.21,
        Engine:1197,
        transmission: 'Manual and AMT',
        fueltype: 'petrol',
        seatingCapacity: 2
      },
      {
        id: '10',
        name: 'VW',
        price: 700,
        category: 'er4',
        img: 'assets/images/home/newCars/vw4.jpg',
        mileage: 21.21,
        Engine:1197,
        transmission: 'Manual and AMT',
        fueltype: 'petrol',
        seatingCapacity: 2
      },
      {
        id: '11',
        name: 'VW',
        price: 700,
        category: 'er5',
        img: 'assets/images/home/newCars/vw5.jpg',
        mileage: 21.21,
        Engine:1197,
        transmission: 'Manual and AMT',
        fueltype: 'petrol',
        seatingCapacity: 2
      },
      {
        id: '12',
        name: 'VW',
        price: 700,
        category: 'er6',
        img: 'assets/images/home/newCars/vw6.jpg',
        mileage: 21.21,
        Engine:1197,
        transmission: 'Manual and AMT',
        fueltype: 'petrol',
        seatingCapacity: 2
      },

      {
        id: '13',
        name: 'Mercedes',
        price: 700,
        category: 'er1',
        img: 'assets/images/home/newCars/MERCIDES1.jpg',
        mileage: 21.21,
        Engine:1197,
        transmission: 'Manual and AMT',
        fueltype: 'petrol',
        seatingCapacity: 2
      },
      {
        id: '14',
        name: 'Mercedes',
        price: 700,
        category: 'er2',
        img: 'assets/images/home/newCars/MERCIDES2.jpg',
        mileage: 21.21,
        Engine:1197,
        transmission: 'Manual and AMT',
        fueltype: 'petrol',
        seatingCapacity: 2
      },
      {
        id: '15',
        name: 'Mercedes',
        price: 700,
        category: 'er3',
        img: 'assets/images/home/newCars/MERCIDES3.jpg',
        mileage: 21.21,
        Engine:1197,
        transmission: 'Manual and AMT',
        fueltype: 'petrol',
        seatingCapacity: 2
      },
      {
        id: '16',
        name: 'Mercedes',
        price: 700,
        category: 'er4',
        img: 'assets/images/home/newCars/MERCIDES4.jpg',
        mileage: 21.21,
        Engine:1197,
        transmission: 'Manual and AMT',
        fueltype: 'petrol',
        seatingCapacity: 2
      },
      {
        id: '17',
        name: 'Mercedes',
        price: 700,
        category: 'er5',
        img: 'assets/images/home/newCars/MERCIDES5.jpg',
        mileage: 21.21,
        Engine:1197,
        transmission: 'Manual and AMT',
        fueltype: 'petrol',
        seatingCapacity: 2
      },
      {
        id: '18',
        name: 'Mercedes',
        price: 700,
        category: 'er6',
        img: 'assets/images/home/newCars/MERCIDES6.jpg',
        mileage: 21.21,
        Engine:1197,
        transmission: 'Manual and AMT',
        fueltype: 'petrol',
        seatingCapacity: 2
      },
    ];

  }
}
