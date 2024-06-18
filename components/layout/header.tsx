import Link from 'next/link';

export default function Header() {
  return (
    <header className="flex h-10 justify-between">
      <Link href="/">HOME</Link>
      <nav>
        <ul className="flex">
          <li>
            <Link href="/article">Article</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
