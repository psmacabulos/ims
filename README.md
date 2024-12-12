<img src="./bayan-logo.png" width='500' alt='fsdfdsfs'>

# Inventory Management System (IMS)

## Project Overview

This is my final project after 13 days of training sponsored by Bayan Academy and BPI. Thank you **Sir Aldrin Tamayo** for imparting your wisdom and patience to us!

The Inventory Management System (IMS) is a web application designed to manage inventory items. Users can create, read, update, and delete items in the inventory. The application is built using the Model-View-Controller (MVC) architecture for maintainability and scalability.

## Technologies Used

- **Backend**: Node.js, Express.js
- **Frontend**: EJS (Embedded JavaScript templates)
- **Database**: MongoDB Atlas
- **Deployment**: Render
- **Version Control**: Git

## Core Features

1. **Item Management**:
   - Add new items to the inventory.
   - View a list of all items.
   - Edit details of existing items.
   - Remove items from the inventory.
2. **Search and Filter** (SOON!):
   - Search items by name or category.
   - Filter items based on specific criteria.

## Installation and Setup

1. Clone the repository:

   ```bash
   git clone https://github.com/psmacabulos/ims.git
   cd inventory-management-system
   ```

2. Install dependencies

   ```bash
   npm install
   ```

3. Setup environment variables in .env file:

   ```Plaintext
    MONGODB_URI=mongodb+srv://<username>:<password>@<cluster-url>/test?retryWrites=true&w=majority

   ```

4. Start the application:

   ```bash
   node index.js
   ```

## Deployment

The application is deployed using Render and connects to MongoDB Atlas for database management.The app can be viewed here: [IMS](https://inventory-management-v81v.onrender.com/)
