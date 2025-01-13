import "clsx";
import { R as pop, P as push } from "../../chunks/index.js";
import { N as NavBar, F as Footer } from "../../chunks/Footer.js";
function _layout($$payload, $$props) {
  push();
  let { children } = $$props;
  NavBar($$payload);
  $$payload.out += `<!----> `;
  children($$payload);
  $$payload.out += `<!----> `;
  Footer($$payload);
  $$payload.out += `<!---->`;
  pop();
}
export {
  _layout as default
};
