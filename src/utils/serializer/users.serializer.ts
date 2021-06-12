import { User } from 'devu-shared-modules'

import UserModel from '../../model/users.model'

export function serialize(user: UserModel): User {
  return {
    id: user.id,
    externalId: user.externalId,
    email: user.email,
    createdAt: user.createdAt.toISOString(),
    updatedAt: user.updatedAt.toISOString(),
    preferredName: user.preferredName,
  }
}
