# React Routes Practice 2

## Setup
1. Fork this repository
2. Clone the forked repository onto your local machines
3. In the root directory, type `npm ci`, which installs dependencies for the project
4. Finally, type `npm run dev`, which starts a development server that runs your website in the browser. That server
   will reload your website whenever you make any changes to source files

## Instructions
- In `App.jsx`, add a route for “products/:id/edit”
- In `ProductsPage.jsx` add an “Edit” link for each product
- In `EditProduct.jsx` use the location object to access the product data and populate the form

## Extension 1
- In the `handleSubmit` method in `EditProduct.jsx`, update the products list with the edited product.
