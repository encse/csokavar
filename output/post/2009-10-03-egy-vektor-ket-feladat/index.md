---
title: "Egy vektor, két feladat"
date: "2009-10-03"
tags: 
  - "feladat"
  - "geekseg"
  - "logika"
coverImage: "blackboard-bog-standard-e1447877703210.jpg"
---

Adott egy \[latex\]n\[/latex\] elemű egész számokat tartalmazó \[latex\]A\[/latex\] vektor.

1\. Adjuk meg azt a \[latex\]P\[/latex\] és \[latex\]Q\[/latex\] indexet, ami maximalizálja a \[latex\]\\sum\_{i=P}^{Q}A\[i\]\[/latex\] részvektort. Az algoritmus műveletideje legyen \[latex\]O(n)\[/latex\].

2\. Válasszuk ki a vektor második legkisebb elemét \[latex\]n + O(log\_{2}n)\[/latex\] összehasonlítással.

### Frissítés 2019 október 7.

A második feladatot Lőry megoldotta, de sose jutottunk el az első megoldásáig. Most kigondoltam, aztán ellenőrzésképpen rá is keresetem a neten...

Olyan sok lehetőségünk nincs, tekintve, hogy csak egyszer mehetünk végig az input vektoron. Világos, hogy valami olyan invariánst kell kereseni, amit a következő elemre lépve fent tudunk tartani, és a végén a feladat megoldását adja.

Egy lehetséges ötlet az, hogy minden indexre próbáljuk meghatározni azt a legnagyobb részösszeget, ami az adott elemnél végződik.

Ciklusváltozónak válasszuk a kis \[latex\]q\[/latex\]-t, és vezessük be a kis \[latex\]p\[/latex\]-t is, a hozzátartozó intervallum kezdetét, az összeg legyen \[latex\]m\[/latex\] és tartsuk még nyilván a \[latex\]M\[/latex\] maximum összeget is, valamint az ehhez tartozó nagy \[latex\]P\[/latex\], \[latex\]Q\[/latex\] indexeket.

Induláskor legyen \[latex\]p = q = P = Q = 0\[/latex\] és \[latex\]m = M = A\[0\]\[/latex\].

Ha megvagyunk \[latex\]q\[/latex\]-ig, akkor \[latex\]q + 1\[/latex\]-re viszonylag könnyen átléphetünk, hiszen ha \[latex\]m\[/latex\] negatív volt, akkor új intervallumot kell kezdenünk, ha pedig pozitív, akkor érdemes az előzőt folytatni.

Ezután már csak a \[latex\]P\[/latex\], \[latex\]Q\[/latex\] és \[latex\]M\[/latex\] beállítgatása van hátra és kész is vagyunk:

**function** maxContiguousSum(A): 
  p = q = P = Q = 0
  m = M = A\[0\]
  **for** q **in** 1 .. A.length:
    **if** m < 0:
      (p, m) = (q, A\[q\])
    **else**:
      m = A\[q\] + m

    **if** m > M:
      (P, Q, M) = (p, q, m)
  **return** (P, Q)

Ez a feladat egyébként az irodalomban [maxium subarray problem](https://en.wikipedia.org/wiki/Maximum_subarray_problem) néven ismert, a fenti megoldás pedig a Kadane algoritmus egy változata.
