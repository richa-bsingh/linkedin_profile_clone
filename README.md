# Minimalistic Portfolio Social

A beautiful and fully-featured LinkedIn profile clone built with React, TypeScript, and Tailwind CSS. This project demonstrates modern web development practices and responsive design principles.

![Preview](/ss.png)

## Features

### 🎯 Core Features

- **Professional Profile Display**
  - Dynamic profile header with gradient background
  - Sticky navigation with context-aware actions
  - Responsive design for all screen sizes
  - Beautiful transitions and animations

### 📱 Interactive Elements

- **Tab-based Navigation**
  - About section with featured work
  - Experience timeline
  - Education history
  - Skills showcase
  - Achievements display

- **Dynamic Components**
  - Skill endorsement progress bars
  - Interactive card hover effects
  - Smooth state transitions
  - Social media integration

### 💼 Professional Sections

- **Featured Work Showcase**
  - Project cards with images
  - Description and links
  - Visual presentation of achievements

- **Experience Timeline**
  - Company details with logos
  - Role descriptions
  - Technology tags
  - Location information

- **Education History**
  - Institution details
  - Degree information
  - Activities and societies
  - Timeline presentation

- **Skills & Endorsements**
  - Visual skill cards
  - Endorsement count
  - Progress indicators
  - Category organization

- **Certifications**
  - Professional certifications
  - Issuing organizations
  - Issue dates
  - Visual badges

## 🛠 Technology Stack

- **Frontend Framework**
  - React 18.3
  - TypeScript
  - Vite (for blazing fast development)

- **Styling**
  - Tailwind CSS
  - Custom animations
  - Responsive design

- **Icons & Assets**
  - Lucide React icons
  - Unsplash images
  - Custom gradients

## 🚀 Getting Started

### Prerequisites

- Node.js 16.x or later
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/linkedin-profile-clone.git
   ```

2. Navigate to the project directory:
   ```bash
   cd linkedin-profile-clone
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

5. Open your browser and visit:
   ```
   http://localhost:5173
   ```

## 📖 Usage

### Customizing Profile Data

The profile data is stored in the `profileData` object within `App.tsx`. You can modify this object to display your own information:

```typescript
const profileData = {
  name: "Your Name",
  headline: "Your Professional Headline",
  location: "Your Location",
  // ... other profile data
};
```

### Adding New Sections

To add a new section:

1. Add a new key to the `TabContent` object
2. Create the corresponding component
3. Add an icon to the `TabIcons` object
4. The navigation will automatically update

### Modifying Styles

The project uses Tailwind CSS for styling. To modify styles:

1. Use Tailwind classes directly in components
2. Customize `tailwind.config.js` for theme changes
3. Add custom CSS in `index.css` if needed

## 🎨 Design Decisions

### Color Scheme

- Primary: Blue (#2563eb)
- Accent: Pink (#ec4899)
- Text: Gray scale (#111827 to #6b7280)
- Background: Light gray (#f9fafb)

### Typography

- Headers: Semi-bold, larger sizes
- Body: Regular weight, comfortable line height
- Accents: Medium weight for emphasis

### Layout

- Maximum width container for content
- Responsive grid systems
- Consistent spacing using Tailwind's spacing scale
- Card-based content presentation

## 🔧 Customization

### Theme Customization

Modify `tailwind.config.js` to customize:

- Colors
- Typography
- Spacing
- Breakpoints
- Animations

### Component Customization

Each component is built with modularity in mind. You can:

- Modify individual components
- Add new features
- Change layouts
- Customize animations

## 📱 Responsive Design

The application is fully responsive with breakpoints for:

- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

## ⚡ Performance

The application is optimized for performance:

- Code splitting
- Lazy loading
- Optimized images
- Minimal dependencies
- Fast development server with Vite

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [React](https://reactjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Lucide Icons](https://lucide.dev/)
- [Unsplash](https://unsplash.com/) for images

## 📞 Support

For support, please open an issue in the GitHub repository or contact the maintainers.

---

Built with ❤️ using React, TypeScript, and Tailwind CSS