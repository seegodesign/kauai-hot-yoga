import { defineCollection, z } from "astro:content";

const settings = defineCollection({
  type: "data",
  schema: z.object({
    studio_name: z.string(),
    phone: z.string(),
    email: z.string(),
    address: z.object({
      street: z.string(),
      city: z.string(),
      state: z.string(),
      zip: z.string(),
    }),
    latitude: z.number().optional().default(21.978104),
    longitude: z.number().optional().default(-159.368038),
    business_hours: z
      .array(
        z.object({
          day: z.string(),
          hours: z.string(),
        })
      )
      .optional()
      .default([]),
    social: z
      .object({
        instagram: z.string().optional().default(""),
        facebook: z.string().optional().default(""),
        google_review_url: z.string().optional().default(""),
        yelp_review_url: z.string().optional().default(""),
        social_share_image: z.string().optional().default(""),
      })
      .optional(),
  }),
});

const home = defineCollection({
  type: "data",
  schema: z.object({
    seo_title: z.string().optional().default(""),
    seo_description: z.string().optional().default(""),
    hero_heading: z.string(),
    hero_subheading: z.string(),
    cta_primary: z.object({ text: z.string(), href: z.string() }),
    cta_secondary: z.object({ text: z.string(), href: z.string() }),
    explainer_heading: z.string(),
    explainer_paragraphs: z.array(z.string()),
    new_here_image: z.string(),
    cta_strip_eyebrow: z.string().optional().default(""),
    cta_strip_heading: z.string(),
    cta_strip_subheading: z.string(),
    cta_strip_primary: z.object({ text: z.string(), href: z.string() }),
    cta_strip_secondary: z.object({ text: z.string(), href: z.string() }),
    reviews_eyebrow: z.string().optional().default(""),
    reviews_heading: z.string().optional().default(""),
    reviews_subtitle: z.string().optional().default(""),
    why_hot_yoga_eyebrow: z.string().optional().default(""),
    why_hot_yoga_heading: z.string().optional().default(""),
    why_hot_yoga_paragraphs: z.array(z.string()).optional().default([]),
    why_hot_yoga_cta: z.string().optional().default(""),
    amenities_eyebrow: z.string().optional().default(""),
    amenities_heading: z.string().optional().default(""),
    amenities: z.array(z.object({ title: z.string(), body: z.string() })).optional().default([]),
    new_here_section_heading: z.string().optional().default(""),
    new_here_quick_tips: z.array(z.object({ title: z.string(), body: z.string() })).optional().default([]),
    new_here_cta_text: z.string().optional().default(""),
    new_here_cta_href: z.string().optional().default(""),
    location_eyebrow: z.string().optional().default(""),
    location_heading: z.string().optional().default(""),
    location_body: z.string().optional().default(""),
    mission_eyebrow: z.string().optional().default(""),
    mission_heading: z.string().optional().default(""),
    mission_paragraphs: z.array(z.string()).optional().default([]),
    mission_cta_text: z.string().optional().default(""),
    mission_cta_href: z.string().optional().default(""),
    teachers_section_eyebrow: z.string().optional().default(""),
    teachers_section_heading: z.string().optional().default(""),
    teachers_section_subtitle: z.string().optional().default(""),
    teachers_section_cta_text: z.string().optional().default(""),
  }),
});

const about = defineCollection({
  type: "data",
  schema: z.object({
    seo_title: z.string(),
    seo_description: z.string(),
    hero_eyebrow: z.string(),
    hero_title: z.string(),
    hero_subtitle: z.string(),
    studio_eyebrow: z.string(),
    studio_heading: z.string(),
    studio_paragraph: z.string(),
    studio_features: z.array(z.string()),
    studio_cta: z.object({ text: z.string(), href: z.string() }),
    studio_image_desktop: z.string(),
    studio_image_mobile: z.string(),
    studio_image_alt: z.string(),
    cta_heading: z.string(),
    cta_paragraph: z.string(),
    cta_primary: z.object({ text: z.string(), href: z.string() }),
    cta_secondary: z.object({ text: z.string(), href: z.string() }),
  }),
});

