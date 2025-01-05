# React Native Navigation App

This project is a React Native application that demonstrates the use of navigation between multiple screens (`Home`, `Contact Us`, and `About Us`) with a clean and modern UI built using `react-native-paper` and `react-native-safe-area-context`.

## Features

- **Navigation**: Seamless navigation between screens using `@react-navigation/native`.
- **Responsive Design**: Supports various device sizes and platforms (iOS and Android).
- **Stylish UI**: Built using `react-native-paper` for consistent and visually appealing components.
- **Forms**: Interactive `Contact Us` form with input fields for Name, Email, Phone number, and Message.

## Screens

1. **Home Screen**:
   - Provides buttons to navigate to the `Contact Us` and `About Us` screens.
   - Displays placeholder text for demonstration purposes.

2. **Contact Us Screen**:
   - Contains a form where users can input their contact details and message.
   - Includes a button to navigate back to the `Home` screen.

3. **About Us Screen**:
   - Displays a placeholder image and introductory text about the application.
   - Provides navigation to the `Contact Us` screen.

## Dependencies

- `react-native`: Core framework for building native apps.
- `@react-navigation/native` and `@react-navigation/native-stack`: For navigation between screens.
- `react-native-paper`: Material design components.
- `react-native-safe-area-context`: Handles safe area views for better UX.

## Project Structure

```
src/
├── components/
│   ├── Home.js         # Home screen component
│   ├── ContactUs.js    # Contact Us screen component
│   └── AboutUs.js      # About Us screen component
├── assets/
│   └── about_us.jpg    # Image used in About Us screen
└── App.js              # Entry point of the application
```
## Output

https://github.com/user-attachments/assets/16151ab2-f13e-4326-9348-d2a8d7b3a8c3
