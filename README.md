# Custom Hook Form for Registering Users

This repository demonstrates a simple user registration form implemented using a custom hook in a React application. The form handles both controlled and uncontrolled inputs while using TypeScript and Vite for the development environment.

## Prerequisites

Ensure you have the following installed in your development environment:

- Node.js
- npm (Node Package Manager) or Yarn

## Installation

To set up and run the project:

1. Clone this repository:

   ```bash
   git clone https://github.com/alirezahemati/formCustomHook.git
   ```

2. Navigate to the project directory:

   ```bash
   cd custom-hook-registration-form
   ```

3. Install the necessary dependencies:

   ```bash
   npm install
   # or
   yarn
   ```

4. Start the development server:

   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. Open your browser and visit `http://localhost:5173` to see the application.

## Usage

The project consists of a simple user registration form that collects user details such as name, email, and password. It utilizes a custom hook to manage form state and validation.

The form includes:

- Proper validation for each input field.
- Both controlled and uncontrolled input handling.
- Integration with TypeScript for type safety.

The components are located in the `src/components` directory, and the main form logic resides in the `src/hooks/useForm.tsx` file.

## Technologies Used

- React
- TypeScript
- Vite

## Folder Structure

- `src/components/`: Contains React components.
- `src/hooks/`: Houses the custom hook for form management.
- `types.d.ts`: Defines TypeScript types and interfaces.

## Contributing

Feel free to contribute by opening issues or creating pull requests for improvements or bug fixes. Make sure to follow the established code formatting and naming conventions.