const workshopsPage = defineCollection({
  type: "data",
  schema: z.object({
    seo_title: z.string(),
    seo_description: z.string(),
    hero_eyebrow: z.string(),
    hero_title: z.string(),
    hero_subtitle: z.string(),
    reserve_button_text: z.string(),
    reserve_button_href: z.string(),
    workshops: z.array(
      z.object({
        title: z.string(),
        date: z.string(),
        time: z.string(),
        instructor: z.string(),
        capacity: z.string(),
        price: z.string(),
        description: z.string(),
        image: z.string().optional().default(""),
      })
    ),
    benefits_heading: z.string(),
    benefits_intro: z.string(),
    benefits: z.array(
      z.object({
        title: z.string(),
        body: z.string(),
      })
    ),
  }),
});

const breathworkPage = defineCollection({
  type: "data",
  schema: z.object({
    seo_title: z.string().optional().default(""),
    seo_description: z.string().optional().default(""),
    hero_eyebrow: z.string(),
    hero_title: z.string(),
    hero_subtitle: z.string(),
    what_is_heading: z.string(),
    intro_blocks: z.array(
      z.object({
        title: z.string(),
        body: z.string(),
        image: z.string(),
        image_alt: z.string(),
        image_right: z.boolean().optional().default(true),
      })
    ),
    benefits: z.array(
      z.object({
        title: z.string(),
        description: z.string(),
      })
    ),
    sessions_heading: z.string(),
    expect_heading: z.string(),
    expectations: z.array(
      z.object({
        title: z.string(),
        body: z.string(),
      })
    ),
  }),
});

const coldPlungePage = defineCollection({
  type: "data",
  schema: z.object({
    seo_title: z.string(),
    seo_description: z.string(),
    hero_eyebrow: z.string(),
    hero_title: z.string(),
    hero_subtitle: z.string(),
    science_heading: z.string(),
    science_intro: z.string(),
    benefits: z.array(
      z.object({
        title: z.string(),
        description: z.string(),
      })
    ),
    options_heading: z.string(),
    options_cta_text: z.string(),
    how_it_works_heading: z.string(),
    steps: z.array(
      z.object({
        title: z.string(),
        description: z.string(),
      })
    ),
    safety_heading: z.string(),
    safety_intro: z.string(),
    safety_points: z.array(z.string()),
  }),
});

const testimonials = defineCollection({
  type: "data",
  schema: z.object({
    name: z.string(),
    location: z.string(),
    rating: z.number().min(1).max(5).default(5),
    text: z.string(),
    highlight: z.string(),
    source: z.enum(["Google", "Yelp"]),
    order: z.number().optional().default(0),
  }),
});

const offerings = defineCollection({
  type: "data",
  schema: z.object({
    slug: z.enum(["yoga-classes", "workshops", "breathwork", "cold-plunge"]),
    title: z.string(),
    description: z.string(),
    href: z.string(),
    image: z.string(),
    items: z.array(z.string()),
    order: z.number().default(0),
  }),
});

const faq = defineCollection({
  type: "data",
  schema: z.object({
    category: z.string(),
    question: z.string(),
    answer: z.string(),
    order: z.number().default(0),
  }),
});

const blog = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    author: z.string().default("Kauai Hot Yoga"),
    image: z.string().optional(),
    tags: z.array(z.string()).optional().default([]),
    draft: z.boolean().optional().default(false),
  }),
});

const community = defineCollection({
  type: "data",
  schema: z.object({
    name: z.string(),
    role: z.string().optional().default(""),
    bio: z.string(),
    photo: z.string().optional().default(""),
    photo_position: z.string().optional().default("center"),
    website: z.string().optional().default(""),
    instagram: z.string().optional().default(""),
    order: z.number().optional().default(0),
  }),
});

const teachers = defineCollection({
  type: "data",
  schema: z.object({
    name: z.string(),
    title: z.string().optional().default(""),
    bio: z.string(),
    photo: z.string().optional().default(""),
    specialties: z.array(z.string()).optional().default([]),
    instagram: z.string().optional().default(""),
    order: z.number().optional().default(0),
  }),
});

