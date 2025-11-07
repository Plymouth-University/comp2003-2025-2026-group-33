# ⚙️ Tech Stack Decision – Group 33

**Project:** Rebuilding of TypeScript Webpage to a Modern Modular System  
**Module:** COMP2003 – Rebuilding TypeScript  
**Team Members:** Maksym Lypai, Joe Nadvila Veedu Jose, Dylan Moore, Hussain Nazir  
**Date:** 7 November 2025  

---

## 🎯 Purpose
To select the most suitable modern technology stack for rebuilding the legacy TypeScript webpage into a scalable, modular, and maintainable web application.  

---

## 🧩 Frameworks Considered
| Framework | Advantages | Disadvantages |
|------------|-------------|---------------|
| **React + TypeScript** | - Mature ecosystem and strong community support.<br>- Clear component-based architecture.<br>- Excellent TypeScript integration.<br>- Supported by Vite, Next.js, and other build tools.<br>- Widely used in industry and academia. | - Requires setup of tooling and dependencies.<br>- Learning curve for component lifecycle and hooks. |
| **Vue 3 + TypeScript** | - Lightweight and flexible.<br>- Simpler syntax for beginners.<br>- Reactive data binding. | - Smaller ecosystem compared to React.<br>- Fewer enterprise-level resources and examples.<br>- Less TypeScript-specific documentation. |
| **Angular** | - Complete framework with built-in routing and state management.<br>- Strong typing by default. | - Very steep learning curve.<br>- Overkill for a medium-scale rebuild.<br>- Slower to prototype than React or Vue. |

---

## 🧠 Decision
**Chosen Stack:** 🟦 **React + TypeScript**

### **Reasoning**
- Aligns with project goals of *modularity* and *scalability*.  
- Reuses existing TypeScript experience from the legacy code.  
- Enables clear component separation and reusability.  
- Offers strong support for responsive design and accessibility testing.  
- Recommended by tutor as industry-standard and future-proof choice.

---

## ⚙️ Supporting Tools and Libraries
| Tool / Library | Purpose |
|-----------------|----------|
| **Vite** | Fast development build tool for React + TS. |
| **React Router** | Client-side navigation and routing. |
| **Axios** | Handling backend API calls. |
| **ESLint / Prettier** | Code quality and formatting. |
| **Jest / React Testing Library** | Component and unit testing. |
| **Bootstrap / Tailwind CSS** | Responsive design styling. |
| **GitHub Actions (optional)** | Continuous integration (CI/CD) pipeline. |

---

## 🧩 Deployment Options (Proposed)
| Option | Description | Notes |
|---------|--------------|-------|
| **AWS Amplify** | Scalable hosting and CI/CD integration. | Optional for final deployment. |
| **Vercel** | Simple, fast hosting for React apps. | Ideal for prototype/demo. |
| **Netlify** | Static site hosting with CI support. | Backup option. |

---

## ✅ Outcome
The team unanimously agreed to proceed with **React + TypeScript**, supported by **Vite** for rapid development and **Tailwind CSS** for styling.  
This combination ensures modern, maintainable, and performance-driven development throughout the rebuild.
