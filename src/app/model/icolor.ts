import { Irgb } from './irgb';
import { Ihsl } from './ihsl';

export interface Icolor {
  colorId: number;
  hexString: string;
  rgb: Irgb;
  hsl: Ihsl;
  name: string;
}
