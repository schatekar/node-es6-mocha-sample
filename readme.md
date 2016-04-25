A sample application to get mocha to work with babel. 

#How to run

After you clone this repo, run `npm install` followed by `npm test` to run the only test in this repo. 

#Problems

Using default export for classes will not work for mocha. If you use `export default class Customer` to declare class then you get following error when you try to `new Customer()`
```
TypeError: _customer.Customer is not a function
```

But if you change the class declaration to `export class Customer` then everything works fine. 