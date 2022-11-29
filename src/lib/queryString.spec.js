const { queryString } = require('./queryString');

describe('Object to query string', () => {
  it('should create a valid query string when an object is correct', () => {
    const object = {
      name: 'Andre',
      job: 'Developer',
    };

    expect(queryString(object)).toBe('name=Andre&job=Developer');
  });
});

// describe('Object to query string', () => {})
