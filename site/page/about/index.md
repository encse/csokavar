---
slug: "about"
title: "Dávid Németh Cs."
date: "2013-09-28"
coverImage: images/background.gif
---

## Home

I'm the happy father of two beautiful daughters: Zsófi (2010) and Panni (2012). Our home is the former house of an interior designer. We enjoy making the garden more and more beautiful every year. Our wisteria is at least 30 years old, looks fantastic in flowers and dominates the property anyway.

## Blog

I've been writing my [personal blog](https://csokavar.hu) since 2006. This is about every day things, interesting affairs, reviews of recently read books etc. The entries often have an underlying meaning, understandable only to me and the related people, but even without this knowledge it should be a good read to anyone blessed with a geek mind.

## Work

I was a platform developer from the beginning. Right after the university (2003) I had the opportunity to work with [Charles Simonyi](http://en.wikipedia.org/wiki/Charles_Simonyi) on his dream of the [Intentional Editor](http://intentsoft.com). It was great to learn from a programmer legend, spent very tiring weeks on his boat Skat and wrote code in all harbours around Europe.

Later (2011) I became a senior developer at [MobileEngine](http://mobilengine.com) and worked on their internally used platform, mixing web and mobile technologies.

I changed again in 2014 and joined [Prezi.com](http://prezi.com/about/). I have worked in many areas involving collaborative editing, rendering technologies, but most recently my focus has moved to help teams to work easily with each other. I've formed and now lead a team which provides APIs and figures out patterns to speed up the development of our main product. As a recognition of this, I was promoted to the "software architect of Prezi Next Editor client side" role in 2019.

## Freetime

It's hard to speak about freetime since the birth of my daughters. When they are sleeping I enjoy programming competitions, reading [books](https://csokavar.hu/konyvespolc/) and working on [fun projects](https://csokavar.hu/projects).

I have also learned to juggle five balls for a couple of seconds, and I'm fairly good with less props. I prefer balls, but I can also juggle clubs. I'm also a supporter of the Hungarian juggling community with running a small [juggling site](http://zsonglor.csokavar.hu) since 2004.

I take computer security as a hobby. My 2000-ish years were spent on various security challenge sites, and I started my own one in 2007. [Gekko](http://gekko.csokavar.hu) is mostly about various areas of maths and programming. It's fun to play, but haven't become well known during the years.

I also enjoy playing the piano, although I'm not much of a pianist. I started to learn in 2016 at the age of 36, so you can imagine how good I could be... But I practice almost every day.

<script>
    function preventScroll(e){
        if(["Space","ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].indexOf(e.code) > -1) {
            e.preventDefault();
        }
    }
    let iframe = null;

    [...document.getElementsByTagName('header')].forEach(header => {
         if (header.clientWidth > 800) {
            header.style.cursor = 'pointer';
            header.onclick = (evt) => {
                if (iframe == null) {
                    iframe = document.createElement('iframe');
                    iframe.style.zIndex='999';
                    iframe.style.top='0';
                    iframe.style.left='0';
                    iframe.style.position='absolute';
                    iframe.style.width=`100%`;
                    iframe.style.height=`100%`;
                    iframe.style.padding='0';
                    iframe.style.border='none';
                    iframe.src='https://pacman.csokavar.hu';

                    document.body.append(iframe);

                    const onClose = (event) => {
                        if (event.data == "close") {
                            iframe.remove();
                            iframe = null;
                            window.removeEventListener("message", onClose, false);
                        }
                    }
                    window.addEventListener("message", onClose, false);
                } 
            };
         }
    });
</script>