import {UserController} from './users/user.controller';
import {UserRepository} from './users/user.repository';
import {UserRepositoryFirebase} from './users/user.repository.firebase';
import {UserService} from './users/user.service';
import {UserControllerFirebase} from './users/user.controller.firebase';
import {ProductController} from './products/product.controller';
import {ProductRepository} from './products/product.repository';
import {ProductRepositoryFirebase} from './products/product.repository.firebase';
import {ProductService} from './products/product.service';
import {ProductControllerFirebase} from './products/product.controller.firebase';
import {StockController} from './stock/stock.controller';
import {StockRepository} from './stock/stock.repository';
import {StockRepositoryFirebase} from './stock/stock.repository.firebase';
import {StockService} from './stock/stock.service';
import {StockControllerFirebase} from './stock/stock.controller.firebase';
import {OrderController} from './orders/order.controller';
import {OrderRepository} from './orders/order.repository';
import {OrderRepositoryFirebase} from './orders/order.repository.firebase';
import {OrderService} from './orders/order.service';
import {OrderControllerFirebase} from './orders/order.controller.firebase';

export class DependencyFactory {
  getUserController(): UserController {
    const repo: UserRepository = new  UserRepositoryFirebase();
    const service: UserService = new UserService(repo);
    return new UserControllerFirebase(service);
  }

  getProductController(): ProductController{
    const repo: ProductRepository = new ProductRepositoryFirebase();
    const service: ProductService = new ProductService(repo);
    return new ProductControllerFirebase(service)
  }

  getStockController(): StockController{
    const repo: StockRepository = new StockRepositoryFirebase();
    const service: StockService = new StockService(repo);
    return new StockControllerFirebase(service)
  }

  getOrderController(): OrderController{
    const repo: OrderRepository = new OrderRepositoryFirebase();
    const service: OrderService = new OrderService(repo);
    return new OrderControllerFirebase(service);
  }
}
