import companyProfile from "./CompanyProfile.json";
import senatorGallery from "../assets/The_Senator's Gallery.jpg";
import goldenTouch from "../assets/The_Golden Touch.jpg";
import lionsStudio from "../assets/The_Lion's Studio.jpg";
import byzantineIntercession from "../assets/Byzantine_Intercession.jpg";
import drawing from "../assets/drawing.jpg";
import athena from "../assets/athena.jpg";
import womanWithAnOwl from "../assets/womanWithAnOwl.jpg";
import backgroundDesktop from "../assets/background-desktop.jpg";
import ethereChocolate from "../assets/ÉthéréArtisanChocolate.jpeg";
import ethereChocolate2 from "../assets/ÉthéréArtisanChocolate2.jpeg";
import ethereChocolate3 from "../assets/ÉthéréArtisanChocolate3.jpeg";
import ethereChocolate4 from "../assets/ÉthéréArtisanChocolate4.jpeg";

const editableAssets = [
  ["The_Senator's Gallery.jpg", senatorGallery],
  ["The_Golden Touch.jpg", goldenTouch],
  ["The_Lion's Studio.jpg", lionsStudio],
  ["Byzantine_Intercession.jpg", byzantineIntercession],
  ["drawing.jpg", drawing],
  ["athena.jpg", athena],
  ["womanWithAnOwl.jpg", womanWithAnOwl],
  ["background-desktop.jpg", backgroundDesktop],
  ["ÉthéréArtisanChocolate.jpeg", ethereChocolate],
  ["ÉthéréArtisanChocolate2.jpeg", ethereChocolate2],
  ["ÉthéréArtisanChocolate3.jpeg", ethereChocolate3],
  ["ÉthéréArtisanChocolate4.jpeg", ethereChocolate4],
];

const assetLookup = new Map(
  editableAssets.flatMap(([filename, assetUrl]) => {
    const decodedFilename = decodeURIComponent(filename);
    const stem = decodedFilename.replace(/\.[^.]+$/, "");

    return [
      [decodedFilename, assetUrl],
      [stem, assetUrl],
    ];
  }),
);

const [whatWeDo, whereWeAreGoing, whatWeStandFor, difference, valuesSection] =
  companyProfile.Content;

export const supportedLanguages = [
  { code: "en", label: "English", shortLabel: "EN", dir: "ltr" },
  { code: "fr", label: "Français", shortLabel: "FR", dir: "ltr" },
];

export const defaultLocale = "en";

