// #TODO: Auth and error page handle
import dynamic from "next/dynamic";
import { withLayout } from "../../layouts";

const Studio = dynamic(() =>
  import("../../containers").then(mod => mod.Studio)
);
const StudioCTL = dynamic(() =>
  import("../../layouts/CallToActionScreen").then(mod => mod.CTA)
);

const auth = false;
export default auth ? withLayout(Studio) : withLayout(StudioCTL);
