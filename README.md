## Hash table ##

Need a hash table? Too lazy to bring in any of the nice packages on npm that do this better? maxharris9:hashmap is just the thing for you!

If you want to access an object via a single key, here's what to do:

    var map = new HashMap1d();
    map.addItem('mh', { firstName: 'Max', lastName: 'Harris' } );
    map.addItem('ca', { firstName: 'Chris', lastName: 'Alexander' } );
    map.addItem('fs', { firstName: 'Faina', lastName: 'Shpund' } );
    map.addItem('sk', { firstName: 'Sowmya', lastName: 'Karmali' } );
    map.addItem('mb', { firstName: 'Matt', lastName: 'Bateman' } );

    console.log(map.getItem('mh')); => { firstName: 'Max', lastName: 'Harris' }


You can use anything you'd like for the key, including numbers:

    var map = new HashMap1d();
    map.addItem(1, { firstName: 'Max', lastName: 'Harris' } );
    map.addItem(2, { firstName: 'Chris', lastName: 'Alexander' } );

    console.log(map.getItem(1)); => { firstName: 'Max', lastName: 'Harris' }

If you call addItem on the same key twice, you'll get back the object you added with the second call to addItem:

    var map = new HashMap1d();
    map.addItem('foo', { firstName: 'First', lastName: 'Guy' } );
    map.addItem('foo', { firstName: 'Second', lastName: 'Guy' } );

    console.log(map.getItem('foo')); => { firstName: 'Second', lastName: 'Guy' }


Finally, there's another class that you can use if you want to address an item by two keys:

    var map = new HashMap2d();
    map.addItem('m', 'h', { firstName: 'Max', lastName: 'Harris' } );
    map.addItem('c', 'a', { firstName: 'Chris', lastName: 'Alexander' } );
    map.addItem('f', 's', { firstName: 'Faina', lastName: 'Shpund' } );
    map.addItem('s', 'k', { firstName: 'Sowmya', lastName: 'Karmali' } );
    map.addItem('m', 'b', { firstName: 'Matt', lastName: 'Bateman' } );

    console.log(map.getItem('m', 'h')); => { firstName: 'Max', lastName: 'Harris' }
