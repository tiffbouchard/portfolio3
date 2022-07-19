---
templateKey: blog-post
title: C#
date: 2022-02-20T01:37:20.906Z
description: ""
featuredpost: true
---


naming conventions

* local variables - camel case
* constants - pascal case

primitive types

![](/img/screen-shot-2022-02-15-at-4.01.29-pm.png)

real numbers

* float - single
* double - double
* decimal - decimal 
* float number = 1.2f;
* decimal number = 1.2m;

non prim types

* string
* array
* enum
* class

overflowing

* 255 is largest you can store in a byte 
* byte number = 255
* number = number + 1

  * this is overflowing - but you can use a checked block to prevent overflowing, it will throw and err at runtime
  * this isn't a real world problem you would probably just use a short instead of a byte

    ```
    checked 
    {
      byte number = 255;
      number = number + 1;
    }
    ```