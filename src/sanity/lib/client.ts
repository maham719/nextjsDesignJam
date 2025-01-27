import { createClient } from 'next-sanity'
// import imageUrlBuilder from '@sanity/image-url';
import { apiVersion, dataset, projectId } from '../env'
// import sanityConfig from '../../../sanity.config';

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true, // Set to false if statically generating pages, using ISR or tag-based revalidation
})
