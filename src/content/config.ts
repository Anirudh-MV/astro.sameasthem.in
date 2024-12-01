import { defineCollection, z } from 'astro:content';

const releases = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    releaseDate: z.date(),
    coverImage: z.string(),
    youtubeEmbed: z.string().optional(),
    streamingLinks: z.object({
      spotify: z.string().optional(),
      apple: z.string().optional(),
      bandcamp: z.string().optional(),
      youtube: z.string().optional(),
    }).optional(),
  }),
});

const shows = defineCollection({
  type: 'content',
  schema: z.object({
    venue: z.string(),
    date: z.date(),
    location: z.string(),
    ticketLink: z.string().optional(),
    price: z.string().optional(),
    description: z.string().optional(),
    review: z.string().optional(),
    images: z.array(z.string()).optional(),
  }),
});

const members = defineCollection({
  type: 'content',
  schema: z.object({
    name: z.string(),
    instrument: z.string(),
    image: z.string(),
    order: z.number(),
    socialLinks: z.object({
      instagram: z.string().optional(),
      twitter: z.string().optional(),
      soundcloud: z.string().optional(),
    }).optional(),
  }),
});

export const collections = {
  releases,
  shows,
  members,
};