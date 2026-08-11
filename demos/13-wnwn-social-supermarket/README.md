# WNWN member app demo

This is a standalone, static web demo for Poole Waste Not Want Not. It is designed to show the first focused product idea:

- member login and member identity
- digital membership card and demo barcode
- daily food availability updates
- calm, optional notification messaging
- a simple staff update preview
- support, access and physical-card fallback information

The demo is not connected to WNWN’s live member database and does not send real notifications.

## Run locally

From this directory:

```bash
python3 -m http.server 8788
```

Open <http://localhost:8788>.

The service worker and installable-app metadata work when served over HTTP/HTTPS. The page also works by opening `index.html` directly, but the offline demo behaviour will not activate from a `file://` URL.

## Netlify

This is a static site. It can be deployed by dragging the project folder into Netlify Drop, or by connecting the repository. No build command or publish directory is required; the project root is the publish directory.

## Demo flow

1. Show the home screen and the “What’s available” cards.
2. Open “My membership card” to show the digital barcode.
3. Open “Updates” to show member communications and notification preferences.
4. Open “Staff update preview” in the left-hand navigation.
5. Publish a demo update and show it appearing in the member update feed.

