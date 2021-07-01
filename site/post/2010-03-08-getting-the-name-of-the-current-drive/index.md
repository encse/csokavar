---
title: "The name of the current drive"
date: "2010-03-08"
tags: 
  - "geekség"
coverImage: images/disk_drive_image-e1447790283886.webp
---

I needed the current drive's name (e.g. C:) in a windows shell environment, but there was no powershell around.

Luckily, `chdir` returns the necessary info and the `for /f` command can be used as an awkward replacement for bash's backtick.

Putting it together, we get:

```
for /f "tokens=1 delims=:" %a in ('chdir') do echo %a
```

in batch files, we have to double the %s i.e.:

```
for /f "tokens=1 delims=:" %%a in ('chdir') do echo %%a
```