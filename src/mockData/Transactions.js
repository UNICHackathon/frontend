let transactions = [
    {
      "id": "663c9d26de9162079842ce59",
      "dcInd": "DEBIT",
      "transactionAmount": {
        "amount": 30,
        "currency": "EUR"
      },
      "description": "SWIFT Transfer",
      "postingDate": "09/05/2024",
      "valueDate": "09/05/2024",
      "transactionType": "PAYMENT"
    },
    {
      "id": "664307a7de9162079842cef8",
      "transactionAmount": {
        "amount": 10,
        "currency": "EUR"
      },
      "postingDate": "14/05/2024",
      "valueDate": "14/05/2024"
    },
    {
      "id": "663c9d26de9162079842ce5a",
      "dcInd": "DEBIT",
      "transactionAmount": {
        "amount": 50,
        "currency": "EUR"
      },
      "description": "ATM Withdrawal",
      "postingDate": "10/05/2024",
      "valueDate": "10/05/2024",
      "transactionType": "WITHDRAWAL"
    },
    {
      "id": "664307a7de9162079842cefa",
      "transactionAmount": {
        "amount": 120,
        "currency": "EUR"
      },
      "postingDate": "15/05/2024",
      "valueDate": "15/05/2024"
    },
    {
      "id": "663c9d26de9162079842ce5b",
      "dcInd": "DEBIT",
      "transactionAmount": {
        "amount": 75,
        "currency": "EUR"
      },
      "description": "Card Payment",
      "postingDate": "12/05/2024",
      "valueDate": "12/05/2024",
      "transactionType": "PURCHASE"
    },
    {
      "id": "664307a7de9162079842cefc",
      "transactionAmount": {
        "amount": 500,
        "currency": "EUR"
      },
      "postingDate": "18/05/2024",
      "valueDate": "18/05/2024"
    },
    {
      "id": "663c9d26de9162079842ce5c",
      "dcInd": "DEBIT",
      "transactionAmount": {
        "amount": 20,
        "currency": "EUR"
      },
      "description": "Mobile Payment",
      "postingDate": "13/05/2024",
      "valueDate": "13/05/2024",
      "transactionType": "TRANSFER"
    },
    {
      "id": "664307a7de9162079842cefd",
      "transactionAmount": {
        "amount": 300,
        "currency": "EUR"
      },
      "postingDate": "20/05/2024",
      "valueDate": "20/05/2024"
    },
    {
      "id": "663c9d26de9162079842ce5d",
      "dcInd": "DEBIT",
      "transactionAmount": {
        "amount": 40,
        "currency": "EUR"
      },
      "description": "Utility Bill",
      "postingDate": "16/05/2024",
      "valueDate": "16/05/2024",
      "transactionType": "BILL_PAYMENT"
    },
    {
      "id": "664307a7de9162079842cefe",
      "transactionAmount": {
        "amount": 250,
        "currency": "EUR"
      },
      "postingDate": "21/05/2024",
      "valueDate": "21/05/2024"
    },
    {
      "id": "663c9d26de9162079842ce5e",
      "dcInd": "DEBIT",
      "transactionAmount": {
        "amount": 100,
        "currency": "EUR"
      },
      "description": "Online Shopping",
      "postingDate": "11/05/2024",
      "valueDate": "11/05/2024",
      "transactionType": "PURCHASE"
    },
    {
      "id": "664307a7de9162079842ceff",
      "transactionAmount": {
        "amount": 180,
        "currency": "EUR"
      },
      "postingDate": "22/05/2024",
      "valueDate": "22/05/2024"
    },
    {
      "id": "663c9d26de9162079842ce5f",
      "dcInd": "DEBIT",
      "transactionAmount": {
        "amount": 25,
        "currency": "EUR"
      },
      "description": "Gas Station",
      "postingDate": "08/05/2024",
      "valueDate": "08/05/2024",
      "transactionType": "PURCHASE"
    },
    {
      "id": "664307a7de9162079842cf00",
      "transactionAmount": {
        "amount": 15,
        "currency": "EUR"
      },
      "postingDate": "23/05/2024",
      "valueDate": "23/05/2024"
    },
    {
      "id": "663c9d26de9162079842ce60",
      "dcInd": "DEBIT",
      "transactionAmount": {
        "amount": 80,
        "currency": "EUR"
      },
      "description": "Restaurant Payment",
      "postingDate": "07/05/2024",
      "valueDate": "07/05/2024",
      "transactionType": "DINING"
    },
    {
      "id": "664307a7de9162079842cf01",
      "transactionAmount": {
        "amount": 45,
        "currency": "EUR"
      },
      "postingDate": "24/05/2024",
      "valueDate": "24/05/2024"
    },
    {
      "id": "663c9d26de9162079842ce61",
      "dcInd": "DEBIT",
      "transactionAmount": {
        "amount": 60,
        "currency": "EUR"
      },
      "description": "Supermarket Payment",
      "postingDate": "05/05/2024",
      "valueDate": "05/05/2024",
      "transactionType": "PURCHASE"
    },
    {
      "id": "664307a7de9162079842cf02",
      "transactionAmount": {
        "amount": 220,
        "currency": "EUR"
      },
      "postingDate": "25/05/2024",
      "valueDate": "25/05/2024"
    },
    {
      "id": "663c9d26de9162079842ce62",
      "dcInd": "DEBIT",
      "transactionAmount": {
        "amount": 35,
        "currency": "EUR"
      },
      "description": "Bus Ticket",
      "postingDate": "06/05/2024",
      "valueDate": "06/05/2024",
      "transactionType": "TRANSPORT"
    },
    {
      "id": "664307a7de9162079842cf03",
      "transactionAmount": {
        "amount": 90,
        "currency": "EUR"
      },
      "postingDate": "26/05/2024",
      "valueDate": "26/05/2024"
    },
    {
      "id": "663c9d26de9162079842ce63",
      "dcInd": "DEBIT",
      "transactionAmount": {
        "amount": 95,
        "currency": "EUR"
      },
      "description": "Car Maintenance",
      "postingDate": "13/05/2024",
      "valueDate": "13/05/2024",
      "transactionType": "SERVICE"
    },
    {
      "id": "664307a7de9162079842cf04",
      "transactionAmount": {
        "amount": 400,
        "currency": "EUR"
      },
      "postingDate": "27/05/2024",
      "valueDate": "27/05/2024"
    },
    {
      "id": "663c9d26de9162079842ce64",
      "dcInd": "DEBIT",
      "transactionAmount": {
        "amount": 55,
        "currency": "EUR"
      },
      "description": "Hotel Payment",
      "postingDate": "15/05/2024",
      "valueDate": "15/05/2024",
      "transactionType": "LODGING"
    },
    {
      "id": "664307a7de9162079842cf05",
      "transactionAmount": {
        "amount": 50,
        "currency": "EUR"
      },
      "postingDate": "28/05/2024",
      "valueDate": "28/05/2024"
    },
    {
      "id": "663c9d26de9162079842ce65",
      "dcInd": "DEBIT",
      "transactionAmount": {
        "amount": 45,
        "currency": "EUR"
      },
      "description": "Grocery Store",
      "postingDate": "12/05/2024",
      "valueDate": "12/05/2024",
      "transactionType": "PURCHASE"
    },
    {
      "id": "664307a7de9162079842cf06",
      "transactionAmount": {
        "amount": 100,
        "currency": "EUR"
      },
      "postingDate": "29/05/2024",
      "valueDate": "29/05/2024"
    },
    {
      "id": "663c9d26de9162079842ce66",
      "dcInd": "DEBIT",
      "transactionAmount": {
        "amount": 70,
        "currency": "EUR"
      },
      "description": "Gym Membership",
      "postingDate": "17/05/2024",
      "valueDate": "17/05/2024",
      "transactionType": "SUBSCRIPTION"
    },
    {
      "id": "664307a7de9162079842cf07",
      "transactionAmount": {
        "amount": 300,
        "currency": "EUR"
      },
      "postingDate": "30/05/2024",
      "valueDate": "30/05/2024"
    }
  ]

  export default transactions;
  