/** min <= x <= max */
export function Check({ name, n, min, max }: { name: string; n: bigint | null; min: bigint; max: bigint }) {
  const issafe = n !== null && min <= n && n <= max

  const classname = `check ${issafe ? 'safe' : 'unsafe'}`
  return (
    <div className={classname}>
      {name} {issafe ? 'safe' : 'unsafe'}
    </div>
  )
}
