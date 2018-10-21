---
sidebarDepth: 2
---
# JavaScript

::: tip 简介
**JavaScript** 一个让前端疯狂的编程语言，**Brendan Eich** 一个让前端疯狂的男人
:::

::: warning 注意
文章中所有JavaScript代码使用es6写法，兼容性请自行斟酌
:::

::: warning 注意
并且我们定义了一个对象：`let DJ = {};` ，后续我们所有写的方法都在DJ对象中定义
:::

::: warning 注意
包含 `*` 标记的部分为推荐的自建函数写法
:::

<!-- ## 判断数据类型 -->

## 数据类型

基本数据类型： `undefined`, `null`, `boolean`, `number`, `string`, `symbol`

引用数据类型： `object`

特殊数据类型（不严谨，本质依然为Object）： `regexp`, `error`, `date`

::: tip 补充
`object` 数据类型中包含了 `null` 、数组、引用数据类型和特殊数据类型，当我们使用 `typeof` 运算符判断数组、特殊数据类型时输出结果也为 `object`  
判断函数和构造函数时为`function`
:::

### typeof

在实际开发中，我们常常使用 `typeof` 运算符判断数据类型，但是当我们判断 `null` 、数组和对象的时候，无法直接判断，它的使用情况如下：

```javascript {2,9-12,14-16}
typeof undefined;       // => 'undefined'
typeof null;            // => 'object'
typeof true;            // => 'boolean'
typeof NaN;             // => 'number'
typeof 1;               // => 'number'
typeof 'a';             // => 'string'
typeof Symbol()         // => 'symbol'

typeof [1, 2, 3];       // => 'object'
typeof {a: 1};          // => 'object'
typeof function () {};  // => 'function'
typeof class b {};      // => 'function'

typeof new RegExp()     // => 'object'
typeof new Error()      // => 'object'
typeof new Date()       // => 'object'
```

### Object.prototype.toString()

为了应对 `typeof` 所出现的装况，我们需要使用 `Object.prototype.toString()` 方法

::: tip 补充
当我们使用 `Object.prototype.toString()` 时，方法所指向（也可称为作用于）的对象为构造函数 `Object`，所以我们需要使用 `apply`, `call`, `bind` 中的一种，更改 `this` 指向为我们要查询的对象，这里我们使用 `call`  
`apply`, `call`, `bind` 的区别，我们在之后的讲解中进行说明
:::

```javascript {9-12,14-16}
Object.prototype.toString.call(undefined);          // => '[object Undefined]'
Object.prototype.toString.call(null);               // => '[object Null]'
Object.prototype.toString.call(false);              // => '[object Boolean]'
Object.prototype.toString.call(NaN);                // => '[object Number]'
Object.prototype.toString.call(1);                  // => '[object Number]'
Object.prototype.toString.call('a');                // => '[object String]'
Object.prototype.toString.call(Symbol());           // => '[object Symbol]'

Object.prototype.toString.call([1, 2, 3]);          // => '[object Array]'
Object.prototype.toString.call({a: 1});             // => '[object Object]'
Object.prototype.toString.call(function () {});     // => '[object Function]'
Object.prototype.toString.call(class b {});         // => '[object Function]'

Object.prototype.toString.call(new RegExp());       // => '[object RegExp]'
Object.prototype.toString.call(new Error());        // => '[object Error]'
Object.prototype.toString.call(new Date());         // => '[object Date]'
```


### * 构建DJ.toType()函数

根据以上两个方法，我们可以看出使用 `Object.prototype.toString()` 方法的话可以判断全部的数据类型，但是typeof依然可以区分基本数据类型，重复编写第二种方法会令我们的代码繁琐，不利于维护，所以我们重新构建 `toType()` 函数，来简化判断流程

