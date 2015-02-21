Tinytest.add('maxharris9:hashmap - add/retrieve items to/from 1D hashmap', function (test) {
  var x = new HashMap1d();
  x.addItem('mharris', { firstName: 'Max', lastName: 'Harris' } );
  x.addItem('bjackson', { firstName: 'Brian', lastName: 'Jackson' } );

  test.equal(x.getItem('bjackson'), { firstName: 'Brian', lastName: 'Jackson' }, "Expected { firstName: 'Brian', lastName: 'Jackson' } ");
  test.equal(x.getItem('mharris'), { firstName: 'Max', lastName: 'Harris' }, "Expected { firstName: 'Max', lastName: 'Harris' } ");
});

Tinytest.add('maxharris9:hashmap - handle items with duplicate keys in 1D hashmap', function (test) {
  var x = new HashMap1d();
  x.addItem('mharris', { firstName: 'Max', lastName: 'Harris' } );
  x.addItem('bjackson', { firstName: 'Brian', lastName: 'Jackson' } );
  x.addItem('bjackson', { firstName: 'Peter', lastName: 'Jackson' } );

  test.equal(x.getItem('bjackson'), { firstName: 'Peter', lastName: 'Jackson' }, "Expected { firstName: 'Peter', lastName: 'Jackson' } ");
  test.equal(x.getItem('mharris'), { firstName: 'Max', lastName: 'Harris' }, "Expected { firstName: 'Max', lastName: 'Harris' } ");
});

Tinytest.add('maxharris9:hashmap - add/retrieve items to/from 2D hashmap', function (test) {
  var x = new HashMap2d();
  x.addItem('m', 'h', { firstName: 'Max', lastName: 'Harris' } );
  x.addItem('b', 'j', { firstName: 'Brian', lastName: 'Jackson' } );

  test.equal(x.getItem('b', 'j'), { firstName: 'Brian', lastName: 'Jackson' }, "Expected { firstName: 'Brian', lastName: 'Jackson' } ");
  test.equal(x.getItem('m', 'h'), { firstName: 'Max', lastName: 'Harris' }, "Expected { firstName: 'Max', lastName: 'Harris' } ");
});

Tinytest.add('maxharris9:hashmap - handle items with duplicate keys in 2D hashmap', function (test) {
  var x = new HashMap1d();
  x.addItem('mharris', { firstName: 'Max', lastName: 'Harris' } );
  x.addItem('bwilson', { firstName: 'Brian', lastName: 'Wilson' } );
  x.addItem('bwilson', { firstName: 'Brian', lastName: 'Williams' } );

  test.equal(x.getItem('bwilson'), { firstName: 'Brian', lastName: 'Williams' }, "Expected { firstName: 'Brian', lastName: 'Williams' } ");
  test.equal(x.getItem('mharris'), { firstName: 'Max', lastName: 'Harris' }, "Expected { firstName: 'Max', lastName: 'Harris' } ");
});