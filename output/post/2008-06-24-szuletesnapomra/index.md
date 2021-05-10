---
title: "Születésnapomra"
date: "2008-06-24"
tags: 
  - "geekseg"
  - "szemelyes"
---

Hétvégén egy újabb számrendszerben is betöltöttem a 18-at. Mostanában inkább így számolom, kevésbé nagy megrázkódtatás.  Megint egy csomó kedves ismerősömnek eszébe jutott a dolog, sőt olyanoknak is, akikre kb. utoljára számítottam, mert eleve csak futólag ismertük egymást, ráadásul az is évekkel ezelőtt volt. Vera pedig mindjárt két tortát is sütött, mert szerinte az első nem sikerült jól. Ezt egyébként tükörtojásosnak nevezem, mert félbevágott barackok voltak a tetején, és bár a rétegrendje valóban nem volt szabványos (ő mondta így), a világon semmi baj nem volt vele. Mindegyik nagyon finom volt a sok túróval, gyümölccsel és a szebbikhez adott rum aromával.

Miért érdekes még a 28. születésnap? Délelőtt a buszon a számrendszereken kívül eszembe jutott a következő

_**„Tétel"**: a 28-cal osztható születésnapok pontosan arra a napra esnek, amin az ember eredetileg is született, feltéve, hogy időközben a szökőévek 4 évenként követték egymást. (Ezt azért kell hozzáfűzni, mert a századfordulók közül csak a négyszázzal is oszthatók minősülnek szökőévnek. Szerencsére a 2000-es év jól viselkedik ebből a szempontból.)_

**Bizonyítás:** a tömörebb fogalmazás végett, nevezzük _arany_nak a születésnapot, ha ugyanarra a napra esik, mint amin eredetileg születtünk.

Mivel az év normál esetben 365 napos, ami héttel osztva 1-et ad maradékul, minden évben egy nappal úgymond arrébb _csúszik_ a naptár. Pl. 2009 nem szökőév és 2009. január 1-je csütörtökre esik, így 2010-ben január 1. pénteki nap lesz. Ebből kiindulva minden hetedik születésnapnak aranynak kellene lennie.

Csakhogy itt vannak ezek a fránya szökőévek, amik időnként 1-1 nap további csúszást adnak a naptárhoz. Ezt ráadásul elég hülye módon teszik, ugyanis máshogy működik a dolog a március 1-jét megelőző napokra mint a többire, hiszen a szökőnap február végéhez adódik hozzá. Emiatt aztán nehéz megjegyezhető formulát adni arra, hogy kinek mikor van arany születésnapja, még akkor is, ha élünk az évszázadfordulókra vonatkozó feltevésünkkel. Egész pontosan a dolog attól függ, hogy:

- a születés éve hogy viszonyul a szökőévek 4 éves periódusához.
- a születésnap az év melyik szakaszába esik (március előtt vagy sem, esetleg éppen szökőnapon)

Ezt természetesen senkinek sincs kedve fejben számolgatni, de most jöhet az észrevétel, ami érdekessé teszi a „tételt". Igaz ugyanis, hogy tetszőleges 4 egymást követő születésnapból álló balról zárt intervallumban pontosan egy szökőnap foglaltatik. Hiszen:

- ha az intervallum első éve _nem szökőév_, akkor a szökőnap a következő három év valamelyikében lesz (valahol az intervallum belsejében).
- Ha az intervallum első éve _szökőév_, és a születésnap legkésőbb február 28-ra esik, akkor még ebben az évben megkapjuk a szökőnapot, de az intervallum másik végébe már nem számítjuk bele még egyszer. Február 28-a után (természetesen ide tartozik február 29-e is), a szökőnapot az intervallum utolsó évében számítjuk fel.

Az évenkénti rendszeres 1 nap csúszást ezzel a négyévenkénti 1 nappal kiegészítve, minden negyedik születésnapunk öt nap eltolással követi az előzőt. Ha tehát 28\*n évesek vagyunk, akkor ez (28\*n)/4 = 7\*n darab periódus, ami 5\*7\*n nap csúszásnak felel meg. Márpedig a valahányszor hét nap csúszás pontosan azt jelenti, hogy arany születésnapunk van, ami a tételünk állítását bizonyítja. ∎

**Megjegyzés**ként azért még annyit hozzátehetünk, hogy mivel lkkt(5,7) = 35, a négyévenkénti öt napos eltolás leghamarabb 35 csúszás (azaz 28 év) alatt eredményez arany születésnapot,  tehát a 28-as periódusnál a fentiek alapján jobb eredmény nem adható.

**Megjegyzés2**: utólag egy kis programozással azt is leellenőriztem, hogy az 1901. január 1. és 2000. december 31. között szültetettekről általánosságban is csak annyit tudunk mondani, hogy pontosan ezekben a 28-cal osztható életévekben van arany születésnapjuk a 100 éves életkor betöltéséig.

**Megjegyzés3:** bár ez csak középiskolás fokon, de azért József Attila elmehet a p\*csába.

**Releváns linkek:**

- [Milyen napra esett egy adott dátum?](http://en.wikipedia.org/wiki/Zeller's_congruence)
