// eslint-disable-next-line import/no-unresolved
import { Pipe } from "ts-functionaltypes";

/**
 * @example
 * const piped = pipe(fn1, fn2, fn3)(2);
 */
// eslint-disable-next-line functional/functional-parameters
export const pipe: Pipe = (...fns) => x =>
  fns.reduce((func, v) => func(v), x);
