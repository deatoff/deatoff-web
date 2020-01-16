import { isDev } from "../functions";
import { Home } from "../containers";
import { TBD } from "../sandbox/TBD";

// eslint-disable-next-line functional/no-expression-statement
const index = isDev() ? Home : TBD;
export default index;
