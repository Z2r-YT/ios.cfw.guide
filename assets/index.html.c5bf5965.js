import{_ as u,r as a,o as d,c as b,e as l,a as o,b as n,d as t,w as s}from"./app.a8d8f110.js";const h={},p={href:"https://tsssaver.1conan.com/v2/",target:"_blank",rel:"noopener noreferrer"},v={href:"https://repo.1conan.com/",target:"_blank",rel:"noopener noreferrer"},g={href:"https://www.apple.com/itunes/",target:"_blank",rel:"noopener noreferrer"},m={href:"https://tsssaver.1conan.com/v2/",target:"_blank",rel:"noopener noreferrer"},y={href:"https://itunes.apple.com/us/app/ax-cpu/id1048174418?mt=8",target:"_blank",rel:"noopener noreferrer"},f={href:"https://github.com/airsquared/blobsaver/releases",target:"_blank",rel:"noopener noreferrer"},c={href:"https://cadoth.net/~nyuszika7h/ios-builds/libimobiledevice-static-linux.tar.gz",target:"_blank",rel:"noopener noreferrer"},w={href:"https://github.com/verygenericname/SSHRD_Script",target:"_blank",rel:"noopener noreferrer"},S={href:"https://apt.arx8x.net",target:"_blank",rel:"noopener noreferrer"},k={href:"https://shsh.host",target:"_blank",rel:"noopener noreferrer"},x={href:"https://github.com/tihmstar/img4tool",target:"_blank",rel:"noopener noreferrer"};function O(T,e){const i=a("ExternalLinkIcon"),r=a("router-link");return d(),b("div",null,[e[56]||(e[56]=l('<p>This will take you through the process of saving blobs which are required if you wish to downgrade to an older, unsigned version of iOS or iPadOS. There are multiple methods below you can try. For unjailbroken devices, you will need to use the &quot;Computer&quot; method.</p><h2 id="saving-blobs-with-shshd" tabindex="-1"><a class="header-anchor" href="#saving-blobs-with-shshd" aria-hidden="true">#</a> Saving blobs with shshd</h2><p>shshd is a tweak used for automatic blob saving. Once you have it installed, you won&#39;t need to worry about manually saving blobs as it handles it all in the background. You must be jailbroken to use shshd. If you aren&#39;t jailbroken, follow <a href="#saving-blobs-with-tss-saver-website">Saving blobs with TSS Saver Website</a>.</p><div class="custom-container warning"><p class="custom-container-title">WARNING</p><p>shshd is only compatible with Procursus-based jailbreaks, such as Taurine, Odyssey, Chimera and Odysseyra1n. If you&#39;re using unc0ver or checkra1n, follow <a href="#saving-blobs-with-tss-saver-app">Saving blobs with TSS Saver App</a>.</p></div><ol><li>Open your package manager</li><li>Search for the <code>shshd</code> package</li><li>Download and install the package</li><li>Tap &quot;Done&quot; when prompted</li></ol>',5)),o("p",null,[e[1]||(e[1]=n("Blobs will automatically be saved when you download shshd, every time you rejailbreak, and every week after that. The blobs are available at the ")),o("a",p,[e[0]||(e[0]=n("TSS saver website")),t(i)]),e[2]||(e[2]=n('. To retrieve them, go to "retrieve" and enter your ECID.'))]),e[57]||(e[57]=l('<h3 id="running-shshd-manually" tabindex="-1"><a class="header-anchor" href="#running-shshd-manually" aria-hidden="true">#</a> Running shshd manually</h3><p>You shouldn&#39;t need to run shshd manually, but it can be run through a terminal.</p><ol><li>SSH into your device or download NewTerm 2</li><li>Type <code>sudo /usr/sbin/shshd</code> into the terminal <ul><li>If prompted for a password, enter in your root password (by default this is set to <code>alpine</code>)</li></ul></li></ol><h2 id="saving-blobs-with-tss-saver-app" tabindex="-1"><a class="header-anchor" href="#saving-blobs-with-tss-saver-app" aria-hidden="true">#</a> Saving blobs with TSS Saver App</h2><p>The TSS Saver app can be installed on jailbroken devices and allows you to save your blobs easily with the tap of a button. If you aren&#39;t jailbroken, follow <a href="#saving-blobs-with-tss-saver-website">Saving blobs with TSS Saver Website</a> instead.</p>',5)),o("ol",null,[o("li",null,[e[5]||(e[5]=n("Add ")),o("a",v,[e[3]||(e[3]=n("repo.1conan.com")),t(i)]),e[6]||(e[6]=n(" to your sources in your preferred ")),t(r,{to:"/package-managers"},{default:s(()=>e[4]||(e[4]=[n("package manager")])),_:1})]),e[7]||(e[7]=o("li",null,[n("Download and install TSS Saver "),o("ul",null,[o("li",null,[n("If you're using unc0ver on iOS 14, also download and install "),o("code",null,"libkrw")]),o("li",null,[n("If you're using Taurine on iOS 14. also download and install "),o("code",null,"libkernrw")])])],-1)),e[8]||(e[8]=o("li",null,'Tap "Save Blobs"',-1)),e[9]||(e[9]=o("li",null,'Once you receive the confirmation message, tap "Open"',-1))]),e[58]||(e[58]=l('<h2 id="saving-blobs-with-tss-saver-website" tabindex="-1"><a class="header-anchor" href="#saving-blobs-with-tss-saver-website" aria-hidden="true">#</a> Saving blobs with TSS Saver Website</h2><p>The TSS Saver website allows you to save your device&#39;s blobs by entering in some device-specific information. Once saved, you can then access the blobs by entering in that information again.</p><p>A12+ users must be jailbroken to use the TSS Saver Website, as it requires grabbing the ApNonce and Generator pair. If you aren&#39;t jailbroken, follow <a href="#saving-blobs-with-blobsaver">Saving blobs with blobsaver</a></p><h3 id="getting-generator-and-apnonce-jailbroken-a12-only" tabindex="-1"><a class="header-anchor" href="#getting-generator-and-apnonce-jailbroken-a12-only" aria-hidden="true">#</a> Getting Generator and ApNonce (Jailbroken A12+ only)</h3><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>If you are using unc0ver or Taurine on iOS 14, install libkrw or libkernrw respectively.</p></div><ol><li>Open a Terminal app and run <code>sudo dimentio &gt; dimentio.txt</code><ul><li>Alternatively, you can get your Generator and ApNonce from the Generator tab in TSS Saver App</li></ul></li><li>Go to /var/mobile in Filza and open dimentio.txt</li><li>Copy the 0x number after <code>Current nonce is</code> at the bottom of the text file as well as the number that comes after <code>entangled nonce:</code>. The 0x number is your Generator, and the entangled nonce number is your ApNonce. Keep these safe somewhere, you&#39;ll need them later</li><li>Follow the rest of this guide</li></ol><h3 id="saving-blobs-all-devices" tabindex="-1"><a class="header-anchor" href="#saving-blobs-all-devices" aria-hidden="true">#</a> Saving blobs (All Devices)</h3>',7)),o("ol",null,[e[21]||(e[21]=o("li",null,"Connect your iOS Device to your Mac or PC",-1)),o("li",null,[e[13]||(e[13]=n("Open iTunes or Finder ")),o("ul",null,[o("li",null,[e[11]||(e[11]=n("Windows users must download the ")),o("a",g,[e[10]||(e[10]=n("normal version")),t(i)]),e[12]||(e[12]=n(", NOT the Windows Store version"))])])]),e[22]||(e[22]=o("li",null,"Navigate to the device summary page",-1)),e[23]||(e[23]=o("li",null,[n("Click the Serial Number field twice "),o("ul",null,[o("li",null,"This should change to show your ECID number")])],-1)),e[24]||(e[24]=o("li",null,"Note down this ECID number somewhere where you can read it later",-1)),o("li",null,[e[15]||(e[15]=n("Open the ")),o("a",m,[e[14]||(e[14]=n("TSS Saver Website")),t(i)])]),e[25]||(e[25]=o("li",null,"Input your device ECID",-1)),o("li",null,[e[20]||(e[20]=n("Select your Device ")),o("ul",null,[o("li",null,[e[17]||(e[17]=n("iPhone 6S, 6S Plus, and iPhone SE users will need to get their board configuration by downloading ")),o("a",y,[e[16]||(e[16]=n("AX-CPU")),t(i)]),e[18]||(e[18]=n(" from the App Store"))]),e[19]||(e[19]=o("li",null,"A12+ users will need to input ApNonce and Generator pair",-1))])]),e[26]||(e[26]=o("li",null,"Click Submit",-1))]),e[59]||(e[59]=o("h2",{id:"saving-blobs-with-blobsaver",tabindex:"-1"},[o("a",{class:"header-anchor",href:"#saving-blobs-with-blobsaver","aria-hidden":"true"},"#"),n(" Saving blobs with blobsaver")],-1)),e[60]||(e[60]=o("p",null,"blobsaver is a cross-platform PC program, compatible with Windows, macOS and Linux, that allows you to easily save your blobs on any device, jailbroken or not. It's not as convenient as the other options, however it works with the most devices.",-1)),e[61]||(e[61]=o("h3",{id:"blobsaver",tabindex:"-1"},[o("a",{class:"header-anchor",href:"#blobsaver","aria-hidden":"true"},"#"),n(" blobsaver")],-1)),o("ol",null,[o("li",null,[e[28]||(e[28]=n("Download, install, and launch the latest version of ")),o("a",f,[e[27]||(e[27]=n("blobsaver")),t(i)])]),e[29]||(e[29]=o("li",null,"Connect your iOS device to your computer and make sure it is unlocked",-1)),e[30]||(e[30]=o("li",null,'Click on the first "Read from device" button, which will fill your ECID and device information',-1)),e[31]||(e[31]=o("li",null,"If your iOS device is not A12 or higher, you are not required to get an APNonce and you may skip the next step",-1))]),e[62]||(e[62]=l('<h3 id="get-your-device-specific-apnonce-and-generator" tabindex="-1"><a class="header-anchor" href="#get-your-device-specific-apnonce-and-generator" aria-hidden="true">#</a> Get your device-specific APNonce and generator</h3><p>Ensure your device is unlocked and connected to your computer throughout this process.</p><ol><li>Click on the second &quot;Read from device&quot; button next to the APNonce field</li><li>If you are jailbroken or have a generator/apnonce pair already set on your device you would like to keep, select &quot;Jailbroken&quot;. Otherwise, select &quot;Unjailbroken&quot;</li></ol><p>Your device will reboot into recovery mode multiple times. When you reboot into normal OS mode, unlock your iOS device.</p><div class="custom-container danger"><p class="custom-container-title">DANGER</p><p>If you get stuck in recovery mode, try using the &quot;Exit Recovery Mode&quot; option from the &quot;Help&quot; menu in blobsaver.</p></div><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>These values can be reused at any time to save blobs whether or not you&#39;re jailbroken.</p></div><h3 id="saving-blobs" tabindex="-1"><a class="header-anchor" href="#saving-blobs" aria-hidden="true">#</a> Saving blobs</h3><ol><li>Once you have filled out all the information, click &quot;Go&quot; to save blobs</li><li>You can also click &quot;Save Device&quot; to save your current device&#39;s information, so you can save blobs for it again later</li></ol><h3 id="saving-blobs-automatically-in-the-background" tabindex="-1"><a class="header-anchor" href="#saving-blobs-automatically-in-the-background" aria-hidden="true">#</a> Saving blobs automatically in the background</h3><ol><li>You can also optionally set up blobsaver to save blobs automatically in the background, without having to manually open blobsaver</li><li>Once you have one or more saved devices, click &quot;Background Settings&quot; to begin setting it up</li><li>Select which devices you would like to save automatically in the background, and blobsaver will first test them to ensure the device information is correct</li><li>You can then change the freqency interval blobs are saved at, using the &quot;Change Frequency&quot; button</li><li>Once you are ready, click &quot;Start Background&quot; to enable it</li><li>You may now close blobsaver, and blobs will automatically be saved in the background at the interval you set</li></ol><h2 id="saving-onboard-blobs" tabindex="-1"><a class="header-anchor" href="#saving-onboard-blobs" aria-hidden="true">#</a> Saving Onboard Blobs</h2><p>Saving Onboard Blobs is the process of saving your previous signature from when you last updated, and converting that into a usable blob. Because you updated while the version was still signed, you can re-use these blobs, and they will still be valid. However, the type of blobs that you save will depend on how you updated to your current version.</p><h3 id="ota-onboard-blobs" tabindex="-1"><a class="header-anchor" href="#ota-onboard-blobs" aria-hidden="true">#</a> OTA Onboard Blobs</h3><p>If you updated to the version you are saving Onboard Blobs on using the Settings app over-the-air, then the blobs will be &quot;OTA Blobs&quot;. These blobs require a <strong>bootrom exploit</strong> to be used, and <strong>only</strong> can be used with the <code>--use-pwndfu</code> argument in FutureRestore.</p><h3 id="itunes-onboard-blobs" tabindex="-1"><a class="header-anchor" href="#itunes-onboard-blobs" aria-hidden="true">#</a> iTunes Onboard Blobs</h3><p>If you updated/restored to the version you are saving Onboard Blobs on using iTunes / Finder, then the Onboard Blobs will be saved like normal blobs and you&#39;ll be able to use them. However, they differ according to whether you restored or updated using a computer.</p><p>If you <em>restored</em> using a computer, your blobs will be &quot;Erase&quot; blobs, and <strong>cannot</strong> be used with the &quot;Update (-u)&quot; option in FutureRestore.</p><p>If you <em>updated</em> using a computer, your blobs will be &quot;Update&quot; blobs, and <strong>can only</strong> be used with the &quot;Update (-u)&quot; option in FutureRestore.</p><h3 id="save-onboard-blobs" tabindex="-1"><a class="header-anchor" href="#save-onboard-blobs" aria-hidden="true">#</a> Save Onboard Blobs</h3><h3 id="using-deverser" tabindex="-1"><a class="header-anchor" href="#using-deverser" aria-hidden="true">#</a> Using Deverser</h3><div class="custom-container danger"><p class="custom-container-title">DANGER</p><p>A Linux or macOS machine is required to use this method, and a jailbroken device with OpenSSH installed.</p><p>On checkra1n/odysseyra1n, you don&#39;t need OpenSSH, but it&#39;s recommended for beginners.</p></div>',21)),o("ol",null,[e[38]||(e[38]=l("<li>On your Linux or macOS machine, run <code>git clone https://github.com/joshuah345/deverser.git &amp;&amp; cd deverser</code> to grab the source of Deverser from GitHub <ul><li>If you already have done this, run <code>cd deverser</code> and <code>git pull</code> to get the latest changes</li></ul></li><li>Run <code>chmod +x deverser.sh</code> to allow it to be executed, then run <code>./deverser.sh</code> to start the script</li><li>Answer <code>Yes</code> if it asks to install img4tool <ul><li>img4tool converts the raw file to your usable SHSH blob</li></ul></li>",3)),o("li",null,[e[37]||(e[37]=n("Enter the device's IP address ")),o("ul",null,[o("li",null,[e[35]||(e[35]=n("On checkra1n/odysseyra1n, you can run iproxy if you'd like. ")),o("ul",null,[e[34]||(e[34]=o("li",null,[n("On macOS, in another terminal window, install libimobiledevice with "),o("code",null,"brew install libimobiledevice libirecovery"),n(", then run "),o("code",null,"sudo iproxy 22 44")],-1)),o("li",null,[e[33]||(e[33]=n("On Linux, we recommend using OpenSSH on the iDevice, but if you'd like to manually install libimobiledevice, a link to the binaries are ")),o("a",c,[e[32]||(e[32]=n("here")),t(i)])])])]),e[36]||(e[36]=o("li",null,"To use OpenSSH, install it on your device, and get the device's IP address from Wi-Fi settings",-1))])]),e[39]||(e[39]=o("li",null,[n("The script will then ask you to enter your device's root password twice "),o("ul",null,[o("li",null,[n("If you aren't sure, it's probably "),o("code",null,"alpine")])])],-1))]),e[63]||(e[63]=o("p",null,[n("You can find your blob named "),o("code",null,"(YOUR ECID).dumped.shsh"),n(" in the directory you ran Deverser (usually ~/deverser).")],-1)),e[64]||(e[64]=o("h3",{id:"using-an-ssh-ramdisk",tabindex:"-1"},[o("a",{class:"header-anchor",href:"#using-an-ssh-ramdisk","aria-hidden":"true"},"#"),n(" Using an SSH Ramdisk")],-1)),e[65]||(e[65]=o("div",{class:"custom-container danger"},[o("p",{class:"custom-container-title"},"DANGER"),o("p",null,"A Linux or macOS machine is required to use this method, and a checkm8 device on iOS 12+."),o("p",null,"This is a more advanced method and is not recommended for beginners.")],-1)),o("ol",null,[o("li",null,[e[41]||(e[41]=n("Navigate to ")),o("a",w,[e[40]||(e[40]=n("this link")),t(i)]),e[42]||(e[42]=n(" and set up the ramdisk ")),e[43]||(e[43]=o("ul",null,[o("li",null,[n("Using "),o("code",null,"14.8"),n(" as the ramdisk version is recommended, but you can choose whatever")])],-1))]),e[44]||(e[44]=o("li",null,[n("Run "),o("code",null,"./sshrd.sh dump-blobs")],-1)),e[45]||(e[45]=o("li",null,[n("Finally, run "),o("code",null,"./sshrd.sh ssh"),n(", then run "),o("code",null,"reboot"),n(" in the SSH session. "),o("ul",null,[o("li",null,"Force rebooting will work too")])],-1))]),e[66]||(e[66]=o("p",null,[n("You can find your blob named "),o("code",null,"dumped.shsh"),n(" in the directory where you cloned the repo (usually ~/SSHRD_Script).")],-1)),e[67]||(e[67]=o("h3",{id:"using-system-info",tabindex:"-1"},[o("a",{class:"header-anchor",href:"#using-system-info","aria-hidden":"true"},"#"),n(" Using System Info")],-1)),e[68]||(e[68]=o("div",{class:"custom-container danger"},[o("p",{class:"custom-container-title"},"DANGER"),o("p",null,"This method currently does not work and will fail to get your onboard blob.")],-1)),o("ol",null,[o("li",null,[e[48]||(e[48]=n("Add the ")),o("a",S,[e[46]||(e[46]=n("https://apt.arx8x.net")),t(i)]),e[49]||(e[49]=n(" repo to your preferred ")),t(r,{to:"/package-managers"},{default:s(()=>e[47]||(e[47]=[n("package manager")])),_:1})]),e[50]||(e[50]=l('<li>Download the Tweak <code>System Info</code><img src="https://imgur.com/a/g8XZPrM" alt=""></li><li>After downloading System Info, open Settings and navigate to <code>General &gt; About</code></li><li>Scroll down to <code>ECID</code></li><li>Slide left on <code>ECID</code> and tap <code>APTicket</code></li><li>Tap <code>Submit</code></li>',5))]),o("p",null,[e[52]||(e[52]=n('A popup will appear with the message "APTicket Submitted" once finished. You can now access your blobs on ')),o("a",k,[e[51]||(e[51]=n("shsh.host")),t(i)]),e[53]||(e[53]=n("."))]),e[69]||(e[69]=o("h3",{id:"checking-blob-type",tabindex:"-1"},[o("a",{class:"header-anchor",href:"#checking-blob-type","aria-hidden":"true"},"#"),n(" Checking Blob Type")],-1)),o("p",null,[e[55]||(e[55]=n("To check what type of blobs you have, use ")),o("a",x,[e[54]||(e[54]=n("img4tool")),t(i)])]),e[70]||(e[70]=o("ol",null,[o("li",null,[n("Download the IPSW and OTA zip from the internet, then extract the BuildManifest.plist from both of the iPSWs. "),o("ul",null,[o("li",null,"Google is your friend")])]),o("li",null,[n("Run "),o("code",null,"img4tool -v IPSW_BuildManifest.plist -s blob.shsh2 and img4tool -v OTA_BuildManifest.plist -s blob.shsh2")]),o("li",null,"Scrub through the output and check which BuildManifest img4tool reported a success with.")],-1))])}var I=u(h,[["render",O],["__file","index.html.vue"]]);export{I as default};
