
# ERP System

This project is a simplified interface for an ERP (Enterprise Resource Planning) system, aimed at managing basic business operations efficiently. It includes pages for Dashboard, Products Management, and Orders Management, with an additional feature for Orders Calendar View.

## Technology Stack

- Vite + React
- React Router
- React Redux/Toolkit
- Tailwind CSS

## Running the Application

    1. Clone this repository: `git clone https://github.com/VivekSarvaiya/erp-systems.git`    
    2. Navigate to the project directory: `cd <project-directory>`
    3. Install dependencies: `npm install`
    4. Run the development server: `npm run dev`
    5. Access the application in your browser at `http://localhost:5173`

## Pages

### Login:

- Enter any username and password to login.
![login](/public/login.png)

### Dashboard:

- The Dashboard page serves as a comprehensive overview of essential business metrics and insights.
- Provide links for quick navigation to other pages and logout.
- **Statistics View:** 
    1. This section contains basic things like sales, users, products and orders.
- **Charts View:** 
    1. This section contains data represented using charts.
    2. Contains Sales(static data), Product categories(dynamic data), Users(static data).
- ![dashboard](/public/dashboard.png)

### Products Management:

- Present a list of products with details.
- Enable functionalities to add, edit, and delete products.
![products](/public/products.png)

### Orders Management:

- Show a list of orders with details.
- Allow viewing order details, updating status, and deletion.
![orders](/public/orders.png)
-To update status click on view order icon and then select value from dropdown. 
![orderstatus](/public/orderstatus.png)

### Calendar View:

- Display orders based on expected delivery dates.
- Provide the ability to view orders due for delivery on a specific day.
![calendar](/public/calendar.png)

## Submission

The project is hosted on Netlify at: [Link](<repository-url>)