#### 代码实现：
```javascript
'use strict';
/**
 * 判断传入值的数据类型
 * @param {Mixed} v 测试值
 * @return {String} 数据类型名称
 */
DJ.toType = function (v) {
    //先使用typof判断数据类型，缓存到str中
    let str = typeof v;
    //判断是否为引用数据类型，将基本数据类型和引用数据类型区分开
    if (str === 'object') {
        //通过toString()进行细分
        str = Object.prototype.toString.call(v);
        //将返回的 '[object ...]' 字符串进行处理，只取有用的部分，并全部转换为小写
        return str.substring(8, str.length - 1).toLowerCase();
    }
    //如果不为引用数据类型直接返回结果（特例：function）
    return str;
};

// 调用结果： 
DJ.toType(undefined);          // => 'undefined'
DJ.toType(null);               // => 'null'
DJ.toType(false);              // => 'boolean'
DJ.toType(NaN);                // => 'number'
DJ.toType(1);                  // => 'number'
DJ.toType('a');                // => 'string'
DJ.toType(Symbol());           // => 'symbol'

DJ.toType([1, 2, 3]);          // => 'array'
DJ.toType({a: 1});             // => 'object'
DJ.toType(function () {});     // => 'function'
DJ.toType(class b {});         // => 'function'

DJ.toType(new RegExp());       // => 'regexp'
DJ.toType(new Error());        // => 'error'
DJ.toType(new Date());         // => 'date'
```

### * 构建数据类型判断函数

当我们编写项目时，我们可能需要判断一些变量是不是我们所需要的数据类型，例如： `typeof 1 === 'number'` 或者 `Object.prototype.toString.call({}) === '[object Object]'` ，我们可以看见，如果按照正常的写法可能需要写大量的代码，所以我们简单一些，分别对每种数据类型定义不同的判断函数

#### 代码实现：

```javascript
'use strict';
/**
 * 判断传入值是否为某一种数据类型
 * @param {Mixed} v 测试值
 * @return {Boolean} 如果是，返回true；如果不是，返回false
 */
//定义数据类型名称组成的字符串，方便添加或删除需要判断的数据类型
'Undefined Null Number String Boolean Symbol Array Object Function RegExp Error Date'
.split(' ').forEach(function (name) {
    // 通过循环数组的形式，定义需要判断哪些数据类型的函数,动态定义函数名和函数内容
    DJ['is' + name] = v => (DJ.typeof(v) === name.toLowerCase());
});

//用法举例：
DJ.isUndefined(undefined);      // => true
DJ.isNull(null);                // => true
DJ.isNumber(1);                 // => true
DJ.isString('a');               // => true
DJ.isBoolean(false);            // => true
DJ.isSymbol(Symbol());          // => true
DJ.isArray([]);                 // => true
DJ.isObject({});                // => true
DJ.isFunction(function(){});    // => true
DJ.isFunction(class b{});       // => true
DJ.isRegExp(new RegExp());      // => true
DJ.isError(new Error());        // => true
DJ.isDate(new Date());          // => true
```

## 数据类型转换

### {All} => {Boolean}

在条件判断时，除了 `undefined` ， `null` ， `false` ， `NaN` ， `''` ， `0` ， `-0` ， `+0` 其他所有值都转为 `true` ，包括所有对象。

::: tip 举例
=> false: `undefined` ， `null` ， `false` ， `NaN` ， `''` ， `0` ， `-0` ， `+0`  
=> true: 除了上边的以外所有的数据类型（包括所有函数、空数组、非空数组、空对象、非空对象、正数、负数等等）
:::

::: tip 实际应用
有时当我们判断一个变量是否存在有效值时，就可直接使用 `!![value]` ，如果 `[value]` 有效，则进行两次boolean转换，结果为 `true`；如果无效，则结果为 `false`  
当我们使用 `if` 语句时，这种写法尤为简单及重要
:::

```javascript {10}
//代码举例：
Boolean(undefined); // => false
Boolean(null);      // => false
Boolean(false);     // => false
Boolean(NaN);       // => false
Boolean('');        // => false
Boolean(-0);        // => false
Boolean(+0);        // => false
Boolean(0);         // => false
Boolean(other);     // => true
```

