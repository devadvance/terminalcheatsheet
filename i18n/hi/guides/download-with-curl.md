---
layout: guide-layout
title: curl के साथ फाइलें कैसे डाउनलोड करें
excerpt: curl के साथ फाइलें कैसे डाउनलोड करें
permalink: /hi/guides/curl-download-files
permalink_without_prefix: /guides/curl-download-files
lang: hi
---

**विषय - सूची**

* TOC
{:toc}

## परिचय

इस मार्गदर्शिका का उद्देश्य आपको [curl](https://github.com/curl/curl) का उपयोग करके फ़ाइलों को डाउनलोड करने के बुनियादी तरीकों को सिखाना है। इन निर्देशों का पालन करते समय ध्यान दें कि आपके कंप्यूटर की फ़ाइलें और फ़ोल्डर नमूनों से भिन्न होंगे। अगर आपके पास टर्मिनल के साथ बहुत अनुभव है, तो [होमपेज पर कमांड देखें जल्दी संदर्भ सामग्री के लिए](/hi/).

## पूर्वापेक्षा

इस मार्गदर्शिका का पालन करने के लिए, आपको चाहिए:

* किसी भी लिनक्स या macOS परिवेश पर यूनिक्स टर्मिनल तक पहुंच।
* एक टर्मिनल विंडो कैसे खोलें इसकी जानकारी। यदि आप सुनिश्चित नहीं हैं, तो [macOS](open-terminal-macos) या लिनक्स (जल्द ही आ रहा है) के निर्देशों का दौरा करें।
* आपको डाउनलोड करनी होगी एक फ़ाइल। हम इस मार्गदर्शिका में `https://terminalcheatsheet.com/sample-file.jpg` का उपयोग कर रहे हैं।
* आपके कंप्यूटर पर कर्ल उपकरण स्थापित होना। अधिकांश macOS और लिनक्स कंप्यूटरों पर यह पहले से स्थापित होता है। यदि नहीं, तो आपको [कर्ल स्थापना वेबसाइट पर तकनीकी निर्देशों की समीक्षा करने की आवश्यकता होगी](https://curl.haxx.se/docs/install.html){:target="_blank" rel="noopener"}।

## फ़ाइल डाउनलोड करना

अपने टर्मिनल को खोलकर शुरू करें।

`curl` एक "यूआरएल सिंटैक्स के साथ निर्दिष्ट डेटा स्थानांतरण के लिए कमांड-लाइन उपकरण" है। इसका अर्थ है कि यह यूआरएल से फ़ाइलों को डाउनलोड कर सकता है।

उदाहरण के लिए, [https://terminalcheatsheet.com/sample-file.jpg](https://terminalcheatsheet.com/sample-file.jpg){:target="_blank" rel="noopener"} एक छवि फ़ाइल लौटाता है जिसे हम कर्ल के साथ डाउनलोड कर सकते हैं।

### यूआरएल से फ़ाइलनाम के साथ सेव करें

यदि हम फ़ाइल को डाउनलोड करके उसी नाम के साथ सेव करना चाहते हैं, तो हम इस कमांड का उपयोग कर सकते हैं:

```
curl --remote-name [URL]
```
`[URL]` वह यूआरएल है जहां से हम फ़ाइल को डाउनलोड करना चाहते हैं। `--remote-name` कर्ल को निर्देश देता है कि यूआरएल से नाम का उपयोग कंप्यूटर पर फ़ाइल के नाम के रूप में करें।

हम इस छोटे कमांड का उपयोग करके ऐसा ही कर सकते हैं:

```
curl -O [URL]
```

`-O` पिछले कमांड से `--remote-name` लिखने का छोटा तरीका है।

### एक अलग फ़ाइलनाम के साथ सेव करें

यदि हम फ़ाइल को डाउनलोड करके इसे एक अलग नाम के साथ सेव करना चाहते हैं, तो हम इस कमांड का उपयोग कर सकते हैं:

```
curl --output [FILENAME] [URL]
```

* `[URL]` - हम `curl` को डाउनलोड करने के लिए यूआरएल बताते हैं।
* `--output [FILENAME]` - हम `curl` को फ़ाइल को कहां सेव करने के लिए बताते हैं।

हम इस छोटे कमांड का उपयोग करके ऐसा ही कर सकते हैं:

```
curl -o [FILENAME] [URL]
```

* `[URL]` - हम `curl` को डाउनलोड करने के लिए यूआरएल बताते हैं।
* `-o [FILENAME]` - हम `curl` को फ़ाइल को कहां सेव करने के लिए बताते हैं।

## समाप्ति

अब आप यूआरएल से फ़ाइलों को डाउनलोड करने के लिए `curl` का
