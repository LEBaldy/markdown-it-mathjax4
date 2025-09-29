import module from "node:module";
import createRequire from "esm";

const esmRequire = createRequire(module, { await: true });

export const { tex2svgHtml } = esmRequire("mathxyjax3");
