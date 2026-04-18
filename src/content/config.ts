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
    social: z
      .object({
        instagram: z.string().optional().default(""),
        facebook: z.string().optional().default(""),
        google_review_url: z.string().optional().default(""),
        yelp_review_url: z.string().optional().default(""),
      })
      .optional(),
  }),
});

const home = defineCollection({
  type: "data",
  schema: z.object({
    hero_heading: z.string(),
    hero_subheading: z.string(),
    cta_primary: z.object({ text: z.string(), href: z.string() }),
    cta_secondary: z.object({ text: z.string(), href: z.string() }),
    explainer_heading: z.string(),
    explainer_paragraphs: z.array(z.string()),
    cta_strip_heading: z.string(),
    cta_strip_subheading: z.string(),
    cta_strip_primary: z.object({ text: z.string(), href: z.string() }),
    cta_strip_secondary: z.object({ text: z.string(), href: z.string() }),
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

const classes = defineCollection({
  type: "data",
  schema: z.object({
    name: z.string(),
    description: z.string(),
    duration: z.string().optional().default(""),
    intensity: z.enum(["Gentle", "Moderate", "Intense"]).optional(),
    heat: z.boolean().optional().default(true),
    image: z.string().optional().default(""),
    order: z.number().optional().default(0),
  }),
});

export const collections = { settings, home, testimonials, offerings, faq, blog, community, teachers, classes };
