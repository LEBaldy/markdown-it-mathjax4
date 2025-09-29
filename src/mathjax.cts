const esmRequire = require("esm")(module, { await: true });

export const { tex2svgHtml } = esmRequire("mathxyjax3");
