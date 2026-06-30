# Random Number Generator

An interactive random number generator web app built with vanilla HTML, CSS, and JavaScript, featuring a bold black and neon pink glow theme.

## 🔗 Live Demo

https://random-number-generator-mini-project.netlify.app

## 📸 Preview

<img width="1867" height="951" alt="Screenshot 2026-06-30 145217" src="https://github.com/user-attachments/assets/8d646ce1-0d48-4539-8638-4d59a20ac8c9" />


## ✨ Features

- Generates three random numbers (between 50–100) at once with a single click
- Neon glow text effect throughout the UI
- Custom favicon
- Clean, centered layout that adapts to the screen
- Bold black and neon pink color theme

## 🛠️ Built With

- HTML5
- CSS3 (Flexbox, text-shadow glow effects)
- Vanilla JavaScript

## 📁 Project Structure

```
random-number-generator/
├── index.html
├── style.css
├── index.js
└── images/
    └── random_number_generator_logo_numbers.png
```

## 🚀 Getting Started

No installation needed. Just clone the repo and open `index.html` in your browser.

```bash
git clone https://github.com/alenjeeson0/random_number_generator.git
cd random-number-generator
```

Then open `index.html` directly in your browser.

## 🧠 How It Works

Each click of the **Random** button generates three numbers using:

```javascript
Math.floor(Math.random() * (max - min + 1)) + min
```

This formula produces a random whole number within an inclusive range — in this case, between 50 and 100.

## 📚 What I Learned

- Using `Math.random()` and `Math.floor()` to generate numbers within a custom inclusive range
- Centering content vertically and horizontally with Flexbox
- Creating glow/neon effects using CSS `text-shadow`
- Structuring DOM elements to update multiple values independently
- Adding a custom favicon to a project

## 📄 License

© 2025 alenjeeson. All rights reserved.
