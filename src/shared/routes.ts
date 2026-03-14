export function homeRoute(): string {
  return '/';
}

export function profileRoute(): string {
  return '/profile';
}

export function courseRoute(id: string): string {
  return `/course/${id}`;
}

export function workoutRoute(id: string): string {
  return `/workout/${id}`;
}
