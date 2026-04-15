# 🔥 Hot or Cold Number Guessing Game CH 5

### 👤 Author
- Ethan McEvoy (https://github.com/EMcE01)

---

## 📚 Table of Contents
- [📖 Project Overview](#-project-overview--summary)
- [🧰 Tech Stack](#-tech-stack)
- [🛠 Development Tools](#-development-tools)
- [💡 Core Concepts](#-core-concept--new-concepts)
- [✨ Features](#-features)
- [🖼 Visual Aids](#-visual-aids-screenshots--gifs--reports--data-input--output)
- [🧠 Reflection](#-reflection-what-i-learned)

---

## 📖 Project Overview / Summary
> 🔝 [Back to TOC](#-table-of-contents)

This program generates a random number between and including 1 - 100. It displays that number in the console log for ease of dev testing. The user than tries to guess that number and the program returns with a colored text telling the user how close they are. It then shows all previous guesses to help the user not guess the same number twice. It counts the number of guesses it took for the user to get it right and stores the best round to be displayed. 

## 🎮 How It Works

- The game generates a random number between **1 and 100**.
- The player enters a guess.
- The game responds with feedback:
  - **Fire!** – Exact match 🎉
  - **Hot! (Within 5 / 10 / 20 / 30 / 40)** – Based on proximity
  - **Freezing cold** – More than 40 numbers away
- The game tracks:
  - Total number of tries
  - Best score (lowest number of guesses)
  - Guess history

 ## 📋 Game Rules

- Only numbers between **1 and 100** are allowed.
- Invalid input will display an error message.
- The fewer guesses you use, the better your score.
- The best score updates automatically when beaten.

## 🔄 Resetting the Game

Click the **Play Again** button to:
- Generate a new random number
- Reset tries to 0
- Clear the guess history
- Keep your best score

---

## 🧰 Tech Stack
> 🔝 [Back to TOC](#-table-of-contents)

| Category       | Technology Used |
|----------------|----------------|
| Frontend       | HTML, CSS|
| Backend        | JavaScript|


---

## 🛠 Development Tools
> 🔝 [Back to TOC](#-table-of-contents)

| Tool | Purpose |
|------|--------|
| WebStorm | Primary Code editor |
| VS Code | Code editor |
| GitHub | Version control |
| Chrome DevTools | Debugging |

---

## 💡 Core Concept / New Concepts
> 🔝 [Back to TOC](#-table-of-contents)

Highlight key concepts learned or applied:

- 📌 .focus - I never realized that there was a way to make the cursor go to an input box before
- 📌 Data Storage - This was my first experience storing temperary data to display back at the user
- 📌 Console log - I have used the console for debugging. It slipped my mind to use it to show me answers to my own questions.
  
---

## ✨ Features
> 🔝 [Back to TOC](#-table-of-contents)

- ✅ Random number generation
- ✅ Input validation
- ✅ Dynamic feedback messages
- ✅ Color-coded hints
- ✅ Guess history tracking
- ✅ Best score tracking
- ✅ “Play Again” reset button
- ✅ Press **Enter** to submit a guess

---

## 🖼 Visual Aids: Screenshots / GIFs / Reports / Data Input & Output
> 🔝 [Back to TOC](#-table-of-contents)

![working](images/done.png)

---

## 🧠 Reflection:
> 🔝 [Back to TOC](#-table-of-contents)

This was the most fun to create as it was the most fun to play with after completion. My biggest struggle was to store the best game. I feel that I improved on my ability to organize the screen while drawing the user's attention to the correct place.

