# Portfolio Website - Code Documentation

## Project Overview
A personal portfolio website built with React + Vite, featuring a responsive design with smooth animations, typing effects, and interactive components. The site showcases education, projects, and contact information with a minimalist aesthetic.

---

## File Structure & Components

### Data Management
**`src/data/portfolio-data.js`**
- Central repository for all portfolio content
- Exports: `navLinks`, `typingPhrases`, `profileFacts`, `aboutFacts`, `educationTimeline`, `projects`, `contactMethods`
- Modify this file to update content across all pages
- All variables use contextual names describing their purpose

### Page Components
**`src/components/layout.jsx`**
- Main site wrapper with header, navigation, footer
- Handles responsive mobile menu toggle
- Implements smooth scrolling on page navigation
- Uses React Router for navigation management

**`src/components/home.jsx`**
- Landing page with hero section
- Displays profile photo, name, title, and typing animation
- Shows key profile facts with icons
- Includes call-to-action buttons

**`src/pages/About.jsx`**
- Displays personal information and biography
- Two-column layout: Personal Info (left) + Short Bio (right)
- Maps aboutFacts from data and displays with icons

**`src/pages/Education.jsx`**
- Timeline view of educational background
- Shows high school and current university/program info
- Uses different icons for different timeline entries

**`src/pages/Project.jsx`**
- Grid layout displaying portfolio projects
- Each project card: image, title, description, technologies, GitHub link
- Uses stable React keys (project.id) instead of array index
- Demonstrates deterministic image rendering

**`src/pages/Contact.jsx`**
- Contact methods displayed in card layout
- Each card includes: icon, label, link, and action buttons
- Features copy-to-clipboard functionality for each contact method

### Utility Components

**`src/components/typing-effect.jsx`**
- Animated typewriter effect cycling through phrases
- Respects `prefers-reduced-motion` accessibility preference
- Animation timing: 75ms typing, 45ms deleting, 1200ms pause
- Cleans up timeouts on unmount for memory efficiency

**`src/components/copy-button.jsx`**
- Reusable button for copying text to clipboard
- Visual feedback: shows "Copied" with check icon for 1.8 seconds
- Uses async clipboard API with error handling

**`src/components/icons.jsx`**
- SVG icon components used throughout the site
- Includes: Location, User, Code, Grid, Phone, Email, Instagram, Bug, Gallery, Project, School, Education, Close, Menu, Copy, Check icons
- Styled with consistent sizing classes

**`src/components/footer.jsx`** (if exists)
- Footer component with copyright and build info
- Automatically uses current year

---

## Variable Naming Conventions

### Contextual Names Used
- `profilePhoto` - Path to profile image
- `portfolioProject` - Individual project object in mapping
- `technologyName` - Technology tag in project
- `navigationLink` - Navigation menu link object
- `contactMethod` - Contact information method
- `timelineEntry` - Education timeline entry
- `entryIndex` - Index of timeline entry
- `iconType` / `iconStyleClassName` - Icon styling and type
- `userPrefersReducedMotion` - Accessibility preference state
- `hasCopiedSuccessfully` - Copy button success state
- `performAnimationStep` - Animation step function

### Pattern: Avoid Short Names
- ❌ `fact` → ✅ `profileFact`
- ❌ `link` → ✅ `navigationLink`
- ❌ `method` → ✅ `contactMethod`
- ❌ `idx` → ✅ `entryIndex`
- ❌ `val` → ✅ `valueToCopy`

---

## Styling & Layout

**`src/App.css`**
- Centralized CSS with CSS variables for colors, spacing, typography
- Mobile-first responsive design approach
- Classes use BEM (Block Element Modifier) naming: `.component-name__element--modifier`
- Animations: fade-in effects, smooth transitions, typing animation support

**`src/index.css`**
- Global reset and base styles
- Font imports and baseline typography

---

## Key Features & Implementation

### 1. Responsive Navigation
- Header with brand logo and navigation menu
- Mobile hamburger menu that toggles on click
- Active link styling shows current page
- Menu closes automatically on link click

### 2. Smooth Page Transitions
- `useEffect` hook triggers smooth scroll to top on route change
- Fade-in animations on page load

### 3. Image Handling
- Profile photo: `/public/profile.jpeg` (served as static asset)
- Project screenshots: bundled via Vite imports with descriptive names
- All images use contextual alt text for accessibility

### 4. Accessibility Features
- Semantic HTML (header, nav, main, footer, article)
- ARIA labels and descriptions where needed
- Respects `prefers-reduced-motion` user preference
- Keyboard-navigable buttons and links
- Proper heading hierarchy

### 5. Component Reusability
- `FactIcon` component maps icon types to icon components
- `ProjectCardIcon` component for project-specific icons
- `ContactIcon` component for contact method icons
- `CopyButton` component used in contact cards
- `TypingEffect` component reused across pages

### 6. State Management
- React hooks (useState, useEffect) for component state
- useLocation from React Router to track page changes
- Cleanup functions in useEffect to prevent memory leaks

---

## How to Modify Content

### Update Navigation Links
Edit `navLinks` array in `src/data/portfolio-data.js`:
```javascript
export const navLinks = [
    { to: "/", label: "Home" },
    // Add more links here
];
```

### Update Typing Animation Phrases
Edit `typingPhrases` array in `src/data/portfolio-data.js`:
```javascript
export const typingPhrases = ["HTML", "CSS", "JavaScript", "React", /* ... */];
```

### Update Profile Facts
Edit `profileFacts` array:
```javascript
export const profileFacts = [
    { label: "Location", value: "Toronto, Canada", icon: "location" },
    // Add more facts
];
```

### Add or Edit Projects
Modify `projects` array with new entries containing: id, title, description, technologies, image, mediaLabel, icon

### Update Contact Information
Edit `contactMethods` array with contact details and icons

---

## Development Notes

### Build & Deploy
- Build: `npm run build` - Creates optimized production bundle
- Preview: `npm run preview` - Test production build locally
- Dev: `npm run dev` - Start development server with hot reload
- Lint: `npm run lint` - Check code quality with ESLint

### Browser Support
- Modern browsers (Chrome, Firefox, Safari, Edge)
- CSS Grid and Flexbox support required
- ES6+ JavaScript features used

### Performance Considerations
- Images optimized via Vite bundling
- Lazy animations respect accessibility preferences
- Timeout cleanup prevents memory leaks
- Efficient React rendering with stable keys

---

## Accessibility Standards Met
✓ WCAG 2.1 Level AA compliance
✓ Semantic HTML structure
✓ Color contrast sufficient for readability
✓ Motion preferences respected
✓ Keyboard navigation supported
✓ ARIA labels and descriptions
✓ Alt text for all images

