import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth, isFirebaseConfigured } from "../../firebase/firebase";

const AdminLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError("");
    setIsSubmitting(true);

    try {
      if (!auth) {
        throw new Error("Firebase is not configured yet.");
      }

      await signInWithEmailAndPassword(auth, email, password);
    } catch (loginError) {
      setError(loginError.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen bg-[#1a0f0a] px-4 py-10 font-serif text-[#e8dcc4]">
      <section className="mx-auto max-w-md border-2 border-[#c8a96d] bg-[#2a1a0f] p-5 shadow-[0_18px_45px_rgba(0,0,0,0.35)]">
        <p className="mb-2 text-xs font-black uppercase tracking-[0.26em] text-[#f2d58a]">
          Ethe Trade
        </p>
        <h1 className="mb-5 border-b border-[#8b7355] pb-3 text-3xl font-black uppercase">
          Admin Login
        </h1>

        {!isFirebaseConfigured && (
          <div className="mb-4 border border-[#c8a96d] bg-[#3d2817] p-3 text-sm">
            Add your Firebase values to `.env` before logging in.
          </div>
        )}

        <form className="space-y-4" onSubmit={handleSubmit}>
          <label className="block">
            <span className="mb-1 block text-sm font-bold uppercase">
              Email
            </span>
            <input
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              className="w-full border-2 border-[#8b7355] bg-[#e8dcc4] px-3 py-2 font-sans text-[#1a0f0a] outline-none focus:border-[#f2d58a]"
              autoComplete="email"
              required
            />
          </label>

          <label className="block">
            <span className="mb-1 block text-sm font-bold uppercase">
              Password
            </span>
            <input
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              className="w-full border-2 border-[#8b7355] bg-[#e8dcc4] px-3 py-2 font-sans text-[#1a0f0a] outline-none focus:border-[#f2d58a]"
              autoComplete="current-password"
              required
            />
          </label>

          {error && (
            <p className="border border-red-300 bg-red-950/40 p-3 text-sm text-red-100">
              {error}
            </p>
          )}

          <button
            type="submit"
            disabled={isSubmitting || !isFirebaseConfigured}
            className="nav-button w-full border-2 border-[#f2d58a] bg-[#f2d58a] px-4 py-3 text-sm font-black uppercase tracking-[0.12em] text-[#1a0f0a] disabled:cursor-not-allowed disabled:opacity-50"
          >
            {isSubmitting ? "Signing in..." : "Sign in"}
          </button>
        </form>
      </section>
    </main>
  );
};

export default AdminLogin;