export const defaultSiteContent = {
  siteMeta: {
    brandName: "Ethe Art Collective",
    headerTitleLineOne: "Ethe Art",
    headerTitleLineTwo: "Collective",
    eyebrow: "Linking Markets. Elevating Art.",
    tagline: "Building Brands. Connecting Markets.",
    established: "Est. 2024",
    location: "Dubai, UAE",
    descriptor: "Strategic Trade & Creative Brand Development",
    introEyebrow: "Linking Markets",
    introSubtitle: "Building Brands. Connecting Markets.",
  },
  navigation: [
    { id: "home", label: "Home" },
    { id: "about", label: "About Us" },
    { id: "products", label: "Products" },
    { id: "contact", label: "Contact Us" },
  ],
  home: {
    overview: {
      eyebrow: "Who We Are",
      intro:
        "Ethe Trade is a Dubai-based trading and brand development company, focused on delivering premium products and building distinctive brands that stand out in competitive markets.",
      support:
        "We combine strategic sourcing with creative thinking to transform products into meaningful brand experiences.",
      edgeTitle: "Our Edge",
      edgeText:
        "We don't follow the market, we elevate it. Our strength lies in merging trade expertise with creative direction, allowing us to build brands that are both commercially successful and visually distinctive.",
      image: senatorGallery,
      imageAlt: "Classical statue gallery",
      imageWidth: 600,
      imageHeight: 410,
      imageLoading: "eager",
    },
    services: {
      title: "Services",
      eyebrow: "What We Do:",
      image: goldenTouch,
      imageAlt: "Strategic business development",
      imageCaption: "Strategic Brands Development",
      secondaryImage: lionsStudio,
      secondaryImageAlt: "Team collaboration",
      items: [
        {
          title: "1. General Trading",
          text: "We source and deliver high-quality products across international markets, ensuring reliability, efficiency, and consistency.",
        },
        {
          title: "2. Product Distribution",
          text: "We connect products with the right markets through strategic distribution channels, helping brands reach their full potential.",
        },
        {
          title: "3. Brand Development",
          text: "We transform products into brands. From positioning to visual identity, we build distinctive brand experiences that stand out.",
        },
      ],
    },
    vision: {
      visionTitle: "Our Vision",
      visionText:
        "To build a timeless brand that blends trade, creativity, and innovation into one refined ecosystem.",
      missionTitle: "Our Mission",
      missionText:
        "To deliver exceptional products and build distinctive brands that reflect quality, creativity, and purpose.",
      image: byzantineIntercession,
      imageAlt: "Mosaic artwork",
      locationCaption: "Dubai, United Arab Emirates",
      valuesTitle: "Our Values",
      values: [
        {
          name: "Trust",
          description: "We build strong lasting relationships.",
        },
        {
          name: "Excellence",
          description: "We deliver nothing less than premium quality.",
        },
        {
          name: "Creativity",
          description: "We create with vision and originality.",
        },
      ],
      comingSoonTitle: "Coming Soon",
      comingSoonText:
        "Ethere Artisan Chocolate - A new luxury concept artistic blending",
    },
  },
  about: {
    tagline: companyProfile.tagline || "Linking Markets. Elevating Art.",
    title: "About Ethe Trade",
    panels: [
      {
        ...whatWeDo,
        image: drawing,
        imageAlt: "Classical justice statue",
        imageClassName: "about-art-image about-art-image--justice",
        imagePosition: "100% 90%",
        delay: "site-reveal--delay-1",
      },
      {
        ...whereWeAreGoing,
        image: womanWithAnOwl,
        imageAlt: "Classical architectural arch",
        imageClassName: "about-art-image about-art-image--arch",
        imagePosition: "100% 10%",
        delay: "site-reveal--delay-2",
      },
      {
        ...whatWeStandFor,
        image: athena,
        imageAlt: "Athena statue artwork",
        imageClassName: "about-art-image about-art-image--athena",
        imagePosition: "100% 10%",
        delay: "site-reveal--delay-3",
      },
    ],
    difference,
    valuesSection,
  },
  products: {
    title: "Products",
    comingSoonLabel: "Coming Soon",
    items: [
      {
        name: "Ethere artisan chocolate",
        image: ethereChocolate,
        imageWidth: 600,
        imageHeight: 306,
        imageNumber: "1",
        summary: "Ethere artisan chocolate",
        details: "",
      },
      {
        name: "Ethere artisan chocolate",
        image: ethereChocolate2,
        imageWidth: 600,
        imageHeight: 141,
        imageNumber: "2",
        summary: "Ethere artisan chocolate.",
        details: "",
      },
      {
        name: "Ethere artisan chocolate",
        image: ethereChocolate3,
        imageWidth: 600,
        imageHeight: 410,
        imageNumber: "3",
        summary: "Ethere artisan chocolate.",
        details: "",
      },
      {
        name: "Ethere artisan chocolate",
        image: ethereChocolate4,
        imageWidth: 600,
        imageHeight: 410,
        imageNumber: "4",
        summary: "Ethere artisan chocolate.",
        details: "",
      },
    ],
  },
  contact: {
    pageTitle: "Contact Us",
    boxTitle: "Let's Connect",
    emailLabel: "Email",
    email: "ete@ethetrade.info",
    locationLabel: "Location",
    location: "Dubai, UAE",
    phoneLabel: "Phone",
    phone: "+971 554038149",
  },
  footer: {
    leftText: "Premium Edition",
    centerText: "Ethe Trade",
    rightText: "Dubai 2024",
  },
  layout: {
    backgroundImage: backgroundDesktop,
  },
};

