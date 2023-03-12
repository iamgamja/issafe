type numberic = bigint | number

export function Check({ n, limit }: { n: numberic; limit: numberic }) {
  return <div>{n > limit ? 'unSafe' : 'safe'}</div>
}
