import page from './page/page'
import { documentTypes } from './document'
import { sectionsType } from './sections'
import { commonType } from './common'

export const schemaTypes = [page, ...documentTypes, ...sectionsType, ...commonType]
