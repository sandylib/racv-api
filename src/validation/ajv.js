import Ajv from 'ajv';

export const validate =  async (schema, payload) => {
  try {
     const  ajv = new Ajv();
     const  valid = ajv.validate(schema, payload);
     if(!valid) {
        throw new Error(JSON.stringify(ajv.errors, 0, 4)) 
     }
  } catch (error) {
     throw new Error(error)
  }
}