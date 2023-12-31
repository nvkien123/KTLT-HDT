import { SetMetadata } from '@nestjs/common'
import { TYPEORM_EX_CUSTOM_REPOSITORY } from '../constants'

export function CustomRepository(entity: Function): ClassDecorator {
  return SetMetadata(TYPEORM_EX_CUSTOM_REPOSITORY, entity)
}
