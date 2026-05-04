import Decimal from 'decimal.js'

/** [a, b]: a <= x <= b */
export const data = {
  i32: [new Decimal('-2147483648'), new Decimal('2147483647')],
  u32: [new Decimal('0'), new Decimal('4294967295')],
  i64: [new Decimal('-9223372036854775808'), new Decimal('9223372036854775807')],
  u64: [new Decimal('0'), new Decimal('18446744073709551615')],
  i128: [new Decimal('-170141183460469231731687303715884105728'), new Decimal('170141183460469231731687303715884105727')],
  u128: [new Decimal('0'), new Decimal('340282366920938463463374607431768211455')],
} as const