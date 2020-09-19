import {bem} from '..';

describe('bem', () => {
  const b = bem('foo');

  it('should create block class', () => {
    const actual = b();
    const expected = 'foo';

    expect(expected).toEqual(actual);
  });

  it('should create element class', () => {
    const actual = b('bar');
    const expected = 'foo__bar';

    expect(expected).toEqual(actual);
  });

  it('should create block class with boolean mod', () => {
    const actual = b({bar: true});
    const expected = 'foo foo--bar';

    expect(expected).toEqual(actual);
  });

  it('should create element class with boolean mod', () => {
    const actual = b('bar', {baz: true});
    const expected = 'foo__bar foo__bar--baz';

    expect(expected).toEqual(actual);
  });

  it('should create block class with string mod', () => {
    const actual = b({bar: 'true'});
    const expected = 'foo foo--bar-true';

    expect(expected).toEqual(actual);
  });

  it('should create element class with string mod', () => {
    const actual = b('bar', {baz: 'true'});
    const expected = 'foo__bar foo__bar--baz-true';

    expect(expected).toEqual(actual);
  });

  it('should creeate element class with number mod', () => {
    const actual = b('bar', {baz: 0});
    const expected = 'foo__bar foo__bar--baz-0';

    expect(expected).toEqual(actual);
  });

  it('should ignore mod if it is undefined', () => {
    const actual = b('bar', {baz: undefined});
    const expected = 'foo__bar';
    expect(expected).toEqual(actual);
  });
});
