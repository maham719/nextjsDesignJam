import { type SchemaTypeDefinition } from 'sanity'
import Category from './Category'
import Products from './Products'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [Products,Category],
}
