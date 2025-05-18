# Premium Shop

A modern e-commerce web application built with Next.js, featuring a premium shopping experience.

## Features

- User authentication with Firebase
- Product browsing and filtering
- Shopping cart functionality
- Wishlist management
- Dark/light mode
- Responsive design

## Tech Stack

- Next.js 14
- TypeScript
- Tailwind CSS
- Firebase Authentication
- Zustand for state management
- React Hook Form with Zod validation
- Headless UI components
- Heroicons

## Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/premium-shop.git
   cd premium-shop
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env.local` file in the root directory with your Firebase configuration:
   ```
   NEXT_PUBLIC_FIREBASE_API_KEY=your-api-key
   NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your-auth-domain
   NEXT_PUBLIC_FIREBASE_PROJECT_ID=your-project-id
   NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your-storage-bucket
   NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your-messaging-sender-id
   NEXT_PUBLIC_FIREBASE_APP_ID=your-app-id
   ```

4. Run the development server:
   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
premium-shop/
├── src/
│   ├── app/                 # Next.js app directory
│   │   ├── auth/           # Authentication pages
│   │   ├── cart/           # Shopping cart page
│   │   ├── products/       # Product pages
│   │   └── wishlist/       # Wishlist page
│   ├── components/         # React components
│   ├── lib/               # Utility functions
│   └── store/             # Zustand stores
├── public/                # Static assets
└── package.json
```

## Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the application for production
- `npm run start` - Start the production server
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript type checking

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
