---
layout: guide-layout
title: TODO
excerpt: TODO
permalink: /te/guides/basic-web-server-macos-linux
permalink_without_prefix: /guides/basic-web-server-macos-linux
lang: te
---

TODO

* TOC
{:toc}

## పరిచయం

మీరు వెబ్‌పేజీలు లేదా ఇతర వెబ్ కంటెంట్‌పై పనిచేస్తుంటే, ప్రాథమిక వెబ్ సర్వర్‌ను ప్రారంభించడానికి మీకు సులభమైన మరియు శీఘ్ర మార్గం అవసరం. ఈ గైడ్ మీ కంప్యూటర్‌లో ప్రాథమిక వెబ్ సర్వర్‌ను ప్రారంభించడానికి పైథాన్ ఆదేశాన్ని నేర్పుతుంది. మీరు ఈ సూచనలను అనుసరిస్తున్నప్పుడు, మీ కంప్యూటర్ యొక్క ఫైల్‌లు మరియు ఫోల్డర్‌లు నమూనాల నుండి భిన్నంగా ఉంటాయని గుర్తుంచుకోండి. మీకు ఇప్పటికే టెర్మినల్‌తో చాలా అనుభవం ఉంటే, చూడండి [the commands on the homepage for quick reference material](/).

## ముందస్తు అవసరాలు

ఈ మార్గదర్శిని అనుసరించడానికి, మీకు ఇది అవసరం:

* ఒక యాక్సెస్ Unix terminal ఏదైనా macOS లేదా Linux environment.
* ఎలా తెరవాలో తెలుసుకోవటానికి terminal window. మీకు ఖచ్చితంగా తెలియకపోతే, సూచనలను సందర్శించండి [macOS](open-terminal-macos) లేదా Linux (త్వరలో).
* ఫైళ్లు మరియు ఫోల్డర్‌లను ఎలా నావిగేట్ చేయాలో తెలుసుకోవడానికి terminal. మీకు ఖచ్చితంగా తెలియకపోతే, అనుసరించండి [this guide first to learn how](navigate-terminal).
* Python3 మీ కంప్యూటర్‌లో ఇన్‌స్టాల్ చేయబడింది. ఇది ఇటీవలి సంస్కరణల్లో అప్రమేయంగా ఇన్‌స్టాల్ చేయబడుతుంది macOS మరియు చాలా Linux distributions.

## సరైన ఫోల్డర్‌ను కనుగొనడం ద్వారా ప్రారంభించండి

మొదట, మీరు మీ వెబ్ పేజీలు లేదా వెబ్ కంటెంట్ సేవ్ చేయబడిన ఫోల్డర్‌కు నావిగేట్ చేయాలి. దీన్ని ఎలా చేయాలో మీకు తెలియకపోతే, మీరు చదవాలనుకోవచ్చు [this guide first](navigate-terminal).

మీ వెబ్ కంటెంట్ ఫోల్డర్‌లో ఉందని చెప్పండి `/home/user/examples`. మేము మూడు పనులు చేయాలనుకుంటున్నాము:

1. మేము సరైన పని డైరెక్టరీని ఉపయోగిస్తున్నామని నిర్ధారించుకోండి `pwd`.
2. ఫోల్డర్‌లో వెబ్ కంటెంట్ ఉందా అని తనిఖీ చేయండి `ls`.
3. వెబ్ కంటెంట్ ఉపయోగించి HTML వంటి సరైన ఫార్మాట్‌లో ఉందో లేదో తనిఖీ చేయండి `cat`.

దశల కలయిక ఇక్కడ ఉంది:

<div class="center guideimages">
  <amp-anim src="/assets/guides/basic-web-server-macos-linux/checking-web-content-en.gif" width="665" height="387" alt="Navigating and checking web content" layout="responsive"></amp-anim>
</div>

పై ఉదాహరణలో, మేము ఉపయోగిస్తాము `pwd` దాన్ని ధృవీకరించడానికి `/home/user/examples` మా వర్కింగ్ డైరెక్టరీ. అప్పుడు మేము ఉపయోగిస్తాము `ls` మాకు అక్కడ ఒక HTML ఫైల్ ఉందని నిర్ధారించుకోవడానికి వర్కింగ్ డైరెక్టరీలోని విషయాలను జాబితా చేయడానికి. మీరు గమనించవచ్చు **hello.html** ఫైల్.

చివరగా, మేము యొక్క విషయాలను చూస్తాము **hello.html** ఉపయోగించి `cat` ఇది నిజంగా HTML అని నిర్ధారించుకోవడానికి.

మేము ఇప్పుడు మా వెబ్ సర్వర్‌ను ప్రారంభించడానికి సిద్ధంగా ఉన్నాము!

## ప్రాథమిక పైథాన్ వెబ్ సర్వర్‌ను ప్రారంభించండి