const footer = defineCollection({
  type: "data",
  schema: z.object({
    description: z.string(),
  }),
});

const pricingPlans = defineCollection({
  type: "data",
  schema: z.object({
    name: z.string(),
    price: z.string(),
    period: z.string().optional(),
    description: z.string(),
    features: z.array(z.string()),
    popular: z.boolean().optional().default(false),
    category: z.enum(["drop-in", "class-pack", "membership"]),
    order: z.number().default(0),
    cta_url: z.string().optional(),
  }),
});

const pricingSpecials = defineCollection({
  type: "data",
  schema: z.object({
    name: z.string(),
    subtitle: z.string(),
    badge: z.string(),
    price: z.string(),
    description: z.string(),
    features: z.array(z.string()),
    cta_text: z.string(),
    cta_url: z.string(),
    order: z.number().default(0),
  }),
});

const coldPlungePricing = defineCollection({
  type: "data",
  schema: z.object({
    name: z.string(),
    price: z.string(),
    badge: z.string().optional(),
    description: z.string(),
    features: z.array(z.string()),
    cta_url: z.string(),
    order: z.number().default(0),
  }),
});

const breathworkPricing = defineCollection({
  type: "data",
  schema: z.object({
    name: z.string(),
    price: z.string(),
    duration: z.string().optional(),
    badge: z.string().optional(),
    description: z.string(),
    features: z.array(z.string()),
    cta_url: z.string(),
    order: z.number().default(0),
  }),
});

const pageHeroSettings = defineCollection({
  type: "data",
  schema: z.object({
    about: z.object({ desktop: z.string(), mobile: z.string() }),
    home: z.object({ desktop: z.string(), mobile: z.string() }),
    blog: z.object({ desktop: z.string(), mobile: z.string() }),
    classes: z.object({ desktop: z.string(), mobile: z.string() }),
    community: z.object({ desktop: z.string(), mobile: z.string() }),
    contact: z.object({ desktop: z.string(), mobile: z.string() }),
    cold_plunge: z.object({ desktop: z.string(), mobile: z.string() }),
    faq: z.object({ desktop: z.string(), mobile: z.string() }),
    gift_card: z.object({ desktop: z.string(), mobile: z.string() }),
    new_here: z.object({ desktop: z.string(), mobile: z.string() }),
    pricing: z.object({ desktop: z.string(), mobile: z.string() }),
    schedule: z.object({ desktop: z.string(), mobile: z.string() }),
    teachers: z.object({ desktop: z.string(), mobile: z.string() }),
    workshops: z.object({ desktop: z.string(), mobile: z.string() }),
    breathwork: z.object({ desktop: z.string(), mobile: z.string() }),
  }),
});

const newHerePage = defineCollection({
  type: "data",
  schema: z.object({
    seo_title: z.string(),
    seo_description: z.string(),
    hero_eyebrow: z.string(),
    hero_title: z.string(),
    hero_subtitle: z.string(),
    hero_cta_text: z.string(),
    intro_offer_eyebrow: z.string(),
    intro_offer_heading: z.string(),
    intro_offer_badge: z.string(),
    intro_offer_label: z.string(),
    what_is_included_heading: z.string(),
    included_features: z.array(z.string()),
    claim_offer_text: z.string(),
    browse_schedule_text: z.string(),
    how_it_works_eyebrow: z.string(),
    how_it_works_heading: z.string(),
    steps: z.array(z.object({ step: z.string(), title: z.string(), description: z.string(), color: z.string() })),
    what_to_expect_eyebrow: z.string(),
    what_to_expect_heading: z.string(),
    expectations: z.array(z.object({ title: z.string(), body: z.string() })),
    bottom_cta_heading: z.string(),
    bottom_cta_body: z.string(),
    bottom_cta_primary_text: z.string(),
    bottom_cta_primary_href: z.string(),
    bottom_cta_secondary_text: z.string(),
  }),
});

