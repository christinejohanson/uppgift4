### Umeå Universitet Webbdesign med JavaScript och Document Object Model 7,5hp HT-23.

#### Uppgift 4 - Dynamiskt visade och dolda sidkomponenter

Syftet med denna uppgift är att lära sig använda JavaScript för att förändra och förbättra användbarheten hos en redan fungerande webbsida.

Index.html med en uppsättning recept, men antalet recept är medvetet ganska stort för att skapa en sida som lider av dålig översikt och 
saknar hjälpmedel för att navigera inom sidan. 

Meny.js ska innehålla kod för att skapa meny-rubriker för alla recept på siten med ankarlänkar till respektive recept och ändringar får en endast ske i denna fil. 

##### G betyg

En ul-lista ska skapas för att användas som behållare för ett antal menyval där var och ett motsvarar ett recept. Ett menyval utgörs av ett li-element som i sin tur ska innehålla ett a-element. Menyvalets text ska vara identiskt med varje recepts rubrik och länka till det associerade receptet med en så kallad ankarlänk.

Ul-listan ska placeras i det tomma div-element med klassen .contentarea som ingår som barn till det div-element som har id=”receptmeny”.

Menyns innehåll ska baseras på sidans innehåll. Annorlunda uttryckt ska man kunna ta bort eller lägga till några recept utan att menyn saknar eller innehåller överflödiga menyval. 

Du ska infoga kommentarer i koden som på ett övertygande sätt förklarar hur din kod läser och manipulerar DOM-trädet för att skapa menyn. 

##### VG betyg

Utöver samtliga punkter som krävs för ett godkänt betyg ska du tillföra ytterligare JavaScript-funktionalitet som förhöjer användarupplevelsen. 

Sökning med förslag.
Användaren ska kunna söka i innehållet bland rubrikerna för de befintliga recepten på sidan. Under sökrutan ska förslag på recept som matchar söktermen dyka upp. Användaren ska därefter kunna klicka på något av receptförslagen och direkt föras till det aktuella receptet – precis på samma sätt som för menyn i G-nivån.

Mjuk rullning.
När användaren klickar på en ankarlänk i menyn ska webbläsaren inte hoppa omedelbart till receptet, utan istället rulla till receptet med hjälp av en mjuk animation.
