---
layout: guide-layout
title: كيفية بدء تشغيل خادم ويب أساسي على نظام macOS أو Linux
excerpt: كيفية بدء تشغيل خادم ويب أساسي على نظام macOS أو Linux
permalink: /ar/guides/basic-web-server-macos-linux
permalink_without_prefix: /guides/basic-web-server-macos-linux
lang: ar
direction: rtl
---

**جدول المحتويات**

* TOC
{:toc}

## المقدمة

إذا كنت تعمل على صفحات ويب أو محتوى ويب آخر ، فقد تحتاج إلى طريقة سهلة وسريعة لبدء خادم ويب أساسي. سيعلمك هذا الدليل أمرًا بلغة Python لبدء خادم ويب أساسي على جهاز الكمبيوتر الخاص بك. أثناء اتباع هذه التعليمات ، ضع في اعتبارك أن ملفات ومجلدات الكمبيوتر الخاص بك من المحتمل أن تكون مختلفة عن العينات. إذا كنت مستخدمًا متقدمًا ولديك خبرة بالفعل مع الجهاز ، تحقق من [الأوامر الموجودة على الصفحة الرئيسية للحصول على مواد مرجعية سريعة](/ar/).

## المتطلبات الأساسية

من أجل اتباع هذا الدليل ، سوف تحتاج إلى:

* الوصول إلى محطة Unix الطرفية على أي بيئة macOS أو Linux.
* لمعرفة كيفية فتح نافذة طرفية. إذا لم تكن متأكدًا ، فراجع التعليمات الخاصة بـ [macOS](open-terminal-macos)أو Linux (قريبًا).
* لمعرفة كيفية التنقل بين الملفات والمجلدات الموجودة على الجهاز. إذا لم تكن متأكدًا ، فاتبع [هذا الدليل أولاً لمعرفة الكيفية](navigate-terminal).
* تم تثبيت Python3 على جهاز الكمبيوتر الخاص بك. يأتي هذا مثبتًا بشكل افتراضي على الإصدارات الحديثة من macOS والعديد من توزيعات Linux.

## ابدأ بإيجاد المجلد الصحيح

أولاً ، تحتاج إلى الانتقال إلى المجلد حيث يتم حفظ صفحات الويب أو محتوى الويب. إذا لم تكن متأكدًا من كيفية القيام بذلك ، فقد ترغب في قراءة [هذا الدليل أولا].(navigate-terminal)

لنفترض أن محتوى الويب الخاص بك موجود في المجلد `/home/user/examples`. نريد أن نفعل ثلاثة أشياء:

1. تأكد من وجودنا في دليل العمل الصحيح باستخدام `pwd`.
2. تحقق مما إذا كان لدينا محتوى ويب في المجلد باستخدام `ls`.
3. تحقق مما إذا كان محتوى الويب بالتنسيق الصحيح ، مثل HTML ، باستخدام `cat`.

إليك مجموعة الخطوات:

<div class="center guideimages">
<figure class="fill-parent">
  <video playsinline autoplay loop muted
    width="665"
    height="387"
    class="responsive"
    title="التنقل والتحقق من محتوى الويب">
    <source src="/assets/guides/basic-web-server-macos-linux/checking-web-content-en.webm"
      type="video/webm" />
    <source src="/assets/guides/basic-web-server-macos-linux/checking-web-content-en.mp4"
      type="video/mp4" />
    <div fallback>
      <p>This browser does not support the video element.</p>
    </div>
  </video>
  <figcaption class="center">التنقل والتحقق من محتوى الويب</figcaption>
</figure>
</div>

نستخدم `pwd` لنرى أن `/home/user/examples` هو دليل العمل الخاص بنا. ثم نستخدم `ls` لسرد محتويات دليل العمل للتأكد من وجود ملف HTML هناك. يمكنك مشاهدة ملف **hello.html**.

أخيرًا ، نستعرض محتويات **hello.html** باستخدام `cat` للتأكد من أنها HTML حقًا.

نحن الآن جاهزون لبدء خادم الويب الخاص بنا!

## ابدأ خادم ويب Python الأساسي

