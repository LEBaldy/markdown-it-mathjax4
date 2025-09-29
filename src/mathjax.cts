import {deasync}from "@se-oss/deasync";
import util from "node:util";
const import_ = deasync(util.callbackify((path: string) => import(path)));
export const { tex2svgHtml } = import_("mathxyjax3");
