/* eslint-disable @typescript-eslint/no-explicit-any */

export const iterate = <T>(
  object: T,
  callback: (key: string, value: any) => any
): T => {
  const _object = object;

  for (const [key, value] of Object.entries(_object)) {
    if (typeof value === 'object') {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      iterate(value, callback);
    } else {
      (_object as any)[key] = callback(key, value) ?? value;
    }
  }

  return _object;
};
