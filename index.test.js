const {multiplication,addition} = require ( './index' ) ;

test ('multiplication de 2 * 3 = 6 ', () => {
expect ( multiplication (2 , 3) ). toBe (6) ;
}) ;

test('1 + 2 = 3', () => {
  expect(addition(1, 2)).toBe(3);
});
