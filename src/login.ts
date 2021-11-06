#!/usr/bin/env node

/**
 * login
 */

import { logger } from './logger'
import dotenv from 'dotenv'

dotenv.config()

if (process.env.USER === undefined) {
  throw new Error('user is undefined')
}

if (process.env.PASSWORD === undefined) {
  throw new Error('password is undefined')
}

logger.info(`user:${process.env.USER}`)
logger.warn(`password:${process.env.PASSWORD}`)
