---
layout: guide-layout
title: كيفية التنقل في الملفات والمجلدات على جهاز طرفية
excerpt: كيفية التنقل في الملفات والمجلدات على جهاز طرفية
permalink: /ar/guides/navigate-terminal
permalink_without_prefix: /guides/navigate-terminal
lang: ar
direction: rtl
---

**جدول المحتويات**

* TOC
{:toc}

## المقدمة

يهدف هذا الدليل إلى تعليمك أساسيات التنقل بين الملفات والمجلدات الموجودة على جهاز طرفي. إذا كنت مستخدمًا متقدمًا ولديك خبرة بالفعل في المحطة الطرفية ، فإن هذا الدليل أقل فائدة. أثناء اتباع هذه التعليمات ، ضع في اعتبارك أن ملفات ومجلدات الكمبيوتر ستختلف على الأرجح عن العينات.

## المتطلبات الأساسية

من أجل اتباع هذا الدليل ، ستحتاج إلى:

* الوصول إلى طرف Unix على أي بيئة Linux أو macOS.
* لمعرفة كيفية فتح نافذة طرفية. إذا لم تكن متأكدًا ، فراجع التعليمات لنظام التشغيل [macOS](open-terminal-macos) أو Linux (قريبًا).

## هيا بنا نبدأ!

ابدأ بفتح الوحدة الطرفية الخاصة بك.

عند استخدام الطرفية ، فأنت تعمل من داخل مجلد معين على جهاز الكمبيوتر الخاص بك. يمكنك دائمًا الوصول إلى عناصر من مجلدات أخرى على جهاز الكمبيوتر الخاص بك ، ولكن ستقوم الوحدة الطرفية بتتبع المجلد الذي أنت داخله حاليًا. يُعرف هذا دليل **working directory**

بمجرد أن تفتح الوحدة الطرفية ، ستكون داخل دليل العمل. اكتب `pwd` في المحطة واضغط على **Enter**. `pwd` تعني "دليل عمل الطباعة". يخبرك الإخراج من هذا الأمر المجلد الذي هو دليل العمل الحالي الخاص بك.

في نموذج لقطة الشاشة أدناه ، دليل العمل لدينا هو مجلد يسمى **examples**.

<div class="center guideimages">
  <amp-img src="/assets/guides/navigate-work-files/pwd-en.png" width="665" height="387" alt="المحطة pwd أمر" layout="responsive"></amp-img>
</div>

بعد ذلك ، يمكنك استكشاف محتويات دليل العمل. اكتب `ls` في جهازك واضغط على **Enter**. `ls` لتقف على "قائمة". يسرد هذا الأمر جميع الملفات والمجلدات في دليل العمل الخاص بك:

<div class="center guideimages">
  <amp-img src="/assets/guides/navigate-work-files/ls-en.png" width="665" height="387" alt="المحطة list أمر" layout="responsive"></amp-img>
</div>

يشبه هذا فتح تطبيق متصفح الملفات الخاص بك والنظر في محتويات مجلد دليل العمل الخاص بك:

<div class="center guideimages">
  <amp-img src="/assets/guides/navigate-work-files/ls-finder-en.png" width="665" height="387" alt="متصفح الملفات تظهر المحتويات" layout="responsive"></amp-img>
</div>

يمكنك سرد جميع المحتويات في المجلدات التي ليست دليل عملك عن طريق كتابة `ls [FOLDER_NAME]`. يشبه هذا إلقاء نظرة خاطفة داخل مجلد آخر ، دون تغيير دليل العمل الخاص بنا. في المثال أدناه ، نبحث في محتويات **folder1**. يمكننا أن نرى أن **folder1** بها ملف واحد فقط يسمى **file3.pdf**:

<div class="center guideimages">
  <amp-img src="/assets/guides/navigate-work-files/ls-folder1-en.png" width="665" height="387" alt="ls command مجلد" layout="responsive"></amp-img>
</div>

يشبه هذا النظر في محتويات مجلد داخل دليل العمل الخاص بك في تطبيق متصفح الملفات الخاص بك:

<div class="center guideimages">
  <amp-img src="/assets/guides/navigate-work-files/ls-folder1-finder-en.png" width="665" height="387" alt="ملف متصفح ملف نظرة خاطفة" layout="responsive"></amp-img>
</div>

يحتوي الأمر `ls` على خيارات إضافية يمكنها تغيير طريقة عملها.

حاول كتابة `ls -a` واضغط على **Enter** لعرض جميع الملفات ، بما في ذلك الملفات المخفية. على العديد من أجهزة الكمبيوتر ، تبدأ هذه الملفات بنقطة ويتم إخفاؤها افتراضيًا. تتضمن الأمثلة الشائعة لهذه الملفات أشياء مثل "* .DS_Store *" (على نظام macOS) و "* .profile *" (على Linux) و "* .gitignore *" (عند استخدام Git لمشاريعك).

لاحظ كيف يمكننا الآن رؤية **hidden-file** ، والتي لم يتم عرضها باستخدام الأمر `ls` السابق:

