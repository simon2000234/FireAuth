import {IMock, Mock} from 'moq.ts';
import {Product} from '../../src/models/product';
import {ProductService} from '../../src/products/product.service';
import {ProductRepository} from '../../src/products/product.repository';
import {Stock} from '../../src/models/stock';

describe('ProductService', () => {
  let productRepository: IMock<ProductRepository>;
  let productService: ProductService;
  let product: Product = {price: 123, name: 'cup', id: '1', description: 'a cup'};
  let stock: Stock = {stock: 5, product: product, id:'2'};
  beforeEach(() => {
    productRepository = new Mock<ProductRepository>()
      .setup(pr => pr.createNewStock(stock))
      .returns(new Promise((resolve, reject) => {
        resolve()
      }));
    productService = new ProductService(productRepository.object());
  });

  it("Test test", async () => {
    expect(productService).toBeDefined;
  });
});

