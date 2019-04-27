---
title: "Fake Javascript: House of Horror"
date: "2017-10-11 00:00:00 -0600"
description: ""
tags:
  - javascript
  - web
---

Happy October! Welcome to the JavaScript House of Horror. Here lies hacky, unconventional, or just uncommon JavaScript prose. This is post is not recommended for small children, the highly-opinionated or ill-tempered.

## Error handling

Skip Google and get answers immediately.

```js
try {
  something()
} catch (e) {
  window.location.href = (
    "https://stackoverflow.com/" +
    "search?q=[js]+" +
    e.message
  )
}
```

This _**innovative**_ solution was first suggested [here](https://twitter.com/DivineOmega/status/695744177557106688).

Of course, the easy way out would be to handle errors like this globally:

```js
window.onerror = e =>
  window.location.href = (
    "https://stackoverflow.com/" +
    "search?q=[js]+" +
    e.message
  )
```

Also, don't forget to use `encodeURIComponent(e.message)` before you implement this ✨*feature*✨ in production.

## Bracket magic

```js
++[[]][+[]] + [+[]] // returns "10"
```

See a thorough explanation [here](https://stackoverflow.com/a/7202287/6817437).

## JSF\*ck

Run the code [here](https://repl.it/Kiwu/0).

Here are the basic building blocks for [JSF\*ck](http://www.jsfuck.com/):

```js
![] === false
[]+[] === ""
![]+[] === "false"
```

```
+[] === 0
```

So imagine that we can stringify JavaScript return values like 'undefined' and 'true'. And with numeric values, we can extract specific index values from these words. [This](http://www.jazcash.com/a-javascript-journey-with-only-six-characters/) is a more thorough explanation.

Here's a similar one: Emoticons or JavaScript?

```js
ﾟωﾟﾉ= /｀ｍ´）ﾉ ~┻━┻   //*´∇｀*/ ['_']; o=(ﾟｰﾟ)  =_=3; c=(ﾟΘﾟ) =(ﾟｰﾟ)-(ﾟｰﾟ); (ﾟДﾟ) =(ﾟΘﾟ)= (o^_^o)/ (o^_^o);(ﾟДﾟ)={ﾟΘﾟ: '_' ,ﾟωﾟﾉ : ((ﾟωﾟﾉ==3) +'_') [ﾟΘﾟ] ,ﾟｰﾟﾉ :(ﾟωﾟﾉ+ '_')[o^_^o -(ﾟΘﾟ)] ,ﾟДﾟﾉ:((ﾟｰﾟ==3) +'_')[ﾟｰﾟ] }; (ﾟДﾟ) [ﾟΘﾟ] =((ﾟωﾟﾉ==3) +'_') [c^_^o];(ﾟДﾟ) ['c'] = ((ﾟДﾟ)+'_') [ (ﾟｰﾟ)+(ﾟｰﾟ)-(ﾟΘﾟ) ];(ﾟДﾟ) ['o'] = ((ﾟДﾟ)+'_') [ﾟΘﾟ];(ﾟoﾟ)=(ﾟДﾟ) ['c']+(ﾟДﾟ) ['o']+(ﾟωﾟﾉ +'_')[ﾟΘﾟ]+ ((ﾟωﾟﾉ==3) +'_') [ﾟｰﾟ] + ((ﾟДﾟ) +'_') [(ﾟｰﾟ)+(ﾟｰﾟ)]+ ((ﾟｰﾟ==3) +'_') [ﾟΘﾟ]+((ﾟｰﾟ==3) +'_') [(ﾟｰﾟ) - (ﾟΘﾟ)]+(ﾟДﾟ) ['c']+((ﾟДﾟ)+'_') [(ﾟｰﾟ)+(ﾟｰﾟ)]+ (ﾟДﾟ) ['o']+((ﾟｰﾟ==3) +'_') [ﾟΘﾟ];(ﾟДﾟ) ['_'] =(o^_^o) [ﾟoﾟ] [ﾟoﾟ];(ﾟεﾟ)=((ﾟｰﾟ==3) +'_') [ﾟΘﾟ]+ (ﾟДﾟ) .ﾟДﾟﾉ+((ﾟДﾟ)+'_') [(ﾟｰﾟ) + (ﾟｰﾟ)]+((ﾟｰﾟ==3) +'_') [o^_^o -ﾟΘﾟ]+((ﾟｰﾟ==3) +'_') [ﾟΘﾟ]+ (ﾟωﾟﾉ +'_') [ﾟΘﾟ]; (ﾟｰﾟ)+=(ﾟΘﾟ); (ﾟДﾟ)[ﾟεﾟ]='\\'; (ﾟДﾟ).ﾟΘﾟﾉ=(ﾟДﾟ+ ﾟｰﾟ)[o^_^o -(ﾟΘﾟ)];(oﾟｰﾟo)=(ﾟωﾟﾉ +'_')[c^_^o];(ﾟДﾟ) [ﾟoﾟ]='\"';(ﾟДﾟ) ['_'] ( (ﾟДﾟ) ['_'] (ﾟεﾟ+(ﾟДﾟ)[ﾟoﾟ]+ (ﾟДﾟ)[ﾟεﾟ]+(ﾟΘﾟ)+ (ﾟｰﾟ)+ (ﾟΘﾟ)+ (ﾟДﾟ)[ﾟεﾟ]+(ﾟΘﾟ)+ ((ﾟｰﾟ) + (ﾟΘﾟ))+ (ﾟｰﾟ)+ (ﾟДﾟ)[ﾟεﾟ]+(ﾟΘﾟ)+ (ﾟｰﾟ)+ ((ﾟｰﾟ) + (ﾟΘﾟ))+ (ﾟДﾟ)[ﾟεﾟ]+(ﾟΘﾟ)+ ((o^_^o) +(o^_^o))+ ((o^_^o) - (ﾟΘﾟ))+ (ﾟДﾟ)[ﾟεﾟ]+(ﾟΘﾟ)+ ((o^_^o) +(o^_^o))+ (ﾟｰﾟ)+ (ﾟДﾟ)[ﾟεﾟ]+((ﾟｰﾟ) + (ﾟΘﾟ))+ (c^_^o)+ (ﾟДﾟ)[ﾟεﾟ]+(ﾟｰﾟ)+ ((o^_^o) - (ﾟΘﾟ))+ (ﾟДﾟ)[ﾟεﾟ]+(ﾟΘﾟ)+ (ﾟΘﾟ)+ (c^_^o)+ (ﾟДﾟ)[ﾟεﾟ]+(ﾟΘﾟ)+ (ﾟｰﾟ)+ ((ﾟｰﾟ) + (ﾟΘﾟ))+ (ﾟДﾟ)[ﾟεﾟ]+(ﾟΘﾟ)+ ((ﾟｰﾟ) + (ﾟΘﾟ))+ (ﾟｰﾟ)+ (ﾟДﾟ)[ﾟεﾟ]+(ﾟΘﾟ)+ ((ﾟｰﾟ) + (ﾟΘﾟ))+ (ﾟｰﾟ)+ (ﾟДﾟ)[ﾟεﾟ]+(ﾟΘﾟ)+ ((ﾟｰﾟ) + (ﾟΘﾟ))+ ((ﾟｰﾟ) + (o^_^o))+ (ﾟДﾟ)[ﾟεﾟ]+((ﾟｰﾟ) + (ﾟΘﾟ))+ (ﾟｰﾟ)+ (ﾟДﾟ)[ﾟεﾟ]+(ﾟｰﾟ)+ (c^_^o)+ (ﾟДﾟ)[ﾟεﾟ]+(ﾟΘﾟ)+ (ﾟΘﾟ)+ ((o^_^o) - (ﾟΘﾟ))+ (ﾟДﾟ)[ﾟεﾟ]+(ﾟΘﾟ)+ (ﾟｰﾟ)+ (ﾟΘﾟ)+ (ﾟДﾟ)[ﾟεﾟ]+(ﾟΘﾟ)+ ((o^_^o) +(o^_^o))+ ((o^_^o) +(o^_^o))+ (ﾟДﾟ)[ﾟεﾟ]+(ﾟΘﾟ)+ (ﾟｰﾟ)+ (ﾟΘﾟ)+ (ﾟДﾟ)[ﾟεﾟ]+(ﾟΘﾟ)+ ((o^_^o) - (ﾟΘﾟ))+ (o^_^o)+ (ﾟДﾟ)[ﾟεﾟ]+(ﾟΘﾟ)+ (ﾟｰﾟ)+ (o^_^o)+ (ﾟДﾟ)[ﾟεﾟ]+(ﾟΘﾟ)+ ((o^_^o) +(o^_^o))+ ((o^_^o) - (ﾟΘﾟ))+ (ﾟДﾟ)[ﾟεﾟ]+(ﾟΘﾟ)+ ((ﾟｰﾟ) + (ﾟΘﾟ))+ (ﾟΘﾟ)+ (ﾟДﾟ)[ﾟεﾟ]+(ﾟΘﾟ)+ ((o^_^o) +(o^_^o))+ (c^_^o)+ (ﾟДﾟ)[ﾟεﾟ]+(ﾟΘﾟ)+ ((o^_^o) +(o^_^o))+ (ﾟｰﾟ)+ (ﾟДﾟ)[ﾟεﾟ]+(ﾟｰﾟ)+ ((o^_^o) - (ﾟΘﾟ))+ (ﾟДﾟ)[ﾟεﾟ]+((ﾟｰﾟ) + (ﾟΘﾟ))+ (ﾟΘﾟ)+ (ﾟДﾟ)[ﾟoﾟ]) (ﾟΘﾟ)) ('_');
```

Run the [code here](https://repl.it/Kion/1) or check out the [encoder](http://utf-8.jp/public/aaencode.html).

However, don't fall in love with brackets just yet. Comparing array equality should break your spirits:

```js
[] == ''   // true
[] == 0    // true
[''] == '' // true
[0] == 0   // true
[0] == ''  // false
[''] == 0  // true

[null] == ''      // true
[null] == 0       // true
[undefined] == '' // true
[undefined] == 0  // true

[[]] == 0  // true
[[]] == '' // true

[[[[[[]]]]]] == '' // true
[[[[[[]]]]]] == 0  // true

[[[[[[ null ]]]]]] == 0  // true
[[[[[[ null ]]]]]] == '' // true

[[[[[[ undefined ]]]]]] == 0  // true
[[[[[[ undefined ]]]]]] == '' // true
```

The ECMA spec describes this behavior in [Abstract Equality Comparison](https://www.ecma-international.org/ecma-262/#sec-abstract-equality-comparison).

## JavaScript Labyrinth

<p data-height="265" data-theme-id="light" data-slug-hash="JyVBQx" data-default-tab="result" data-user="brettinternet" data-embed-version="2" data-pen-title="JavaScript Labyrinth" class="codepen">See the Pen <a href="https://codepen.io/brettinternet/pen/JyVBQx/">JavaScript Labyrinth</a> by Brett (<a href="https://codepen.io/brettinternet">@brettinternet</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>

## isPrime()

```js
function isPrime(n) {
  return !/^.?$|^(..+?)\1+$/.test("1".repeat(n))
}
```

[Here](https://iluxonchik.github.io/regular-expression-check-if-number-is-prime/) is an explanation of a similar solution with a regular expression.

## Draw the box model on a webpage

```js
;[].forEach.call($$("*"), function(a) {
  a.style.outline = "1px solid #" + (~~(Math.random() * (1 << 24))).toString(16)
})
```

![box model from js input](./fakejs-1.png)

The code above is essentially translated into:

```js
Array.prototype.forEach.call(
  document.querySelectorAll("*"),
  dom =>
    (dom.style.outline = `1px solid #${parseInt(
      Math.random() * Math.pow(2, 24)
    ).toString(16)}`)
)
```

## Generate a random string

```js
Math.random()
  .toString(16)
  .substring(2) // "d37a43dda9777"
Math.random()
  .toString(36)
  .substring(2) // "plwldktp48"
```

## Make a deep copy object

Because objects are reference types, referencing an object to a new variable and changing the object referenced by that variable will still alter the original object. However, here's an unorthodox way to deep copy that object to a new space in memory.

```js
var a = {
  a: 1,
  b: { c: 1, d: 2 },
}
var b = JSON.parse(JSON.stringify(a))
```

## Implicit type conversions

Here's a good example of type conversion without using `Number`, `parseInt` and `parseFloat`:

```js
let a = "1" + a // 1
```

```js
parseInt(0.0000004) === 4 // true
```

```js
;[1, 2, 3] + [4, 5, 6] // '1,2,34,5,6'
```

Here the concatenation essentially works `.toString()` on each of the arrays including the values and the comma separators, and then works `"1,2,3" + "4,5,6"`.

Concatenation has additional silly behavior with the `+` operator. While `"3" - 1` is 2, `"3" + 1` is `"31"`.

```js
"" + "" // ""
[] + [] // ""
{} + [] // 0
[] + {} // "[object Object]"
{} + {} // "[object Object][object Object]"
```

So, concatenation depends on the types involved in the operation:

- `Number + Number` :arrow_right: addition
- `Boolean + Number` :arrow_right: addition
- `Boolean + Boolean` :arrow_right: addition
- `Number + String` :arrow_right: concatenation
- `String + Boolean` :arrow_right: concatenation
- `String + String` :arrow_right: concatenation

There's [further reading](https://www.ecma-international.org/ecma-262/#sec-addition-operator-plus) from the ECMA spec.

## JavaScript floating point inaccuracies

1 + 2 is 3, right? Not with floating point values...

```js
0.1 + 0.2 == 0.3 // false
```

Here, `0.1` and `0.2`are not accurate floating point representations, instead they evaluate to `0.30000000000000004`. This is essentially where it's advantageous to set a predefined precision value with `Number.EPSILON` ([related](https://stackoverflow.com/questions/5037839/avoiding-problems-with-javascripts-weird-decimal-calculations)). Check out [Is floating point math broken?](https://stackoverflow.com/questions/588004/is-floating-point-math-broken) and [0.30000000000000004.com](http://0.30000000000000004.com/).

## Terse conditional assignment

`var a = b && 1` is the same as:

```js
if (b) {
  a = 1
} else {
  a = b
}
```

`var a = b || 1` is the same as:

```js
if (b) {
  a = b
} else {
  a = 1
}
```

## Types

### Document.all, an undefined object?

```js
document.all instanceof Object // true
typeof document.all // undefined
```

However...

```js
document.all === undefined // false
```

[Here's](https://github.com/getify/You-Dont-Know-JS/blob/master/types%20&%20grammar/ch4.md#falsy-objects) an explanation of this obsolete feature, which used to be used to access DOM elements in older versions of IE.

### To be a number or not

```js
typeof NaN // number
```

### Strings aren't Strings?

```js
typeof "str" // "string"
"str" instanceof String // false
```

## true evaluated as 1

```js
true +
  true(
    // 2
    true + true
  ) *
    (true + true) -
  true // 3
```

When `true` is coerced to a number (`Number(true)`), it's evaluated to a truthy value as `1`.

```js
1 < 2 < 3 // true
3 > 2 > 1 // false
```

The expression above is evaluated from left to right. Since `1 < 2` is true, and true => 1 and `1 < 3`, the first line is true. However, as true is evaluated in the second line, `1 > 1` is false ([related](https://www.ecma-international.org/ecma-262/#sec-relational-operators)).

## Functions invoked with backticks

First, set up a function that returns our arguments such that `fn(1, 2, 3)` returns `[1, 2, 3]`:

```js
function fn(...args) {
  return args
}
```

```js
fn`first arg is an array ${true} separated by ${1} inserted values`
// [ [ 'first arg is an array ', ' separated by ', ' inserted values' ],
// true, 1]
```

This is the nature of _[Tagged template literals](https://www.ecma-international.org/ecma-262/#sec-tagged-templates)_ and it's the magic behind libraries like [styled-components](https://github.com/styled-components/styled-components).

## Try..catch

Will `1` or `2` be returned from the following expression?

```js
(() => {
  try {
    return 1
  } finally {
    return 2
  }
})()
```

`2` is returned. See `finally`'s role in the `try..catch` [in the spec](https://www.ecma-international.org/ecma-262/#sec-try-statement).

---

I hope you're thoroughly frightened. Happy Halloween!