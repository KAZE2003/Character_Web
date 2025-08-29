export const metadata = {
  title: 'แนะนำตัวละคร',
  description: 'เว็บแนะนำตัวละครอย่างง่าย',
};

export default function RootLayout({ children }) {
  return (
    <html lang="th">
      <body>{children}</body>
    </html>
  );
}
