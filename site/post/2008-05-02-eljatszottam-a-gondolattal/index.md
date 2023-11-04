---
title: "Eljátszottam a gondolattal"
date: "2008-05-02"
tags: 
  - "geekség"
---

Akkor én ezt most itt nem is minősíteném...

```
Sub TöltsedKi()
    For Each rw In Selection.Rows
    
         t = TimeValue("9:00:00") 'ekkor járunk munkába általában
         d = 15 'ennyi perces szórással érkezünk reggel
         d2 = 10 'ennyi perces szórással dolgozzuk le a nyolc órát
         k = 5 'ennyi percre kerekítjük az értékeket
        
         d = Int(d / k)
         d2 = Int(d2 / k)
        
         r = Int((2 * d + 1) * Rnd) - d
         r2 = Int((2 * d2 + 1) * Rnd) - d2
        
         r = k * r
         r2 = k * r2
        
         rw.Cells(1, 1) = DateAdd("n", r, t)
         rw.Cells(1, 2) = DateAdd("n", r + r2, DateAdd("h", 8, t))
    
    Next
End Sub
```