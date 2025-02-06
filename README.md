# E-Commerce Product Listing

## Overview
This project is an e-commerce product listing application that fetches product data from an API and displays it with filtering options. The application uses React with Redux Toolkit for state management.

Live Demo 

Check out the live version of the project: [E-Commerce Website](https://e-commerce-website-theta-neon.vercel.app/)

## Installation & Running the Project

### Prerequisites
Ensure you have Node.js and npm installed on your system.

### Steps to Install and Run
1. **Clone the Repository**
   ```sh
   git clone https://github.com/your-repository-link.git
   cd your-project-folder
   ```

2. **Install Dependencies**
   ```sh
   npm install
   ```

3. **Start the Application**
   ```sh
   npm start
   ```

4. **Access the App**
   - Open `http://localhost:3000/` in your web browser.

## Design Decisions & Notable Features

### State Management with Redux Toolkit
- The application uses Redux Toolkit to manage global state efficiently.
- The `productSlice.js` handles actions like fetching, filtering, and managing loading states.

### API Integration
- Products and categories are fetched from `https://fakestoreapi.com/products` and `https://fakestoreapi.com/products/categories`.
- Redux actions update the store, making data accessible across components.

### Custom Hooks
- The `useProductAPI.js` custom hook abstracts API calls and state logic, making the components cleaner and easier to manage.

### Filtering Feature
- Users can filter products by category, with Redux storing both full product lists and filtered views.

## Challenges & Potential Improvements

### Challenges Faced
- **State Management Complexity**: Managing multiple states for loading, error handling, and filtering required careful implementation.
- **API Response Handling**: Ensuring smooth loading states and handling errors from API failures.

### Future Improvements
- **Pagination & Search**: Adding pagination and search functionality to improve usability.
- **Error Handling Enhancements**: Improving user feedback on API failures, such as showing toast notifications.
- **Unit Testing**: Implementing Jest & React Testing Library to improve reliability.

## Contribution
Feel free to fork this repository and submit pull requests for improvements.

## License
This project is open-source and available under the [MIT License](LICENSE).

