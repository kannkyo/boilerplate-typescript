import debug from 'debug'

/**
 * ロガー
 */
export const logger = {
  /** エラー */
  error: debug('ERR'),

  /** ワーニング */
  warn: debug('WARN'),

  /** インフォメーション */
  info: debug('INFO'),

  /** デバッグ */
  debug: debug('DEBUG')
}
