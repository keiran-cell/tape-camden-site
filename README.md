# TAPE//CAMDEN Website

A Vercel-ready React/Vite one-page website for TAPE//CAMDEN.

## Quick launch route

1. Create a GitHub account: https://github.com
2. Create a Vercel account: https://vercel.com and sign in with GitHub
3. Create a new GitHub repository called `tape-camden-site`
4. Upload every file in this folder to that repository
5. In Vercel, click **Add New Project**
6. Select the GitHub repository
7. Click **Deploy**

Vercel should auto-detect Vite.

Build command:
`npm run build`

Output directory:
`dist`

## Change booking email

Open `src/main.jsx` and replace:
`bookings@fitzroviapost.com`

with the email you want.

## Add videos

Put videos in a new folder:
`public/videos/`

Then replace a gallery tile with:

```jsx
<video src="/videos/self-tape-01.mp4" autoPlay muted loop playsInline className="videoTile" />
```

Then add this to `src/styles.css`:

```css
.videoTile{width:100%;height:100%;object-fit:cover;display:block}
```

## Local preview, optional

If you have Node installed:

```bash
npm install
npm run dev
```
