const addressSchema ={
  "type": "object",
  "properties": {
    "_id": {
      "type": "string"
    },
    "index": {
      "type": "integer"
    },
    "guid": {
      "type": "string"
    },
    "price": {
      "type": "string"
    },
    "address": {
      "type": "object",
      "properties": {
        "street": {
          "type": "string"
        },
        "suburb": {
          "type": "string"
        },
        "state": {
          "type": "string"
        },
        "postcode": {
          "type": "integer"
        }
      },
      "required": [
        "street",
        "state",
        "postcode"
      ]
    },
    "description": {
      "type": "string"
    }
  },
  "required": [
    "price",
    "address"
  ]
}

export default addressSchema;