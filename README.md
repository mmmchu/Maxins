# 🎶 Maxins

---

## 🚀 Run Maxins Locally in VS Code

Follow this step-by-step guide to set up and run Maxins on your local development environment using **Visual Studio Code**.

---

### ✅ Step 0: Prerequisites

Make sure you have the following installed on your machine:

| Tool       | Download Link                         |
|------------|----------------------------------------|
| VS Code    | https://code.visualstudio.com/         |
| Node.js    | https://nodejs.org/                    |
| Git        | https://git-scm.com/                   |

💡 *Tip:* Use [nvm](https://github.com/nvm-sh/nvm) to manage multiple Node.js versions easily (optional but recommended).

---

### ✅ Step 1: Clone the Repository

1. Open **Visual Studio Code**.
2. Open the integrated terminal:
   - `Ctrl + ~` (Windows/Linux)
   - `Cmd + ~` (macOS)
3. Run the following commands:

```bash
git clone https://github.com/mmmchu/Maxins.git
cd Maxins
```

---

### ✅ Step 2: Install Dependencies

Inside the `Maxins` directory, install the necessary dependencies:

```bash
npm install
```

This will install everything listed in `package.json`, including:

- React
- Vite
- Tailwind CSS
- shadcn/ui
- TypeScript
- Radix UI

---

### ✅ Step 3: Start the Development Server

Run the development server using:

```bash
npm run dev
```

You should see output like this:

```
VITE vX.X.X  ready in XX ms

➜  Local:   http://localhost:5173/
```

---

### ✅ Step 4: Open in Browser

Copy the link (e.g., `http://localhost:5173/`) and paste it into your browser. The Maxins app will open with live auto-reloading.

---

### ✅ Step 5: (Optional) Enable Auto Preview in VS Code

- You can install the **Live Server** or **Vite** extension in VS Code for enhanced live preview.
- Or simply leave `npm run dev` running — the browser will auto-refresh on file changes.

---

### 🔄 Next Time You Want to Run It

When returning to the project:

```bash
cd Maxins
npm install      # Only needed once
npm run dev
```

---

## 🛠️ Project Stack

| Layer        | Tech Used          |
|--------------|--------------------|
| Frontend     | React + TypeScript |
| Build Tool   | Vite               |
| UI Framework | shadcn/ui + Radix  |
| Styling      | Tailwind CSS       |

---

## 📂 Project Structure (Simplified)

```
Maxins/
├── src/
│   ├── components/        # Reusable UI components
│   ├── App.tsx            # Root React component
│   └── main.tsx           # Vite entry point
├── public/                # Static assets
├── index.html             # Main HTML file
├── package.json           # Project metadata & scripts
├── tailwind.config.ts     # Tailwind CSS config
└── vite.config.ts         # Vite config
```

---

## ✨ Enjoy Building with Maxins!

If you have any questions, feel free to open an issue or contribute!

