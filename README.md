# Afia Noor — Portfolio

This repository includes two ways to run the portfolio:

- A React/Vite website with an Express contact API.
- A Streamlit version in `streamlit_app.py`, suitable for Streamlit Community Cloud. The Streamlit version uses an email link for contact.

## Deploy the Streamlit portfolio

1. Push this repository, including `streamlit_app.py`, `requirements.txt`, and the `assets` folder, to GitHub.
2. Sign in at [share.streamlit.io](https://share.streamlit.io/) with your GitHub account.
3. Choose **Create app**, select this repository and branch, and set the app file path to `streamlit_app.py`.
4. Choose **Deploy**. Streamlit Cloud installs the packages from `requirements.txt` and publishes the app at a `*.streamlit.app` URL.

Keep the repository and Streamlit app active, and check Streamlit's current plan and usage limits. Free hosting and URLs are subject to the provider's policies and are not a lifetime guarantee.

## Run the Streamlit version locally

1. Install Python 3.9 or newer.
2. Install dependencies with `pip install -r requirements.txt`.
3. Run `streamlit run streamlit_app.py`.

## Run the React version locally

1. Install Node.js 20 or newer.
2. Run `npm install`.
3. Copy `.env.example` to `.env` and add your SMTP host, credentials, and contact email to enable email delivery.
4. Run `npm run dev` for the frontend at `http://localhost:5173`.
5. In another terminal, run `npm start` for the API at `http://localhost:3000`.

The contact API returns a clear setup message when SMTP is not configured; LinkedIn and email links remain available as alternatives.

### React production

Run `npm run build`, then set `NODE_ENV=production` and start the Express server with `npm start`. The server serves the built React app and the contact API from the same origin.