نظرًا لأنه يتم تثبيته بشكل متكرر على أجهزة الكمبيوتر بشكل افتراضي ، سنستخدم Python لتشغيل خادم ويب أساسي.

سنستخدم هذا الأمر لبدء خادم الويب: `python3 -m http.server 8000`
{% include body-copy-button.html data-command="python3 -m http.server 8000" %}

دعونا نستكشف ما يفعله هذا الأمر:

* يوجه `python3` الجهاز الطرفي لاستخدام Python 3 للقيام بشيء ما.
* يوجه `-m http.server` Python لتشغيل خادم ويب.
* `8000` يوجه Python لاستخدام 8000 كمنفذ لخادم الويب.

دعونا نحاول تشغيله:

<div class="center guideimages">
<figure class="fill-parent">
  <video playsinline autoplay loop muted
    width="665"
    height="387"
    class="responsive"
    title="ابدأ خادم الويب Python">
    <source src="/assets/guides/basic-web-server-macos-linux/start-python-http-server-en.webm"
      type="video/webm" />
    <source src="/assets/guides/basic-web-server-macos-linux/start-python-http-server-en.mp4"
      type="video/mp4" />
    <div fallback>
      <p>This browser does not support the video element.</p>
    </div>
  </video>
  <figcaption class="center">ابدأ خادم الويب Python</figcaption>
</figure>
</div>

إذا رأيت ما سبق ، فإن خادم الويب يعمل الآن على جهاز الكمبيوتر الخاص بك.

## تحقق من محتوى الويب الخاص بك

بعد ذلك ، يمكننا التحقق مما إذا كان محتوى الويب الخاص بنا يظهر في متصفح الويب. يمكننا فتح عنوان URL محلي لمعرفة المحتوى: `http://localhost:8000`
{% include body-copy-button.html data-command="http://localhost:8000" %}

في مثالنا أعلاه ، هذا ما نراه في متصفح الويب:

<div class="center guideimages">
  <img src="/assets/guides/basic-web-server-macos-linux/directory-listing-en.png" width="665" height="387" alt="قائمة الدليل في متصفح الويب" class="responsive" />
</div>

في مثالنا ، لم يكن لدينا ملف يسمى **index.html** لذا قام متصفح الويب الخاص بنا بإدراج الملفات المتاحة. يمكنك النقر فوق ملف معين لرؤيته في المتصفح. دعنا نضغط على **hello.html** التي فحصناها سابقًا:

<div class="center guideimages">
  <img src="/assets/guides/basic-web-server-macos-linux/hello-world-page-en.png" width="665" height="387" alt="قائمة الدليل في متصفح الويب" class="responsive" />
</div>

نحن نرى الآن صفحة الويب!

## إيقاف خادم ويب Python الأساسي

عند الانتهاء من استخدام خادم الويب ، يمكنك إيقافه من الجهاز. للقيام بذلك ، اضغط على `Ctrl-C` على لوحة المفاتيح. هذا يعني الضغط على مفتاحي `Ctrl` و `C` في نفس الوقت.

سترى نتيجة مثل هذه:

<div class="center guideimages">
<figure class="fill-parent">
  <video playsinline autoplay loop muted
    width="665"
    height="387"
    class="responsive"
    title="أوقف خادم الويب Python">
    <source src="/assets/guides/basic-web-server-macos-linux/stop-python-http-server-en.webm"
      type="video/webm" />
    <source src="/assets/guides/basic-web-server-macos-linux/stop-python-http-server-en.mp4"
      type="video/mp4" />
    <div fallback>
      <p>This browser does not support the video element.</p>
    </div>
  </video>
  <figcaption class="center">أوقف خادم الويب Python</figcaption>
</figure>
</div>

## خاتمة

لقد تعلمت كيفية بدء تشغيل خادم ويب أساسي على جهاز الكمبيوتر الخاص بك. سيساعدك هذا في مهام مثل تطوير الويب وبرمجة بايثون. إذا كنت مهتمًا بمعرفة المزيد أو البرمجة في Python ، فيمكنك زيارة [https://www.python.org](https://www.python.org){:target="_blank" rel="noopener"}.