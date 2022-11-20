export class Product {
  code: string
  img: string

  constructor(code: string, img: string) {
    this.code = code;
    this.img = img;
  }
  getDummyProduct():Product[]{
    return [
      new Product('A01', 'assets/C1.webp'),
      new Product('A02', 'assets/C1.webp'),
      new Product('A03', 'assets/C1.webp'),
      new Product('B04', 'assets/C1.webp'),

      new Product('B14', 'assets/C1.webp'),
      new Product('B41', 'assets/C1.webp'),

      new Product('C04', 'assets/C1.webp'),

      new Product('C05', 'assets/C1.webp'),
    ]
  }
}
