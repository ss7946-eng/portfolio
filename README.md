# Hannah Shin — Portfolio

Static architecture portfolio inspired by https://finn.framer.media/.

## Edit the website

- `content.js`: name, headline, biography, email and project information.
- `styles.css`: responsive layouts, typography and animations.
- `app.js`: page rendering and interactions.
- HTML files: home, work, about, contact, project detail and privacy pages.

The gallery is a clearly labeled visual demo. Sample images come from the Finn reference and are not Hannah’s projects. Replace the sample entries with original projects before using the gallery as a professional work record. No portrait or contact email has been supplied.

## Publishing

The website files live at the repository root. Existing GitHub Pages deployment and the `CNAME` domain `shinhannah.com` are preserved. Updates to `main` publish through the repository’s existing Pages configuration.

No package installation or build is needed. Serve the root with any static HTTP server for local viewing. Check JavaScript using `node --check app.js` and `node --check content.js`.

In the ChatGPT development checkout, these public files are staged in `dist/` for preview hosting. GitHub receives the same files at its repository root.

## Accessibility

Includes a skip link, visible keyboard focus, semantic navigation, descriptive image labels, reduced-motion support and a single-column mobile gallery. Sample images and fonts are served from Framer’s CDN.
