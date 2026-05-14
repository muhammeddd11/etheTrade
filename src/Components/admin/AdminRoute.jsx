import { useEffect, useMemo, useState } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../../firebase/firebase";
import AdminLogin from "./AdminLogin";
import AdminPanel from "./AdminPanel";

const adminUids = (import.meta.env.VITE_FIREBASE_ADMIN_UIDS || "")
  .split(",")
  .map((uid) => uid.trim())
  .filter(Boolean);

const AdminRoute = () => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(Boolean(auth));

  useEffect(() => {
    if (!auth) {
      return undefined;
    }

    return onAuthStateChanged(auth, (nextUser) => {
      setUser(nextUser);
      setIsLoading(false);
    });
  }, []);

  const isAllowedAdmin = useMemo(() => {
    if (!user) {
      return false;
    }

    return adminUids.length === 0 || adminUids.includes(user.uid);
  }, [user]);

  if (isLoading) {
    return (
      <main className="grid min-h-screen place-items-center bg-[#1a0f0a] font-serif text-[#e8dcc4]">
        <p className="text-sm font-black uppercase tracking-[0.18em]">
          Loading admin...
        </p>
      </main>
    );
  }

  if (!user) {
    return <AdminLogin />;
  }

  if (!isAllowedAdmin) {
    return (
      <main className="grid min-h-screen place-items-center bg-[#1a0f0a] px-4 font-serif text-[#e8dcc4]">
        <section className="max-w-lg border-2 border-[#c8a96d] bg-[#2a1a0f] p-5">
          <h1 className="mb-3 text-2xl font-black uppercase">Access denied</h1>
          <p className="mb-4 text-sm">
            Your account is signed in, but its UID is not listed in
            `VITE_FIREBASE_ADMIN_UIDS`.
          </p>
          <button
            type="button"
            onClick={() => signOut(auth)}
            className="nav-button border-2 border-[#f2d58a] px-4 py-2 text-sm font-black uppercase text-[#f2d58a]"
          >
            Sign out
          </button>
        </section>
      </main>
    );
  }

  return <AdminPanel user={user} />;
};

export default AdminRoute;