ఇది డిఫాల్ట్‌గా కంప్యూటర్‌లలో తరచుగా ఇన్‌స్టాల్ చేయబడినందున, మేము ప్రాథమిక వెబ్ సర్వర్‌ను అమలు చేయడానికి పైథాన్‌ను ఉపయోగించబోతున్నాము.

వెబ్ సర్వర్‌ను ప్రారంభించడానికి మేము ఈ ఆదేశాన్ని ఉపయోగించబోతున్నాము: `python3 -m http.server 8000` <amp-iframe sandbox="allow-scripts"
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

ఈ ఆదేశం ఏమి చేస్తుందో అన్వేషించండి:

* `python3` ఏదైనా చేయడానికి పైథాన్ 3 ను ఉపయోగించమని టెర్మినల్‌ను నిర్దేశిస్తుంది.
* `-m http.server` వెబ్ సర్వర్‌ను అమలు చేయమని పైథాన్‌కు నిర్దేశిస్తుంది.
* `8000` వెబ్ సర్వర్ కోసం పోర్ట్‌గా 8000 ను ఉపయోగించమని పైథాన్‌ను నిర్దేశిస్తుంది.

దీన్ని అమలు చేయడానికి ప్రయత్నిద్దాం:

<div class="center guideimages">
  <amp-anim src="/assets/guides/basic-web-server-macos-linux/start-python-http-server-en.gif" width="665" height="387" alt="Start Python web server" layout="responsive"></amp-anim>
</div>

మీరు పైన పేర్కొన్న వాటిని గమనిస్తే, వెబ్ సర్వర్ ఇప్పుడు మీ కంప్యూటర్‌లో నడుస్తోంది.

## మీ వెబ్ కంటెంట్‌ను తనిఖీ చేయండి

తరువాత, మా వెబ్ కంటెంట్ వెబ్ బ్రౌజర్‌లో చూపిస్తుందో లేదో తనిఖీ చేయవచ్చు. కంటెంట్‌ను బ్రౌజ్ చేయడానికి మేము స్థానిక URL ని తెరవవచ్చు: `http://localhost:8000` <amp-iframe sandbox="allow-scripts"
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

పై మా ఉదాహరణలో, వెబ్ బ్రౌజర్‌లో మనం గమనించేది ఇదే:

<div class="center guideimages">
  <amp-img src="/assets/guides/basic-web-server-macos-linux/directory-listing-en.png" width="665" height="387" alt="Directory listing in the web browser" layout="responsive"></amp-img>
</div>

మా ఉదాహరణలో, మాకు ** index.html ** అనే ఫైల్ లేదు కాబట్టి మా వెబ్ బ్రౌజర్ అందుబాటులో ఉన్న ఫైళ్ళను జాబితా చేసింది. బ్రౌజర్‌లో తెరవడానికి మీరు నిర్దిష్ట ఫైల్‌పై క్లిక్ చేయవచ్చు. మేము ఇంతకు ముందు తనిఖీ చేసిన ** hello.html ** పై క్లిక్ చేద్దాం:

<div class="center guideimages">
  <amp-img src="/assets/guides/basic-web-server-macos-linux/hello-world-page-en.png" width="665" height="387" alt="Hello world page" layout="responsive"></amp-img>
</div>

మేము ఇప్పుడు వెబ్ పేజీని గమనిస్తున్నాము!

## ప్రాథమిక పైథాన్ వెబ్ సర్వర్‌ను ఆపండి

మీరు వెబ్ సర్వర్‌ను ఉపయోగించడం పూర్తయిన తర్వాత, మీరు దాన్ని టెర్మినల్ నుండి ఆపవచ్చు. దీన్ని చేయడానికి, మీ కీబోర్డ్‌లో `Ctrl-C` నొక్కండి. దీని అర్థం `Ctrl` మరియు` C` కీలను ఒకే సమయంలో నొక్కడం.

మీరు ఇలాంటి ఫలితాన్ని గమనిస్తారు:

<div class="center guideimages">
  <amp-anim src="/assets/guides/basic-web-server-macos-linux/stop-python-http-server-en.gif" width="665" height="387" alt="Stop Python web server" layout="responsive"></amp-anim>
</div>

## ముగింపు

మీ కంప్యూటర్‌లో ప్రాథమిక వెబ్ సర్వర్‌ను ఎలా ప్రారంభించాలో మీరు నేర్చుకున్నారు. వెబ్ అభివృద్ధి మరియు పైథాన్ ప్రోగ్రామింగ్ వంటి పనులతో ఇది మీకు సహాయం చేస్తుంది. పైథాన్‌లో మరింత నేర్చుకోవటానికి లేదా ప్రోగ్రామింగ్ చేయడానికి మీకు ఆసక్తి ఉంటే, మీరు సందర్శించవచ్చు [https://www.python.org](https://www.python.org){:target="_blank" rel="noopener"}.
