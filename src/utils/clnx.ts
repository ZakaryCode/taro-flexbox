export default function clnx(a: string | string[], b?: string | string[]) {
  let c: string[] = [];
  if (!a.length) c.push(a as string); else c = c.concat([], a);
  if (b) if (!b.length) c.push(b as string); else c = c.concat([], b);
  // if (process.env.TARO_ENV === 'swan')
  //   c = c.reverse();
  return c.join(' ');
}
