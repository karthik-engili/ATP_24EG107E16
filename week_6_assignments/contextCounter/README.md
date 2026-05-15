#  Context Counter – Combined React App

A comprehensive React application that combines **synchronized counters**, a **user form with dynamic table**, and a **user count tracker** — all managed through the **React Context API**.

---



##  Features

###  App Counters (Section 1)
- 4 counter cards laid out in a **2-column grid**
- All counters are **synchronized** — incrementing/decrementing one updates all
- Powered by a single shared Context store

###  User Form with Dynamic Table (Section 2)
- Input form to collect user data
- Submitted entries are rendered in a **live table** below the form
- No page reload — purely React state-driven

###  User Count (Section 3)
- Fetches users from the **JSONPlaceholder API** (`/users`)
- Displays user cards in a responsive grid
- Each card has an **"Add User"** button that increments a shared count
- `UserCount` component displays the running total via Context

## DEPLOYMENT LINK
  https://contextcounter.vercel.app
