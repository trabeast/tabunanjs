import Link from "next/link";
import UserProfile from "./UserProfile";

/**
  * @typedef {Object} User
  * @property {string} email

  * @typedef {Object} NavigationProps
  * @property {User} user
  *
  * @param {NavigationProps} props
  */
export default function Navigation({user}) {
  const links = [
    {name: "tabunan", displayName: "tabunan", href: "/", position: "left"},
  ];

  user
    ? links.push({
        name: "user",
        displayName: user.email,
        href: "/user",
        position: "right",
      })
    : links.push({
        name: "signin",
        displayName: "Sign in",
        href: "/sign-in",
        position: "right",
      });
  return (
    <nav className="mx-2">
      <ul>
        {links.map(({name, displayName, href, position}) => (
          <li className={`inline-block float-${position}`} key={name}>
            {name === "user" ? (
              <UserProfile>{displayName}</UserProfile>
            ) : (
              <Link href={href}>{displayName}</Link>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}
