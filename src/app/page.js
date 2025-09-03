import Link from "next/link";
import "./app.css";

export default function Home() {
  return (
    <div>
      <h1>Welcome to the Home Page</h1>
      <p>This is the main landing page.</p>
      <button onClick={Link}>
        SignUp
      </button>
    </div>
  );
}