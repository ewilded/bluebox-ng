![Bluebox-ng](https://lh6.googleusercontent.com/-GfcMGzI-qSQ/VDWt9U8GGWI/AAAAAAAAKmU/csRGEN1XtwA/s551-no/blueboxLogo250.png)

<img src="http://24.media.tumblr.com/a6ab63017203cf23385eed463b0440c6/tumblr_mr6uzjmukX1qzg211o1_1280.jpg" width="200" height="150">

Bluebox-ng
==========
Bluebox-ng is a GPL VoIP/UC vulnerability scanner written using Node.js powers. "Our 2 cents" to improve security practices in these environments and to make the Node world still more awesome. ;)

- **GitHub repo**: [https://github.com/jesusprubio/bluebox-ng](https://github.com/jesusprubio/bluebox-ng)
- **IRC(Freenode)**: #breakingVoIP

NOTE: We've said we were working in the v.2 but, finally, I decided that this one is going to be the 0.0.x. The reason is that the old code is a crap and I like more the Node versioning style. For now we consider it a beta version because of not being enough tested to be used in professional environments. So use it and report the bugs please. Anyway everything should work, if not, please open an issue and we'll fix it gracefully.

Features
--------
- Auto VoIP/UC penetration test (coming soon)
- Report generation (coming soon)
- RFC compliant
- SIP TLS and IPv6 support
- SIP over websockets (and WSS) support (RFC 7118)
- SHODAN, exploitsearch.net and Google Dorks
- SIP common security tools (scan, extension/password bruteforce, etc.)
- Authentication and extension brute-forcing through different types of SIP requests
- SIP Torture (RFC 4475) partial support
- SIP SQLi check
- SIP denial of service (DoS) testing
- DNS brute-force
- Web management panels discovery (comming soon)
- Other common protocols brute-force: Asterisk AMI, MySQL, MongoDB, SSH, (S)FTP, HTTP(S), TFTP, LDAP, SNMP
- Some common network tools: whois, ping (also TCP), traceroute, etc.
- Dumb fuzzing
- Automatic exploit searching (Exploit DB, PacketStorm, Metasploit)
- Automatic vulnerability searching (CVE, OSVDB, NVD)
- VirusTotal IP, URL and domain support
- Geolocation
- Colored output
- Command completion
- Cross-platform support

Install
-------
Dependencies. It should work in all systems which support Node:
- Node.js: [http://nodejs.org/](http://nodejs.org/)
- Nmap (only for "nmapScan" module): [http://nmap.org/](http://nmap.org/)

```npm i -g bluebox-ng```

Use
---
- Console client: ```bluebox-ng```
- As a library:
```javascript
var Bluebox = require('bluebox-ng'),

    options       = {},
    bluebox       = new Bluebox(options),
    moduleOptions = {
        target : '188.87.148.41'
    };

bluebox.runModule('geoLocate', moduleOptions, function (err, result) {
    if (err) {
        console.log('ERROR:');
        console.log(err);
    } else {
        console.log('RESULT:');
        console.log(result);
    }
});
```

Issues
------
- Please use GitHub web ([https://github.com/jesusprubio/bluebox-ng/issues](https://github.com/jesusprubio/bluebox-ng/issues)). If you have doubts playing with the software label the issue as "question".

Developer guide
---------------
- To add a module you only have to add one file with the code which implements the new features. I suggest to copy the most similar one and start to write code from there. If you needed a new parser/printer feel free to also change the code in the "utils" folder.
- To contribute we use [GitHub pull requests](https://help.github.com/articles/using-pull-requests).
- Only include external tools written in Node.js. I know we're using Nmap, it's an exception because we still not have a serious replacement for it.
- Never call a module from another, use a Grunt task to automate things (ie: "auto" module).
- Styleguide:
 - Always use camelCase, never underscores
 - Use soft-tabs with a four space indent
 - Follow the style of the actual modules

Core devs
---------
- Jesús Pérez
 - [@jesusprubio](https://twitter.com/jesusprubio)
 - jesusprubio gmail com
 - [http://jesusprubio.name/](http://jesusprubio.name/)

- Sergio García
 - [@s3rgiogr](https://twitter.com/s3rgiogr)
 - s3rgio.gr gmail com

Contributors
------------
[https://github.com/jesusprubio/bluebox-ng/graphs/contributors](https://github.com/jesusprubio/bluebox-ng/graphs/contributors)

Thanks to
---------
- Jose Luis Verdeguer ([@pepeluxx](https://twitter.com/pepeluxx)), my mate playing with VoIP security related stuff.
- Damián Franco ([@pamojarpan](https://twitter.com/pamojarpan)), help during first steps.
- [Quobis](http://www.quobis.com), some hours of work through personal projects program.
- Antón Román ([@antonroman](https://twitter.com/antonroman)), my SIP mentor.
- Sandro Gauci ([@sandrogauci](https://twitter.com/sandrogauci)), SIPVicious was my inspiration.
- Kamailio community ([@kamailioproject](https://twitter.com/kamailioproject)), my favourite SIP Server.
- David Endler and Mark Collier ([@markcollier46](https://twitter.com/markcollier46)), the authors of ["Hacking VoIP Exposed" book](http://www.hackingvoip.com/).
- John Matherly ([@achillean](https://twitter.com/achillean)) for the SHODAN API and GHDB.
- Tom Steele ([@_tomsteele](https://twitter.com/_tomsteele)) and the rest of [exploitsearch.net](http://www.exploitsearch.net/) team.
- [VirusTotal](https://www.virustotal.com/) friends.
- All developers who have written the Node.js modules used in the project.
- All VoIP, free software and security hackers that I read everyday.
- My friend Carlos Pérez, the logo designer.

License
-------
This program is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program.  If not, see <http://www.gnu.org/licenses/>.
