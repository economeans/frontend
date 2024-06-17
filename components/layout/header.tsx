import Link from 'next/link';

export default function Header() {
  return (
    <header className="flex justify-between h-10">
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
