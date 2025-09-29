import * as mathjax from "mathxyjax3";
import { runAsWorker } from "unasync";
runAsWorker(async (math: string, options: unknown) => {
  mathjax.tex2svgHtml(math, options)
});
