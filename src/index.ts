/**
 * sum function
 *
 * @param a left number
 * @param b right number
 * @returns a+b
 */
export const sum = (a: number, b: number): number => {
  if (process.env.NODE_ENV === 'development') {
    console.log('boop')
  }
  return a + b
}
