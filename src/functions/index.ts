type GenericIden<T> = {
  (arg: T): T;
};
export function iden<T>(arg: T): T {
  return arg;
}
const myiden: { <T>(arg: T): T } = iden;
const myiden2: <Y>(arg: Y) => Y = iden;
const myiden3 = iden;
const myiden4: GenericIden<number> = iden;

const g = myiden(2);
const g2 = myiden2(2);
const g3 = myiden3(2);
const g4 = myiden4(2);
