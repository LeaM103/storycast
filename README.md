
# StoryCast — An Accessible Media Feature Microsite

## About the Project

**StoryCast** is a responsive, accessible media microsite designed to help people discover and enjoy engaging stories through video, audio, and written transcripts.

The project focuses on creating an inclusive digital experience where users can access media content across different devices and interact with the website using a keyboard, screen reader, or other assistive technologies.

## Project Goals

- Create a clean, user-friendly interface for discovering stories.
- Make audio and video content accessible to a wide range of users.
- Provide captions and transcripts to support different accessibility needs.
- Build a responsive layout that works on mobile phones, tablets, and desktop computers.
- Apply semantic HTML, organized Sass stylesheets, and accessible design principles.

## Features

- **Home page:** Introduces StoryCast and highlights featured stories.
- **Story detail page:** Presents a selected story with media controls, descriptions, and a transcript.
- **About and Accessibility page:** Explains the project's mission and accessibility features.
- **Responsive design:** Adapts the layout to different screen sizes.
- **Keyboard accessibility:** Supports keyboard navigation and visible focus indicators.
- **Accessible media:** Supports captions and transcripts for media content.
- **Consistent design:** Uses reusable styles, design tokens, CSS Grid, and Flexbox.

## Technologies Used

- **HTML5** — Semantic page structure and content.
- **Sass (SCSS)** — Organized, reusable styling and design tokens.
- **CSS3** — Responsive layouts, Flexbox, CSS Grid, and container queries.
- **JavaScript** — Interactive functionality, where required.
- **Figma** — Wireframes and high-fidelity interface designs.
- **Git and GitHub** — Version control and project hosting.
- **GitHub Pages** — Website deployment.

## Project Structure

```text
storycast/
├── index.html
├── about.html
├── story/
│   └── index.html
├── sass/
│   ├── _tokens.scss
│   ├── _base.scss
│   ├── _layout.scss
│   ├── _components.scss
│   └── main.scss
├── css/
│   └── main.css
├── assets/
│   ├── images/
│   ├── audio/
│   ├── video/
│   └── transcripts/
├── docs/
│   └── research-documentation.pdf
└── README.md
```

*Note: This structure describes the intended organization. Update the file and folder names above to match the files actually included in the repository.*

## Getting Started

### Prerequisites

You need a web browser and a code editor such as Visual Studio Code.

If you want to edit the Sass source files, install Sass as well.

### Run the Project Locally

1. Clone the repository:

   ```bash
   git clone https://github.com/LeaM103/storycast.git
   ```

2. Open the project folder:

   ```bash
   cd storycast
   ```

3. Open `index.html` in your browser, or use the Live Server extension in Visual Studio Code.

4. Navigate through the Home, Story Detail, and About and Accessibility pages.

### Compile Sass

If Sass is installed, run the following command from the project root:

```bash
sass --watch sass/main.scss css/main.css
```

This watches the main SCSS file and updates the compiled CSS when you make changes.

## Accessibility Checklist

The project aims to follow WCAG accessibility principles.

- [ ] Use semantic HTML elements and a logical heading structure.
- [ ] Provide meaningful alternative text for informative images.
- [ ] Include captions for video content where applicable.
- [ ] Provide readable transcripts for audio and video content.
- [ ] Ensure all interactive controls are keyboard accessible.
- [ ] Maintain visible keyboard focus indicators.
- [ ] Check text and background contrast for WCAG AA compliance.
- [ ] Associate form labels with their inputs, where forms are used.
- [ ] Use descriptive link text and accessible control names.
- [ ] Test the layout at mobile, tablet, and desktop widths.
- [ ] Test with keyboard navigation and a screen reader.

*Mark checklist items as completed only after testing them.*

## Responsive Design

StoryCast uses CSS Grid and Flexbox to organize content across different screen sizes. Responsive styles help maintain readable text, usable controls, and a consistent experience on phones, tablets, and larger screens.

Container queries can be used where components need to adapt to the size of their containing element.

## Design and Research Documentation

The project includes Figma designs and research documentation to support the design decisions and demonstrate the planning process.

- **Figma wireframes:https://www.figma.com/design/i7xQv5TaYsh460rAkNgYC4/Untitled?node-id=0-1&t=vyqtTkxLklzOIrru-1
-   mockups:** https://www.figma.com/make/EhS9TmuWTKVfo0hzlMPlYw/3D-Rotating-Business-Card?fullscreen=1&t=wktODwPi8opdUXuT-1
- **Research and documentation PDF:** [StoryCast.pdf](https://github.com/user-attachments/files/33611971/StoryCast.pdf)

- **Live website:** [https://leam103.github.io/storycast/](https://leam103.github.io/storycast/)
- **GitHub repository:** [https://github.com/LeaM103/storycast](https://github.com/LeaM103/storycast)

## Future Improvements

- Add and verify real media assets, captions, and transcripts.
- Improve screen-reader testing and keyboard navigation.
- Conduct additional accessibility and responsive-layout testing.
- Optimize images and media for faster loading.
- Improve Lighthouse performance and accessibility scores.

## Author

**Lea M.**

African Leadership University


