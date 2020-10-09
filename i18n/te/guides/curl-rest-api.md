---
layout: guide-layout
title: REST API లు మరియు సర్వర్‌లతో ఇంటరాక్ట్ అవ్వడానికి curl ను ఉపయోగించడం
excerpt: REST API లు మరియు సర్వర్‌లతో ఇంటరాక్ట్ అవ్వడానికి curl ను ఉపయోగించడం
permalink: /te/guides/curl-rest-api
permalink_without_prefix: /guides/curl-rest-api
lang: te
---

**విషయ సూచిక**

* TOC
{:toc}

## పరిచయం

REST API తో సంభాషించే ప్రాథమికాలను మీకు నేర్పడానికి ఈ గైడ్ ఉద్దేశించబడింది. మీరు ఈ సూచనలను అనుసరిస్తున్నప్పుడు, మీ కంప్యూటర్ యొక్క ఫైల్‌లు మరియు ఫోల్డర్‌లు నమూనాల నుండి భిన్నంగా ఉంటాయని గుర్తుంచుకోండి. మీకు ఇప్పటికే టెర్మినల్‌తో చాలా అనుభవం ఉంటే, [శీఘ్ర రిఫరెన్స్ మెటీరియల్ కోసం హోమ్‌పేజీలోని ఆదేశాలను చూడండి](/te/).

## ముందస్తు అవసరాలు

ఈ మార్గదర్శిని అనుసరించడానికి, మీకు ఇది అవసరం:

