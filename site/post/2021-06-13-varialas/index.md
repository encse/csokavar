---
title: "Variálás"
date: "2021-06-13"
tags: 
  - "metaentry"
coverImage: ../../backgrounds/generic/street2.gif
---

Megint átvariáltam a Csókavárat. Kihajítottam a Wordpress motort és egy statikus generátorra álltam át. Mivel nem vagyok lusta, meg különben is hol maradna a szórakozás, a generátort is én írtam, így pontosan azt csinálja amit szeretnék, és csak annyira bonyolult, amennyire elbonyolítom magamnak. 

Egy ilyen generátort megírni nem nagy varázslat, de mégis tele van apró és idegesítő feladatokkal mint például a képek és más bináris fájlok kérdése. Hova tegyem a képeket? Külön gyűjtögessem valahol vagy tegyem a bejegyzés mellé? Hogy lesz a backup? Satöbbi. Végül úgy döntöttem, hogy el fog az férni githubon többivel együtt. Egyrészt nem sok adatról beszélünk, meg úgyse nagyon változik. Ezzel megvan az ingyen tárhely és végtelen backup, remek.

Az asseteket: képek, egy-két .mp3 vagy .zip, CDN-re pakolja a generátor, ami nagyon fellengzősen hangzik, de valójában ugyazon a szerveren csücsülnek mint a többi adat, csak a rájuk mutató URL-eket cserélgetem le CDN-esre. A CDN megoldja a cachelést, és ha valamit nem talál, akkor elmegy az igazi helyére és onnan letölti magának. Ha nem ilyen házi barkács oldalról lenne szó, nyilván S3-ra kellene pakolni mindent, de a Csókavár forgalmának nagyjából 100%-a úgyis tőlem származik, szóval minden megoldás működik...

Az már talán kiderült, hogy nagy rajongója vagyok a pixel artnak, és az internet tele van hasonló emberekkel (milyen meglepő), akik ráadásul tehetségesek is ezekben, így aztán az oldalak fő képein most jó eséllyel valami cyberpunk esetleg retro gif-et vagy japán városképet talál a látogató. Ez szerintem tök jó hangulatot adnak az egésznek, elég változatosak és mégis valahogy koherens képet mutatnak.

Mivel soha nem csináltam még search enginet, most ezt se akartam kihagyni és készítettem egy kereső oldalt is. Beindexeltem az összes bejegyzést, és mindent belegeneráltam a forrásába. Még így se lett akkora mint egy nagyobb felbontású kép, szóval optimalizálni nem kellett, pedig már hegyeztem a billentyűzetet a trie adatszerkezet implementálására. Sebaj, talán majd máskor.
