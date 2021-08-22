import { iterate } from '.';

describe('Test object library', () => {
  it('Test iterate() function with one depth level', () => {
    expect(
      iterate(
        {
          first: 0,
          second: 3,
          third: 5,
        },
        (_key, value) => value + 1
      )
    ).toStrictEqual({
      first: 1,
      second: 4,
      third: 6,
    });
  });

  it('Test iterate() function with three depth levels', () => {
    expect(
      iterate(
        {
          first: 0,
          second: 3,
          third: 5,
          nest1: {
            fourth: 56,
            fifth: 98,
            nest2: {
              apple: 1,
            },
          },
        },
        (_key, value) => value + 1
      )
    ).toStrictEqual({
      first: 1,
      second: 4,
      third: 6,
      nest1: {
        fourth: 57,
        fifth: 99,
        nest2: {
          apple: 2,
        },
      },
    });
  });
});
