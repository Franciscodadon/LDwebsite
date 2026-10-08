# LD Industry static website

A responsive one-page website for LD Industry, built with plain HTML, CSS, and JavaScript. It is ready for GitHub Pages and does not require a build step.

## Preview locally

Open `index.html` directly in a browser, or run a small local web server from this folder:

```bash
python3 -m http.server 8000
```

Then visit `http://localhost:8000`.

## Publish with GitHub Pages

1. Create a new GitHub repository.
2. Upload everything in this folder to the repository root.
3. In the repository, open **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**.
5. Select the `main` branch and `/ (root)`, then save.
6. GitHub will show the public URL after deployment finishes.

The included `.nojekyll` file tells GitHub Pages to serve the files as-is.

## Connect the inquiry form before launch

The current form is intentionally a safe demo: it validates fields in the browser but does not transmit or store data. The site clearly tells visitors this.

Before accepting real inquiries, connect the form to a service such as Formspree, Basin, Getform, or your CRM. Add the provider's HTTPS endpoint to the form's `action`, set `method="POST"`, update `script.js` to remove the demo-only submit handler, and replace the on-page demo notice with your privacy and consent language.

Do not put private API keys in these public files. GitHub Pages is a static host, so any secret must stay with the form provider or a separate secure backend.

## Before publishing

- Replace the placeholder purchasing criteria with LD Industry's verified markets and property types.
- Confirm all policy statements and response-time expectations.
- Add the company's real contact details and privacy policy.
- Download and self-host licensed final photography if you do not want to rely on externally hosted Unsplash images.
