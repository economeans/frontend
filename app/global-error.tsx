'use client';

export default function GlobalError({ error }: { error: Error & { digest?: string } }) {
  return (
    <html lang="ko">
      <body>
        <h2>Something went wrong!</h2>
        <h3>{error.message}</h3>
      </body>
    </html>
  );
}
