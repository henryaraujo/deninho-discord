export function generateIndex<T>(payload: T[]): number {
  return Math.floor(Math.random() * payload.length)
}