import Link from 'next/link';


export default function AuthPage() {
    return (
        <div>
            <h1>Welcome to the Auth Page</h1>
            <p>This is the authentication page of the application.</p>
            
            <Link href="/auth/register">
                <button>SignUp</button>
            </Link>
            
            <button>
                Login
            </button>
        </div>
    );
}
