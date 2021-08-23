import {isSame} from "./isSame";
import {User} from "models";

const classes = {
  single: '',
  first: 'first-in-row-user-message',
  previous: 'previous-in-row-user-message',
  last: 'last-in-row-user-message',
}

const sameUsers = (a: User, b: User) => a.id === b.id

/**
 *
 * 1 item return 'single'
 *
 */
export const inRowPositionClass = (previous: User, current: User, next: User) => {
  if (!sameUsers(previous, current) && !sameUsers(current, next)) {
    return classes.single
  }

  if (isSame([previous, current, next], sameUsers)) {
    return classes.previous
  }

  if (sameUsers(previous, current) && !sameUsers(current, next)) {
    return classes.last
  }

  return classes.first
}