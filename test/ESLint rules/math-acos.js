'use strict';

var
  name = "math-acos",
  rule = require('../../lib/ESLint rules/' + name),
  RuleTester = require('eslint/lib/testers/rule-tester'),

  tester = new RuleTester();

tester.run(name, rule, {
  valid: [
    "foo.bar()"
  ],
  invalid: [
    {
      code: "Math.acos()",
      errors: [{
        message: "Math.acos() is not yet deterministic.",
        type: 'CallExpression'
      }]
    }
  ]
});
