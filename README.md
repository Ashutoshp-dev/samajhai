# Responsive Modal with Image Magnifier

This project implements a **Responsive Modal Component** using **React** that opens on a button click, displays structured content, and includes an **image magnifier effect** when hovering over the image. The app is designed to be fully responsive across devices (mobile, tablet, and desktop).

## Objective

- **Trigger Button**: On clicking a "View Details" button, a modal appears.
- **Modal Behavior**: The modal should appear centered with a semi-transparent background and close when clicked outside.
- **Modal Content**: The modal contains a title, an image, and a zoom-in magnifier effect when hovering over the image.
- **Image Magnifier**: On hover, the magnifier should zoom in on the image portion under the cursor.
- **Styling**: The modal and magnifier should be responsive and polished, ensuring a smooth user experience.

## Features

- **Trigger Button**: Displays a "View Details" button to open the modal.
- **Image Magnifier**: Hovering over the image magnifies a portion of the image, following the cursor.
- **Responsive Design**: The modal works perfectly on mobile, tablet, and desktop devices.
- **Modal Close**: Clicking outside the modal (on the overlay) will close the modal.
  
## Technologies Used

- **React**: For creating the modal and managing its state.
- **CSS**: For styling the modal and implementing the image magnifier effect.
- **Docker**: To containerize the app and provide an easy setup.
- **Docker Compose**: For managing app dependencies and services.

## Setup

### Clone the Repository
```bash
git clone https://github.com/yourusername/samajhai.git
```

### Navigate to the Project Directory
```bash
cd samajhai
```

### Build and Run the App Using Docker Compose
```bash
docker-compose up --build
```