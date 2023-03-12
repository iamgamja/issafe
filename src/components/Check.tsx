type numberic = bigint | number

export function Check({ name, n, limit }: { name: string; n: numberic; limit: numberic }) {
  const issafe = n <= limit

  const classname = `check ${issafe ? 'safe' : 'unsafe'}`
  return (
    <div className={classname}>
      {name} {issafe ? 'safe' : 'unsafe'}
    </div>
  )
}
