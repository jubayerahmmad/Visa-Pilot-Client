# Visa Pilot

This project is a web application designed to manage and display visas added by users. It utilizes various technologies to provide a seamless user experience.

## Technologies Used

- Frontend: React, React Router DOM etc.
- Backend: Node.js, Express.js
- Database: MongoDB
- Authentication: Firebase.
- State Management: React Context API
- Styling: Tailwind CSS, daisyUi, ZenUi

## Features

- User Authentication: Users can register and log in to access their added visas.
- Visa Management: Users can add, update, and delete visas.
- Visa Display: Added visas are displayed in a card format, including details such as country name, visa type, processing time, fee, validity, and application method.
- Filtering: Visas can be filtered based on the visa type on All Visas Page.
- Real-time Updates: The application updates in real-time when a visa is added, updated, or deleted.
- Responsive Design: The application is designed to be responsive and accessible on various devices.
- Error Handling: The application includes error handling for common scenarios, such as invalid user input.
- Animation: The application uses animations to enhance the user experience, particularly when no data is available.
- Implemented a search function for applied visas

## Dependencies

- `animate.css`: ^4.1.1
- `aos`: ^2.3.4
- `firebase`: ^11.0.2
- `lottie-react`: ^2.4.0
- `react`: ^18.3.1
- `react-datepicker`: ^7.5.0
- `react-dom`: ^18.3.1
- `react-icons`: ^5.4.0
- `react-router-dom`: ^7.0.2
- `react-tooltip`: ^5.28.0
- `sweetalert2`: ^11.14.5
- `swiper`: ^11.1.15

## Installation Process

To run this project locally, follow these steps:

1. **Clone the repository:**

   ```bash
   git clone https://github.com/jubayerahmmad/Visa-Pilot-Client
   cd visa-pilot
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Set up Firebase:**

   - Create a Firebase project at [Firebase Console](https://console.firebase.google.com/).
   - Add a web app to your Firebase project.

- Copy the Firebase configuration and create a `.env` file in the root directory of your project with the following content:

  ```env
  # This section contains environment variables required for the Visa Pilot application.
  # These variables are used to configure Firebase services.

  VITE_apiKey=your_api_key
  VITE_authDomain=your_auth_domain
  VITE_projectId=your_project_id
  VITE_storageBucket=your_storage_bucket
  VITE_messagingSenderId=your_messaging_sender_id
  VITE_appId=your_app_id
  ```

  Replace the placeholder values with your actual Firebase project configuration.

  ```

  ```

4. **Run the application:**

   ```bash
   npm run dev
   ```

5. **Open your browser:**
   - Navigate to `http://localhost:5173` to view the application.

## Live URL

Live URL: https://visa-pilot-db95f.web.app/
