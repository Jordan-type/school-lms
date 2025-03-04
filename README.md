# serve static assets

- pages
- public -assets - png, video, jpeg, svg, docs `public/logo.png`, `public/video.mp4` favicon.ico

Assignment 01: Build an Image Gallery with next/image
Background
Next.js's next/image optimizes images, but it’s important to use it properly.

Task
Create an image gallery page (/gallery) that displays at least six images using the next/image component. The images should be responsive and lazy-loaded.

ssignment 02: Optimize Remote Images
Background
By default, Next.js requires you to whitelist external domains when using next/image for remote images.

Task
Load images from a remote source (e.g., Unsplash) using next/image.
Configure next.config.js to allow remote images. "source.unsplash.com"

Assignment 03: Create a Layout Component with Metadata
Background
Instead of adding <Head> on every page, we can create a reusable Layout component.

Task
Create a Layout component that accepts title and description props.
Wrap all pages with this Layout component.