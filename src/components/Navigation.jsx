import Link from "next/link";

export default function Navigation() {
  const links = [
    {name: "tabunan", displayName: "tabunan", href: "/"},
    {name: "signin", displayName: "Sign in", href: "/sign-in"},
  ];

  return (
    <nav className="mx-2">
      <ul>
        {links.map(({name, displayName, href}) => (
          <li className="inline-block mr-5" key={name}>
            <Link href={href}>{displayName}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
