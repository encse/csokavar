---
title: "Excel delokalizálás quickhack"
date: "2007-06-30"
tags: 
  - "geekseg"
---

Tegnap Vera megkért, hogy segítsek neki valamit Excelben. Maya közreműködésével végül megoldottuk a problémát, viszont belefutottam az Excelem azon kellemes tulajdonságába, hogy a munkalapfüggvények neveit csak magyarul hajlandó elfogadni.

Például: minden normális helyen valami olyasmit írnék, hogy RAND()\*4, hogy egy nulla és négy közötti véletlen számot generáljak. Magyar Excelben ez VÉL()\*4. Nyilvánvaló, hogy ez így nem maradhat, ugyanis az évek során a függvények nevére berögzült heurisztikáimmal semmit sem érnek, és mindent ezerszer tovább tart megcsinálni.

Kis keresgélés után:

1\. Fogtam az C:/Program Files/Microsoft Office/Office12/1038/XLLEX.DLL-t, és átneveztem \*.bak-ra.

2\. Az egyel feljebb, az Office12 könyvtárban levő excel.exe-t átmásoltam az 1038-ba XLLEX.DLL néven.

(Mindezt homályos, és nem pont erre a problémára vonatkozó utalások alapján szedtem innen: [http://blogs.msdn.com/eric\_carter/archive/2005/06/15/429515.aspx](http://blogs.msdn.com/eric_carter/archive/2005/06/15/429515.aspx))

Azóta az Excel angol nyelvű függvényeket használ (magyar súgóval, de azzal még boldogulok). Egyelőre marad így, mert pillanatnyilag úgy tűnik, hogy a trükk tényleg csak a függvények nevét változtatta meg. A végleges megoldás valószínűleg a full angol language pack telepítése lesz, de az irodában egyelőre csak magyar Office 2007 van...
