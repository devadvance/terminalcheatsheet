---
layout: guide-layout
title: MacOS या लिनक्स पर एक बेसिक वेब सर्वर कैसे शुरू करें
excerpt: यह गाइड आपको सिखाता है कि अपने मैकओएस या लिनक्स कंप्यूटर पर किसी भी फ़ोल्डर से एक मूल वेब सर्वर शुरू करने के लिए पायथन का उपयोग कैसे करें।
permalink: /hi/guides/basic-web-server-macos-linux
permalink_without_prefix: /guides/basic-web-server-macos-linux
lang: hi
---


**सामग्री की तालिका**

* TOC
[toc}

## परिचय

यदि आप वेबपेज या अन्य वेब सामग्री पर काम कर रहे हैं, तो आपको एक बेसिक वेब सर्वर शुरू करने के लिए एक आसान और त्वरित तरीके की आवश्यकता हो सकती है। यह मार्गदर्शिका आपको अपने कंप्यूटर पर एक मूल वेब सर्वर शुरू करने के लिए पायथन कमांड सिखाएगी। जैसा कि आप इन निर्देशों का पालन करते हैं, ध्यान रखें कि आपके कंप्यूटर की फ़ाइलों और फ़ोल्डरों की संभावना नमूनों से अलग होगी। यदि आपके पास टर्मिनल के साथ पहले से ही बहुत अनुभव है, तो [त्वरित संदर्भ सामग्री के लिए होमपेज पर कमांड](/) देखें।

## पूर्वापेक्षाएँ

इस गाइड का पालन करने के लिए, आपको आवश्यकता होगी:

* किसी भी macOS या लिनक्स वातावरण पर एक यूनिक्स टर्मिनल तक पहुँच।
* टर्मिनल विंडो खोलने का तरीका जानने के लिए। यदि आप निश्चित नहीं हैं, तो [macOS](open-terminal-macos) या लिनक्स (जल्द आ रहा है) के निर्देशों पर जाएं।
* एक टर्मिनल पर फ़ाइलों और फ़ोल्डरों को नेविगेट करने का तरीका जानने के लिए। यदि आप निश्चित नहीं हैं, तो यह जानने के लिए [यह गाइड पहले सीखें](navigate-terminal) का पालन करें।
* Python3 आपके कंप्यूटर पर स्थापित है। यह मैकओएस के हाल के संस्करणों और कई लिनक्स वितरणों पर डिफ़ॉल्ट रूप से स्थापित होता है।

## सही फ़ोल्डर ढूंढना शुरू करें

सबसे पहले, आपको उस फ़ोल्डर में नेविगेट करना होगा जहां आपके वेब पेज या वेब सामग्री सहेजी गई है। यदि आप सुनिश्चित नहीं हैं कि यह कैसे करना है, तो आप [पहले इस गाइड](navigate-terminal) को पढ़ना चाह सकते हैं।

हमें बताएं कि आपकी वेब सामग्री फ़ोल्डर में है `/home/user/examples`। हम तीन काम करना चाहते हैं:

1. सुनिश्चित करें कि हम `pwd` का उपयोग करके सही कार्य करने वाली निर्देशिका में हैं।
2. जांचें कि क्या हमारे पास `ls` का उपयोग करके फ़ोल्डर में वेब सामग्री है।
3. जांचें कि क्या वेब सामग्री सही प्रारूप में है, जैसे HTML, `cat` का उपयोग करके।

यहाँ चरणों का संयोजन है:

<div class="center guideimages">
  <amp-anim src="/assets/guides/basic-web-server-macos-linux/checking-web-content-en.gif" width="665" height="387" alt="Navigating and checking web content" layout="responsive"></amp-anim>
</div>

को नेविगेट और जाँचना उपरोक्त उदाहरण में, हम `pwd` का उपयोग करके यह सत्यापित करते हैं कि `/home/user/examples` हमारी कार्यशील निर्देशिका है। तब हम वर्किंग डायरेक्टरी की सामग्री को सूचीबद्ध करने के लिए `ls` का उपयोग करते हैं ताकि हम यह सुनिश्चित कर सकें कि हमारे पास एक HTML फ़ाइल है। आप **hello.html** फ़ाइल नोट कर सकते हैं।

अंत में, हम यह सुनिश्चित करने के लिए कि वास्तव में HTML है, यह सुनिश्चित करने के लिए कि आप `cat` का उपयोग करके **hello.html** की सामग्री देखते हैं।

अब हम अपना वेब सर्वर शुरू करने के लिए तैयार हैं!

## बुनियादी पायथन वेब सर्वर को शुरू करें

