# [RENOXY](https://home-repair-service-03.web.app) Renewal and Oxygen for Your Home

Welcome to the **Home Repair Services Web Application**, a platform where users can offer, book, and manage various home repair services such as plumbing, electrical repairs, and carpentry. Below are the key features and functionalities of the website.

## Live Website
[Click Here to Visit Website](https://home-repair-service-03.web.app)

## Backend Repository 
[Click Here to Visit Backend Code](https://github.com/dear-mahmud-bd/home-repair-services-server)

## Key Features

- **Authentication System**
  - Simple login and registration with Email/Password.
  - Social login using Google.

- **Responsive Design**
  - The website is fully responsive and optimized for mobile, tablet, and desktop views.
  - Dynamic theme toggling (Light/Dark mode) based on user preference.

- **Home Page**
  - Beautiful banner on the homepage featuring home repair services.
  - Featured section showing popular home repair services such as plumbing, electrical, and carpentry.
  - Additional unique sections related to home repair tips and service highlights.

- **Service Management**
  - Users can add, update, and delete their own home repair services.
  - View all available services with descriptions, pricing, and provider information.

- **Booking System**
  - Users can book home repair services from the list of available services.
  - Booking modal contains all service details, and editable fields for the booking date and special instructions (e.g., specific repair requirements, preferred time slots).
  - Booked services are tracked in the database with a default status of "pending."

- **Private Routes**
  - `Manage Services` page where service providers can update or delete their own home repair services.
  - `Booked Services` page showing all services the user has booked.
  - `Service To-Do` page where service providers can manage the services booked by others and update the status to "working" or "completed."

- **Search Functionality**
  - Search services based on name with instant results, allowing users to quickly find specific home repair services.

- **Dynamic Titles**
  - Website titles dynamically change based on the route and the current page.
  - `react helmet` is used to change titles dynamically.

## Additional Features
- Loading spinner to indicate data loading state.
- Form validation and error messages for user actions (e.g., login, registration, booking, adding, updating).

## Technologies Used
- **Frontend**: React, TailwindCSS, DaisyUI
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Hosting**: Firebase (Client-side), Vercel (Server-side)
 
# Assignment_ID: assignment_category_0002

 