import { queryString, parse } from './queryString';

describe('Object to query string', () => {
  it('should create a valid query string when an object is correct', () => {
    const object = {
      name: 'Andre',
      job: 'Developer',
    };

    expect(queryString(object)).toBe('name=Andre&job=Developer');
  });

  it('should create a valid query string when an array is passed', () => {
    const object = {
      name: 'Andre',
      abilities: ['React', 'Jest'],
    };

    expect(queryString(object)).toBe('name=Andre&abilities=React,Jest');
  });

  it('should throw an error when a object is passed as value ', () => {
    const object = {
      name: 'Andre',
      abilities: {
        frontEnd: 'React',
        backEnd: 'Node',
      },
    };

    expect(() => {
      queryString(object);
    }).toThrowError();
  });
});

describe('Object to query string', () => {
  it('should convert a query string to object', () => {
    const qs = 'name=Andre&job=Developer';
    expect(parse(qs)).toEqual({
      name: 'Andre',
      job: 'Developer',
    });
  })

  it('should convert a query string of a single key-value', () => {
    const qs = 'name=Andre';
    expect(parse(qs)).toEqual({
      name: 'Andre'
    });
  })
  it('should convert a query string to a object taking care if have any separation', () => {
    const qs = 'name=Andre&job=Developer&skills=JS,React,Jest'

    expect(parse(qs)).toEqual({
      name: 'Andre',
      job: 'Developer',
      skills: ['JS', 'React', 'Jest']
    })

  })
})
