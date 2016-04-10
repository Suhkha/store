# store
Basic RESTful API with nodeJS, express &amp; mongodb
This example use Postman.

Routes:
- POST: '/api/store' | Create a product in the store
- GET: '/api/store' | Get all products
- GET: '/api/store/:product_id' | Get data about a specific product
- PUT: '/api/store/:product_id' | Edit a specific product
- DELETE: '/api/store/:product_id' | Delete a specific product

Parameters of a product:
- name
- price
- category
- description
- active
