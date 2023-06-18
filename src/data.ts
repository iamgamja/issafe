import Decimal from 'decimal.js'

/** [a, b]: a <= x <= b */
export const data = {
  int: [new Decimal('-2147483648'), new Decimal('2147483647')],
  'unsigned int': [new Decimal('0'), new Decimal('4294967295')],
  'long long': [new Decimal('-9223372036854775808'), new Decimal('9223372036854775807')],
  'unsigned long long': [new Decimal('0'), new Decimal('18446744073709551615')],
} as const