const giftCardPage = defineCollection({
  type: "data",
  schema: z.object({
    seo_title: z.string(),
    seo_description: z.string(),
    hero_eyebrow: z.string(),
    hero_title: z.string(),
    hero_subtitle: z.string(),
    hero_cta_text: z.string(),
    purchase_url: z.string(),
    section_eyebrow: z.string(),
    section_heading: z.string(),
    section_body: z.string(),
    cards: z.array(z.object({
      name: z.string(),
      price: z.string(),
      description: z.string(),
      highlight: z.boolean().optional().default(false),
    })),
    bottom_cta_heading: z.string(),
    bottom_cta_body: z.string(),
    bottom_cta_button_text: z.string(),
  }),
});

const schedulePage = defineCollection({
  type: "data",
  schema: z.object({
    seo_title: z.string().optional().default(""),
    seo_description: z.string().optional().default(""),
    hero_eyebrow: z.string(),
    hero_title: z.string(),
    hero_subtitle: z.string(),
    widget_id: z.string(),
  }),
});

const pricingPage = defineCollection({
  type: "data",
  schema: z.object({
    seo_title: z.string().optional().default(""),
    seo_description: z.string().optional().default(""),
    hero_title: z.string().optional().default(""),
    hero_subtitle: z.string().optional().default(""),
    specials_eyebrow: z.string(),
    specials_heading: z.string(),
    classes_packs_heading: z.string(),
    classes_packs_body: z.string(),
    memberships_heading: z.string(),
    memberships_body: z.string(),
    cold_plunge_heading: z.string(),
    cold_plunge_body: z.string(),
    breathwork_heading: z.string(),
    breathwork_body: z.string(),
    faq_heading: z.string(),
  }),
});

const contactPage = defineCollection({
  type: "data",
  schema: z.object({
    seo_title: z.string().optional().default(""),
    seo_description: z.string().optional().default(""),
    hero_eyebrow: z.string(),
    hero_title: z.string(),
    hero_subtitle: z.string(),
    section_heading: z.string(),
  }),
});

const teachersPage = defineCollection({
  type: "data",
  schema: z.object({
    seo_title: z.string().optional().default(""),
    seo_description: z.string().optional().default(""),
    hero_eyebrow: z.string(),
    hero_title: z.string(),
    hero_subtitle: z.string(),
  }),
});

const communityPage = defineCollection({
  type: "data",
  schema: z.object({
    seo_title: z.string().optional().default(""),
    seo_description: z.string().optional().default(""),
    hero_eyebrow: z.string(),
    hero_title: z.string(),
    hero_subtitle: z.string(),
  }),
});

const faqPage = defineCollection({
  type: "data",
  schema: z.object({
    seo_title: z.string().optional().default(""),
    seo_description: z.string().optional().default(""),
    hero_eyebrow: z.string(),
    hero_title: z.string(),
    hero_subtitle: z.string(),
    still_have_questions_heading: z.string(),
    still_have_questions_body: z.string(),
  }),
});

const classesPage = defineCollection({
  type: "data",
  schema: z.object({
    seo_title: z.string().optional().default(""),
    seo_description: z.string().optional().default(""),
    hero_title: z.string(),
    hero_subtitle: z.string(),
    widget_id: z.string(),
  }),
});

const blogPage = defineCollection({
  type: "data",
  schema: z.object({
    seo_title: z.string().optional().default(""),
    seo_description: z.string().optional().default(""),
    hero_eyebrow: z.string(),
    hero_title: z.string(),
    hero_subtitle: z.string(),
  }),
});

const legalPages = defineCollection({
  type: "data",
  schema: z.object({
    seo_title: z.string().optional().default(""),
    seo_description: z.string().optional().default(""),
    effective_date: z.string(),
    website_url: z.string(),
  }),
});

export const collections = { settings, home, about, workshopsPage, breathworkPage, coldPlungePage, testimonials, offerings, faq, blog, community, teachers, footer, pricingPlans, pricingSpecials, coldPlungePricing, breathworkPricing, pageHeroSettings, newHerePage, giftCardPage, schedulePage, pricingPage, contactPage, teachersPage, communityPage, faqPage, classesPage, blogPage, legalPages };
