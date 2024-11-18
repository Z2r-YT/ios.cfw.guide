import{_ as d}from"./checkra1n.ace0089d.js";import{_ as u,r as t,o as p,c,e as a,a as e,b as o,d as n,w as r}from"./app.a8d8f110.js";const m={},v={href:"https://checkra.in",target:"_blank",rel:"noopener noreferrer"},g={href:"https://github.com/checkra1n/BugTracker/files/6429930/Pongo.zip",target:"_blank",rel:"noopener noreferrer"},b={href:"https://www.icloud.com/shortcuts/8d4e206d568d4aadb624b2a6191a3771",target:"_blank",rel:"noopener noreferrer"};function f(z,i){const l=t("ExternalLinkIcon"),s=t("router-link");return p(),c("div",null,[i[24]||(i[24]=a('<div class="custom-container warning"><p class="custom-container-title">WARNING</p><p>Se utilizzi un computer con una CPU AMD Ryzen, probabilmente riscontrerai problemi. Se si verificano problemi, \xE8 necessario utilizzare un Mac o un computer con una CPU Intel per seguire questa guida.</p></div><div class="custom-container warning"><p class="custom-container-title">WARNING</p><p>Se si utilizza un cavo USB-C a Lightning per eseguire questo processo, \xE8 possibile riscontrare problemi ad entrare in modalit\xE0 DFU</p><p>In caso di problemi, usa un cavo USB-A a Lightning e, se necessario, usa anche un adattatore USB-C a USB-A.</p></div><div class="custom-container danger"><p class="custom-container-title">DANGER</p><p>Questa \xE8 una pagina guida altamente sperimentale, possono essere presenti cose non direttamente menzionate che devono essere eseguite per seguire questa guida. Di conseguenza, si consiglia vivamente di usare un altro tipo di computer se possibile.</p></div><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>Devi aver abilitato la modalit\xE0 sviluppatore sul tuo dispositivo ChromeOS per seguire questa guida</p></div><h2 id="download-chromeos" tabindex="-1"><a class="header-anchor" href="#download-chromeos" aria-hidden="true">#</a> Download (ChromeOS)</h2>',5)),e("ul",null,[e("li",null,[i[1]||(i[1]=o("L'ultima versione di ")),e("a",v,[i[0]||(i[0]=o("checkra1n")),n(l)])]),e("li",null,[i[3]||(i[3]=o("La versione personalizzata di ")),e("a",g,[i[2]||(i[2]=o("pongoOS")),n(l)])])]),i[25]||(i[25]=a('<p><img src="'+d+'" alt="Uno screenshot dell&#39;applicazione checkra1n"></p><h2 id="consentire-l-esecuzione-di-checkra1n" tabindex="-1"><a class="header-anchor" href="#consentire-l-esecuzione-di-checkra1n" aria-hidden="true">#</a> Consentire l&#39;esecuzione di checkra1n</h2><ol><li>Sposta il binary di checkra1n che viene scaricato su <code>/usr/local/bin</code><ul><li>Ci\xF2 pu\xF2 essere fatto facendo quanto segue: <ul><li>premi <code>Ctrl</code> + <code>Alt</code> + <code>T</code></li><li>esegui <code>shell</code></li><li>esegui <code>mv ~/Downloads/checkra1n /usr/local/bin/</code></li></ul></li></ul></li><li>Esegui il seguente comando nel terminale: <code>sudo mount -o remount,exec /tmp</code><ul><li>Dovrai farlo ogni volta che riavvii il tuo dispositivo ChromeOS</li></ul></li><li>Ogni volta che hai bisogno di eseguire il jailbreak su ChromeOS, \xE8 necessario collegare il dispositivo e entrare in modalit\xE0 di recupero manualmente.</li></ol><h2 id="installare-checkra1n" tabindex="-1"><a class="header-anchor" href="#installare-checkra1n" aria-hidden="true">#</a> Installare checkra1n</h2>',4)),e("ol",null,[i[10]||(i[10]=a("<li>Apri il file <code>pongoOS.zip</code>, seleziona <code>PongoConsolidated.bin</code> ed estrailo. <ul><li>Prendi nota di dove lo estrai</li></ul></li><li>Esegui il file binary di <code>checkra1n</code> in modalit\xE0 CLI usando la versione modificata di pongoOS nel terminale utilizzando <code>TERM=linux sudo checkra1n -c -k [percorso di PongoConsolidated.bin]</code></li><li>Collega il tuo dispositivo iOS al computer</li>",3)),e("li",null,[i[5]||(i[5]=o("Ora vedrai le istruzioni su come riavviare il tuo dispositivo in ")),n(s,{to:"/faq/#what-is-dfu-mode"},{default:r(()=>i[4]||(i[4]=[o("modalit\xE0 DFU")])),_:1}),i[6]||(i[6]=o(", clicca ")),i[7]||(i[7]=e("code",null,"Start",-1)),i[8]||(i[8]=o(" per iniziare ")),i[9]||(i[9]=e("ul",null,[e("li",null,"Segui le istruzione finch\xE9 il tuo dispositivo non mostra uno schermo nero")],-1))]),i[11]||(i[11]=e("li",null,"Dopo ci\xF2, checkra1n dovrebbe installarsi automaticamente",-1))]),i[26]||(i[26]=e("p",null,"Il tuo dispositivo iOS dovrebbe adesso riavviarsi.",-1)),i[27]||(i[27]=e("div",{class:"custom-container tip"},[e("p",{class:"custom-container-title"},"TIP"),e("p",null,"Anche se \xE8 possibile installare Cydia a questo punto della guida invece di continuare con i passaggi di Odysseyra1n, non lo consigliamo a causa del fatto che:"),e("ul",null,[e("li",null,"Le persone tendono generalmente ad avere pi\xF9 stabilit\xE0 utilizzando Odysseyra1n invece di Cydia"),e("li",null,"Alcune funzionalit\xE0 facili da usare (come shshd, che salva automaticamente i blobs mentre si \xE8 jailbroken) non sono disponibili"),e("li",null,"Alcuni tweaks possono richiedere o essere meglio testati con il software che Odysseyra1n utilizza, piuttosto che il software che viene utilizzato quando si sceglie di installare Cydia")])],-1)),i[28]||(i[28]=e("h2",{id:"lo-script-di-odysseyra1n",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#lo-script-di-odysseyra1n","aria-hidden":"true"},"#"),o(" Lo script di Odysseyra1n")],-1)),e("ol",null,[i[17]||(i[17]=e("li",null,"Apri questa pagina (ios.cfw.guide/installing-odysseyra1n-chromeos-a8x-a9x) sul tuo dispositivo digitando questo URL su Safari",-1)),e("li",null,[i[13]||(i[13]=o("Clicca su ")),e("a",b,[i[12]||(i[12]=o("questo hyperlink")),n(l)]),i[14]||(i[14]=o(" sul tuo dispositivo e premi ")),i[15]||(i[15]=e("code",null,"Ottieni scorciatoia",-1)),i[16]||(i[16]=e("ul",null,[e("li",null,"Se necessario, scarica l'app ComandiRapidi.")],-1))]),i[18]||(i[18]=e("li",null,[o("Quando richiesto, scegli "),e("code",null,"Apri")],-1)),i[19]||(i[19]=e("li",null,[o("Se necessario, premi l'icona "),e("code",null,"Procursus Bootstraper"),o(" e clicca sull'icona Esegui.")],-1)),i[20]||(i[20]=e("li",null,"Dai OK a tutti gli avvisi che vengono visualizzati",-1))]),i[29]||(i[29]=e("div",{class:"custom-container tip"},[e("p",{class:"custom-container-title"},"TIP"),e("p",null,[o("Se vieni avvisato circa un Comando Rapido non attendibile, esegui un altro Comando Rapido, quindi apri "),e("code",null,"Impostazioni"),o(", vai su "),e("code",null,"Comandi Rapidi"),o(", e attiva "),e("code",null,"Consenti Comandi Rapidi non attendibili")])],-1)),e("p",null,[i[22]||(i[22]=o("Adesso dovresti essere jailbroken con Sileo installato nella home screen. \xC8 possibile utilizzare Sileo per installare ")),n(s,{to:"/faq/#what-are-tweaks"},{default:r(()=>i[21]||(i[21]=[o("tweaks")])),_:1}),i[23]||(i[23]=o(", temi, pacchtti e altro ancora."))])])}var C=u(m,[["render",f],["__file","index.html.vue"]]);export{C as default};
