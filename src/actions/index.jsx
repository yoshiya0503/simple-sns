/**
 * @fileoverview Actions
 * @name index.jsx
 * @author Yoshiya Ito <myon53@gmail.com>
 */

export function increments(num) {
  return {
    type: 'INCREMENTS',
    test: num,
  };
}

export function decrements(num) {
  return {
    type: 'DECREMENTS',
    test: num,
  };
}
