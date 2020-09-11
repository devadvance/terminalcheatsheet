---
layout: guide-layout
title: كيفية استخدام curl لاختبار REST API
excerpt: كيفية استخدام curl لاختبار REST API
permalink: /ar/guides/curl-rest-api
permalink_without_prefix: /guides/curl-rest-api
lang: ar
direction: rtl
---

**جدول المحتويات**

* TOC
{:toc}

## المقدمة

يهدف هذا الدليل إلى تعليمك أساسيات التفاعل مع واجهة برمجة تطبيقات REST API باستخدام [curl] (https://github.com/curl/curl). إذا كنت مستخدمًا متقدمًا ولديك خبرة بالفعل مع الجهاز ، فإن هذا الدليل سيكون أقل فائدة. أثناء اتباع هذه التعليمات ، ضع في اعتبارك أن ملفات ومجلدات الكمبيوتر الخاص بك من المحتمل أن تكون مختلفة عن العينات.

## المتطلبات الأساسية

من أجل اتباع هذا الدليل ، سوف تحتاج إلى:

* الوصول إلى محطة Unix الطرفية على أي بيئة Linux أو macOS.
* لمعرفة كيفية فتح نافذة طرفية. إذا لم تكن متأكدًا ، فراجع التعليمات الخاصة بـ [macOS] (open-terminal-macos) أو Linux (قريبًا).
* واجهة برمجة تطبيقات REST API التي تريد التفاعل معها. نحن نستخدم https: // jsonplaceholder.typicode.com كمثال في هذا الدليل.
* تم تثبيت الأداة المساعدة curl على جهاز الكمبيوتر الخاص بك. تم تثبيت هذا البرنامج مسبقًا على معظم أجهزة كمبيوتر macOS و Linux. إذا لم يكن الأمر كذلك ، فستحتاج إلى مراجعة الإرشادات الفنية [على موقع تثبيت curl] (https://curl.haxx.se/docs/install.html){:target="_blank" rel="noopener"}.

## لنبدأ بـ GET!

ابدأ بفتح جهازك الطرفي.

curl هي "أداة سطر أوامر لنقل البيانات المحددة باستخدام بنية عنوان URL" ، مما يجعلها مفيدة جدًا للتفاعل مع REST APIs وموارد الويب الأخرى. يحتوي على آلاف الاستخدامات ، لكننا سنراجع القليل منها في هذا الدليل.

دعنا نقول أن لديك واجهة برمجة تطبيقات REST API تريد التفاعل معها. على سبيل المثال ، يعرض [https://jsonplaceholder.typicode.com/todos/](https://jsonplaceholder.typicode.com/todos/1){:target="_blank "rel =" noopener "} بيانات JSON التي تبدو مثله:

```
{
	"userId": 1,
	"id": 1,
	"title": "delectus aut autem",
	"completed": false
}
```

بينما يمكننا فتح مثال URL هذا في متصفح الويب الخاص بنا ، لن تسمح لنا العديد من واجهات برمجة تطبيقات REST API بالقيام بذلك. دعنا نحاول استخدام curl بدلاً من ذلك.

في نافذة الجهاز ، اكتب `curl https://jsonplaceholder.typicode.com/todos/1` واضغط على **Enter**. يجب أن ترى نتيجة مشابهة لهذا:

<div class="center guideimages">
  <amp-anim src="/assets/guides/curl-rest-api/curl-get-basic-en.gif" width="665" height="387" alt="عرض تجريبي لأمر curl الأساسي" layout="responsive"></amp-anim>
</div>

بدون أي خيارات ، يتحول `curl` افتراضيًا إلى التفاعل مع الخادم باستخدام طريقة طلب **GET** HTTP ، والتي تُستخدم عمومًا لقراءة البيانات فقط. سنغطي طرق طلب HTTP الأخرى لاحقًا في هذا الدليل.

دعنا نضيف الخيار "-o" لحفظ الإخراج كملف بدلاً من إظهاره مباشرةً في نافذة المحطة الطرفية. اكتب `curl -o test.json https://jsonplaceholder.typicode.com/todos/1` واضغط على **Enter**:

<div class="center guideimages">
  <amp-anim src="/assets/guides/curl-rest-api/curl-get-output-en.gif" width="665" height="387" alt="عرض توضيحي لأمر curl الأساسي مع إخراج الملف" layout="responsive"></amp-anim>
</div>

إذا أردنا ، يمكننا رؤية معلومات أكثر تفصيلاً حول هذا التفاعل عبر الشبكة. للقيام بذلك ، يمكنك إضافة الخيار "-v" إلى أي أمر `curl`. اكتب `curl -v https://jsonplaceholder.typicode.com/todos/1` واضغط على **Enter**:


<div class="center guideimages">
  <amp-anim src="/assets/guides/curl-rest-api/curl-get-verbose-en.gif" width="665" height="387" alt="عرض توضيحي لأمر curl الأساسي مع إخراج مطول" layout="responsive"></amp-anim>
</div>

## استخدام طرق طلب HTTP مختلفة مع curl

الآن بعد أن عرفنا كيفية إجراء استعلام أساسي لواجهة برمجة تطبيقات REST API باستخدام curl ، يمكننا تجربة طرق HTTP مختلفة. يمكنك قراءة المزيد حول طرق طلب HTTP المختلفة على [Wikipedia] (https://en.wikipedia.org/wiki/Hypertext_Transfer_Protocol#Request_methods).

### بريد

كثيرًا ما تُستخدم طريقة طلب **POST** HTTP لإنشاء أو تحديث البيانات على الخادم عند التفاعل مع واجهة برمجة تطبيقات REST. للقيام بذلك ، سوف تحتاج إلى معرفة خيارين جديدين لأمر `curl`:

* `-X [HTTP_METHOD]` - نحتاج إلى إخبار `curl` بأسلوب طلب HTTP الذي يجب استخدامه. يتيح لنا الخيار "-X" ، متبوعًا باسم الطريقة ، القيام بذلك.
* `-H [HTTP_HEADER]` - عند إرسال البيانات إلى خادم ، نحتاج إلى إخبار الخادم بكيفية تفسير هذه القيم 1 و 0. يمكن أن تكون بيانات JSON ، أو نموذجًا ، أو بريدًا إلكترونيًا ، إلخ.
* `-d [YOUR_DATA]` - أخيرًا ، نحتاج إلى تحديد البيانات `curl` التي يجب إرسالها إلى الخادم.

لنضع هذه الخيارات معًا في أمر كامل:

`curl -X POST -H 'Content-Type: application/json' -d '{"title": "foo","body": "bar","userId": 123}' https://jsonplaceholder.typicode.com/posts`

يمكنك كتابة ذلك أو نسخه في نافذة الجهاز والضغط على **Enter** لإرساله ، على النحو التالي:

<div class="center guideimages">
  <amp-anim src="/assets/guides/curl-rest-api/curl-post-basic-en.gif" width="665" height="387" alt="عرض توضيحي لأمر POST curl" layout="responsive"></amp-anim>
</div>

كما يمكنك أن تقول ، كان هناك الكثير من البيانات لمحاولة وضعها في أمر واحد. يمكننا إرسال البيانات باستخدام ملف بدلاً من ذلك لجعلها أسهل وقابلة للتكرار.

قم بإنشاء ملف جديد يسمى `data.json` بالبيانات التالية:

```
{
	"title": "foo",
	"body": "bar",
	"userId": 123
}
```

إذا قمت بإنشائه بنجاح ، فيجب أن تكون قادرًا على `cat` الملف ، مثل هذا:

<div class="center guideimages">
  <amp-anim src="/assets/guides/curl-rest-api/nano-datajson-en.gif" width="665" height="387" alt="عرض ملف البيانات" layout="responsive"></amp-anim>
</div>

يمكنك الآن استخدام هذا الملف كجزء من أمر `curl`. بدلاً من وضع البيانات في الأمر ، يمكنك * الرجوع * إلى الملف باستخدام `-d @ [FILENAME]`. يمكننا تجربته عن طريق كتابة `curl -X POST -H 'Content-Type: application/json' -d @ data.json https://jsonplaceholder.typicode.com/posts` والضغط على **Enter**:

<div class="center guideimages">
  <amp-anim src="/assets/guides/curl-rest-api/curl-post-file-en.gif" width="665" height="387" alt="عرض توضيحي لأمر POST curl مع ملف" layout="responsive"></amp-anim>
</div>

### وضع

غالبًا ما تُستخدم طريقة طلب **PUT** HTTP لتحديث البيانات الموجودة على الخادم عند التفاعل مع واجهة برمجة تطبيقات REST API. على غرار المثال مع **POST** ، نريد تعيين الطريقة وتنسيق البيانات والبيانات عند استخدام الأمر `curl`.

دعنا نحاول تحديث عنصر موجود. اكتب `curl -X PUT -H 'Content-Type: application/json' -d '{"title": "foo_updated","body": "bar_updated","userId": 123}' https://jsonplaceholder.typicode.com/posts/1` واضغط على **Enter** ، مثل هذا:

<div class="center guideimages">
  <amp-anim src="/assets/guides/curl-rest-api/curl-put-basic-en.gif" width="665" height="387" alt="عرض توضيحي لأمر PUT curl" layout="responsive"></amp-anim>
</div>

يمكنك أيضًا استخدام ملف بيانات بنفس الطريقة التي استخدمتها مع طريقة طلب **POST** HTTP ، باستخدام "-d @ [FILENAME]`.

### حذف

إذا كنت ترغب في إزالة البيانات من الخادم ، فمن المحتمل أن تستخدم طريقة طلب **DELETE** HTTP عند التفاعل مع واجهة برمجة تطبيقات REST API. هذا أكثر بساطة قليلاً مقارنة بالأمثلة السابقة. ستستخدم `-X DELETE` لتحديد طريقة طلب **DELETE** HTTP وتحديد عنوان URL لمورد معين لحذفه. جربه عن طريق كتابة `curl -X DELETE https://jsonplaceholder.typicode.com/posts/1` والضغط على **Enter**:

<div class="center guideimages">
  <amp-anim src="/assets/guides/curl-rest-api/curl-delete-basic-en.gif" width="665" height="387" alt="عرض توضيحي لأمر DELETE curl" layout="responsive"></amp-anim>
</div>

ستلاحظ أن العديد من واجهات برمجة تطبيقات REST API تقوم إما بإرجاع البيانات المحذوفة أو عدم إرجاع البيانات عند استخدام طريقة طلب **DELETE** HTTP.

### خيارات

في بعض الأحيان ، نحتاج إلى معرفة أنواع الطلبات أو البيانات التي يمكننا إرسالها إلى الخادم. للقيام بذلك ، يمكنك استخدام **OPTIONS** طريقة طلب HTTP.

ستحتاج إلى استخدام الخيار `-v` الذي تعلمته سابقًا. سيؤدي هذا إلى تشغيل إخراج أكثر تفصيلاً بحيث يمكنك عرض "الخيارات" التي يدعمها الخادم.

لنجربها عن طريق كتابة `curl -v -X OPTIONS https://jsonplaceholder.typicode.com/posts` والضغط على **Enter**:

<div class="center guideimages">
  <amp-anim src="/assets/guides/curl-rest-api/curl-options-verbose-en.gif" width="665" height="387" alt="عرض توضيحي لأمر OPTIONS curl بإخراج مطول" layout="responsive"></amp-anim>
</div>

أثناء التمرير عبر نافذة المحطة الطرفية ، سترى معلومات مثل هذه:

```
...
< access-control-allow-credentials: true
< access-control-allow-methods: GET,HEAD,PUT,PATCH,POST,DELETE
...
```

يخبرك هذا عن طرق طلب HTTP التي يسمح بها خادم REST API. يخبرك أيضًا أنه يُسمح بمصادقة بيانات الاعتماد واستخدامها.

## تغليف

أنت الآن تعرف القليل عن استخدام `curl` للتفاعل مع REST APIs والخوادم. هذا أمر وأداة مفيدة للغاية.