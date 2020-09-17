## RACV

## Assumptions
- even the test that only requires one router that I still structure it like a real production server, that make this project is extendable and maintainable
- you could use either postman or that test.REST file to test the endpoints (vscode and REST plug that is required installed)
- GET endpoint that didn't do schema validation so if you didn't pass the required parameters (street, state, postcode), return 500 with property not found
- POST do shema valiation and only suburb and description is optional, if payload not correct will error message back with status 500
- The code following DRY(don't repeat yourself) principle, and are fullly testable
- But even with testable code this server is not following TDD, unit tests are demo skills capability
- Don't contain database as docment requirement, it is using memeory data, please to data.js (will load into memeory) file find the sample data for your query.


examples: (also could find in test.REST)
- GET http://localhost:8080/api/v1/property/address?street=644 Mill Lane&suburb=Noxen&state=Virgin Islands&postcode=1019
- POST only suburb and description is optional, if didn't pass there is schma validation, so it will error message back with status 500

```
POST http://localhost:8080/api/v1/property/address HTTP/1.1
content-type: application/json

{
  "address": {
    "street": "233 cook stree",
    "suburb": "lewisham",
    "state": "NSW",
    "postcode": 2300
  },
  "price": "$19000000",
  "description": "Fugiat cillum reprehenderit commodo fugiat in dolore aliquip. Reprehenderit enim cupidatat duis do id excepteur dolore ut adipisicing amet. Ex fugiat eiusmod eiusmod aute culpa occaecat nostrud. Aliqua dolore occaecat elit laborum. Incididunt do cillum ad ad nisi laborum laborum aliquip. Nisi reprehenderit amet consequat velit tempor nisi. Veniam fugiat ex commodo ea pariatur voluptate occaecat do ad nulla occaecat pariatur.\r\n"
}
```


### Setup
- under the root project, ```npm install```

### Start server

- ```npm start```

### Test

- ```npm test```

### if you are running into any issue that may node version different cause, please see .nvmc file that I have write the version that is running in my machine.
