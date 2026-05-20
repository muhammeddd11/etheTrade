# Cloudinary Image Upload Setup

This project uploads images from the admin panel to Cloudinary, then saves the Cloudinary image URL in Firebase content.

## 1. Create Or Open A Cloudinary Account

1. Go to https://cloudinary.com/
2. Sign in or create a free account.
3. Open your Cloudinary dashboard.

## 2. Find Your Cloud Name

In the Cloudinary dashboard, look for **Cloud name**.

Copy it into `.env`:

```env
VITE_CLOUDINARY_CLOUD_NAME=your_cloud_name_here
```

## 3. Create An Unsigned Upload Preset

1. In Cloudinary, open **Settings**.
2. Go to **Upload**.
3. Scroll to **Upload presets**.
4. Click **Add upload preset**.
5. Set **Signing Mode** to **Unsigned**.
6. Give it a clear name, for example:

```text
ethe_trade_unsigned
```

7. Save the preset.

Add the preset name to `.env`:

```env
VITE_CLOUDINARY_UPLOAD_PRESET=ethe_trade_unsigned
```

## 4. Optional: Set Upload Folder

The app can upload all admin images into a Cloudinary folder.

The current `.env` already uses:

```env
VITE_CLOUDINARY_UPLOAD_FOLDER=ethe-trade
```

You can keep this, rename it, or leave it empty.

## 5. Final `.env` Example

```env
VITE_CLOUDINARY_CLOUD_NAME=your_cloud_name_here
VITE_CLOUDINARY_UPLOAD_PRESET=ethe_trade_unsigned
VITE_CLOUDINARY_UPLOAD_FOLDER=ethe-trade
```

## 6. Restart The Website

After editing `.env`, stop and restart the Vite dev server:

```bash
npm run dev
```

## 7. Upload Images From Admin

1. Open `/admin`.
2. Choose a content section.
3. Find any image field.
4. Click **Upload Image**.
5. Select an image from your computer.
6. Wait for the Cloudinary URL to appear in the field.
7. Click **Save Section**.

The public website will now use the Cloudinary image URL.

## Important Notes

- Use an **unsigned** upload preset. The current frontend upload flow does not use a private API secret.
- Do not put your Cloudinary API secret in `.env` for this frontend app.
- For better safety, restrict the unsigned preset in Cloudinary with limits such as allowed formats, maximum file size, and target folder.
