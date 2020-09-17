import {  Router } from "express";
import { v4 as uuidv4 } from 'uuid';
import objectid from 'objectid';
import { catchAsync } from '../middleware';
import { validate } from '../validation'
import addressSchema from '../models/addressSchema'
import  data from './data'
import { async } from "regenerator-runtime";
const router = Router();


const randomIntFromInterval = () => Math.floor(Math.random() * (2 - 1 + 1) + 1);
const levels = ['below', 'avarage', 'above'];

router.get('/property/address', catchAsync(async (req, res) => {
  const {street, suburb : city, state, postcode} = req.query;
  let result;

  if(street && city && state && postcode) {
   result = data.find(item=> item.address.street.toLowerCase() === street.toLowerCase() && item.address.city.toLowerCase() === city.toLowerCase() && item.address.state.toLowerCase() === state.toLowerCase() && item.address.postcode.toString().toLowerCase() === postcode.toLowerCase());
 
 }

 else if(street && state && postcode) {
  result = data.find(item=> item.address.street.toLowerCase() === street.toLowerCase() && item.address.state.toLowerCase() === state.toLowerCase() && item.address.postcode.toString().toLowerCase() === postcode.toLowerCase());
 
}


 if(!result) {
  return res.status(500).json({error: `No property found with the specified address: ${street}, ${city}, ${state}, ${postcode}`})
}
 
  return res
        .status(200)
        .json({ price: result.price, address: result.address,  estimated: `this property currently is ${levels[randomIntFromInterval()]} the avarage price of this ${result.city || result.state}`});
 })

)

router.post('/property/address', catchAsync(async (req,res) => {
 
   await validate(addressSchema, req.body);

  const newEntry = {
    price: req.body.price,
    description: req.description || '',
    address:{
      street: req.body.address.street,
      city: req.body.address.suburb,
      state: req.body.address.state,
      postcode: req.body.address.postcode
    },
    idex: data.length,
    guid: uuidv4(),
    _id: objectid()
  }
  
  data.push(newEntry)
    
  res.json({message: 'OK'})

}))

export default router