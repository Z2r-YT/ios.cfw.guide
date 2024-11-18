import{_ as u}from"./Odysseyn1x.f106730e.js";import{_ as d,r,o as p,c,a as e,b as o,d as l,w as s,e as t}from"./app.a8d8f110.js";const m={},v={class:"custom-container warning"},g={href:"https://github.com/raspberryenvoie/odysseyn1x/releases",target:"_blank",rel:"noopener noreferrer"},y={href:"https://github.com/raspberryenvoie/odysseyn1x/releases/tag/v2.12-checkra1n-0.10.1",target:"_blank",rel:"noopener noreferrer"},b={href:"https://github.com/ventoy/Ventoy/releases",target:"_blank",rel:"noopener noreferrer"},f={class:"custom-container tip"},S={href:"https://www.icloud.com/shortcuts/8d4e206d568d4aadb624b2a6191a3771",target:"_blank",rel:"noopener noreferrer"};function h(k,i){const n=r("router-link"),a=r("ExternalLinkIcon");return p(),c("div",null,[i[32]||(i[32]=e("div",{class:"custom-container danger"},[e("p",{class:"custom-container-title"},"DANGER"),e("p",null,"Se si sta cercando di utilizzare un software Virtual Machine di qualche tipo da Windows (es. Virtualbox, VMWare, Sottosistema Windows per Linux, ecc) non si avr\xE0 successo seguendo questa guida, e avrai bisogno di un supporto avviabile come una chiavetta USB e di seguire i passaggi seguenti.")],-1)),i[33]||(i[33]=e("div",{class:"custom-container warning"},[e("p",{class:"custom-container-title"},"WARNING"),e("p",null,"Se utilizzi un computer con una CPU AMD Ryzen, probabilmente riscontrerai problemi. Se si verificano problemi, \xE8 necessario utilizzare un Mac o un computer con una CPU Intel per seguire questa guida.")],-1)),e("div",v,[i[5]||(i[5]=e("p",{class:"custom-container-title"},"WARNING",-1)),e("p",null,[i[1]||(i[1]=o("I dispositivi A7 probabilmente falliranno nell'eseguire il jailbreak con Odysseyn1x su Linux, di conseguenza, dovrai usare una versione di Odysseyn1x pi\xF9 vecchia e scollegare e ricollegare rapidamente il tuo dispositivo una volta che vedrai l'avviso ")),i[2]||(i[2]=e("code",null,"Right Before Trigger",-1)),i[3]||(i[3]=o(". Si consiglia vivamente di seguire ")),l(n,{to:"/installing-chimera"},{default:s(()=>i[0]||(i[0]=[o("Installare Chimera")])),_:1}),i[4]||(i[4]=o("."))])]),e("p",null,[i[7]||(i[7]=o("Odysseyra1n is a ")),l(n,{to:"/types-of-jailbreak/#semi-tethered-jailbreaks"},{default:s(()=>i[6]||(i[6]=[o("semi-tethered jailbreak")])),_:1}),i[8]||(i[8]=o(", meaning it requires a PC to re-apply the exploit after a reboot. Click the link to learn more."))]),i[34]||(i[34]=e("p",null,"Odysseyn1x \xE8 una distro Linux avviabile tramite live-booting che consente di eseguire rapidamente checkra1n su un dispositivo compatibile. checkra1n \xE8 un tool in grado di eseguire il Jailbreak di milioni di dispositivi iOS con un SoC A7-A11 su firmware 12.0-14.8.1.",-1)),i[35]||(i[35]=e("p",null,"After installing checkra1n, we'll be using a script to install Odysseyra1n. This replaces important parts of the jailbreak with modern and fast alternatives.",-1)),i[36]||(i[36]=e("p",null,"I dispositivi A11con iOS 14 non consentono di utilizzare la funzionalit\xE0 SEP mentre si \xE8 jailbroken. Le funzionalit\xE0 SEP comprendono funzioni come un codice di sblocco, Face ID/Touch ID e Apple Pay.",-1)),i[37]||(i[37]=e("h2",{id:"requisiti",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#requisiti","aria-hidden":"true"},"#"),o(" Requisiti")],-1)),e("ul",null,[i[16]||(i[16]=e("li",null,[o("Unit\xE0 USB da 256MB o superiore "),e("ul",null,[e("li",null,"Se non hai un'unit\xE0 USB, ma hai un'altra forma di hardware rimovibile supportato (es. Un CD o DVD), \xE8 possibile utilizzarlo invece di un'unit\xE0 USB")])],-1)),e("li",null,[i[14]||(i[14]=o("L'ultima versione di ")),e("a",g,[i[9]||(i[9]=o("Odysseyn1x")),l(a)]),e("ul",null,[e("li",null,[i[11]||(i[11]=o("Se sei su un dispositivo A7, dovresti utilizzare la versione v2.12-checkra1n-0.10.1 di ")),e("a",y,[i[10]||(i[10]=o("Odysseyn1x")),l(a)])]),i[12]||(i[12]=e("li",null,[o('Per computer a 64 bit, scarica la versione "AMD64" '),e("ul",null,[e("li",null,`Non importa se si possiede un processore AMD o meno, "AMD64" \xE8 solo il nome dell'architettura`)])],-1)),i[13]||(i[13]=e("li",null,'Per computer a 32 bit, scarica la versione "i686"',-1))])]),e("li",null,[e("a",b,[i[15]||(i[15]=o("Ventoy")),l(a)])])]),i[38]||(i[38]=t('<p><img src="'+u+'" alt="Uno screenshot del menu Odysseyn1x"></p><h2 id="installare-ventoy" tabindex="-1"><a class="header-anchor" href="#installare-ventoy" aria-hidden="true">#</a> Installare Ventoy</h2><ol><li>Scarica ed estrai il contenuto del file <code>Ventoy.zip</code></li><li>Inserisci l&#39;unit\xE0 USB se non l&#39;hai gi\xE0 fatto e apri il file <code>Ventoy2Disk.exe</code></li><li>Seleziona l&#39;unit\xE0 USB dalla quale vuoi avviare Odysseyn1x <ul><li>Questa unit\xE0 USB verr\xE0 completamente cancellata</li><li>Assicurati di eseguire il backup di tutti i dati importanti in anticipo</li></ul></li><li>Fai clic su <code>Install</code> e conferma di essere d&#39;accordo con il cancellare l&#39;unit\xE0 USB <ul><li>Non rimuovere l&#39;unit\xE0 USB fino a quando il processo non sar\xE0 completato</li></ul></li><li>Una volta installato, copia il file iso di Odysseyn1x che hai scaricato sul drive USB</li></ol><h2 id="avviare-odysseyn1x" tabindex="-1"><a class="header-anchor" href="#avviare-odysseyn1x" aria-hidden="true">#</a> Avviare Odysseyn1x</h2><ol><li>Riavvia il pc, vai nelle impostazioni del BIOS e disabilita il Secure Boot, quindi entra nel boot picker e seleziona l&#39;unit\xE0 USB da avviare <ul><li>Questo \xE8 diverso per ogni computer</li><li>Cerca il tuo PC o la marca della scheda madre per scoprire come entrare nelle impostazioni del BIOS se non sei sicuro</li></ul></li><li>Premi Invio una volta che visualizzi la schermata di Ventoy per avviare Odysseyn1x</li></ol><h2 id="eseguire-checkra1n" tabindex="-1"><a class="header-anchor" href="#eseguire-checkra1n" aria-hidden="true">#</a> Eseguire checkra1n</h2><div class="custom-container warning"><p class="custom-container-title">WARNING</p><p>Se si utilizza un cavo USB-C a Lightning per eseguire questo processo, \xE8 possibile riscontrare problemi ad entrare in modalit\xE0 DFU</p><p>In caso di problemi, usa un cavo USB-A a Lightning e, se necessario, usa anche un adattatore USB-C a USB-A.</p></div>',7)),e("ol",null,[i[23]||(i[23]=t("<li>Una volta caricato odysseyn1x, seleziona <code>checkra1n</code><ul><li>Se sei su un dispositivo A8X o A9X, seleziona l&#39;opzione <code>checkra1n (A8X/A9X)</code>.</li><li>Se sei su un dispositivo A11, dovrai andare su <code>Options</code> e poi abilitare l&#39;opzione <code>Skip A11 BPR Check</code></li><li>Se sei su iOS 14.6 o successivo, dovrai andare su <code>Options</code> e abilitare l&#39;opzione <code>Allow Untested Versions</code></li></ul></li><li>Clicca <code>Start</code> e segui le istruzioni a schermo</li>",2)),e("li",null,[i[18]||(i[18]=o("Ora vedrai le istruzioni su come riavviare il tuo dispositivo in ")),l(n,{to:"/faq/#what-is-dfu-mode"},{default:s(()=>i[17]||(i[17]=[o("modalit\xE0 DFU")])),_:1}),i[19]||(i[19]=o(", clicca ")),i[20]||(i[20]=e("code",null,"Start",-1)),i[21]||(i[21]=o(" per iniziare ")),i[22]||(i[22]=e("ul",null,[e("li",null,"Segui le istruzione finch\xE9 il tuo dispositivo non mostra uno schermo nero")],-1))]),i[24]||(i[24]=e("li",null,"Una volta che il dispositivo si avvia, \xE8 possibile uscire da checkra1n, ma non spegnere il computer",-1))]),i[39]||(i[39]=e("div",{class:"custom-container tip"},[e("p",{class:"custom-container-title"},"TIP"),e("p",null,"Anche se \xE8 possibile installare Cydia a questo punto della guida invece di continuare con i passaggi di Odysseyra1n, non lo consigliamo a causa del fatto che:"),e("ul",null,[e("li",null,"Le persone tendono generalmente ad avere pi\xF9 stabilit\xE0 utilizzando Odysseyra1n invece di Cydia"),e("li",null,"Alcune funzionalit\xE0 facili da usare (come shshd, che salva automaticamente i blobs mentre si \xE8 jailbroken) non sono disponibili"),e("li",null,"Alcuni tweaks possono richiedere o essere meglio testati con il software che Odysseyra1n utilizza, piuttosto che il software che viene utilizzato quando si sceglie di installare Cydia")])],-1)),i[40]||(i[40]=e("h2",{id:"lo-script-di-odysseyra1n",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#lo-script-di-odysseyra1n","aria-hidden":"true"},"#"),o(" Lo script di Odysseyra1n")],-1)),e("div",f,[i[28]||(i[28]=e("p",{class:"custom-container-title"},"TIP",-1)),e("p",null,[i[26]||(i[26]=o("Se preferisci, invece di eseguire lo script sul tuo computer, puoi eseguire lo script Odysseyra1n utilizzando la ")),e("a",S,[i[25]||(i[25]=o("scorciatoia")),l(a)]),i[27]||(i[27]=o(" aprendo questa pagina dal tuo dispositivo e poi cliccare il link della scorciatoia."))])]),i[41]||(i[41]=t('<p>I seguenti passaggi devono essere eseguiti solo una volta e sono opzionali ma altamente consigliati per un&#39;esperienza pi\xF9 fluida con un bootstrap moderno.</p><ol><li>Sblocca il tuo dispositivo</li><li>Assicurati che il tuo computer sia autorizzato dal tuo dispositivo</li><li>Seleziona <code>Odysseyra1n</code> su Odysseyn1x</li><li>Sileo dovrebbe installarsi sul dispositivo</li><li>Non chiudere Odysseyn1x siccome sar\xE0 necessario ri-eseguire il jailbreak fra pochi minuti</li></ol><div class="custom-container danger"><p class="custom-container-title">DANGER</p><p>After installing Odysseyra1n, <strong>do not</strong> install Cydia from the Loader app.</p></div>',3)),e("p",null,[i[30]||(i[30]=o("You should now be jailbroken with Sileo installed on your home screen. You can use Sileo to install ")),l(n,{to:"/faq/#what-are-tweaks"},{default:s(()=>i[29]||(i[29]=[o("tweaks")])),_:1}),i[31]||(i[31]=o(", themes, packages and more."))]),i[42]||(i[42]=t('<p>Before you can start installing anything else, you first need to install a few necessary programs.</p><h2 id="installing-packages" tabindex="-1"><a class="header-anchor" href="#installing-packages" aria-hidden="true">#</a> Installing packages</h2><ol><li>Open the newly installed Sileo application</li><li>Go to the &quot;Packages&quot; tab</li><li>Tap &quot;Upgrade All&quot; if there are any updates <ul><li>Do not install yet</li></ul></li><li>Go to the &quot;Search&quot; tab</li><li>Search for the &quot;libhooker&quot; package</li><li>Tap the &quot;Get&quot; button</li><li>Tap on the &quot;Queued&quot; bar at the bottom of your screen</li><li>Tap &quot;Confirm&quot;</li><li>Once finished, tap &#39;Restart SpringBoard&#39;</li></ol>',3))])}var A=d(m,[["render",h],["__file","index.html.vue"]]);export{A as default};
