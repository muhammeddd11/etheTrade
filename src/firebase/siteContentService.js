import {
  deleteDoc,
  doc,
  getDoc,
  onSnapshot,
  serverTimestamp,
  setDoc,
} from "firebase/firestore";
import {
  defaultLocale,
  getDefaultSiteContent,
  mergeSiteContent,
} from "../content/defaultSiteContent";
import { db, isFirebaseConfigured } from "./firebase";

const COLLECTION_NAME = "siteContent";

export const canUseFirebase = () => Boolean(isFirebaseConfigured && db);

export const getSiteContentRef = (locale = defaultLocale) => {
  if (!canUseFirebase()) {
    return null;
  }

  return doc(db, COLLECTION_NAME, locale);
};

export const normalizeContentDoc = (snapshot, locale = defaultLocale) => {
  const fallback = getDefaultSiteContent(locale);

  if (!snapshot?.exists()) {
    return fallback;
  }

  return mergeSiteContent(fallback, snapshot.data()?.content);
};

export const subscribeToSiteContent = (locale, onChange, onError) => {
  const contentRef = getSiteContentRef(locale);

  if (!contentRef) {
    onChange(getDefaultSiteContent(locale));
    return () => {};
  }

  return onSnapshot(
    contentRef,
    (snapshot) => onChange(normalizeContentDoc(snapshot, locale)),
    onError,
  );
};

export const fetchSiteContentOverride = async (locale) => {
  const contentRef = getSiteContentRef(locale);

  if (!contentRef) {
    return null;
  }

  const snapshot = await getDoc(contentRef);
  return snapshot.exists() ? snapshot.data()?.content || null : null;
};

export const saveSiteContent = async (locale, content, user) => {
  const contentRef = getSiteContentRef(locale);

  if (!contentRef) {
    throw new Error("Firebase is not configured.");
  }

  await setDoc(
    contentRef,
    {
      content,
      updatedAt: serverTimestamp(),
      updatedBy: user?.email || user?.uid || "unknown",
    },
    { merge: true },
  );
};

export const seedDefaultSiteContent = async (locale, user) => {
  await saveSiteContent(locale, getDefaultSiteContent(locale), user);
};

export const deleteSiteContentOverride = async (locale) => {
  const contentRef = getSiteContentRef(locale);

  if (!contentRef) {
    throw new Error("Firebase is not configured.");
  }

  await deleteDoc(contentRef);
};

