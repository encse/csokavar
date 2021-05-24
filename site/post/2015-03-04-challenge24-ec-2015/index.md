---
title: "Challenge24 EC 2015"
date: "2015-03-04"
tags: 
  - "geekség"
coverImage: images/cA4aKEIPQrerBnp1yGHv_IMG_9534-3-2.jpg
---

Az idei EC nem sikerült túl fényesen, csak hatvanegyedikek lettünk, pedig most hárman voltunk Viktorral és Gidával, egy prezis munkatársammal, aki elég jól vágja az algoritmusokat. Sajnos nem volt elég összeszokott a csapat, és valahogy a kitalált dolgok implementálása se ment olyan jól, mint tavaly.

De tulajdonképpen nem is nagyon bánom, hogy ilyen bénák voltunk, mert a szervezők, ha lehet még szerencsétlenebbek voltak. Szinte minden feladatban volt valami hiba. Pontatlan volt a megfogalmazás, hibás volt a példa, rosszak voltak az input fájlok, rossz volt az ellenőrzés.

Az első feladat, egy nem túl bonyolult dinamikus programozás volt. Adott néhány string, keressük meg a leghosszabb közös részsorozat hosszát. Tehát pl. ABCDEF és ADXF esetén a leghosszabb közös részsorozat az ADF, így a megfejtés 3.

Erre a megoldás a következő. Legyen egy képzeletbeli olvasó fejünk, ami egyszerre tud olvasni az összes stringből, és stringenként állítható, hogy melyik betű fölött áll éppen. A fej állapotát a pos tömb írja le, a következő beolvasásra váró karakter stringenkénti indexével. Van egy read műveletetünk, ami egy fej állapotból kiindulva az összes stringben megkeresi egy adott betű következő előfordulását, ezt beolvassa, és egy olyan pos tömböt ad vissza, amiben a pozíciók a következő betűre mutatnak, esetleg az utolsó betű utáni pozícióra, ha a keresett betű éppen a string végén volt. Ha viszont valamelyik stringben nem találjuk meg a betűt, akkor az egész pos helyett egy extremális elemet (⊥) kapunk vissza.

Ekkor első közelítésben azt mondhatjuk, hogy:

<pre><code>
<b>function</b> longestCommonSubsequence(pos)
  maxLen ← 0  

  <b>foreach</b> alpha <b>in</b> alphabet:
    nextPos ← read(pos, alpha)
    <b>if</b> nextPos ≠ ⊥:
      maxLen ← max(maxLen, 1 +
        longestCommonSubsequence(nextPos))

  <b>return</b> maxLen
</code></pre>

Amit a csupa nullával inicializált pos tömbbel hívunk meg, hogy megkapjuk a megoldást.

Mivel a függvény csak pos-tól függ, egy kis cachelés nem árthat neki:

<pre><code>
<b>function</b> longestCommonSubsequence(pos, cache)
  <b>if</b> contains(cache, pos): 
     <b>return</b> readFromCache(cache, pos)
  
  maxLen ← 0  

  <b>foreach</b> alpha <b>in</b> alphabet:
    nextPos ← read(pos, alpha)
    <b>if</b> nextPos ≠ ⊥:
      maxLen ← max(maxLen, 1 +
        longestCommonSubsequence(nextPos, cache))

  addToCache(cache, pos, maxlen)

 <b>return</b> maxLen
</code></pre>

És így már elég gyors is lesz a megoldásunk.

Ez volt tehát az első feladat, amit szépen meg is oldottunk, de hiába küldtem be, mert csak az első három bemenetre volt jó a megoldásom. Néztem egy ideig, aztán megnéztem az IRC csatornát, ott már valaki hupákolhatott, mert azt írták a szervezők, hogy ellenőrizték, az ő megoldásuk a helyes. Úgyhogy néztem még egy kicsit, újabb fél óra múlva IRC-en írták, hogy ja bocs mégsem jó a megoldásuk, és a miénk a helyes.

![4k7kp0I](images/4k7kp0I.gif)

És ez csak egy feladat volt a hatból. A harmadiknál nem írták le pontosan a peremfeltételeket, és kétszer módosítottak rajta menet közben, ráadásul a feladatkiírásban szereplő egyik példa is rossz volt. A negyediknek rossz volt az összes input fájlja. Az ötödikről kiderült, hogy nem működik rá az ellenőrzés, amit csináltak, és rossz megoldásokat is elfogad. Verseny után kézzel ellenőrizték a beküldéseket, gondolom minden további hiba kizárásával. Az utolsónál nem készültek el időre az inputfájlok, csak hat a tízből, a többit külön kellett letölteni, és nem mellesleg a verseny közepén módosítottak a feladaton. Egy legrövidebb út keresés volt, hexagonos pályán, négy művelettel: gyorsítás, lassítás, fordulás jobbra és balra. Aztán órákkal később kiderült, hogy van egy ötödik művelet is a menjünk tovább előre minden módosítás nélkül.

Végül is három feladattal foglalkoztunk a hatból, ezek amúgy nem voltak nehezek, csak mi voltunk bénák. Jövőre talán jobban megy, de addig még úgyis itt a [Code Jam](https://code.google.com/codejam), meg kéthetente lehet tolni a [Codeforcesen](http://codeforces.com/ "Codeforcesen") is egy rövidebb menetet.
