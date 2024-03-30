
import "./globals.css";


import '@fontsource/poppins/200.css';
import '@fontsource/poppins/300.css';
import '@fontsource/poppins/400.css';
import '@fontsource/poppins/500.css';
import '@fontsource/poppins/600.css';
import '@fontsource/poppins/700.css';
import '@fontsource/poppins/800.css';
export const metadata = {
  title: "Grizzly Hacks",
  description: "Website for Grizzly Hacks",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="text-theme-text bg-theme-dark-green" >{children}</body>
    </html>
  );
}
