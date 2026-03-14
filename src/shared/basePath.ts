export const BASE_PATH = '/projects/fitness';

export function withBasePath(path: string): string {
  if (!path.startsWith('/')) {
    return `${BASE_PATH}/${path}`;
  }

  return `${BASE_PATH}${path}`;
}
