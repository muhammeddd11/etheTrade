import { useEffect, useMemo, useState } from "react";
import { signOut } from "firebase/auth";
import {
  defaultLocale,
  getDefaultSiteContent,
  supportedLanguages,
} from "../../content/defaultSiteContent";
import { auth } from "../../firebase/firebase";
import {
  deleteSiteContentOverride,
  fetchSiteContentOverride,
  saveSiteContent,
  seedDefaultSiteContent,
} from "../../firebase/siteContentService";

const sectionGroups = [
  { id: "siteMeta", label: "Site Header", path: ["siteMeta"] },
  { id: "navigation", label: "Navigation", path: ["navigation"] },
  { id: "overview", label: "Home Overview", path: ["home", "overview"] },
  { id: "services", label: "Services", path: ["home", "services"] },
  { id: "vision", label: "Vision & Values", path: ["home", "vision"] },
  { id: "about", label: "About Page", path: ["about"] },
  { id: "products", label: "Products", path: ["products"] },
  { id: "contact", label: "Contact", path: ["contact"] },
  { id: "footer", label: "Footer", path: ["footer"] },
];

const isPlainObject = (value) =>
  value !== null && typeof value === "object" && !Array.isArray(value);

const titleize = (value) =>
  String(value)
    .replace(/([A-Z])/g, " $1")
    .replace(/[_-]/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .replace(/^./, (letter) => letter.toUpperCase());

const getValueAtPath = (source, path) =>
  path.reduce((current, key) => current?.[key], source);

const updateValueAtPath = (source, path, value) => {
  if (path.length === 0) {
    return value;
  }

  const [head, ...rest] = path;
  const nextSource = Array.isArray(source) ? [...source] : { ...source };
  nextSource[head] = updateValueAtPath(nextSource[head], rest, value);
  return nextSource;
};

const createEmptyValue = (sample) => {
  if (Array.isArray(sample)) {
    return [];
  }

  if (isPlainObject(sample)) {
    return Object.fromEntries(
      Object.entries(sample).map(([key, value]) => [key, createEmptyValue(value)]),
    );
  }

  if (typeof sample === "number") {
    return 0;
  }

  if (typeof sample === "boolean") {
    return false;
  }

  return "";
};

const NavigationEditor = ({ value, onChange }) => (
  <div className="space-y-3">
    {value.map((item, index) => (
      <div
        key={item.id || index}
        className="border-2 border-[#8b7355] bg-[#e8dcc4]/70 p-3"
      >
        <p className="mb-2 text-xs font-black uppercase text-[#3d2817]">
          {titleize(item.id || `Item ${index + 1}`)}
        </p>
        <label className="block">
          <span className="mb-1 block text-sm font-black uppercase">Label</span>
          <input
            type="text"
            value={item.label ?? ""}
            onChange={(event) =>
              onChange(
                value.map((currentItem, itemIndex) =>
                  itemIndex === index
                    ? { ...currentItem, label: event.target.value }
                    : currentItem,
                ),
              )
            }
            className="w-full border-2 border-[#8b7355] bg-[#e8dcc4] px-3 py-2 font-sans text-sm text-[#1a0f0a] outline-none focus:border-[#f2d58a]"
          />
        </label>
      </div>
    ))}
  </div>
);

const FieldEditor = ({ label, value, templateValue, onChange, depth = 0 }) => {
  const fieldId = useMemo(
    () => `${label.replace(/\W+/g, "-")}-${Math.random().toString(36).slice(2)}`,
    [label],
  );

  if (Array.isArray(value)) {
    const sample = value[0] || templateValue?.[0] || {};

    return (
      <div className="border-2 border-[#8b7355] bg-[#d4c4a8]/60 p-3">
        <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
          <h3 className="text-sm font-black uppercase">{titleize(label)}</h3>
          <button
            type="button"
            onClick={() => onChange([...value, createEmptyValue(sample)])}
            className="nav-button border-2 border-[#2a1a0f] px-3 py-1.5 text-xs font-black uppercase"
          >
            Add
          </button>
        </div>

        <div className="space-y-3">
          {value.map((item, index) => (
            <div
              key={`${label}-${index}`}
              className="border border-[#8b7355] bg-[#e8dcc4]/70 p-3"
            >
              <div className="mb-3 flex items-center justify-between gap-2">
                <p className="text-xs font-black uppercase">
                  {titleize(label)} {index + 1}
                </p>
                <button
                  type="button"
                  onClick={() =>
                    onChange(value.filter((_, itemIndex) => itemIndex !== index))
                  }
                  className="nav-button border-2 border-red-900 bg-red-950 px-3 py-1.5 text-xs font-black uppercase text-red-50"
                >
                  Remove
                </button>
              </div>

              <FieldEditor
                label={`${label} ${index + 1}`}
                value={item}
                templateValue={templateValue?.[index] || templateValue?.[0]}
                depth={depth + 1}
                onChange={(nextItem) =>
                  onChange(
                    value.map((currentItem, itemIndex) =>
                      itemIndex === index ? nextItem : currentItem,
                    ),
                  )
                }
              />
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (isPlainObject(value)) {
    return (
      <div className={depth === 0 ? "space-y-4" : "space-y-3"}>
        {Object.entries(value).map(([key, childValue]) => (
          <FieldEditor
            key={key}
            label={key}
            value={childValue}
            templateValue={templateValue?.[key]}
            depth={depth + 1}
            onChange={(nextChildValue) =>
              onChange({ ...value, [key]: nextChildValue })
            }
          />
        ))}
      </div>
    );
  }

  if (typeof value === "boolean") {
    return (
      <label className="flex items-center gap-3 border border-[#8b7355] bg-[#e8dcc4]/70 p-3">
        <input
          type="checkbox"
          checked={value}
          onChange={(event) => onChange(event.target.checked)}
          className="h-5 w-5 accent-[#1a0f0a]"
        />
        <span className="text-sm font-black uppercase">{titleize(label)}</span>
      </label>
    );
  }

  const isLongText = String(value ?? "").length > 90;
  const isNumber = typeof value === "number";

  return (
    <label className="block">
      <span className="mb-1 block text-sm font-black uppercase">
        {titleize(label)}
      </span>
      {isLongText ? (
        <textarea
          id={fieldId}
          value={value ?? ""}
          onChange={(event) => onChange(event.target.value)}
          rows={4}
          className="w-full resize-y border-2 border-[#8b7355] bg-[#e8dcc4] px-3 py-2 font-sans text-sm text-[#1a0f0a] outline-none focus:border-[#f2d58a]"
        />
      ) : (
        <input
          id={fieldId}
          type={isNumber ? "number" : "text"}
          value={value ?? ""}
          onChange={(event) =>
            onChange(isNumber ? Number(event.target.value) : event.target.value)
          }
          className="w-full border-2 border-[#8b7355] bg-[#e8dcc4] px-3 py-2 font-sans text-sm text-[#1a0f0a] outline-none focus:border-[#f2d58a]"
        />
      )}
    </label>
  );
};

const AdminPanel = ({ user }) => {
  const [locale, setLocale] = useState(defaultLocale);
  const [activeSectionId, setActiveSectionId] = useState(sectionGroups[0].id);
  const [contentDraft, setContentDraft] = useState(null);
  const [status, setStatus] = useState("");
  const [error, setError] = useState("");
  const [isBusy, setIsBusy] = useState(false);

  const activeLanguage = useMemo(
    () => supportedLanguages.find((language) => language.code === locale),
    [locale],
  );

  const activeSection = useMemo(
    () =>
      sectionGroups.find((section) => section.id === activeSectionId) ||
      sectionGroups[0],
    [activeSectionId],
  );

  const activeSectionValue = contentDraft
    ? getValueAtPath(contentDraft, activeSection.path)
    : null;
  const activeSectionTemplate = getValueAtPath(
    getDefaultSiteContent(locale),
    activeSection.path,
  );

  const loadContent = async (nextLocale = locale) => {
    setIsBusy(true);
    setError("");
    setStatus("");

    try {
      const override = await fetchSiteContentOverride(nextLocale);

      if (override) {
        setContentDraft(override);
        setStatus(`Loaded Firebase content for ${nextLocale.toUpperCase()}.`);
        return;
      }

      await seedDefaultSiteContent(nextLocale, user);
      const seeded = await fetchSiteContentOverride(nextLocale);
      setContentDraft(seeded);
      setStatus(`Created ${nextLocale.toUpperCase()} content from defaults.`);
    } catch (loadError) {
      setError(loadError.message);
    } finally {
      setIsBusy(false);
    }
  };

  useEffect(() => {
    const loadTimer = window.setTimeout(() => {
      loadContent(locale);
    }, 0);

    return () => window.clearTimeout(loadTimer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [locale]);

  const updateActiveSection = (nextSectionValue) => {
    setContentDraft((currentDraft) =>
      updateValueAtPath(currentDraft, activeSection.path, nextSectionValue),
    );
  };

  const handleSaveSection = async () => {
    setIsBusy(true);
    setError("");
    setStatus("");

    try {
      await saveSiteContent(locale, contentDraft, user);
      setStatus(`${activeSection.label} saved. The public site will update.`);
    } catch (saveError) {
      setError(saveError.message);
    } finally {
      setIsBusy(false);
    }
  };

  const handleResetSection = async () => {
    const defaultContent = getDefaultSiteContent(locale);
    const defaultSectionValue = getValueAtPath(defaultContent, activeSection.path);
    const nextDraft = updateValueAtPath(
      contentDraft,
      activeSection.path,
      defaultSectionValue,
    );

    setContentDraft(nextDraft);
    setIsBusy(true);
    setError("");
    setStatus("");

    try {
      await saveSiteContent(locale, nextDraft, user);
      setStatus(`${activeSection.label} reset to local defaults.`);
    } catch (resetError) {
      setError(resetError.message);
    } finally {
      setIsBusy(false);
    }
  };

  const handleDelete = async () => {
    const confirmed = window.confirm(
      `Delete the Firebase override for ${locale.toUpperCase()}? The public site will fall back to local defaults.`,
    );

    if (!confirmed) {
      return;
    }

    setIsBusy(true);
    setError("");
    setStatus("");

    try {
      await deleteSiteContentOverride(locale);
      setContentDraft(null);
      setStatus(`Deleted ${locale.toUpperCase()} Firebase override.`);
    } catch (deleteError) {
      setError(deleteError.message);
    } finally {
      setIsBusy(false);
    }
  };

  return (
    <main className="min-h-screen bg-[#e8dcc4] px-4 py-6 font-serif text-[#1a0f0a]">
      <div className="mx-auto max-w-6xl">
        <header className="mb-4 flex flex-col gap-3 border-2 border-[#2a1a0f] bg-[#d4c4a8] p-4 shadow-[0_12px_28px_rgba(26,15,10,0.18)] md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.28em] text-[#3d2817]">
              Content Management
            </p>
            <h1 className="text-3xl font-black uppercase">Admin Panel</h1>
            <p className="mt-1 text-sm">
              Signed in as <strong>{user.email}</strong>
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            <a
              href="/"
              className="nav-button border-2 border-[#2a1a0f] px-4 py-2 text-sm font-black uppercase"
            >
              View Site
            </a>
            <button
              type="button"
              onClick={() => signOut(auth)}
              className="nav-button border-2 border-[#2a1a0f] bg-[#1a0f0a] px-4 py-2 text-sm font-black uppercase text-[#e8dcc4]"
            >
              Sign out
            </button>
          </div>
        </header>

        <section className="mb-4 border-2 border-[#2a1a0f] bg-[#d4c4a8]/75 p-4">
          <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <label className="block">
              <span className="mb-1 block text-sm font-black uppercase">
                Language
              </span>
              <select
                value={locale}
                onChange={(event) => setLocale(event.target.value)}
                className="border-2 border-[#2a1a0f] bg-[#e8dcc4] px-3 py-2 font-bold"
              >
                {supportedLanguages.map((language) => (
                  <option key={language.code} value={language.code}>
                    {language.label} ({language.code})
                  </option>
                ))}
              </select>
            </label>

            <div className="flex flex-wrap gap-2">
              <button
                type="button"
                onClick={() => loadContent(locale)}
                disabled={isBusy}
                className="nav-button border-2 border-[#2a1a0f] px-4 py-2 text-sm font-black uppercase disabled:opacity-50"
              >
                Reload
              </button>
              <button
                type="button"
                onClick={handleDelete}
                disabled={isBusy}
                className="nav-button border-2 border-red-900 bg-red-950 px-4 py-2 text-sm font-black uppercase text-red-50 disabled:opacity-50"
              >
                Delete Override
              </button>
            </div>
          </div>

          <p className="mt-3 text-sm">
            Editing <strong>{activeLanguage?.label}</strong>. Choose a section,
            update its fields, then save that section.
          </p>
        </section>

        <div className="grid gap-4 lg:grid-cols-[240px_minmax(0,1fr)]">
          <aside className="border-2 border-[#2a1a0f] bg-[#d4c4a8]/75 p-3">
            <nav className="grid gap-2">
              {sectionGroups.map((section) => {
                const isActive = section.id === activeSection.id;

                return (
                  <button
                    key={section.id}
                    type="button"
                    onClick={() => setActiveSectionId(section.id)}
                    className={`nav-button border-2 px-3 py-2 text-left text-xs font-black uppercase ${
                      isActive
                        ? "border-[#1a0f0a] bg-[#1a0f0a] text-[#f2d58a]"
                        : "border-[#2a1a0f] text-[#1a0f0a]"
                    }`}
                  >
                    {section.label}
                  </button>
                );
              })}
            </nav>
          </aside>

          <section className="border-2 border-[#2a1a0f] bg-[#d4c4a8]/75 p-4">
            <div className="mb-4 flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-xs font-black uppercase tracking-[0.22em] text-[#3d2817]">
                  Section Editor
                </p>
                <h2 className="text-2xl font-black uppercase">
                  {activeSection.label}
                </h2>
              </div>

              <div className="flex flex-wrap gap-2">
                <button
                  type="button"
                  onClick={handleResetSection}
                  disabled={isBusy || !contentDraft}
                  className="nav-button border-2 border-[#2a1a0f] px-4 py-2 text-sm font-black uppercase disabled:opacity-50"
                >
                  Reset Section
                </button>
                <button
                  type="button"
                  onClick={handleSaveSection}
                  disabled={isBusy || !contentDraft}
                  className="nav-button border-2 border-[#1a0f0a] bg-[#1a0f0a] px-5 py-2 text-sm font-black uppercase text-[#f2d58a] disabled:opacity-50"
                >
                  {isBusy ? "Working..." : "Save Section"}
                </button>
              </div>
            </div>

            {status && (
              <p className="mb-3 border border-green-900 bg-green-950/10 p-3 text-sm font-bold text-green-950">
                {status}
              </p>
            )}
            {error && (
              <p className="mb-3 border border-red-900 bg-red-950/10 p-3 text-sm font-bold text-red-950">
                {error}
              </p>
            )}

            {activeSectionValue ? (
              activeSection.id === "navigation" ? (
                <NavigationEditor
                  value={activeSectionValue}
                  onChange={updateActiveSection}
                />
              ) : (
                <FieldEditor
                  label={activeSection.label}
                  value={activeSectionValue}
                  templateValue={activeSectionTemplate}
                  onChange={updateActiveSection}
                />
              )
            ) : (
              <p className="border border-[#8b7355] bg-[#e8dcc4]/70 p-4 text-sm font-bold">
                Loading content...
              </p>
            )}
          </section>
        </div>
      </div>
    </main>
  );
};

export default AdminPanel;
