import { transformProcessing } from "./processing-p5-convert.js";

export function convertToP5(code) {
  return transformProcessing(code);
}
