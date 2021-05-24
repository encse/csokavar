---
title: "Problem of the week - 9 Digit Problem"
date: "2010-04-20"
tags: 
  - "feladat"
  - "geekség"
coverImage: images/8bit_digits_pattern-500-e1447789863193.jpg
---

I've posted the following challenge to the jokes list of our company the last week, and asked my collegaues to use their imagination and exploit as many programming languages as possible, the more exotic the better...

> Find a number consisting of 9 digits in which each of the digits from 1 to 9 appears only once. This number must also satisfy these divisibility requirements:
> 
> 1. The number should be divisible by 9.
> 2. If the rightmost digit is removed, the remaining number should be divisible by 8.
> 3. If the rightmost digit of the new number is removed, the remaining number should be divisible by 7.
> 4. And so on, until there's only one digit (which will necessarily be divisible by 1).

A couple of solutions arived, mostly from Maya and Cactus. Right now we have programs written in C#, Perl, Haskell, XSLT and Maya took our very own intentional editor and our internal language called CL1 and solved the problem in that. It could cleary be written in a much better style, but hey... that's not so bad.

See the list of solutions [here](https://csokavar.hu/projects/ninedigitproblem/).

If you find that your favourite language is missing, don't hesitate to share it with us, just provide a link to you solution, or copy the source code in the comment box below (bonus points for a Javascript XSS that works). I'm really longing for a version written in mod-rewrite and one with C++ template meta programming...
