---
layout: guide-layout
title: REST API का परीक्षण करने के लिए कर्ल का उपयोग कैसे करें
excerpt: REST API का परीक्षण करने के लिए कर्ल का उपयोग कैसे करें
permalink: /hi/guides/curl-rest-api
permalink_without_prefix: /guides/curl-rest-api
lang: hi
---

**विषय - सूची**

* TOC
{:toc}

## परिचय

यह गाइड आपको [curl](https://github.com/curl/curl) का उपयोग करके REST एपीआई के साथ बातचीत करने की मूल बातें सिखाना है। जैसा कि आप इन निर्देशों का पालन करते हैं, ध्यान रखें कि आपके कंप्यूटर की फ़ाइलों और फ़ोल्डरों की संभावना नमूनों से अलग होगी। यदि आपके पास पहले से ही macOS पर टर्मिनल के साथ बहुत अनुभव है, तो [त्वरित संदर्भ सामग्री के लिए होमपेज पर कमांड](/hi/) देखें।

## आवश्यक शर्तें

इस गाइड का पालन करने के लिए, आपको आवश्यकता होगी:

* किसी भी लिनक्स या एक macOS पर्यावरण पर यूनिक्स टर्मिनल तक पहुंच।
* टर्मिनल विंडो खोलने का तरीका जानने के लिए। यदि आप निश्चित नहीं हैं, तो [macOS](open-terminal-macos) या लिनक्स (जल्द ही आने वाले) के निर्देशों पर जाएं।
* REST API जिसे आप इंटर करना चाहते हैं। हम इस गाइड में एक उदाहरण के रूप में `https://jsonplaceholder.typicode.com` का उपयोग कर रहे हैं।
* आपके कंप्यूटर पर स्थापित कर्ल उपयोगिता। अधिकांश macOS और लिनक्स कंप्यूटर इसे पूर्वस्थापित कर चुके हैं। यदि नहीं, तो आपको तकनीकी निर्देशों [कर्ल इंस्टॉलेशन वेबसाइट पर](https://curl.haxx.se/docs/install.html){:target="_blank" rel="noopener"} की समीक्षा करने की आवश्यकता होगी।

## GET से शुरू करते हैं!

अपना टर्मिनल खोलकर शुरुआत करें।

curl एक "command-line tool है जो URL सिंटैक्स के साथ निर्दिष्ट डेटा को स्थानांतरित करने के लिए है", जो इसे REST API और अन्य वेब संसाधनों के साथ इंटरैक्ट करने के लिए बहुत उपयोगी बनाता है। इसके हजारों उपयोग हैं, लेकिन हम इस गाइड में कुछ ही समीक्षा करने जा रहे हैं।

हम कहते हैं कि आपके पास एक REST API है जिससे आप बातचीत करना चाहते हैं। उदाहरण के लिए, [https://jsonplaceholder.typicode.com/todos/1](https://jsonplaceholder.typicode.com/todos/1){:target="_blank" rel="noopener"} JSON डेटा जो कि है इसके समान:

```
{
	"userId": 1,
	"id": 1,
	"title": "delectus aut autem",
	"completed": false
}
```

जबकि हम इस उदाहरण URL को अपने वेब ब्राउज़र में खोल सकते हैं, कई REST API हमें ऐसा नहीं करने देंगे। आइए इसके बजाय कर्ल का उपयोग करने का प्रयास करें।

अपनी टर्मिनल विंडो में, `curl https://jsonplaceholder.typicode.com/todos/1` टाइप करें और **Enter** दबाएं। आपको इसके समान परिणाम का अनुभव करना चाहिए:

<div class="center guideimages">
  <amp-anim src="/assets/guides/curl-rest-api/curl-get-basic-en.gif" width="665" height="387" alt="Demo of basic curl command" layout="responsive"></amp-anim>
</div>

किसी भी विकल्प के बिना, **curl** सर्वर के साथ बातचीत करने के लिए कर्ल डिफॉल्ट **GET** HTTP अनुरोध विधि, जो आमतौर पर केवल डेटा पढ़ने के लिए उपयोग की जाती है। हम इस गाइड में बाद में अन्य HTTP अनुरोध विधियों को कवर करेंगे।

चलो टर्मिनल विंडो में सीधे दिखाने के बजाय आउटपुट को फ़ाइल के रूप में सहेजने के लिए `-o` विकल्प जोड़ें। टाइप करें `curl -o test.json https://jsonplaceholder.typicode.com/todos/1` और **Enter** दबाएं:

<div class="center guideimages">
  <amp-anim src="/assets/guides/curl-rest-api/curl-get-output-en.gif" width="665" height="387" alt="Demo of basic curl command with file output" layout="responsive"></amp-anim>
</div>

यदि हम चाहें, तो हम नेटवर्क पर इस इंटरैक्शन के बारे में अधिक विस्तृत जानकारी की जांच कर सकते हैं। ऐसा करने के लिए, आप `-v` विकल्प को किसी भी `curl` कमांड में जोड़ सकते हैं। टाइप करें `curl -v https://jsonplaceholder.typicode.com/todos/1` और **Enter** दबाएं:

<div class="center guideimages">
  <amp-anim src="/assets/guides/curl-rest-api/curl-get-verbose-en.gif" width="665" height="387" alt="Demo of basic curl command with verbose output" layout="responsive"></amp-anim>
</div>

## curl के साथ विभिन्न HTTP अनुरोध विधियों का उपयोग करना

अब जब हम जानते हैं कि कर्ल का उपयोग करके REST API की एक बुनियादी क्वेरी कैसे की जाती है, तो हम विभिन्न HTTP विधियों की कोशिश कर सकते हैं। आप [Wikipedia](https://en.wikipedia.org/wiki/Hypertext_Transfer_Protocol#Request_methods) पर विभिन्न HTTP अनुरोध विधियों के बारे में बहुत कुछ पढ़ सकते हैं

### POST(पद)

REST API के साथ सहभागिता करते समय सर्वर पर डेटा बनाने या अपडेट करने के लिए **POST** HTTP अनुरोध विधि बहुत बार उपयोग की जाती है। ऐसा करने के लिए, आपको `curl` कमांड के लिए कुछ नए विकल्प जानने होंगे।

* `-X [HTTP_METHOD]` - हमें `curl` बताने की आवश्यकता है, जिसे HTTP अनुरोध विधि का उपयोग करता है। `-X` विकल्प, विधि नाम के बाद, हमें ऐसा करने की अनुमति देता है।
* `H [HTTP_HEADER]` - जब किसी सर्वर को डेटा भेजते हैं, तो हमें सर्वर को उन 1s और 0s की व्याख्या कैसे करनी है, यह बताना होगा। यह JSON डेटा, एक फॉर्म, एक ईमेल आदि हो सकता है।
* `-d [YOUR_DATA]` - अंत में, हमें यह निर्दिष्ट करने की आवश्यकता है कि कौन सा डेटा `curl` सर्वर को भेजना चाहिए।

आइए इन विकल्पों को एक पूर्ण कमांड में एक साथ रखें:

`curl -X POST -H 'Content-Type: application/json' -d '{"title": "foo","body": "bar","userId": 123}' https://jsonplaceholder.typicode.com/posts`

आप इसे अपनी टर्मिनल विंडो में टाइप या कॉपी कर सकते हैं और इसे भेजने के लिए **Enter** दबाएं, इस तरह:

<div class="center guideimages">
  <amp-anim src="/assets/guides/curl-rest-api/curl-post-basic-en.gif" width="665" height="387" alt="Demo of POST curl command" layout="responsive"></amp-anim>
</div>

जैसा कि आप बता सकते हैं, कि एक ही कमांड में डालने के लिए बहुत सारा डेटा था। हम इसे आसान और दोहराए जाने के बजाय किसी फ़ाइल का उपयोग करके डेटा भेज सकते हैं।

निम्नलिखित डेटा के साथ `data.json` नामक एक नई फ़ाइल बनाएँ:

```
{
	"title": "foo",
	"body": "bar",
	"userId": 123
}
```

यदि आपने इसे सफलतापूर्वक बनाया है, तो आपको इस तरह से फ़ाइल को `cat` करने में सक्षम होना चाहिए:

<div class="center guideimages">
  <amp-anim src="/assets/guides/curl-rest-api/nano-datajson-en.gif" width="665" height="387" alt="Demo of data file" layout="responsive"></amp-anim>
</div>

अब आप उस फाइल को अपने `curl` कमांड के हिस्से के रूप में उपयोग कर सकते हैं। डेटा को कमांड में डालने के बजाय, आप फ़ाइल को `-d @[FILENAME]` का उपयोग करके संदर्भित कर सकते हैं। हम `curl -X POST -H 'Content-Type: application/json' -d @data.json https://jsonplaceholder.typicode.com/posts` टाइप करके और **Enter** दबाकर इसे आज़मा सकते हैं:

<div class="center guideimages">
  <amp-anim src="/assets/guides/curl-rest-api/curl-post-file-en.gif" width="665" height="387" alt="Demo of POST curl command with a file" layout="responsive"></amp-anim>
</div>

### PUT (डाल)

REST API के साथ सहभागिता करते समय सर्वर पर मौजूदा डेटा को अपडेट करने के लिए **PUT** HTTP अनुरोध विधि का उपयोग अक्सर किया जाता है। **POST** के साथ उदाहरण के लिए, हम `curl` कमांड का उपयोग करते समय विधि, डेटा प्रारूप और डेटा सेट करना चाहते हैं।

आइए मौजूदा आइटम को अपडेट करने का प्रयास करें। टाइप करें `curl -X PUT -H 'Content-Type: application/json' -d '{"title": "foo_updated","body": "bar_updated","userId": 123}' https://jsonplaceholder.typicode.com/posts/1` और इस तरह **Enter** दर्ज करें दबाएं:

<div class="center guideimages">
  <amp-anim src="/assets/guides/curl-rest-api/curl-put-basic-en.gif" width="665" height="387" alt="Demo of PUT curl command" layout="responsive"></amp-anim>
</div>

आप एक डेटा फ़ाइल का उपयोग उसी तरह कर सकते हैं, जैसा आपने **POST** HTTP अनुरोध विधि के साथ किया था, `-d @[FILENAME]` का उपयोग करके।

### DELETE (हटाएँ)

यदि आप सर्वर से डेटा हटाना चाहते हैं, तो आप REST API के साथ इंटरैक्ट करते समय **DELETE** HTTP अनुरोध पद्धति का उपयोग करेंगे। पिछले उदाहरणों की तुलना में यह थोड़ा अधिक सादा है। आप **DELETE** HTTP अनुरोध विधि को निर्दिष्ट करने और हटाने के लिए एक विशिष्ट संसाधन URL निर्दिष्ट करने के लिए `-X DELETE` का उपयोग करेंगे। `curl -X DELETE https://jsonplaceholder.typicode.com/posts/1` टाइप करके और इसे दबाकर **Enter**: टाइप करके देखें।

<div class="center guideimages">
  <amp-anim src="/assets/guides/curl-rest-api/curl-delete-basic-en.gif" width="665" height="387" alt="Demo of DELETE curl command" layout="responsive"></amp-anim>
</div>

आप ध्यान देंगे कि बहुत से REST API या तो डिलीट किए गए डेटा या कोई डेटा नहीं लौटाते हैं जब **DELETE** HTTP अनुरोध विधि का उपयोग करते हैं।

### OPTIONS (विकल्प)

कभी-कभी, हमें यह जानने की आवश्यकता होती है कि हम सर्वर को किस प्रकार के अनुरोध या डेटा भेज सकते हैं। ऐसा करने के लिए, आप **OPTIONS** HTTP अनुरोध विधि का उपयोग कर सकते हैं।

आपको पूर्व में सीखे गए `-v` विकल्प का उपयोग करने की आवश्यकता होगी। यह अधिक विस्तृत आउटपुट चालू करेगा ताकि आप सर्वर द्वारा समर्थित "options" देख सकें।

आइए इसे `curl -v -X OPTIONS https://jsonplaceholder.typicode.com/posts` में टाइप करके और **Enter** दबाकर आज़माएँ:

<div class="center guideimages">
  <amp-anim src="/assets/guides/curl-rest-api/curl-options-verbose-en.gif" width="665" height="387" alt="Demo of OPTIONS curl command with verbose output" layout="responsive"></amp-anim>
</div>

जैसे ही आप अपनी टर्मिनल विंडो पर स्क्रॉल करते हैं, आप इस तरह से जानकारी देखेंगे:

```
...
< access-control-allow-credentials: true
< access-control-allow-methods: GET,HEAD,PUT,PATCH,POST,DELETE
...
```

यह बताता है कि कौन सा HTTP अनुरोध REST API सर्वर की अनुमति देता है। यह आपको यह भी बताता है कि सर्वर आपको क्रेडेंशियल प्रमाणित और उपयोग करने की अनुमति देगा।

## समेट रहा हु

अब आप REST API और सर्वर के साथ बातचीत करने के लिए `curl` का उपयोग करने के बारे में थोड़ा जानते हैं। यह एक अत्यंत उपयोगी कमांड और टूल है।
