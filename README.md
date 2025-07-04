# Leather Brush Site

This is the official website for the Leather Brush project, hosting a download gate and social links.

## Deployment

This project is automatically deployed to Cloudflare Pages upon every push to the `main` branch.

### Setup Instructions

1.  **Push to GitHub:** Push your local changes to the `main` branch of your GitHub repository.
    ```bash
    git push origin main
    ```

2.  **Cloudflare Pages Integration:**
    *   Connect your GitHub repository to Cloudflare Pages.
    *   Configure the build settings:
        *   **Project Name:** `leather-brush-site` (or your chosen name)
        *   **Production Branch:** `main`
        *   **Build Command:** (leave blank for static sites)
        *   **Build Output Directory:** `/`
    *   Add the following secrets to your GitHub repository (`Settings > Secrets and variables > Actions`):
        *   `CLOUDFLARE_API_TOKEN`: Your Cloudflare API token.
        *   `CLOUDFLARE_ACCOUNT_ID`: Your Cloudflare account ID.

### Official Documentation

*   **Gemini CLI:**
    *   [GitHub](https://github.com/google-gemini/gemini-cli)
    *   [Google Docs](https://github.com/google-gemini/gemini-cli)
*   **Gemini 2.5 Pro (Vertex AI):** [Documentation](https://cloud.google.com/vertex-ai/generative-ai/docs/models/gemini/2-5-pro)
*   **Cloudflare Pages:**
    *   [Git Integration](https://developers.cloudflare.com/pages/configuration/git-integration/)
    *   [Direct Upload with CI/CD](https://developers.cloudflare.com/pages/how-to/use-direct-upload-with-continuous-integration/)
