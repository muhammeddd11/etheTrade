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
  { code: "ar", label: "العربية", shortLabel: "AR", dir: "rtl" },
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

const arabicSiteContent = {
  siteMeta: {
    brandName: "مجموعة إيثي للفنون",
    headerTitleLineOne: "إيثي آرت",
    headerTitleLineTwo: "كولكتيف",
    eyebrow: "نربط الأسواق. ونرتقي بالفن.",
    tagline: "نبني العلامات. ونصل الأسواق.",
    established: "تأسست 2024",
    location: "دبي، الإمارات",
    descriptor: "تجارة استراتيجية وتطوير إبداعي للعلامات",
    introEyebrow: "نربط الأسواق",
    introSubtitle: "نبني العلامات. ونصل الأسواق.",
  },
  navigation: [
    { id: "home", label: "الرئيسية" },
    { id: "about", label: "من نحن" },
    { id: "products", label: "المنتجات" },
    { id: "contact", label: "تواصل معنا" },
  ],
  home: {
    overview: {
      eyebrow: "من نحن",
      intro:
        "إيثي تريد شركة مقرها دبي تعمل في التجارة وتطوير العلامات، وتركز على تقديم منتجات متميزة وبناء علامات مختلفة تبرز في الأسواق التنافسية.",
      support:
        "نجمع بين التوريد الاستراتيجي والتفكير الإبداعي لتحويل المنتجات إلى تجارب علامات ذات معنى.",
      edgeTitle: "ميزتنا",
      edgeText:
        "نحن لا نتبع السوق، بل نرتقي به. تكمن قوتنا في دمج خبرة التجارة مع التوجيه الإبداعي لبناء علامات ناجحة تجاريا ومميزة بصريا.",
      imageAlt: "معرض تماثيل كلاسيكية",
    },
    services: {
      title: "الخدمات",
      eyebrow: "ماذا نقدم:",
      imageAlt: "تطوير أعمال استراتيجي",
      imageCaption: "تطوير العلامات الاستراتيجية",
      secondaryImageAlt: "تعاون الفريق",
      items: [
        {
          title: "1. التجارة العامة",
          text: "نوفر ونورد منتجات عالية الجودة عبر الأسواق الدولية مع ضمان الاعتمادية والكفاءة والاستمرارية.",
        },
        {
          title: "2. توزيع المنتجات",
          text: "نربط المنتجات بالأسواق المناسبة من خلال قنوات توزيع استراتيجية تساعد العلامات على تحقيق كامل إمكاناتها.",
        },
        {
          title: "3. تطوير العلامات",
          text: "نحول المنتجات إلى علامات. من التمركز إلى الهوية البصرية، نبني تجارب علامات مميزة وراسخة.",
        },
      ],
    },
    vision: {
      visionTitle: "رؤيتنا",
      visionText:
        "بناء علامة خالدة تمزج التجارة والإبداع والابتكار ضمن منظومة راقية واحدة.",
      missionTitle: "مهمتنا",
      missionText:
        "تقديم منتجات استثنائية وبناء علامات مميزة تعكس الجودة والإبداع والهدف.",
      imageAlt: "عمل فني فسيفسائي",
      locationCaption: "دبي، الإمارات العربية المتحدة",
      valuesTitle: "قيمنا",
      values: [
        {
          name: "الثقة",
          description: "نبني علاقات قوية ودائمة.",
        },
        {
          name: "التميز",
          description: "لا نقدم أقل من الجودة الرفيعة.",
        },
        {
          name: "الإبداع",
          description: "نبدع برؤية وأصالة.",
        },
      ],
      comingSoonTitle: "قريبا",
      comingSoonText: "إيثير شوكولاتة حرفية - مفهوم فاخر جديد بمزيج فني",
    },
  },
  about: {
    tagline: "نربط الأسواق. ونرتقي بالفن.",
    title: "عن إيثي تريد",
    panels: [
      {
        heading: "ماذا نقدم",
        content:
          "إيثي تريد شركة تجارية وتطوير علامات مقرها دبي، تعمل على تقديم منتجات متميزة وبناء علامات قادرة على المنافسة في الأسواق الحديثة.",
        imageAlt: "تمثال عدالة كلاسيكي",
      },
      {
        heading: "إلى أين نتجه",
        content:
          "نتجه نحو بناء منظومة راقية تجمع التجارة والإبداع والابتكار، وتفتح مسارات جديدة للمنتجات والعلامات في الأسواق الإقليمية والدولية.",
        imageAlt: "قوس معماري كلاسيكي",
      },
      {
        heading: "ما نؤمن به",
        content:
          "نؤمن بأن المنتج الجيد يحتاج إلى رؤية واضحة وهوية قوية وتجربة لا تنسى. لذلك نعمل بعناية على كل تفصيل يربط الجودة بالمعنى.",
        imageAlt: "عمل فني لتمثال أثينا",
      },
    ],
    difference: {
      heading: "ما الذي يميزنا",
      content:
        "نمزج التفكير التجاري مع الحس الإبداعي لنحول المنتجات إلى علامات تحمل حضورا واضحا وقيمة قابلة للنمو.",
    },
    valuesSection: {
      heading: "قيمنا",
      values: [
        { name: "الثقة", description: "نبني علاقات قوية ودائمة." },
        { name: "التميز", description: "نقدم جودة رفيعة في كل تفصيل." },
        { name: "الإبداع", description: "نصنع أفكارا وهوية برؤية أصيلة." },
      ],
    },
  },
  products: {
    title: "المنتجات",
    comingSoonLabel: "قريبا",
    items: [
      {
        name: "إيثير شوكولاتة حرفية",
        summary: "إيثير شوكولاتة حرفية",
      },
      {
        name: "إيثير شوكولاتة حرفية",
        summary: "إيثير شوكولاتة حرفية.",
      },
      {
        name: "إيثير شوكولاتة حرفية",
        summary: "إيثير شوكولاتة حرفية.",
      },
      {
        name: "إيثير شوكولاتة حرفية",
        summary: "إيثير شوكولاتة حرفية.",
      },
    ],
  },
  contact: {
    pageTitle: "تواصل معنا",
    boxTitle: "لنتواصل",
    emailLabel: "البريد الإلكتروني",
    locationLabel: "الموقع",
    location: "دبي، الإمارات",
    phoneLabel: "الهاتف",
  },
  footer: {
    leftText: "إصدار متميز",
    centerText: "إيثي تريد",
    rightText: "دبي 2024",
  },
};

export const localizedSiteContent = {
  en: defaultSiteContent,
  ar: arabicSiteContent,
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
