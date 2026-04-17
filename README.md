# Todo Task Card - Frontend Wizards Stage 0

A clean, modern, testable, accessible, and fully responsive Todo Item Card component.

Built as part of the **Frontend Wizards Stage 0** assignment.

## ✨ Features

- Proper semantic HTML (`<article>`, `<time>`, `<ul role="list">`, etc.)
- All required `data-testid` attributes for automated testing
- Fully accessible (keyboard navigation, screen reader support, visible focus styles)
- Responsive design (works perfectly from 320px to 1200px)
- Dynamic "Time Remaining" with friendly text (updates every 60 seconds)
- Checkbox toggles strike-through + status change
- Clean modern UI with good contrast

## 🚀 Live Demo

[ https://todo-task-card-stage-0.netlify.app/] 
## 🛠 Technologies Used

- HTML5 (Semantic)
- CSS3 (Flexbox + Responsive)
- Vanilla JavaScript (No frameworks)

## 📋 Key Implementation Highlights

- Exact `data-testid` matching assignment requirements
- Real `<input type="checkbox">` with proper label
- `<time>` element for due date
- `aria-live="polite"` on time remaining
- Dummy Edit/Delete actions with `console.log`

## Run Locally

https://github.com/HabibUsman64/todo-task-card-stage-0

# Todo Task Card - Stage 1a Improvement

This project is a continuation of the Stage 0 Task Card, now upgraded with interactive state management and dynamic UI updates.

## 🚀 New Features in Stage 1a

- **State-Driven UI:** The card is no longer static. It uses a JavaScript state object as the "Source of Truth."
- **Interactive Edit Mode:** Users can now click "Edit" to modify the task details directly within the card.
- **Advanced Synchronization:** - Toggling the checkbox automatically updates the status badge to "Done."
    - Changing the status to "Done" in the edit form automatically checks the checkbox.
- **Collapsible Description:** Long descriptions are truncated with a "Read More" toggle to maintain a clean UI.
- **Granular Time Tracking:** The "Time Remaining" updates every 30 seconds and includes an "Overdue" state with a specific `data-testid`.
- **Accessibility (A11y):** Added focus management when entering/exiting edit mode and expanded ARIA attributes.

## 🛠 Tech Stack
- Vanilla HTML5/CSS3
- Pure JavaScript (No frameworks)

## 📋 Testing
All required `data-testid` attributes are implemented to ensure the card passes automated test suites for both display and edit states.