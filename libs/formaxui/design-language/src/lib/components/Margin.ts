import { prefab } from '@diez/engine';

interface MarginData {
  top: number;
  bottom: number;
  left: number;
  right: number;
}

export class Margin extends prefab<MarginData>() {
  defaults = {
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  };

  static simple(vertical: number, maybeHorizontal?: number) {
    const horizontal =
      maybeHorizontal === undefined ? vertical : maybeHorizontal;

    return new Margin({
      top: vertical,
      bottom: vertical,
      left: horizontal,
      right: horizontal,
    });
  }
}
