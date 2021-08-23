export function removeFrom<T>(items: T[], removing: T) {
  const index = items.indexOf(removing)
  items.splice(index, 1)
}