क्योंकि यह अक्सर डिफ़ॉल्ट रूप से कंप्यूटर पर स्थापित होता है, हम एक मूल वेब सर्वर को चलाने के लिए पायथन का उपयोग करने जा रहे हैं।

हम एक वेब सर्वर शुरू करने के लिए इस कमांड का उपयोग करने जा रहे हैं: `python3 -m http.server 8000` <amp-iframe sandbox="allow-scripts"
  class="copy-frame{% if page.direction == "rtl" %} button-rtl{% endif %}"
  title="Command copy button iframe"
  width="84"
  height="36"
  frameborder="0"
  src="{{site.url}}/copier.html#python3 -m http.server 8000">
  <button class="pure-button button-large button-primary"
    placeholder
    disabled>Copy</button>
</amp-iframe>

आइए देखें कि यह कमांड क्या करती है:

* ` python3_` निर्देश कुछ करने के लिए पायथन 3 का उपयोग करने के लिए टर्मिनल।
* `-m http.server` पाइथन को एक वेब सर्वर चलाने का निर्देश देता है।
* `8000` पायथन को वेब सर्वर के लिए 8000 पोर्ट के रूप में उपयोग करने का निर्देश देता है।

आइए इसे चलाने का प्रयास करें:

<div class="center guideimages">
  <amp-anim src="/assets/guides/basic-web-server-macos-linux/start-python-http-server-en.gif" width="665" height="387" alt="Start Python web server" layout="responsive"></amp-anim>
</div>

यदि आप ऊपर देखते हैं, तो वेब सर्वर अब आपके कंप्यूटर पर चल रहा है।

## अपनी वेब सामग्री की जाँच करें

अगला, हम जाँच सकते हैं कि हमारी वेब सामग्री किसी वेब ब्राउज़र में दिखाई दे रही है या नहीं। हम सामग्री को ब्राउज़ करने के लिए एक स्थानीय URL खोल सकते हैं: `http://localhost:8000` <amp-iframe sandbox="allow-scripts"
  class="copy-frame{% if page.direction == "rtl" %} button-rtl{% endif %}"
  title="Command copy button iframe"
  width="84"
  height="36"
  frameborder="0"
  src="{{site.url}}/copier.html#http://localhost:8000">
  <button class="pure-button button-large button-primary"
    placeholder
    disabled>Copy</button>
</amp-iframe>

ऊपर हमारे उदाहरण में, यह वही है जो हम एक वेब ब्राउज़र में देखते हैं:

<div class="center guideimages">
  <amp-img src="/assets/guides/basic-web-server-macos-linux/directory-listing-en.png" width="665" height="387" alt="Directory listing in the web browser" layout="responsive"></amp-img>
</div>

हमारे उदाहरण में, हमारे पास **index.html** नामक फ़ाइल नहीं थी। इसलिए हमारे वेब ब्राउज़र ने उपलब्ध को सूचीबद्ध किया फ़ाइलें। आप इसे ब्राउज़र में खोलने के लिए किसी विशिष्ट फ़ाइल पर क्लिक कर सकते हैं। आइए हम उन **hello.html** पर क्लिक करें, जिन्हें हमने पहले चेक किया था:

<div class="center guideimages">
  <amp-img src="/assets/guides/basic-web-server-macos-linux/hello-world-page-en.png" width="665" height="387" alt="Hello world page" layout="responsive"></amp-img>
</div>

अब हम वेब पेज का निरीक्षण करते हैं!

## मूल पायथन वेब सर्वर को बंद करेंवेब सर्वर

जब आपका उपयोग कर समाप्त हो जाते हैं, तो आप इसे टर्मिनल से रोक सकते हैं। ऐसा करने के लिए, अपने कीबोर्ड पर `Ctrl-C` दबाएं। इसका मतलब है कि एक ही समय में `Ctrl` और` C` कीज़ दबाएं।

आप इस तरह एक परिणाम देखेंगे:

<div class="center guideimages">
  <amp-anim src="/assets/guides/basic-web-server-macos-linux/stop-python-http-server-en.gif" width="665" height="387" alt="Stop Python web server" layout="responsive"></amp-anim>
</div>

## निष्कर्ष

आपने अपने वेब पर एक मूल वेब सर्वर शुरू करना सीखा है। संगणक। यह वेब विकास और पायथन प्रोग्रामिंग जैसे कार्यों में आपकी सहायता करेगा। यदि आप पायथन में अधिक सीखने या प्रोग्रामिंग में रुचि रखते हैं, तो आप [https://www.python.org](https://www.python.org){:target="_blank" rel="noopener"} पर जा सकते हैं। ।
