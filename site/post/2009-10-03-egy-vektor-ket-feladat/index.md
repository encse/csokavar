---
title: "Egy vektor, két feladat"
date: "2009-10-03"
tags: 
  - "feladat"
  - "geekseg"
  - "logika"
coverImage: "blackboard-bog-standard-e1447877703210.jpg"
---

Adott egy $n$ elemű egész számokat tartalmazó $A$ vektor.

1. Adjuk meg azt a $P$ és $Q$ indexet, ami maximalizálja a $\sum_{i=P}^{Q}A[i]$ részvektort. Az algoritmus műveletideje legyen $O(n)$.

2. Válasszuk ki a vektor második legkisebb elemét $n + O(log_{2}n)$ összehasonlítással.

### Frissítés 2019 október 7.

A második feladatot Lőry megoldotta, de sose jutottunk el az első megoldásáig. Most kigondoltam, aztán ellenőrzésképpen rá is keresetem a neten...

Olyan sok lehetőségünk nincs, tekintve, hogy csak egyszer mehetünk végig az input vektoron. Világos, hogy valami olyan invariánst kell kereseni, amit a következő elemre lépve fent tudunk tartani, és a végén a feladat megoldását adja.

Egy lehetséges ötlet az, hogy minden indexre próbáljuk meghatározni azt a legnagyobb részösszeget, ami az adott elemnél végződik.

Ciklusváltozónak válasszuk a kis $q$-t, és vezessük be a kis $p$-t is, a hozzátartozó intervallum kezdetét, az összeg legyen $m$ és tartsuk még nyilván a $M$ maximum összeget is, valamint az ehhez tartozó nagy $P$, $Q$ indexeket.

Induláskor legyen $p = q = P = Q = 0$ és $m = M = A[0]$.

Ha megvagyunk $q$-ig, akkor $q + 1$-re viszonylag könnyen átléphetünk, hiszen ha $m$ negatív volt, akkor új intervallumot kell kezdenünk, ha pedig pozitív, akkor érdemes az előzőt folytatni.

Ezután már csak a $P$, $Q$ és $M$ beállítgatása van hátra és kész is vagyunk:

<pre><code>
<b>function</b> maxContiguousSum(A): 
  p = q = P = Q = 0
  m = M = A[0]
  <b>for</b> q <b>in</b> 1 .. A.length:
    <b>if</b> m < 0:
      (p, m) = (q, A[q])
    <b>else</b>:
      m = A\[q\] + m
    <b>if</b> m > M:
      (P, Q, M) = (p, q, m)
  <b>return</b> (P, Q)
</code></pre>

Ez a feladat egyébként az irodalomban [maxium subarray problem](https://en.wikipedia.org/wiki/Maximum_subarray_problem) néven ismert, a fenti megoldás pedig a Kadane algoritmus egy változata.
