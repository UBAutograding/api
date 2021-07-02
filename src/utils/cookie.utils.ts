import { CookieOptions } from 'express'

import environment from '../environment'

export const refreshToken: string = 'refreshToken'

export const refreshCookieOptions: CookieOptions = {
  maxAge: environment.refreshTokenValiditySeconds * 1000,
  httpOnly: true,
  secure: true,
  sameSite: true,
}
