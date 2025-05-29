# Eteréa Website

Official website for Eteréa - a center dedicated to the fusion of art and movement through disciplines like aerial dance, acrobatics, and flexibility.

## Project Overview

Eteréa's website aims to reflect the "cultura del movimiento" (movement culture) philosophy through a visually impactful and functional design. The site allows visitors to discover the space, learn about the offered disciplines, book classes, and explore content related to movement arts.

### Target Audience

- Adults seeking artistic and physical training
- Women interested in combining artistic expression with physical activity
- Athletes looking to improve mobility and flexibility
- Teenagers and children
- Parents looking for creative physical activities for their children
- Tourists interested in alternative movement experiences

## Technical Stack

- **Frontend:** Static website built with HTML, CSS, and Vanilla JavaScript
- **Content Management:** Headless CMS (Decap CMS, formerly Netlify CMS)
- **Booking System:** Integration with Supersaas via JavaScript widget
- **Hosting & Deployment:** Vercel (preferred) or Netlify for static site hosting
- **Contact Form:** Serverless function or third-party form handling service

## Architecture

The site follows the Jamstack architecture pattern:
- Pre-rendered static HTML pages
- Content fetched from Headless CMS during build process
- Form handling via serverless functions
- Integration with third-party services for booking

## Site Structure

1. **Home** (`/`) - Strong hero image, "cultura del movimiento" slogan, call to action
2. **About** (`/quienes-somos.html`) - Philosophy, team, physical space
3. **Disciplines** (`/disciplinas/`) - Overview of offered disciplines with brief descriptions
4. **Schedule** (`/horarios.html`) - Dynamic and updatable timetable
5. **Bookings** (`/reservas.html`) - Online class booking system
6. **Blog** (`/blog/`) - Articles and news
7. **Contact** (`/contacto.html`) - Address, phone, form, social media

## Design Principles

- Minimalist, professional style
- Color scheme: white, black, and gray
- Clean, minimalist typography
- Large, expressive, high-quality images that convey movement and art
- Responsive design for mobile and desktop

## Getting Started

### Prerequisites

- Node.js (latest LTS version)
- Git

### Local Development

1. Clone the repository
```bash
git clone https://github.com/YourUsername/eterea-web.git
cd eterea-web
```

2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
npm run dev
```

### Deployment

The website is set up for easy deployment to Vercel or Netlify. Commits to the main branch will trigger automatic builds and deployments.

## Content Management

The website utilizes a Headless CMS which allows administrators to:
- Update schedules and class information
- Add news and blog posts
- Upload photos
- Manage content without developer assistance

## Future Enhancements

- Multilingual support
- Online store
- Advanced booking features
- Enhanced community features

## License

This project is proprietary and confidential. All rights reserved.