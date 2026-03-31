---
Title: Load
Template: subpage
---

Load
====================


Urval
-----------------------
Jag valde tre olika typer av webbsiter som alla är välkända. 
[Google](https://www.google.com/), 
[Wikipedia](https://sv.wikipedia.org/wiki/Portal:Huvudsida) &
[SVT](https://www.svt.se/).

Metod
-----------------------

För att ta reda på prestandan för respektive webbsite både för mobil och desktop använde jag Google PageSpeed Insights och DevTools. Varje sida mättes tre gånger och ett medelvärde beräknades. Innan varje ny mätning laddade jag om sidan med en sk "hard reload" för att inte webbläsarens skulle använda sina cachade objekt.

Resultat
-----------------------

<h2 style="font-style:italic">Google</h2>

<div class="columns-container container-border">
    <div class="column column-1">
        <a class ="website-screenshot" href="%base_url%/image/google-homepage.png?&save-as=jpg" target="_blank">
            <picture>
                <source media="(min-width: 768px)" srcset="%base_url%/image/google-homepage.png?w=668&save-as=jpg">
                <img src="%base_url%/image/google-homepage.png?&save-as=jpg" alt="Google Homepage">
            </picture>
        </a>
    </div>
    <div class="column column-2">
        <a class ="website-screenshot" href="%base_url%/image/google-searchres.png?save-as=jpg" target="_blank">
            <picture>
                <source media="(min-width: 768px)" srcset="%base_url%/image/google-searchres.png?width=667&crop-to-fit&area=0,0,30,0&save-as=jpg">
                <img src="%base_url%/image/google-searchres.png?save-as=jpg" alt="Google search result">
            </picture>
        </a>
    </div>
    <div class="column column-3">
        <a class ="website-screenshot" href="%base_url%/image/google-help.png?save-as=jpg" target="_blank">
            <picture>
                <source media="(min-width: 768px)" srcset="%base_url%/image/google-help.png?w=668&save-as=jpg">
                <img src="%base_url%/image/google-help.png?save-as=jpg" alt="Google help page">
            </picture>
        </a>
    </div>
</div>

Google har generellt snabba laddningstider och relativt få resurser på startsidan, men antalet resurser ökar markant på mer komplexa sidor som sökresultat och hjälpsidor. Detta påverkar både laddningstid och sidstorlek negativt. Det är några punkter som drar ner hastigheten och därmed sänker PageSpeed Insights betyg när de förekommer. Det är huvudsakligen en redirect, men det läggs även mycket krut på att behandla js-kod samt har en del js som inte används. För att minska tiden som läggs på js execution tipsar PageSpeed om att minska ner storleken på skickade JS payloads.

<div class="embed-container">
    <iframe src="https://docs.google.com/spreadsheets/d/e/2PACX-1vSLjiJggsB1b4330UlNeUYIlnu0zrWyMQ1owHjS0zm3JfqGg-TobduIu6tAr59wuZ5Id_1w5_RhdBWI/pubhtml?gid=0&amp;single=true&amp;widget=true&amp;headers=false" frameborder="0" allowfullscreen></iframe>
</div>

<h2 style="font-style:italic">Wikipedia</h2>

<div class="columns-container container-border">
    <div class="column column-1">
        <a class ="website-screenshot" href="%base_url%/image/wiki-homepage.png?&save-as=jpg" target="_blank">
            <picture>
                <source media="(min-width: 768px)" srcset="%base_url%/image/wiki-homepage.png?width=668&crop-to-fit&area=0,0,40,0&save-as=jpg">
                <img src="%base_url%/image/wiki-homepage.png?save-as=jpg" alt="Wikipedia Homepage">
            </picture>
        </a>
    </div>
    <div class="column column-2">
        <a class ="website-screenshot" href="%base_url%/image/wiki-category.png?save-as=jpg" target="_blank">
            <picture>
                <source media="(min-width: 768px)" srcset="%base_url%/image/wiki-category.png?w=668&save-as=jpg">
                <img src="%base_url%/image/wiki-category.png?save-as=jpg" alt="Wikipedia category view">
            </picture>
        </a>
    </div>
    <div class="column column-3">
        <a class ="website-screenshot" href="%base_url%/image/wiki-article.png?save-as=jpg" target="_blank">
            <picture>
                <source media="(min-width: 768px)" srcset="%base_url%/image/wiki-article.png?width=667&crop-to-fit&area=0,0,75,0&save-as=jpg">
                <img src="%base_url%/image/wiki-article.png?save-as=jpg" alt="Wikipedia article">
            </picture>
        </a>
    </div>
</div>

Wikipedia får väldigt höga betyg ifrån PageSpeed Insight, både för mobil och desktop. Eftersom den primärt innehåller text är det förståeligt att den är snabbare än tex SVT. Det är dock ett lägre betyg än de andra på startsidan för mobiler. För att höja betyget bör de se över hur de laddar in resurserna då de i nuläget orsakar viss render-blocking. Koden innehåller även css och js som inte används samt bilder där height och width inte är satta. Skulle dessa punkter åtgärdas så hade betyget gått upp och hastigheten ökat.

<div class="embed-container">
    <iframe src="https://docs.google.com/spreadsheets/d/e/2PACX-1vSLjiJggsB1b4330UlNeUYIlnu0zrWyMQ1owHjS0zm3JfqGg-TobduIu6tAr59wuZ5Id_1w5_RhdBWI/pubhtml?gid=910414315&amp;single=true&amp;widget=true&amp;headers=false" frameborder="0" allowfullscreen></iframe>
</div>

<h2 style="font-style:italic">SVT</h2>

<div class="columns-container container-border">
    <div class="column column-1">
        <a class ="website-screenshot" href="%base_url%/image/svt-homepage.png?&save-as=jpg" target="_blank">
            <picture>
                <source media="(min-width: 768px)" srcset="%base_url%/image/svt-homepage.png?width=668&crop-to-fit&area=0,0,83,0&save-as=jpg">
                <img src="%base_url%/image/svt-homepage.png?&save-as=jpg" alt="SVT Homepage">
            </picture>
        </a>
    </div>
    <div class="column column-2">
        <a class ="website-screenshot" href="%base_url%/image/svt-category.png?save-as=jpg" target="_blank">
            <picture>
                <source media="(min-width: 768px)" srcset="%base_url%/image/svt-category.png?width=668&crop-to-fit&area=0,0,79,0&save-as=jpg">
                <img src="%base_url%/image/svt-category.png?save-as=jpg" alt="SVT category view">
            </picture>
        </a>
    </div>
    <div class="column column-3">
        <a class ="website-screenshot" href="%base_url%/image/svt-article.png?save-as=jpg" target="_blank">
            <picture>
                <source media="(min-width: 768px)" srcset="%base_url%/image/svt-article.png?width=668&crop-to-fit&area=0,0,56,0&save-as=jpg">
                <img src="%base_url%/image/svt-article.png?save-as=jpg" alt="SVT article">
            </picture>
        </a>
    </div>
</div>

SVTs Performance-betyg från PageSpeed Insight är mycket bra för desktop men betydligt sämre för mobilen. Det som främst drar ner betyget är sk render-blocking resurser som pausar renderingen för att läsa in resurserna vilket gör att det tar längre tid innan användaren får se sidan. Det finns även en del js och css som inte används. Genom att ladda in resurserna mer effektivt samt se till att inte läsa in överflödig kod skulle de få ett bättre resultat.

<div class="embed-container">
    <iframe src="https://docs.google.com/spreadsheets/d/e/2PACX-1vSLjiJggsB1b4330UlNeUYIlnu0zrWyMQ1owHjS0zm3JfqGg-TobduIu6tAr59wuZ5Id_1w5_RhdBWI/pubhtml?gid=374888256&amp;single=true&amp;widget=true&amp;headers=false" frameborder="0" allowfullscreen></iframe>
</div>



Analys
-----------------------
Resultatet visar att mängden resurser och sidans storlek har stor påverkan på laddningstiden. Webbplatser med många requests och större datamängd, som SVT, har generellt längre laddningstider. Samtidigt presterar enklare webbplatser som Wikipedia mycket bättre tack vare färre resurser och mindre sidstorlek. De vanligaste förbättringsåtgärderna som identifierades är att minska mängden JavaScript och CSS, eliminera oanvänd kod, optimera hur resurser laddas (för att undvika render-blocking) samt att optimera bilder. 

Baserat på mätvärdena presterade Wikipedia bäst, följt av Google och därefter SVT. Wikipedia hade låga laddningstider, få resurser och liten sidstorlek, vilket gav höga betyg i PageSpeed Insights. Google presterade också bra men påverkades av fler resurser på vissa sidor. SVT presterade sämst i jämförelsen, främst på grund av fler resurser och större mängd innehåll.

Jag anser att en laddningstid under 2 sekunder är snabb. De flesta sidor från Google och Wikipedia ligger under denna gräns och är snabba. Flera av SVT:s sidor ligger närmare eller över gränsen, vilket gör att det ibland känns trögt.

Referenser
-----------------------

Övrigt
-----------------------
Jag genomförde uppgiften på egen hand. 