const frenchSiteContent = {
  siteMeta: {
    brandName: "Ethe Art Collective",
    headerTitleLineOne: "Ethe Art",
    headerTitleLineTwo: "Collective",
    eyebrow: "Relier les marches. Elever l'art.",
    tagline: "Construire des marques. Connecter les marches.",
    established: "Depuis 2024",
    location: "Dubai, EAU",
    descriptor: "Commerce strategique et developpement creatif de marques",
    introEyebrow: "Relier les marches",
    introSubtitle: "Construire des marques. Connecter les marches.",
  },
  navigation: [
    { id: "home", label: "Accueil" },
    { id: "about", label: "A propos" },
    { id: "products", label: "Produits" },
    { id: "contact", label: "Contact" },
  ],
  home: {
    overview: {
      eyebrow: "Qui nous sommes",
      intro:
        "Ethe Trade est une societe basee a Dubai, specialisee dans le commerce et le developpement de marques, avec pour objectif de proposer des produits premium et de construire des marques distinctives dans des marches competitifs.",
      support:
        "Nous associons approvisionnement strategique et pensee creative pour transformer les produits en experiences de marque porteuses de sens.",
      edgeTitle: "Notre avantage",
      edgeText:
        "Nous ne suivons pas le marche, nous l'elevons. Notre force consiste a unir expertise commerciale et direction creative afin de batir des marques a la fois performantes et visuellement distinctives.",
      imageAlt: "Galerie de statues classiques",
    },
    services: {
      title: "Services",
      eyebrow: "Ce que nous faisons :",
      imageAlt: "Developpement strategique d'entreprise",
      imageCaption: "Developpement strategique de marques",
      secondaryImageAlt: "Collaboration d'equipe",
      items: [
        {
          title: "1. Commerce general",
          text: "Nous sourcons et livrons des produits de haute qualite sur les marches internationaux, avec fiabilite, efficacite et constance.",
        },
        {
          title: "2. Distribution de produits",
          text: "Nous connectons les produits aux bons marches grace a des canaux de distribution strategiques, afin d'aider les marques a atteindre leur plein potentiel.",
        },
        {
          title: "3. Developpement de marques",
          text: "Nous transformons les produits en marques. Du positionnement a l'identite visuelle, nous creons des experiences de marque distinctives et memorables.",
        },
      ],
    },
    vision: {
      visionTitle: "Notre vision",
      visionText:
        "Batir une marque intemporelle qui unit commerce, creativite et innovation au sein d'un ecosysteme raffine.",
      missionTitle: "Notre mission",
      missionText:
        "Proposer des produits d'exception et construire des marques distinctives qui refletent la qualite, la creativite et le sens.",
      imageAlt: "Oeuvre en mosaique",
      locationCaption: "Dubai, Emirats arabes unis",
      valuesTitle: "Nos valeurs",
      values: [
        {
          name: "Confiance",
          description: "Nous construisons des relations solides et durables.",
        },
        {
          name: "Excellence",
          description: "Nous visons toujours une qualite premium.",
        },
        {
          name: "Creativite",
          description: "Nous creons avec vision et originalite.",
        },
      ],
      comingSoonTitle: "Bientot disponible",
      comingSoonText:
        "Ethere Artisan Chocolate - un nouveau concept de luxe au melange artistique",
    },
  },
  about: {
    tagline: "Relier les marches. Elever l'art.",
    title: "A propos d'Ethe Trade",
    panels: [
      {
        heading: "Ce que nous faisons",
        content:
          "Ethe Trade est une societe de commerce et de developpement de marques basee a Dubai, dediee aux produits premium et aux marques capables de se distinguer dans les marches modernes.",
        imageAlt: "Statue classique de la justice",
      },
      {
        heading: "Ou nous allons",
        content:
          "Nous avancons vers la creation d'un ecosysteme raffine qui rassemble commerce, creativite et innovation, ouvrant de nouvelles voies aux produits et aux marques sur les marches regionaux et internationaux.",
        imageAlt: "Arc architectural classique",
      },
      {
        heading: "Ce en quoi nous croyons",
        content:
          "Nous croyons qu'un bon produit a besoin d'une vision claire, d'une identite forte et d'une experience memorable. C'est pourquoi nous travaillons chaque detail pour relier la qualite au sens.",
        imageAlt: "Oeuvre representant une statue d'Athena",
      },
    ],
    difference: {
      heading: "Ce qui nous distingue",
      content:
        "Nous combinons pensee commerciale et sensibilite creative pour transformer les produits en marques porteuses d'une presence claire et d'une valeur durable.",
    },
    valuesSection: {
      heading: "Nos valeurs",
      values: [
        {
          name: "Confiance",
          description: "Nous construisons des relations solides et durables.",
        },
        {
          name: "Excellence",
          description: "Nous apportons une qualite elevee a chaque detail.",
        },
        {
          name: "Creativite",
          description: "Nous faconnons des idees et des identites avec vision.",
        },
      ],
    },
  },
  products: {
    title: "Produits",
    comingSoonLabel: "Bientot disponible",
    items: [
      {
        name: "Ethere artisan chocolate",
        summary: "Ethere artisan chocolate",
      },
      {
        name: "Ethere artisan chocolate",
        summary: "Ethere artisan chocolate.",
      },
      {
        name: "Ethere artisan chocolate",
        summary: "Ethere artisan chocolate.",
      },
      {
        name: "Ethere artisan chocolate",
        summary: "Ethere artisan chocolate.",
      },
    ],
  },
  contact: {
    pageTitle: "Contact",
    boxTitle: "Restons en contact",
    emailLabel: "E-mail",
    locationLabel: "Adresse",
    location: "Dubai, EAU",
    phoneLabel: "Telephone",
  },
  footer: {
    leftText: "Edition premium",
    centerText: "Ethe Trade",
    rightText: "Dubai 2024",
  },
};

