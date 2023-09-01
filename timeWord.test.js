const {timeWord} = require('./timeWord');

describe('#timeword', () => {
  test('it is a function', () => {
    expect(typeof timeWord).toBe('function');
  });

  test('works for noon and midnight', () => {
    expect(timeWord("00:00")).toBe('midnight');
    expect(timeWord("12:00")).toBe('noon');
  });
  test('works for minutes < 10', () => {
    expect(timeWord("11:08")).toBe('eleven o eight am');
    expect(timeWord("18:02")).toBe('six o two pm');
  });
  test('works for minutes > 10', () => {
    expect(timeWord("11:32")).toBe('eleven thirty two am');
    expect(timeWord("18:58")).toBe('six fifty eight pm');
  });
  test('throws on wrong format', () => {
   () => { function timeOcto(){
      timeWord('octopus')
      expect(timeOcto).toThrow()}};
    }
  )
  });
