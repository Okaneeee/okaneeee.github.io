import { z, defineCollection } from 'astro:content';

// Projects rules
const projectSchema = z.object({
  title: z.string(),
  author: z.string(),
  description: z.string(),
  image: z.string(),
  tags: z.array(z.string()),
  githubUrl: z.string().optional(),
  demoUrl: z.string().optional(),
  date: z.date(),
});

// Apply the rules to the collections
const projectsCollection = defineCollection({
  type: 'content',
  schema: projectSchema
});

const gamesCollection = defineCollection({
  type: 'content',
  schema: projectSchema
});

// Exporting
export const collections = {
  'projects': projectsCollection,
  'games': gamesCollection,
};