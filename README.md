# 🚀 Multi-Step Account Creation Flow

A modern, multi-step account creation flow built using **React** and **TypeScript**, based on a provided Figma design.

This project focuses on clean architecture, scalable state management, reusable components, and realistic UX patterns similar to production-ready applications.

---

## ✨ Overview

The application guides users through a structured onboarding process:

1. Select account type
2. Enter mobile number (with dynamic country code)
3. Receive and verify OTP
4. Enter name
5. Create password
6. View success confirmation modal

The experience is designed to be interactive, responsive, and visually consistent with the original design.

---

## 🎯 Key Features

- Multi-step controlled form flow
- Card-based account type selection
- Dynamic country code validation
- Random 4-digit OTP generation
- OTP resend functionality
- Bottom-corner OTP toast notification
- Auto-focus OTP input behavior
- Password validation & match check
- Show/Hide password toggle
- Loading states for realistic UX
- Success modal overlay (without unmounting background step)
- Responsive layout

---

## 🏗️ Architecture & Design Decisions

### 1️⃣ Centralized Step Management

Navigation between steps is handled through a single state:

```ts
type Step = "accountType" | "mobile" | "otp" | "name" | "password";
```

This ensures predictable rendering and keeps navigation logic centralized.

---

### 2️⃣ Modal Managed Separately

The success modal is not treated as a separate step.  
Instead, it is controlled using a dedicated UI state:

```ts
const [showSuccess, setShowSuccess] = useState(false);
```

This prevents layout shifts and keeps the password step mounted beneath the modal.

---

### 3️⃣ OTP Generation Strategy

OTP logic is centralized in `App.tsx` to maintain separation of concerns.

```ts
const generateOtp = () => {
  const otp = Math.floor(1000 + Math.random() * 9000).toString();
  setGeneratedOtp(otp);
  setShowOtpPopup(true);
};
```

OTP is triggered:

- After clicking **Continue** on the mobile step
- When clicking **Resend OTP**

---

## 🎨 Styling Approach

Styling is organized by responsibility:

```
styles/
 ├── base.css
 ├── layout.css
 ├── buttons.css
 ├── inputs.css
 ├── steps.css
 ├── modal.css
 └── toast.css
```

Responsive rules are kept inside their respective files to maintain clean separation.

Modifier-based styling is used for state-driven UI:

```css
.account-option.active {
  border: 2px solid #2563eb;
}
```

---

## 🔐 Validation & UX Enhancements

### Mobile Number

- 10-digit validation
- Numeric input sanitization

### OTP

- Auto-focus between inputs
- Backspace navigation
- Resend functionality
- Toast-based OTP display

### Password

- Minimum length validation of 6 characters
- Confirm password matching
- Toggle visibility support

### UX Improvements

- Disabled buttons until valid input
- Smooth step transitions
- Realistic loading states
- Overlay modal behavior
- Clean responsive adjustments

---

## 📱 Responsive Design

The layout adapts across breakpoints:

- Form expands to full width
- Buttons stack vertically on mobile
- Spacing and typography scale appropriately

Breakpoints are consistent and structured.

---

## 🚀 Running the Project

```bash
npm install
npm run dev
```

---

## 📈 Future Improvements

- Backend OTP verification integration
- Accessibility improvements (ARIA roles, focus trapping)
- Unit testing with React Testing Library
- Local storage persistence
- Advanced country selector with search
- Toast queue system
- Password validation with special characters, Capital letters
- Mobile number validation based on country

---

## 👨‍💻 Tech Stack

- React
- TypeScript
- Modular CSS

---

## License

This project was developed as part of a frontend evaluation exercise and reflects a focus on maintainable architecture, realistic UI behavior, and production-ready frontend patterns.
