import{_ as u}from"./checkra1n.ace0089d.js";import{_ as d,r as a,o as p,c as h,a as e,b as n,d as o,e as i,w as r}from"./app.a8d8f110.js";const c={},y={href:"https://checkra.in",target:"_blank",rel:"noopener noreferrer"},g={href:"https://github.com/checkra1n/BugTracker/files/6429930/Pongo.zip",target:"_blank",rel:"noopener noreferrer"},m={class:"custom-container tip"},f={href:"https://www.icloud.com/shortcuts/8d4e206d568d4aadb624b2a6191a3771",target:"_blank",rel:"noopener noreferrer"};function b(w,t){const l=a("ExternalLinkIcon"),s=a("router-link");return p(),h("div",null,[t[21]||(t[21]=e("h2",{id:"downloads-macos",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#downloads-macos","aria-hidden":"true"},"#"),n(" Downloads (macOS)")],-1)),e("ul",null,[e("li",null,[t[1]||(t[1]=n("The latest release of ")),e("a",y,[t[0]||(t[0]=n("checkra1n")),o(l)])]),e("li",null,[t[3]||(t[3]=n("The custom version of ")),e("a",g,[t[2]||(t[2]=n("pongoOS")),o(l)])])]),t[22]||(t[22]=i('<p><img src="'+u+'" alt="A screenshot of the checkra1n application"></p><h2 id="installing-checkra1n" tabindex="-1"><a class="header-anchor" href="#installing-checkra1n" aria-hidden="true">#</a> Installing checkra1n</h2><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>If you&#39;re using an Apple Silicon Mac and are using an A9X device, you will be prompted during the process to unplug and replug the device and will need to do so.</p></div><div class="custom-container warning"><p class="custom-container-title">WARNING</p><p>If you are using a USB-C to Lightning cable to do this process, you may run into issues entering into DFU mode</p><p>If you do have issues, get a USB-A to Lightning cable and, if necessary, also get a USB-C to USB-A adapter.</p></div>',4)),e("ol",null,[t[10]||(t[10]=e("li",null,[n("Open the "),e("code",null,"pongoOS.zip"),n(" file, navigate to "),e("code",null,"PongoConsolidated.bin"),n(", then extract it. "),e("ul",null,[e("li",null,"Keep note of where you extract this")])],-1)),t[11]||(t[11]=e("li",null,[n("Open a terminal and run checkra1n in CLI mode by using "),e("code",null,"/Applications/checkra1n.app/Contents/MacOS/checkra1n -c -k [path to PongoConsolidated.bin]")],-1)),t[12]||(t[12]=e("li",null,"Plug your iOS device into your computer",-1)),e("li",null,[t[5]||(t[5]=n("You will now be presented with instructions in how to reboot your device into ")),o(s,{to:"/faq/#what-is-dfu-mode"},{default:r(()=>t[4]||(t[4]=[n("DFU mode")])),_:1}),t[6]||(t[6]=n(", click ")),t[7]||(t[7]=e("code",null,"Start",-1)),t[8]||(t[8]=n(" to begin ")),t[9]||(t[9]=e("ul",null,[e("li",null,"Follow the instructions until your device shows a black screen")],-1))]),t[13]||(t[13]=e("li",null,"After this, checkra1n should automatically install",-1))]),t[23]||(t[23]=i('<p>Your iOS device should now reboot.</p><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>While you could, at this stage, install Cydia instead of continuing with the Odysseyra1n steps, we don&#39;t recommend it because of the fact that:</p><ul><li>People generally tend to have more stability when using Odysseyra1n instead of installing Cydia</li><li>Certain ease-of-use functionality (such as shshd, which automatically saves blobs for you when jailbroken) is not available</li><li>Some tweaks may require or be better tested with software that Odysseyra1n utilizes, rather than the software that is used when you choose to install Cydia</li></ul></div><p>To install Odysseyra1n, <u>do not</u> open the checkra1n app and install Cydia. Instead, follow the following instructions to install Sileo.</p><h2 id="the-odysseyra1n-script" tabindex="-1"><a class="header-anchor" href="#the-odysseyra1n-script" aria-hidden="true">#</a> The Odysseyra1n script</h2>',4)),e("div",m,[t[17]||(t[17]=e("p",{class:"custom-container-title"},"TIP",-1)),e("p",null,[t[15]||(t[15]=n("If you would prefer to do so, instead of running the script on your computer, you can run the Odysseyra1n script using the ")),e("a",f,[t[14]||(t[14]=n("shortcut")),o(l)]),t[16]||(t[16]=n(" by opening this page on your device and then clicking the shortcut hyperlink."))])]),t[24]||(t[24]=e("ol",null,[e("li",null,"Open the terminal app on your computer"),e("li",null,"Ensure that your computer is trusted by your device"),e("li",null,[n('Install "homebrew" by pasting and executing the following command: '),e("code",null,'/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install.sh)"')]),e("li",null,[n('Install "iproxy" by pasting and executing the following command: '),e("code",null,"brew install libusbmuxd")]),e("li",null,[n("Install the Odysseyra1n script by pasting and executing the following command: "),e("code",null,'/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/coolstar/Odyssey-bootstrap/master/procursus-deploy-linux-macos.sh)"')])],-1)),e("p",null,[t[19]||(t[19]=n("You should now be jailbroken with Sileo installed on your home screen. You can use Sileo to install ")),o(s,{to:"/faq/#what-are-tweaks"},{default:r(()=>t[18]||(t[18]=[n("tweaks")])),_:1}),t[20]||(t[20]=n(", themes, packages and more."))]),t[25]||(t[25]=i('<p>Before you can start installing anything else, you first need to install a few necessary programs.</p><h2 id="installing-packages" tabindex="-1"><a class="header-anchor" href="#installing-packages" aria-hidden="true">#</a> Installing packages</h2><ol><li>Open the newly installed Sileo application</li><li>Go to the &quot;Packages&quot; tab</li><li>Tap &quot;Upgrade All&quot; if there are any updates <ul><li>Do not install yet</li></ul></li><li>Go to the &quot;Search&quot; tab</li><li>Search for the &quot;libhooker&quot; package</li><li>Tap the &quot;Get&quot; button</li><li>Tap on the &quot;Queued&quot; bar at the bottom of your screen</li><li>Tap &quot;Confirm&quot;</li><li>Once finished, tap &#39;Restart SpringBoard&#39;</li></ol>',3))])}var S=d(c,[["render",b],["__file","index.html.vue"]]);export{S as default};
