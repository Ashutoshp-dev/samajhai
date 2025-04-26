# Step 1: Use the official Node.js image to build the app
FROM node:18 AS build

# Step 2: Set the working directory inside the container
WORKDIR /app

# Step 3: Copy the package.json and package-lock.json to the container
COPY package*.json ./

# Step 4: Install dependencies
RUN npm install --legacy-peer-deps

# Step 5: Copy the rest of the application code to the container
COPY . .

# Step 6: Build the React app for production
RUN npm run build

# Step 7: Install a simple static server to serve the app
RUN npm install -g serve

# Step 8: Expose port 3000 for the React app
EXPOSE 3000

# Step 9: Run the app using the serve command, pointing to the dist directory
CMD ["serve", "-s", "dist", "-l", "3000"]