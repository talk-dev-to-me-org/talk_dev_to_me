import Link from "next/link";

export default function Header({ username, onLogout }) {
  return (
    <header className="">
      <h1 className="">Talk Dev To Me</h1>
      <div className="">
        <p className="">{username}</p>
        <Link href="/">
          <button className="">
            {username && <a onClick={onLogout}>Sign Out</a>}
          </button>
        </Link>
        <Link href="/">
          <button className="">
            <a>Logout</a>
          </button>
        </Link>
      </div>
    </header>
  );
}
