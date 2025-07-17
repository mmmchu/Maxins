The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS



Here’s a step-by-step guide to run the Maxins project in VS Code on your local machine:

✅ Step 0: Prerequisites
Make sure you have the following installed:

Tool	Download Link
VS Code	https://code.visualstudio.com/
Node.js	https://nodejs.org/
Git	https://git-scm.com/

💡 Tip: You can use nvm to manage Node.js versions (optional but recommended).

✅ Step 1: Open VS Code and Clone the Repo
Open VS Code.

Open the built-in terminal:

Ctrl + ~ (Windows/Linux)

Cmd + ~ (macOS)

Run the following command in the terminal:

bash
Copy
Edit
git clone https://github.com/mmmchu/Maxins.git
cd Maxins
✅ Step 2: Install Dependencies
Once inside the Maxins folder, install dependencies:

bash
Copy
Edit
npm install
This installs all the packages listed in package.json (like React, Vite, Tailwind, etc.).

✅ Step 3: Run the Development Server
After installation completes, start the local dev server:

bash
Copy
Edit
npm run dev
You should see output like:

arduino
Copy
Edit
  VITE vX.X.X  ready in XX ms

  ➜  Local:   http://localhost:5173/
✅ Step 4: Open the Project in a Browser
Click or copy the link (e.g., http://localhost:5173/) into your browser to see your website in action!

✅ Step 5: Optional – Enable Auto Preview in VS Code
Install the Live Server or Vite extension (optional).

Or just let npm run dev keep running; any file change will auto-refresh the browser.

🔄 Next Time You Want to Run It
When you come back to the project later:

bash
Copy
Edit
cd Maxins
npm install      # Only once – skip if already installed
npm run dev
