import {same} from "utils/same";
import {User} from "models";

const classes = {
  single: 'single-message',
  first: 'first-in-row-user-message',
  previous: 'previous-in-row-user-message',
  last: 'last-in-row-user-message',
}

const sameUsers = (a: User, b: User) => a.id === b.id

/**
 * Defines element class for message in chat,
 * dependents on sibling message authors
 */
export const inRowPositionClass = (previous: User, current: User, next: User) => {
  if (!sameUsers(previous, current) && !sameUsers(current, next)) {
    return classes.single
  }

  if (same([previous, current, next], sameUsers)) {
    return classes.previous
  }

  if (sameUsers(previous, current) && !sameUsers(current, next)) {
    return classes.last
  }

  return classes.first
}