const inventoryData = [
    {id: 0, name: 'Single Pole Circuit Breaker, 15 amp', quantity: '100', description: 'Circuit Breaker, 15 amp', brand: 'Square D', category: 'Circuit Breakers'},
    {id: 1, name: 'Single Pole Circuit Breaker, 20 amp', quantity: '100', description: 'Circuit Breaker, 20 amp', brand: 'Square D', category: 'Circuit Breakers'},
    {id: 2, name: 'Two Pole Circuit Breaker, 30 amp', quantity: '100', description: 'Circuit Breaker, 30 amp', brand: 'Square D', category: 'Circuit Breakers'},
    {id: 3, name: 'Two Pole Circuit Breaker, 40 amp', quantity: '100', description: 'Circuit Breaker, 40 amp', brand: 'Square D', category: 'Circuit Breakers'},
    {id: 4, name: 'Two Pole Circuit Breaker, 50 amp', quantity: '100', description: 'Circuit Breaker, 50 amp', brand: 'Square D', category: 'Circuit Breakers'},
    {id: 5, name: 'Two Pole Circuit Breaker, 60 amp', quantity: '100', description: 'Circuit Breaker, 60 amp', brand: 'Square D', category: 'Circuit Breakers'},
    {id: 6, name: 'Two Pole Circuit Breaker, 80 amp', quantity: '100', description: 'Circuit Breaker, 80 amp', brand: 'Square D', category: 'Circuit Breakers'},
    {id: 7, name: 'Two Pole Circuit Breaker, 100 amp', quantity: '100', description: 'Circuit Breaker, 100 amp', brand: 'Square D', category: 'Circuit Breakers'},
    {id: 8, name: 'Two Pole Circuit Breaker, 15 tandems', quantity: '100', description: 'Circuit Breaker, 15 tandems', brand: 'Square D', category: 'Circuit Breakers'},
    {id: 9, name: 'Two Pole Circuit Breaker, 20 tandems', quantity: '100', description: 'Circuit Breaker, 20 tandems', brand: 'Square D', category: 'Circuit Breakers'},
    {id: 10, name: 'Single Pole Circuit Breaker, 15 amp', quantity: '100', description: 'Circuit Breaker, 15 amp', brand: 'Eaton', category: 'Circuit Breakers'},
    {id: 11, name: 'Single Pole Circuit Breaker, 20 amp', quantity: '100', description: 'Circuit Breaker, 20 amp', brand: 'Eaton', category: 'Circuit Breakers'},
    {id: 12, name: 'Two Pole Circuit Breaker, 30 amp', quantity: '100', description: 'Circuit Breaker, 30 amp', brand: 'Eaton', category: 'Circuit Breakers'},
    {id: 13, name: 'Two Pole Circuit Breaker, 40 amp', quantity: '100', description: 'Circuit Breaker, 40 amp', brand: 'Eaton', category: 'Circuit Breakers'},
    {id: 14, name: 'Two Pole Circuit Breaker, 50 amp', quantity: '100', description: 'Circuit Breaker, 50 amp', brand: 'Eaton', category: 'Circuit Breakers'},
    {id: 15, name: 'Two Pole Circuit Breaker, 60 amp', quantity: '100', description: 'Circuit Breaker, 60 amp', brand: 'Eaton', category: 'Circuit Breakers'},
    {id: 16, name: 'Two Pole Circuit Breaker, 80 amp', quantity: '100', description: 'Circuit Breaker, 80 amp', brand: 'Eaton', category: 'Circuit Breakers'},
    {id: 17, name: 'Two Pole Circuit Breaker, 100 amp', quantity: '100', description: 'Circuit Breaker, 100 amp', brand: 'Eaton', category: 'Circuit Breakers'},
    {id: 18, name: 'Two Pole Circuit Breaker, 15 tandems', quantity: '100', description: 'Circuit Breaker, 15 tandems', brand: 'Eaton', category: 'Circuit Breakers'},
    {id: 19, name: 'Two Pole Circuit Breaker, 20 tandems', quantity: '100', description: 'Circuit Breaker, 20 tandems', brand: 'Eaton', category: 'Circuit Breakers'},
    {id: 20, name: 'Single Pole Circuit Breaker, 15 amp', quantity: '100', description: 'Circuit Breaker, 15 amp', brand: 'Siemens', category: 'Circuit Breakers'},
    {id: 21, name: 'Single Pole Circuit Breaker, 20 amp', quantity: '100', description: 'Circuit Breaker, 20 amp', brand: 'Siemens', category: 'Circuit Breakers'},
    {id: 22, name: 'Two Pole Circuit Breaker, 30 amp', quantity: '100', description: 'Circuit Breaker, 30 amp', brand: 'Siemens', category: 'Circuit Breakers'},
    {id: 23, name: 'Two Pole Circuit Breaker, 40 amp', quantity: '100', description: 'Circuit Breaker, 40 amp', brand: 'Siemens', category: 'Circuit Breakers'},
    {id: 24, name: 'Two Pole Circuit Breaker, 50 amp', quantity: '100', description: 'Circuit Breaker, 50 amp', brand: 'Siemens', category: 'Circuit Breakers'},
    {id: 25, name: 'Two Pole Circuit Breaker, 60 amp', quantity: '100', description: 'Circuit Breaker, 60 amp', brand: 'Siemens', category: 'Circuit Breakers'},
    {id: 26, name: 'Two Pole Circuit Breaker, 80 amp', quantity: '100', description: 'Circuit Breaker, 80 amp', brand: 'Siemens', category: 'Circuit Breakers'},
    {id: 27, name: 'Two Pole Circuit Breaker, 100 amp', quantity: '100', description: 'Circuit Breaker, 100 amp', brand: 'Siemens', category: 'Circuit Breakers'},
    {id: 28, name: 'Two Pole Circuit Breaker, 15 tandems', quantity: '100', description: 'Circuit Breaker, 15 tandems', brand: 'Siemens', category: 'Circuit Breakers'},
    {id: 29, name: 'Two Pole Circuit Breaker, 20 tandems', quantity: '100', description: 'Circuit Breaker, 20 tandems', brand: 'Siemens', category: 'Circuit Breakers'},
    {id: 30, name: 'Single Pole Circuit Breaker, 15 amp', quantity: '100', description: 'Circuit Breaker, 15 amp', brand: 'General Electric', category: 'Circuit Breakers'},
    {id: 31, name: 'Single Pole Circuit Breaker, 20 amp', quantity: '100', description: 'Circuit Breaker, 20 amp', brand: 'General Electric', category: 'Circuit Breakers'},
    {id: 32, name: 'Two Pole Circuit Breaker, 30 amp', quantity: '100', description: 'Circuit Breaker, 30 amp', brand: 'General Electric', category: 'Circuit Breakers'},
    {id: 33, name: 'Two Pole Circuit Breaker, 40 amp', quantity: '100', description: 'Circuit Breaker, 40 amp', brand: 'General Electric', category: 'Circuit Breakers'},
    {id: 34, name: 'Two Pole Circuit Breaker, 50 amp', quantity: '100', description: 'Circuit Breaker, 50 amp', brand: 'General Electric', category: 'Circuit Breakers'},
    {id: 35, name: 'Two Pole Circuit Breaker, 60 amp', quantity: '100', description: 'Circuit Breaker, 60 amp', brand: 'General Electric', category: 'Circuit Breakers'},
    {id: 36, name: 'Two Pole Circuit Breaker, 80 amp', quantity: '100', description: 'Circuit Breaker, 80 amp', brand: 'General Electric', category: 'Circuit Breakers'},
    {id: 37, name: 'Two Pole Circuit Breaker, 100 amp', quantity: '100', description: 'Circuit Breaker, 100 amp', brand: 'General Electric', category: 'Circuit Breakers'},
    {id: 38, name: 'Two Pole Circuit Breaker, 15 tandems', quantity: '100', description: 'Circuit Breaker, 15 tandems', brand: 'General Electric', category: 'Circuit Breakers'},
    {id: 39, name: 'Two Pole Circuit Breaker, 20 tandems', quantity: '100', description: 'Circuit Breaker, 20 tandems', brand: 'General Electric', category: 'Circuit Breakers'}  
  ]
  
  export default inventoryData
  