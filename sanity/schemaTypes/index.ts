import { type SchemaTypeDefinition } from 'sanity'
import { categoryType } from './categoryType'
import { blockContentType } from './blockContentType'
import { orderType } from './orderType'
import { productType } from './productType'
import { brandType } from './brandType'
import { blogType } from './blogType'
import { blogCategoryType } from './blogCategoryType'
import { authorType } from './authorType'
import { addressType } from './addressType'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [categoryType, blockContentType, productType, orderType, brandType, blogType, blogCategoryType, authorType, addressType],
}
