'use strict';

const Test = require('tape');
const Entries = require('../index');

Test('test entries', (t) => {

    const obj = {
        a: 1,
        b: 2,
        c: 3
    };

    t.test('iterate', (t) => {
        t.plan(6);

        for (let x of Entries(obj)) {
            t.ok(x[0]);
            t.ok(x[1]);
        }
    });

});
