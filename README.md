# StoryCast — accessible storytelling microsite

StoryCast is a three-page, framework-free microsite prototype showcasing audio and video storytelling. It uses semantic HTML5, Sass partials and design tokens, compiled CSS, vanilla JavaScript, CSS Grid, Flexbox, and a container query.

> **Important media note:** The written story and artwork are illustrative student-project content. The starter package does not contain a recorded MP3 or MP4. To make media playback work, add your own narration/video to the paths listed below and synchronize the WebVTT captions to the final video. Do not submit the example VTT as final captions without checking its timing.

## Pages
- `index.html` — homepage, featured stories, navigation.
- `story/story.html` — detail page with audio/video players, transcript, caption track, and related stories.
- `about.html` — mission, principles, accessibility commitments, contact link.

## Project structure
```text
storycast/
├── index.html
├── about.html
├── story/
│   └── story.html
├── sass/
│   ├── _colors.scss
│   ├── _typography.scss
│   ├── _spacing.scss
│   ├── _base.scss
│   ├── _header.scss
│   ├── _home.scss
│   ├── _about.scss
│   ├── _story.scss
│   └── main.scss
├── css/
│   └── main.css
├── js/
│   └── main.js
├── assets/
│   ├── images/          # locally hosted SVG artwork
│   ├── audio/           # add starting-over.mp3
│   ├── video/           # add starting-over.mp4
│   └── transcripts/
│       └── starting-over.vtt
├── docs/
│   └── storycast-research.pdf
└── README.md
```

## Run locally
1. Download or clone this repository.
2. Open the `storycast` folder in VS Code.
3. Recommended: install the **Live Server** VS Code extension.
4. Right-click `index.html` and select **Open with Live Server**.
5. Test navigation, keyboard focus, transcript toggle, responsive widths, and media controls.

You can also open `index.html` directly in a browser, but a local server is more reliable for media tracks and browser testing.

## Compile Sass
Install Sass if it is not installed:
```bash
npm install --global sass
```
From the project root, compile the Sass source to CSS:
```bash
sass --watch sass/main.scss css/main.css
```
The repository includes compiled CSS so the site can be previewed without compiling Sass first. Edit the `.scss` partials, not `css/main.css`, then compile again.

## Add media
Create `assets/audio/` and put your narrated audio at `assets/audio/starting-over.mp3`.
Create `assets/video/` and put your video at `assets/video/starting-over.mp4`.
The media elements already reference these relative paths from `story/story.html`. Record accurate captions and update `assets/transcripts/starting-over.vtt` so each caption is synchronized with the actual spoken words and meaningful sounds. The text transcript is currently on the story page.

## Accessibility checklist
- [x] Semantic landmarks: `header`, labelled `nav`, `main`, `section`, `article`, `figure`, `figcaption`, `aside`, and `footer`.
- [x] One clear `h1` per page and logical heading nesting.
- [x] Skip link to main content.
- [x] Keyboard-operable navigation toggle and transcript toggle with accurate ARIA state.
- [x] Visible `:focus-visible` indicator and Escape key closes mobile navigation.
- [x] Descriptive link text, meaningful image alternatives, and decorative images marked with empty `alt`.
- [x] Audio and video native controls; transcript text provided as an alternative.
- [x] `<track kind="captions">` included for the video; **replace starter timing with accurate final captions**.
- [x] Responsive CSS Grid and Flexbox layouts.
- [x] Container query adapts the story-card component based on its own width.
- [x] `prefers-reduced-motion` support.
- [x] Sass color, typography, and spacing tokens; Sass partials; BEM-style component naming; cascade layers.
- [ ] Add real MP3 and MP4 media files and synchronize captions before final submission.
- [ ] Test actual foreground/background pairs with a contrast checker and verify WCAG 2.1 AA; design tokens are chosen for strong contrast but a manual/audited check is still required.
- [ ] Run an accessibility audit (Lighthouse/axe), test keyboard-only navigation, and test with a screen reader.

## Research and design documentation
See `docs/storycast-research.pdf` for the draft sitemap, information architecture, wireframe descriptions, design rationale, accessibility plan, and mockup checklist. Create final wireframes and high-fidelity mockups in Figma, then add their **share links** to the PDF or this README. Do not claim Figma mockups are complete until you have created them and checked the links.

## GitHub submission
Create a **public** repository named `storycast`, then from this folder:
```bash
git init
git add .
git commit -m "Build accessible StoryCast microsite"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/storycast.git
git push -u origin main
```
Replace `YOUR-USERNAME` with your GitHub username. If the repository already has a README or other files, clone that repository first to avoid unrelated-history issues.

## Research limitations
This is a design prototype, not evidence that real users have validated it. For research-driven submission, conduct a small usability test with representative participants, record observations and changes, and include consent-safe anonymized findings in the final PDF. Do not invent participant quotes or research outcomes.
