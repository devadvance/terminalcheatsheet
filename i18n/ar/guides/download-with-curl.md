---
layout: guide-layout
title:  كيفية تنزيل الملفات باستخدام الـ curl
excerpt:  كيفية تنزيل الملفات باستخدام الـ curl
permalink: /ar/guides/curl-download-files
permalink_without_prefix: /guides/curl-download-files
lang: ar
direction: rtl
---

**جدول المحتويات**

* TOC
{:toc}

## مقدمة

يهدف هذا الدليل إلى تعليمك الطرق الأساسية لتنزيل الملفات باستخدام [curl](https://github.com/curl/curl). أثناء اتباع هذه التعليمات، ضع في اعتبارك أن ملفات ومجلدات الكمبيوتر الخاصة بك على الأرجح ستكون مختلفة عن النماذج. إذا كنت تمتلك الكثير من الخبرة بالفعل مع المحطة، تحقق من [الأوامر الموجودة على الصفحة الرئيسية للحصول على مواد مرجعية سريعة](/ar/).

## المتطلبات الأولية

لاتباع هذا الدليل، ستحتاج إلى:

* الوصول إلى نافذة المحطة على أي نظام تشغيل لينكس أو macOS.
* معرفة كيفية فتح نافذة المحطة. إذا لم تكن متأكدًا، قم بزيارة التعليمات لـ [macOS](open-terminal-macos) أو Linux (قريبًا).
* ملف تريد تنزيله. نستخدم `https://terminalcheatsheet.com/sample-file.jpg` كمثال في هذا الدليل.
* تثبيت أداة curl على جهاز الكمبيوتر الخاص بك. يأتي معظم أجهزة الكمبيوتر بنظام macOS و Linux مزودة بها مسبقًا. إذا لم يكن الأمر كذلك، فستحتاج إلى مراجعة التعليمات الفنية [على موقع تثبيت curl](https://curl.haxx.se/docs/install.html){:target="_blank" rel="noopener"}.

## تنزيل ملف

ابدأ بفتح المحطة.

تعتبر `curl` "أداة سطر الأوامر لنقل البيانات المحددة بصيغة عنوان URL". وهذا يعني أنه يمكن تنزيل الملفات من عناوين URL.

على سبيل المثال، [https://terminalcheatsheet.com/sample-file.jpg](https://terminalcheatsheet.com/sample-file.jpg){:target="_blank" rel="noopener"} يعود بملف صورة يمكننا تنزيله باستخدام curl.

### حفظ بنفس اسم الملف من الرابط

إذا كنا نريد تنزيل الملف وحفظه بنفس الاسم، يمكننا استخدام هذا الأمر:

```
curl --remote-name [URL]
```


`[URL]` هو الرابط الذي نريد تنزيل الملف منه. يأمر `--remote-name` بأن يستخدم اسم الملف من الرابط كاسم للملف على الكمبيوتر.

يمكننا استخدام هذا الأمر الأقصر للقيام بنفس الشيء:

```
curl -O [URL]
```


`-O` هو الطريقة المختصرة لكتابة `--remote-name` من الأمر السابق.

### حفظ باسم ملف مختلف

إذا كنا نريد تنزيل الملف وحفظه باسم مختلف، يمكننا استخدام هذا الأمر بدلاً من ذلك:

```
curl --output [FILENAME] [URL]
```


* `[URL]` - نخبر `curl` بالرابط الذي نريد تنزيله.
* `--output [FILENAME]` - نخبر `curl` بمكان حفظ الملف.

يمكننا استخدام هذا الأمر الأقصر للقيام بنفس الشيء:

```
curl -o [FILENAME] [URL]
```

* `[URL]` - نخبر `curl` بالرابط الذي نريد تنزيله.
* `-o [FILENAME]` - نخبر `curl` بمكان حفظ الملف.

## الختام

الآن أنت تعرف قليلاً عن استخدام `curl` لتنزيل الملفات من رابط URL.