# How to Publish PizzaDAO OS to Chrome Web Store

This guide walks you through packaging and publishing your specific extension.

## 1. Preparation (Done!)
I have already performed the necessary technical steps for you:
*   ✅ **Manifest Updated**: Version 1.0, permissions set, CSP configured.
*   ✅ **Icons Generated**: Created 16x16, 48x48, and 128x128 icons from your logo.
*   ✅ **Codebase Ready**: All features (Video, Categories, etc.) are stable.

## 2. Create the Package
You need a `.zip` file of the `pizzadao-os` folder to upload.

1.  **Navigate** to the `c:\BUILDWITHMC\BUILDS\PIZZADAOOS` directory in File Explorer.
2.  **Right-click** the `pizzadao-os` folder.
3.  Select **Send to > Compressed (zipped) folder**.
4.  Rename it to `pizzadao-os-v1.zip`.

## 3. Upload to Chrome Web Store
1.  Go to the [Chrome Web Store Developer Dashboard](https://chrome.google.com/webstore/developer/dashboard).
2.  Sign in with your Google Account (there is a one-time $5 developer registration fee if you haven't paid it yet).
3.  Click **+ New Item**.
4.  Drag and drop your `pizzadao-os-v1.zip` file.

## 4. Store Listing Details
Fill in the details for the public usage:
*   **Title**: PizzaDAO OS
*   **Summary**: A cyberpunk-themed dashboard for the PizzaDAO community. Features local video backgrounds, quick links, and a global pizza party countdown.
*   **Category**: Productivity / Start Page.
*   **Language**: English.

## 5. Privacy Practices
Since we have a local video and no external tracking:
*   **Host Permissions**: We don't request generic host permissions.
*   **Remote Code**: We are compliant (no remote implementation).
*   **Data Usage**: Check "No" for collecting user data (unless you add analytics later).

## 6. Submit
Click **Submit for Review**. Reviews usually take 24-48 hours.

**Congratulations!** 🍕
