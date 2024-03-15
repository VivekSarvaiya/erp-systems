
# ERP System

This project is a streamlined interface for an ERP (Enterprise Resource Planning) system built with React.js. Its purpose is to efficiently manage fundamental business operations for small and medium-sized businesses. The interface encompasses pages for Dashboard, Product Management, and Order Management, with an added feature for viewing Orders in a Calendar format.


## Tech Stack

- React + Vite 
- React Redux/Redux-Toolkit
- React Router
- Tailwind CSS


## Starting the Application

    1. Clone this repository: `https://github.com/VivekSarvaiya/erp-systems.git`
    2. Go to the project directory: `cd erp-systems`
    3. Install necessary dependencies: `npm install`
    4. Run the development server: `npm run dev`
    5. Access the application in your browser at `http://localhost:5173`


## Pages

### Login:

- Sign in to the application using any username and password
![login](/public/login.png)

### Dashboard:

The Dashboard page acts as a centralized hub providing a comprehensive overview of essential business metrics and insights, facilitating informed decision-making. Here's a breakdown of its key features:

- **Navigation Links**: The Sidebar offers convenient links for quick navigation to other essential pages within the application, ensuring seamless access to specific functionalities.

- **Metrics Overview**: This section presents key business metrics, including sales, users, products, and orders, providing a snapshot of the current state of the business.

- **Charts View**: The Charts View section enhances data visualization and analyze by presenting information in a graphical format
    
    - Sales Chart (static): Visualizes sales data using interactive charts, allowing users to analyze sales performance and identify patterns or anomalies.

    - Product Categories (dynamic): Dynamically displays product categories, enabling users to assess the performance of different product categories and make data-driven decisions.

    - Users Chart (static): Provides insights into user-related metrics through graphical representations, including user activity trends, user demographics, and user engagement metrics.

![dashboard](/public/dashboard.png)

### Products Management:

- The Products Management page facilitates efficient management of the product inventory, offering a range of functionalities to ensure accurate product information and seamless operations.

- This page enables users to efficiently manage the product inventory through functionalities such as product listing with detailed information, adding, editing, and deleting products, searching and filtering for specific products, performing bulk operations, and potential integration with the Orders Management system for comprehensive product lifecycle management.

![products](/public/products.png)


### Orders Management:

- The Orders Management page facilitates effective oversight of all orders, providing essential functionalities for seamless order processing and management.

- The Orders Management page allows users to view, edit, and delete orders, providing comprehensive order details, streamlined status updates, and intuitive order management functionalities.

- Implement a user-friendly process for updating order status, enabling users to click on the view order icon and select the desired status from a dropdown menu for quick and intuitive status updates.

![orders](/public/orders.png)

![orderstatus](/public/orderstatus.png)

### Orders Calendar View:

- The Orders Calendar View presents a visual representation of orders scheduled for delivery, offering a convenient way to track and manage order timelines.

- Provide access to detailed order information directly from the calendar view, allowing users to access order details, update statuses, and perform other relevant actions seamlessly.

![calendar](/public/calendar.png)


## Submission

The project is hosted on Netlify at: [erp-flex](<https://erp-flex.netlify.app/dashboard>)
