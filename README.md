# Social Media Video Downloader 🚀

[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](https://opensource.org/licenses/MIT)
[![React](https://img.shields.io/badge/React-18.2-blue)](https://reactjs.org/)
[![Node.js](https://img.shields.io/badge/Node.js-18.x-green)](https://nodejs.org/)

A web application that lets users download videos from popular social media platforms by simply pasting the video URL.

![App Screenshot](./screenshot.png) `<!-- Replace with your actual screenshot path -->`

## Features ✨

- 📥 Download videos from multiple platforms:
  - YouTube (Shorts & regular videos)
  - TikTok
  - Instagram (Reels & posts)
  - Twitter/X
  - Facebook
- 🌈 Clean, modern UI with dark mode
- ⚡ Fast video processing
- 📱 Mobile-friendly responsive design

## How It Works 🔧

1. User selects a social platform
2. Pastes the video URL
3. Clicks "Download"
4. Gets the video in original quality

## Tech Stack 💻

| Frontend      | Backend              |
| ------------- | -------------------- |
| React 18      | Node.js              |
| Redux Toolkit | Express              |
| Tailwind CSS  | yt-dlp (video fetch) |
| React Icons   | Axios                |

## Project Structure 📂

- Node.js (v18 or higher)
- npm or yarn

social-video-downloader/
├── client/ # Frontend (React)
│ ├── public/
│ ├── src/
│ │ ├── components/
│ │ ├── features/ # Redux slices
│ │ ├── App.js
│ │ └── index.js
│ └── package.json
├── server/ # Backend (Node.js)
│ ├── controllers/
│ ├── routes/
│ ├── utils/
│ ├── app.js
│ └── package.json
└── README.md

## Contributing 🤝

Contributions are welcome! Please follow these steps:

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License 📄

This project is licensed under the MIT License - see the [LICENSE](https://LICENSE) file for details.

## Disclaimer ⚠️

This
application is intended for personal use only. Please respect copyright
laws and only download videos you have permission to access. The
developers are not responsible for misuse of this tool.