* ఏదైనా Linux లేదా macOS వాతావరణంలో యునిక్స్ టెర్మినల్‌కు ప్రాప్యత.
* టెర్మినల్ విండోను ఎలా తెరవాలో తెలుసుకోవడానికి. మీకు ఖచ్చితంగా తెలియకపోతే, [macOS](open-terminal-macos) లేదా Linux (త్వరలో వస్తుంది) కోసం సూచనలను సందర్శించండి.
* మీరు ఇంటరాక్ట్ చేయదలిచిన REST API. మేము ఈ గైడ్‌లో ఉదాహరణగా `https://jsonplaceholder.typicode.com` ని ఉపయోగిస్తున్నాము.
* మీ కంప్యూటర్‌లో కర్ల్ యుటిలిటీ ఇన్‌స్టాల్ చేయబడింది. చాలా macOS మరియు Linux కంప్యూటర్లు దీనిని ప్రీఇన్స్టాల్ చేశాయి. కాకపోతే, [మీరు సాంకేతిక సూచనలను కర్ల్ ఇన్‌స్టాలేషన్ వెబ్‌సైట్‌లో](https://curl.haxx.se/docs/install.html){:target="_blank" rel="noopener"} సమీక్షించాల్సి ఉంటుంది.

(https://curl.haxx.se/docs/install.html){: target = "_blank" rel = "noopener"}
(https://curl.haxx.se/docs/install.html){:target="_blank" rel="noopener"}

## GET తో ప్రారంభిద్దాం!

మీ టెర్మినల్ తెరవడం ద్వారా ప్రారంభించండి.

కర్ల్ అనేది "command-line tool for transferring data specified with URL syntax", ఇది REST API లు మరియు ఇతర వెబ్ వనరులతో సంభాషించడానికి చాలా ఉపయోగకరంగా ఉంటుంది. దీనికి వేలాది ఉపయోగాలు ఉన్నాయి, కానీ మేము ఈ గైడ్‌లో కొన్నింటిని సమీక్షించబోతున్నాము.

మీరు ఇంటరాక్ట్ చేయదలిచిన REST API మీకు ఉంది. ఉదాహరణకి, [https://jsonplaceholder.typicode.com/todos/1](https://jsonplaceholder.typicode.com/todos/1){:target="_blank" rel="noopener"} దీనికి సమానమైన JSON డేటాను అందిస్తుంది:

```
{
	"userId": 1,
	"id": 1,
	"title": "delectus aut autem",
	"completed": false
}
```
మేము ఈ ఉదాహరణ URL ను మా వెబ్ బ్రౌజర్‌లో తెరవగలిగినప్పటికీ, చాలా REST API లు దీన్ని చేయనివ్వవు. బదులుగా కర్ల్ ఉపయోగించటానికి ప్రయత్నిద్దాం.

మీ టెర్మినల్ విండోలో, `curl https://jsonplaceholder.typicode.com/todos/1` టైప్ చేయండి మరియు నొక్కండి **Enter**. ఇలాంటి ఫలితాన్ని మీరు చూడాలి.

<div class="center guideimages">
  <amp-anim src="/assets/guides/curl-rest-api/curl-get-basic-en.gif" width="665" height="387" alt="Demo of basic curl command" layout="responsive"></amp-anim>
</div>

ఏ ఎంపికలు లేకుండా, `curl` ,**GET** HTTP అభ్యర్ధన పద్ధతిని ఉపయోగించి సర్వర్‌తో ఇంటరాక్ట్ అవ్వడానికి డిఫాల్ట్‌లు, ఇది సాధారణంగా డేటాను చదవడానికి మాత్రమే ఉపయోగించబడుతుంది. మేము ఈ గైడ్‌లో ఇతర హెచ్‌టిటిపి అభ్యర్థన పద్ధతులను తరువాత కవర్ చేస్తాము.

టెర్మినల్ విండోలో నేరుగా చూపించే బదులు అవుట్‌పుట్‌ను ఫైల్‌గా సేవ్ చేయడానికి `-o` ఎంపికను చేర్చుదాం. `curl -o test.json https://jsonplaceholder.typicode.com/todos/1` అని టైప్ చేయండి, మరియు ఎంటర్ నొక్కండి

<div class="center guideimages">
  <amp-anim src="/assets/guides/curl-rest-api/curl-get-output-en.gif" width="665" height="387" alt="Demo of basic curl command with file output" layout="responsive"></amp-anim>
</div>

మనకు కావాలంటే, నెట్‌వర్క్ ద్వారా ఈ పరస్పర చర్య గురించి మరింత వివరమైన సమాచారాన్ని పరిశీలించవచ్చు. దీన్ని చేయడానికి, మీరు ఏదైనా `curl` ఆదేశానికి` -v` ఎంపికను జోడించవచ్చు. `curl -v https://jsonplaceholder.typicode.com/todos/1` అని టైప్ చేసి **Enter** నొక్కండి:

<div class="center guideimages">
  <amp-anim src="/assets/guides/curl-rest-api/curl-get-verbose-en.gif" width="665" height="387" alt="Demo of basic curl command with verbose output" layout="responsive"></amp-anim>
</div>

## curl తో విభిన్న HTTP అభ్యర్థన పద్ధతులను ఉపయోగించడం

curl ఉపయోగించి REST API యొక్క ప్రాథమిక ప్రశ్న ఎలా చేయాలో ఇప్పుడు మనకు తెలుసు, మీరు వేర్వేరు HTTP పద్ధతులను ప్రయత్నించవచ్చు. [Wikipedia](https://en.wikipedia.org/wiki/Hypertext_Transfer_Protocol#Request_methods) లో విభిన్న HTTP అభ్యర్థన పద్ధతుల గురించి మీరు చాలా ఎక్కువ చదవవచ్చు.

### POST

REST API తో సంభాషించేటప్పుడు సర్వర్‌లో డేటాను సృష్టించడానికి లేదా నవీకరించడానికి **POST** HTTP అభ్యర్థన పద్ధతి చాలా తరచుగా ఉపయోగించబడుతుంది. అలా చేయడానికి, మీరు `curl` కమాండ్ కోసం రెండు కొత్త ఎంపికలను తెలుసుకోవాలి:

* `-X [HTTP_METHOD]` - ఏ HTTP అభ్యర్థన పద్ధతిని ఉపయోగించాలో మనం  `curl` కి చెప్పాలి. `-X` ఎంపిక, తరువాత పద్ధతి పేరు, దీన్ని చేయడానికి మాకు అనుమతిస్తుంది.
* `-H [HTTP_HEADER]` - సర్వర్‌కు డేటాను పంపేటప్పుడు, ఆ 1 సె మరియు 0 సెలను ఎలా అర్థం చేసుకోవాలో సర్వర్‌కు చెప్పాలి. ఇది JSON డేటా, ఒక రూపం, ఇమెయిల్ మొదలైనవి కావచ్చు.
* `-d [YOUR_DATA]` - చివరగా, సర్వర్‌కు ఏ డేటాను `curl` పంపించాలో మేము పేర్కొనాలి.

ఈ ఎంపికలను పూర్తి ఆదేశంగా చేద్దాం:

`curl -X POST -H 'Content-Type: application/json' -d '{"title": "foo","body": "bar","userId": 123}' https://jsonplaceholder.typicode.com/posts`

మీరు దానిని మీ టెర్మినల్ విండోలో టైప్ చేయవచ్చు లేదా కాపీ చేయవచ్చు మరియు పంపించడానికి **Enter** నొక్కండి, ఇలా:

<div class="center guideimages">
  <amp-anim src="/assets/guides/curl-rest-api/curl-post-basic-en.gif" width="665" height="387" alt="Demo of POST curl command" layout="responsive"></amp-anim>
</div>

మీరు చెప్పగలిగినట్లుగా, ఒకే ఆదేశాన్ని ఉంచడానికి ప్రయత్నించడానికి ఇది చాలా డేటా. ఫైల్‌ను సులభంగా మరియు పునరావృతం చేయడానికి బదులుగా డేటాను పంపవచ్చు.

`data.json` అనే క్రొత్త ఫైల్‌ను సృష్టించండి:

```
{
	"title": "foo",
	"body": "bar",
	"userId": 123
}
```

మీరు దీన్ని విజయవంతంగా సృష్టించినట్లయితే, మీరు ఫైల్‌ను `cat` చేయగలరు,

<div class="center guideimages">
  <amp-anim src="/assets/guides/curl-rest-api/nano-datajson-en.gif" width="665" height="387" alt="Demo of data file" layout="responsive"></amp-anim>
</div>

ఇప్పుడు మీరు మీ `curl` ఆదేశంలో భాగంగా ఆ ఫైల్‌ను ఉపయోగించవచ్చు. డేటాను ఆదేశంలో ఉంచడానికి బదులుగా, మీరు `-d @[FILENAME]` ను ఉపయోగించి ఫైల్‌ను * సూచించవచ్చు. `curl -X POST -H 'Content-Type: application/json' -d @data.json https://jsonplaceholder.typicode.com/posts` అని టైప్ చేసి **Enter** నొక్కడం ద్వారా మనం దీన్ని ప్రయత్నించవచ్చు.

<div class="center guideimages">
  <amp-anim src="/assets/guides/curl-rest-api/curl-post-file-en.gif" width="665" height="387" alt="Demo of POST curl command with a file" layout="responsive"></amp-anim>
</div>

### PUT

REST API తో సంభాషించేటప్పుడు సర్వర్‌లో ఉన్న డేటాను నవీకరించడానికి **PUT** HTTP అభ్యర్థన పద్ధతి తరచుగా ఉపయోగించబడుతుంది. **POST** తో ఉదాహరణ మాదిరిగానే, మేము `curl` ఆదేశాన్ని ఉపయోగిస్తున్నప్పుడు పద్ధతి, డేటా ఫార్మాట్ మరియు డేటాను సెట్ చేయాలనుకుంటున్నాము.

ఇప్పటికే ఉన్న అంశాన్ని నవీకరించడానికి ప్రయత్నిద్దాం. `curl -X PUT -H 'Content-Type: application/json' -d '{"title": "foo_updated","body": "bar_updated","userId": 123}' https://jsonplaceholder.typicode.com/posts/1` మరియు **Enter** నొక్కండి, ఇలా:

<div class="center guideimages">
  <amp-anim src="/assets/guides/curl-rest-api/curl-put-basic-en.gif" width="665" height="387" alt="Demo of PUT curl command" layout="responsive"></amp-anim>
</div>

`-d @ [FILENAME]` ను ఉపయోగించడం ద్వారా మీరు **POST** HTTP అభ్యర్థన పద్ధతిలో చేసిన విధంగానే డేటా ఫైల్‌ను కూడా ఉపయోగించవచ్చు.

### DELETE

మీరు సర్వర్ నుండి డేటాను తీసివేయాలనుకుంటే, మీరు REST API తో సంభాషించేటప్పుడు **DELETE** HTTP అభ్యర్థన పద్ధతిని ఉపయోగిస్తారు. మునుపటి ఉదాహరణలతో పోలిస్తే ఇది కొంచెం ఎక్కువ. **DELETE** HTTP అభ్యర్థన పద్ధతిని పేర్కొనడానికి మరియు తొలగించడానికి నిర్దిష్ట వనరు URL ను పేర్కొనడానికి మీరు `-X DELETE` ను ఉపయోగిస్తారు. `curl -X DELETE https://jsonplaceholder.typicode.com/posts/1` అని టైప్ చేసి **Enter** నొక్కడం ద్వారా దీన్ని ప్రయత్నించండి:

<div class="center guideimages">
  <amp-anim src="/assets/guides/curl-rest-api/curl-delete-basic-en.gif" width="665" height="387" alt="Demo of DELETE curl command" layout="responsive"></amp-anim>
</div>

**DELETE** HTTP అభ్యర్ధన పద్ధతిని ఉపయోగిస్తున్నప్పుడు చాలా REST API లు తొలగించబడిన డేటాను లేదా డేటాను ఇవ్వవని మీరు గమనించవచ్చు.

### OPTIONS

కొన్నిసార్లు, మనం  సర్వర్‌కు ఏ రకమైన అభ్యర్థనలు లేదా డేటాను పంపగలమో తెలుసుకోవాలి. దీన్ని చేయడానికి, మీరు **OPTIONS** HTTP అభ్యర్థన పద్ధతిని ఉపయోగించవచ్చు.

మీరు ఇంతకు ముందు నేర్చుకున్న `-v` ఎంపికను ఉపయోగించాల్సి ఉంటుంది. ఇది మరింత వివరణాత్మక అవుట్‌పుట్‌ను ఆన్ చేస్తుంది, తద్వారా మీరు సర్వర్ మద్దతిచ్చే "options" చూడవచ్చు.

`curl -v -X OPTIONS https://jsonplaceholder.typicode.com/posts` అని టైప్ చేసి **Enter** నొక్కడం ద్వారా దీనిని ప్రయత్నిద్దాం.

<div class="center guideimages">
  <amp-anim src="/assets/guides/curl-rest-api/curl-options-verbose-en.gif" width="665" height="387" alt="Demo of OPTIONS curl command with verbose output" layout="responsive"></amp-anim>
</div>

మీరు మీ టెర్మినల్ విండో ద్వారా స్క్రోల్ చేస్తున్నప్పుడు, మీరు ఇలాంటి సమాచారాన్ని గమనిస్తారు:

```
...
< access-control-allow-credentials: true
< access-control-allow-methods: GET,HEAD,PUT,PATCH,POST,DELETE
...
```

REST API సర్వర్ అనుమతించే HTTP అభ్యర్థన పద్ధతులను ఇది మీకు చెబుతుంది. ఆధారాలను ప్రామాణీకరించడానికి మరియు ఉపయోగించడానికి సర్వర్ మిమ్మల్ని అనుమతిస్తుంది అని కూడా ఇది మీకు చెబుతుంది.

## Wrapping up

REST API లు మరియు సర్వర్‌లతో ఇంటరాక్ట్ అవ్వడానికి `curl` ను ఉపయోగించడం గురించి ఇప్పుడు మీకు కొంచెం తెలుసు. ఇది చాలా ఉపయోగకరమైన ఆదేశం మరియు సాధనం.
