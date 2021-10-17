export function convertCase(str: string): string {
  return str
    .split(' ')
    .reduce((p: string[], c) => {
      p.push(c.toLowerCase());
      return p;
    }, [])
    .join('-');
}
