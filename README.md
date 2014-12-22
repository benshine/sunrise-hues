Sunrise Hues: Build sunrises for Philips Hue bulbs
============

![Screenshot](https://raw.githubusercontent.com/benshine/sunrise-hues/readme-with-image/site/images/sunrise-hues-screenshot.png)

[Philips Hue](http://www.meethue.com) lights are a fun technology: wireless 
programmable LED light bulbs.
 
I use them to simulate sunrise at an earlier time than the sun actually rises. 
This gives me a stimulus to awaken that is gentler than a radio or buzzer,
but still seems to get me out the door on time. 

There are many apsps that control Hue bulbs, but none of them 
do exactly what I want, so I decided to build my own. Philips provides
a device that joins your home's wifi and which contains a little tiny 
web server. I can control my lights via the [REST api](http://www.developers.meethue.com/). 

This app is specialized to just build sunrises and install them as a schedule
in my bulbs. The UI lets you design a gradient, try each color out on the lights,
and view an accelerated in-browser animated preview.

## Running locally
 Clone the repository, `npm install && bower install`, `grunt serve`
 Then visit http://localhost:9000

Right now the app has hardcoded Philips configuration:
* assumes the bridge is at 10.0.0.3
* assumes you are authenticated as user `newdeveloper`
* assumes that you have 3 lights
If you need to change these settings, edit `app/scripts/services/hue-service.js`

## Next steps:

1. Allow configuring what time to start the sunrise

2. Install the schedule in the bulbs

3. Allow configuration of the hue connection

4. Allow configuration of the times 

