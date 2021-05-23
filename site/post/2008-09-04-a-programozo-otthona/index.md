---
title: "A programozó otthona"
date: "2008-09-04"
tags: 
  - "feladat"
  - "fun"
  - "geekseg"
  - "isc"
  - "matematika"
coverImage: images/0191162_PE345209_S5.jpg
---

Beszélgettünk Dávid kollégával, és megint előkerültek a geek lét előnyei. Mert annyira büszke a vízmértékes esetre (joggal, mindjárt kivesézem). Én meg ezúttal azzal vágtam vissza, hogy miért mit gondol, nálam tán nem 17 csipesszel van feltéve a függöny?

### A vízmérték

Dávid vásárolt egy TESCO gazdaságos vízmértéket, amiről csak később derült ki, hogy gyárilag hibás, ugyanis hiába tette vízszintes felületre a cuccot: a buborék nem volt középen.

A vízmérték ugyebár egy nagy, fából készült téglatest, benne azzal a kis csővel, amiben a víz meg a buborék van. A cső a téglatesthez két csavarral van hozzáerősítve. Ezek szerencsére pont olyanok, hogy a csőnek a téglatesthez képesti szöge bizonyos határok között szabadon állítható. Ha tehát elég ügyesek lennénk, be tudnánk úgy állítani a dolgot, hogy a buborék pont középre kerüljön.

Ehhez azonban kellene egy vízszintes referenciafelület, ami a tyúk meg a tojás problémájának egyfajta asztalosi környezetbe emelt újraértelmezését adja. De szerencsére ez csak látszólag igaz. Ugyanis a vízmértéknek megvan az a kellemes tulajdonsága, hogy ha már tudod milyen egyenesre szeretnéd tenni, nem kell gondolkodni, hogy hogyan forgasd, mert mind a kétféleképpen ráteheted: a buboréknak mindkét esetben pont ugyanannyi eltérést kell mutatni a középső állapottól. Ez azonban akkor és csak akkor igaz, ha egyébként a dolog jól van beállítva. Magyarán ha ezt valahogy garantáljuk a csavarok tekergetésével, akkor egy jól behangolt vízmértéket kapunk.

### A csipeszek

Függönyt ugye úgy könnyű feltenni, hogy fogod a két szélső csipeszt, felteszed rá a függöny két végét, aztán a középső csipeszre odacsípteted a függöny közepét. Utána lesz két részfeladatod, amit megint jó lenne a "közepét megkeresem, felcsíptetem a középső csipeszre" módon megoldani, majd így tovább a csipeszek elfogytáig, de gyakorta előfordul, hogy egy ponton valahogy páros sok csipesz marad! Ekkor ügyesen meg kell tippelni, hogy a függöny tökéletes felrakása után mekkora távolságra lennének egymástól a csipeszek, és innentől számolva kb. fél óra múlva már elégedetten hátra is dőlhetünk a kanapéban az addigra már tényleg csak egy kicsit csálé függönyt bámulva.

#### Na ezt így nem

Építsünk inkább egy $a_n$ sorozatot - akkor is ha fáj -, aminek minden eleme azzal a roppant kellemes tulajdonsággal bír, hogy annyi csipesszel könnyű feltenni a függönyt.

$a_0 := 2$ csipesz jó.

Ha most a két csipesz közé teszünk egy harmadikat, akkor arra az egy új csipeszre elég a függöny közepét felcsíptetni.

$a_1 := 3$ csipesz jó.

Ha most megint minden két szomszédos csipesz közé beteszünk egy újabbat, akkor azokra ugyanígy a megfelelő darab közepének megkeresésével fel tudjuk tenni a függönyt.

$a_2 := 5$ csipesz jó.

És így tovább, ha $a_n$ csipeszt szerettünk, akkor $a_{n+1} = a_n + a_n - 1 = 2 * a_n - 1$ csipeszt megint szeretni fogunk.

#### De mennyi az az $a_n$?

Mivel $a_0 = 2 = 2^0 +1$ , $a_1 = 3 = 2^1+1$, az a sejtésünk támadhat, hogy a sorozat n-edik eleme $a_n = 2^n+1$.

_Nézzük teljes indukcióval._

Az n=0 ill. 1 eseteket már be is láttuk.

Tegyük fel, hogy valamilyen n-re az indukciós feltevés már igaz, akkor $a_{n+1} = 2 * a_n - 1 = 2 * (2^{n}+1) - 1 = 2^{n+1}+2-1 = 2^{n+1}+1$, és milyen meglepő: pontosan ezt akartuk igazolni. □

Imádom az ilyen megsejtjük, aztán majdcsak lesz valami jellegű bizonyításokat. Az ég világon semmit nem árulnak el a mögötte levő gondolatokról. De azért sikerült belátnuk az alábbi tételt.

_**Függönyökről szóló tétel:** tetszőleges n nem negatív egész szám esetén $a_n = 2^n+1$ számú csipeszre könnyű a függönyt felcsíptetni. (Speciálisan nálam 9 illetve 17 csipesszel vannak feltéve itthon.)_

Tudom: menjek a picsába. Szeretnék.