<div class="center guideimages">
  <amp-img src="/assets/guides/navigate-work-files/ls-a-en.png" width="665" height="387" alt="المحطة ls all أمر" layout="responsive"></amp-img>
</div>

خيار آخر لسرد الملفات هو كتابة `ls -l` والضغط على **Enter**. هذا الخيار يولد قائمة طويلة. بالإضافة إلى أسماء الملفات والمجلدات ، سيعرض أيضًا سمات ، مثل تاريخ آخر تعديل لها وحجمها:

<div class="center guideimages">
  <amp-img src="/assets/guides/navigate-work-files/ls-l-en.png" width="665" height="387" alt="المحطة ls long أمر" layout="responsive"></amp-img>
</div>

على غرار العديد من أوامر المحطة الطرفية ، يمكنك الجمع بين هذين الخيارين. للقيام بذلك ، اكتب `ls -la` واضغط على **Enter** ، والتي ستدرج **جميع** العناصر بتنسيق **long**:

<div class="center guideimages">
  <amp-img src="/assets/guides/navigate-work-files/ls-la-en.png" width="665" height="387" alt="المحطة ls long all أمر" layout="responsive"></amp-img>
</div>

## التنقل بين المجلدات

ربما لاحظت أن دليل العمل لدينا يحتوي على أجزاء متعددة في الاسم. بشكل عام ، يعني الحرف `/` (الشرطة المائلة) أنك داخل مجلد. لذلك ، عندما ترى  `/home/user/examples` كدليل العمل الخاص بك ، فهذا يعني أن:

* أنت داخل مجلد **examples** ، وهو دليل العمل الخاص بك.
* يوجد المجلد **examples** داخل مجلد **user**.
* يوجد مجلد **user** داخل المجلد **home**.
* يوجد مجلد **home** داخل نظام ملفات الكمبيوتر الخاص بك ولا يوجد شيء يتجاوزه.

الآن يمكننا تغيير دليل العمل الخاص بنا. في مثالنا ، رأينا مجلدين عند استخدام `ls` لسرد كل شيء (**folder1** و **folder2**).

اكتب `cd [FOLDER_NAME]` واضغط على **Enter**. تم تغيير دليل العمل الخاص بك الآن. يشير `cd` إلى "تغيير الدليل". يمكنك كتابة `pwd` مرة أخرى والضغط على **Enter** للتحقق من أنك قمت بتغيير دليل العمل الخاص بك. في نموذجنا ، قمنا بتغيير دليل العمل الخاص بنا إلى **folder1**:

<div class="center guideimages">
  <amp-img src="/assets/guides/navigate-work-files/cd-folder1-en.png" width="665" height="387" alt="المحطة cd أمر" layout="responsive"></amp-img>
</div>

هذا مشابه للنقر فوق مجلد في تطبيق متصفح الملفات الخاص بك. لقد قمت بتبديل المجلد الذي أنت فيه تمامًا:

<div class="center guideimages">
  <amp-img src="/assets/guides/navigate-work-files/cd-folder1-finder-en.png" width="665" height="387" alt="macOS مجلد تغيير الدليل" layout="responsive"></amp-img>
</div>

إذا أردت الانتقال "لأعلى" إلى المجلد السابق ، يمكنك كتابة `cd ..` والضغط على **Enter**. سيؤدي ذلك إلى رفع مستوى مجلد واحد:

<div class="center guideimages">
  <amp-img src="/assets/guides/navigate-work-files/cd-folder1-and-back-en.png" width="665" height="387" alt="المحطة cd folder1 والعودة" layout="responsive"></amp-img>
</div>

فكرة الذهاب "لأسفل" إلى مجلد أو "للخروج" من المجلد شائعة جدًا عند استخدام الجهاز. عند أوامر المحطة الطرفية ، يمكنك استخدام أسماء المجلدات عند "خفض" المستوى و `..` لتعني "الصعود" إلى المستوى.

## عرض محتويات الملف

ربما تكون متحمسًا لبدء العمل مع الملفات مع الجهاز. يمكن أن يعتمد هذا على * نوع * الملف ، لأن عرض ملف الصورة يختلف عن قراءة ملف المستند.

بالنسبة للملفات النصية ، هناك أمر مفيد عند العمل في المحطة وهو كتابة `cat [FILE_NAME]` والضغط على **Enter**. الأمر `cat` اختصار لعبارة "سلسل" وله استخدامات متعددة.

أحد الاستخدامات الأكثر شيوعًا هو عرض محتويات ملف نصي في الجهاز. في لقطة الشاشة أدناه ، نعرض محتويات **hello.txt** في دليل العمل الخاص بنا:

<div class="center guideimages">
  <amp-img src="/assets/guides/navigate-work-files/cat-hello-en.png" width="665" height="387" alt="المحطة cat أمر" layout="responsive"></amp-img>
</div>

## خاتمة

أحسنت! أنت تعرف الآن أساسيات التنقل بين الملفات والمجلدات في جهازك. يتضمن ذلك تغيير دليل العمل الخاص بك ، وسرد الملفات والمجلدات ، ورؤية محتويات ملف نصي.

في دليل مستقبلي ، ستتعلم كيفية إنشاء وتعديل الملفات والمجلدات.