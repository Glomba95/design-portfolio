---
Title: Example
Template: subpage
---

# Example reportstructure


## Färgpalett
När du dokumenterar en färgpalett så kan du lägga den direkt i dokumentet via HTML-kod. Ungefär så här, i en tabell till exempel.

<table style="border-spacing: 4px; border-collapse: separate">
<tr>
<td style="height: 50px; width: 50px; background-color: #ef0" title="yellow">
<td style="height: 50px; width: 50px; background-color: #0ef">
<td style="height: 50px; width: 50px; background-color: #f0e">
</tr>
</table>

## Rapportstruktur

När du skriver din rapport så kan du följa denna rubrikstruktur. Det är en struktur som är vanligt använd i rapportsammanhang (och i ditt kommande examensarbete).

```markdown
Titel på rapporten
=======================

Skriv en eller två rader om vad uppgiften handlar om.

Urval
-----------------------

Berätta vilka webbplatser du valt att undersöka och varför eller hur du gick tillväga när du gjorde ditt urval.

Metod
-----------------------

Berätta kort om din "metod", hur du gör för att utföra undersökningen. Berätta om du använder något speciellt verktyg.

Resultat
-----------------------

Dokumentera dina resultat från din studie. Berätta vad du kom fram till, vilka resultat du hittade och observerade.

Analys
-----------------------

Diskutera och analysera de resultaten du fann.

Referenser
-----------------------

Ange de eventuella referenser du använder dig av, om några.

Övrigt
-----------------------

Skriv ditt eget namn samt vilka gruppmedlemmar som deltog i att författa rapporten.
```

Strukturen är inte absolut nödvändig, se den som en möjlighet att träna på god struktur av rapportskrivning.

## Krav
1. Välj ut 3 webbplatser som skall analyseras, berätta hur du gjorde urvalet.

2. Beskriv vilka verktyg du använde och hur du utförde arbetet för att samla in dina mätvärden. Det blir en kort beskrivning av din metod.

3. Skapa ett Excel-ark, till exempel Google Kalkylark, för att spara dina mätningar i. För allt du nu skall mäta, dokumentera det i Excel-arket. Länka till ditt Excel-ark så man ser rådatan.
    - Embedda din data i din analys. För att göra detta på Google Sheets trycker du på “File -> Publish to the web -> Embed”. Lägg en klass på din iframe och ändra bredden/höjden så det passar din analys.

4. För varje webbplats, gör följande:
    1. Ta en snapshot (bild) på webbplatsen.
    2. Välj ut tre sidor (bifoga länkarna) som skall mätas med Google Pagespeed. Mät på både Mobile och Desktop. Notera de betyg som ges.
    3. För varje sida, mät med devtools flik networks och notera sidans laddningstid tillsammans med antalet resurser som laddas samt sidans totala storlek. För varje sida gör mätningen tre gånger och ta snittet av mätvärdena.
    4. Diskutera och skriv en mening om hur webbplatsen kan förbättra sig.
5. Sammanfatta ditt resultat i en analys och skriv om vilka de vanligaste förbättringsåtgärderna verkar vara för ditt urval av webbplatser.

6. Rangordna dina webbplatser baserat på deras mätvärden och utse en vinnare i testet och kommentera resultatet.

7. Bestäm en gräns för absolut laddningstid som du själv uppfattar som snabb eller långsam webbplats. Skriv en mening om hur ditt urval av webbplatser klarar ditt gränsvärde och hur du upplever webbplatsernas snabbhet, rent generellt, i ditt urval.

8. I slutet av rapporten skriver du ett eget stycke med namnen på dina gruppmedlemmar.

