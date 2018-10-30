# 99verhalen

## Overzichtspagina
Op de overzichtspagina heb ik verschillende micro interacties gemaakt met javascript, deze zal ik hieronder toelichten.

### Filter
Op de mobiele versie van de overzichtspagina wordt een deel van de filters niet getoond. Dit vooral om veel ruimte te besparen. Als de gebruiker op toon meer klikt wordt er via JavaScript een class toevoegd waardoor alle opties uitklappen. Als er vervolgens op toon minder word geklikt wordt dit weer ingeklapt.

Ook heb ik bij filters de zoekresultaten laten optellen en deze laten verschijnen in een button.  Hiervoor haal ik in javascript alle velden op en laat vervolgens de values van de geselecteerde velden bij elkaar optellen. Om de error state te tonen heb ik in javascript aangegeven dat als er op de checkbox 'fictie' word geklikt, de download button veranderd in "geen resultaten".

### Download
Het is de bedoeling dat de gebruikers een verhaal kunnen downloaden. Om dit na te bootsen heb ik in mijn html de 4 iconen geplaatst die ik hiervoor nodig had. De download knop staat meteen al op actief en is dus ook zichtbaar. Ik heb een var gemaakt van de download knoppen en hier een click event op gezet. Als hier vervolgens op wordt geklikt word het downlaod icoon verwijderd en het laad icoon toegevoegd. Op het laad icoon heb ik een timeout gezet van 3 seconden en deze zal dus na die 3 seconden weer worden verwijderd en worden vervangen met een Check icoontje (dat het is gedownload), of een error icoon. Dit heb ik met een math random gedaan. Als het getal boven de 0.2 is zal het succes zijn en onder de 0.2 een error. Wanneer er op het error icoon word klikt komt er een pop-up melding.

## Verhaal pagina
In mijn ontwerp voor de verhalenpagina is het de bedoeling dat bij elke scroll het verhaal een kwartslag draait en de blurtekst wisselt. Omdat scroll heel erg lastig was om uit te voeren heb ik dit met clicks gedaan. Door het tellen van het aantal clicks dat de gebruiker heeft gedaan op de verhaal pagina, weet ik bij welke stap hij/zij is en wat er dan moet gebeuren. Per click is er een set van acties. Dit herhaalt zich tot de gebruiker aan het eind van het verhaal is.

Om te zorgen dat de gebruiker op alle 3 de secties kan klikken heb ik 3 event listeners aangemaakt, deze voeren allemaal de klik functie uit.

## Styling
De opdracht was om zo min mogelijk onnodige classes en divs te gebruiken en hier heb ik dan ook zeker mijn best voor gedaan. Om toch de elementen goed aan te kunnen spreken heb ik op elke pagina de body een id gegeven om toch nog wat overzicht te kunnen houden in mijn CSS. 

Ik heb in mijn website het element <span></span> vooral gebruikt om elementen die ik op een bepaalde device wilt laten verdwijnen. 

Div's heb ik voornamelijk gebruikt als ik er met de styling echt niet op een andere manier uit kwam. Dit is dus echt met een doel bereikt en niet omdat ik een element nodig had.

Ook heb ik een aantal classes staan. 
Dit zijn:

Deze classes zijn toegevoegd aan de iconen voor het downloaden van een verhaal om in js makkelijker aan te kunnen spreken en te kunnen toevoegen/verwijderen/vervangen:

    .Error, .succes, .download, .laden

Om veel herhalende code te vermijden heb ik een class waar een styling op staat voor de maximale uitlijning zodat sommige delen van de pagina dezelfde uitlijning behouden als de main.

    .container
    
Op de overzichtspagina wordt als eerst article voor alle verhalen een aanbevolen verhalenbundel getoond. Deze heb ik een class gegeven omdat het op dit moment wel een first-of-type is die deze styling heeft maar als de filterresultaten worden getoond zal het aanbevolen blok niet meer aanwezig zijn en neemt een ander article deze styling over wat niet de bedoeling is

    .aanbevolen