export const localizedSiteContent = {
  en: defaultSiteContent,
  fr: frenchSiteContent,
};

const isPlainObject = (value) =>
  value !== null && typeof value === "object" && !Array.isArray(value);

export const mergeSiteContent = (fallback, override) => {
  if (Array.isArray(fallback) || Array.isArray(override)) {
    if (!Array.isArray(override) || override.length === 0) {
      return fallback;
    }

    if (!Array.isArray(fallback)) {
      return override;
    }

    return override.map((item, index) =>
      mergeSiteContent(fallback[index], item),
    );
  }

  if (!isPlainObject(fallback) || !isPlainObject(override)) {
    return override ?? fallback;
  }

  return Object.entries({ ...fallback, ...override }).reduce(
    (merged, [key]) => {
      merged[key] = mergeSiteContent(fallback[key], override[key]);
      return merged;
    },
    {},
  );
};

export const resolveEditableAsset = (value) => {
  if (typeof value !== "string" || /^https?:\/\//i.test(value)) {
    return value;
  }

  const decodedValue = (() => {
    try {
      return decodeURIComponent(value);
    } catch {
      return value;
    }
  })();

  const normalizedValue = decodedValue.replace(/\\/g, "/");
  const basename = normalizedValue.split("/").pop() || normalizedValue;
  const cleanBasename = basename.split("?")[0].split("#")[0];
  const cleanStem = cleanBasename.replace(/-[A-Za-z0-9_]+(?=\.[^.]+$)/, "");

  return (
    assetLookup.get(cleanBasename) ||
    assetLookup.get(cleanStem) ||
    [...assetLookup.entries()].find(([assetName]) =>
      normalizedValue.includes(assetName),
    )?.[1] ||
    value
  );
};

export const resolveSiteContentAssets = (value, key = "") => {
  if (Array.isArray(value)) {
    return value.map((item) => resolveSiteContentAssets(item, key));
  }

  if (isPlainObject(value)) {
    return Object.fromEntries(
      Object.entries(value).map(([childKey, childValue]) => [
        childKey,
        resolveSiteContentAssets(childValue, childKey),
      ]),
    );
  }

  if (/image/i.test(key)) {
    return resolveEditableAsset(value);
  }

  return value;
};

export const getDefaultSiteContent = (locale = defaultLocale) =>
  resolveSiteContentAssets(
    mergeSiteContent(defaultSiteContent, localizedSiteContent[locale]),
  );
