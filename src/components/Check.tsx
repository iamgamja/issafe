import Decimal from 'decimal.js'

/** min <= x <= max */
export function Check({ name, n, min, max }: { name: string; n: Decimal; min: Decimal; max: Decimal }) {
  const issafe = n.gte(min) && n.lte(max)

  const classname = `check ${issafe ? 'safe' : 'unsafe'}`
  return (
    <div className={classname}>
      {name} {issafe ? 'safe' : 'unsafe'}
    </div>
  )
}
