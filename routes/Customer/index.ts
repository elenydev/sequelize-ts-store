import { Router } from 'express';
import { Repository}  from 'sequelize-typescript';
import Customer  from '../../models/Customer/customer';

export const customerRoutes = (
    customerRepository: Repository<Customer>
) => Router()

    .get('/customer/all', (req,res,next) => {
        customerRepository.findAll()
        .then(result => console.log(result))
    })
