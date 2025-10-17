# My Portfolio Website

A modern, responsive portfolio website built with HTML, CSS, JavaScript, and Node.js.

## Features

- 🎨 Modern and responsive design
- 📱 Mobile-friendly navigation
- 🚀 Smooth scrolling and animations
- 📧 Working contact form with backend
- 💼 Projects showcase
- 📝 Experience timeline
- 🎯 Skills section

## Technologies Used

### Frontend
- HTML5
- CSS3 (with animations and transitions)
- Vanilla JavaScript
- Font Awesome icons

### Backend
- Node.js
- Express.js

## Local Setup

1. Make sure you have Node.js installed
2. Navigate to project folder
3. Install dependencies: `npm install`
4. Start the server: `npm start`
5. Open browser to `http://localhost:3000`

## Customization

### Update Your Information

1. **Personal Details** - Edit in `index.html`:
   - Your name in the hero section
   - Contact information
   - Social media links

2. **Projects** - Modify the project cards:
   - Project titles and descriptions
   - Technologies used
   - Links to live demos and GitHub repos

3. **Experience** - Update the timeline:
   - Job titles and companies
   - Dates and descriptions
   - Achievements

4. **Skills** - Add/remove skills in the skills section

### Styling

- Colors and theme: Edit CSS variables in `style.css` (`:root` section)
- Layout and spacing: Modify the CSS classes
- Animations: Adjust animation properties

## Deployment

### Option 1: Render (Recommended)
1. Create account on render.com
2. Connect your GitHub repository
3. Create new Web Service
4. Build Command: `npm install`
5. Start Command: `npm start`

### Option 2: Vercel
1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`
3. Follow the prompts

### Option 3: Netlify
1. Install Netlify CLI: `npm i -g netlify-cli`
2. Run: `netlify deploy`
3. Follow the prompts

## Contact Form

The contact form saves submissions to `contacts.json` file. To view messages:
- Visit: `http://localhost:3000/api/contacts`

## License

MIT License - feel free to use this for your own portfolio!

## Author

Your Name - [Your Website](https://yourwebsite.com)