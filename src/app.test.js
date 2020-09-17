var chai = require('chai')
  , chaiHttp = require('chai-http'),
  server = require('./index'), 
  expect = chai.expect;;

chai.use(chaiHttp);

describe("GET /random-url", () => {
 
  it('fails, as expected', function(done) {
    chai.request('http://localhost:8080')
    .get('/')
    .end(function(err, res) {
   
      expect(res).to.have.status(404);
      done();                         
    });
  });

})

describe("GET /Address ", () => {
 
  it('should return 200 get address back send to the correct endpoints with query variables', function(done) {
    chai.request('http://localhost:8080')
    .get('/api/v1/property/address?street=644 Mill Lane&suburb=Noxen&state=Virgin Islands&postcode=1019')
    .end(function(err, res) {
     
      expect(res).to.have.status(200);
      done();                         
    });
  });

  it('should should return 500 if address could not find', function(done) {
    chai.request('http://localhost:8080')
    .get('/api/v1/property/address?street=foo&suburb=Noxen&state=Virgin Islands&postcode=1019')
    .end(function(err, res) {
     
      expect(res).to.have.status(500);
      done();                         
    });
  });

})


describe("POST /Address ", () => {
 
  it('should return error message with status 500', function(done) {
    chai.request('http://localhost:8080')
    .post('/api/v1/property/address')
    .send({
      "address": {
        "street": "233 cook stree",
        "city": "lewisham",
        "state": "NSW",
        "postcode": 2300
      },
      "price": "$19000000",
      "description": "Fugiat cillum reprehenderit commodo fugiat in dolore aliquip. Reprehenderit enim cupidatat duis do id excepteur dolore ut adipisicing amet. Ex fugiat eiusmod eiusmod aute culpa occaecat nostrud. Aliqua dolore occaecat elit laborum. Incididunt do cillum ad ad nisi laborum laborum aliquip. Nisi reprehenderit amet consequat velit tempor nisi. Veniam fugiat ex commodo ea pariatur voluptate occaecat do ad nulla occaecat pariatur.\r\n"
    })
    .end(function (err, res) {
      expect(err).to.be.null;
      expect(res).to.have.status(200);
      done()
   });

    
  });


})

