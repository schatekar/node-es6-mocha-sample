import {expect} from 'chai';
import Customer from '../app/customer';

describe("Customer", function(){
    it("should have name", function(){
        var customer = new Customer('Suhas Chatekar');
        expect(customer.name).to.equal('Suhas Chatekar');
    })
});
