"use client";

import { useEffect, useState } from "react";
import Navbar from "./Navbar"; // Adjust if path differs
import CollapsibleSection from "./CollapsibleSection";

const sections = [
  {
    id: "Faalangst",
    title: "Faalangst",
    subsections: [
      { title: "Inleiding", content: "Faalangst is een probleem dat vaak voorkomt bij jongeren en zeker in schoolcontexten sterk naar voren komt. Het verwijst naar de intense angst om te falen in situaties waarin een prestatie geleverd moet worden. Dit kan gaan om examens, spreekbeurten, sportwedstrijden of zelfs sociale interacties waarbij men bang is om negatief beoordeeld te worden. Hoewel een beetje spanning normaal is, kan faalangst het functioneren van een jongere ernstig belemmeren als het te vaak of te hevig voorkomt." },
      { title: "Wat is het?", content: "Faalangst is een vorm van angst die optreedt wanneer iemand zich bedreigd voelt in een situatie waarin prestaties verwacht worden. De persoon denkt op voorhand al dat hij of zij zal falen en kan hierdoor blokkeren of zich volledig terugtrekken. Het is belangrijk om te beseffen dat faalangst niet altijd zichtbaar is: sommige leerlingen verbergen het achter perfectionisme, anderen worden stil en onzichtbaar in de klas. Cognitieve faalangst komt het meest voor in schoolcontext: hierbij vreest een leerling dat hij zal falen op een toets of opdracht, ondanks een degelijke voorbereiding." },
      { title: "Hoe herken je het?", content: "Faalangst kent een breed scala aan symptomen. Lichamelijk kunnen jongeren last hebben van zweten, trillen, hartkloppingen, buikpijn of kortademigheid. Mentaal treden vaak negatieve automatische gedachten op zoals 'ik kan dit niet', 'ik zal dom overkomen' of 'ik ga weer falen'. Deze gedachten zorgen voor spanning, concentratieverlies en prestatievermindering. Daarnaast kan er sprake zijn van vermijdingsgedrag: het uitstellen van studeren, geen spreekbeurten durven geven of zelfs school vermijden. Sommige jongeren krijgen black-outs of paniekaanvallen vlak voor een opdracht of toets. Ze weten op dat moment niets meer, ook al hadden ze de leerstof goed ingestudeerd." },
      {
        title: "Welke aanpak is mogelijk?",
        content: `CGT bij faalangst

Cognitieve gedragstherapie (CGT) helpt jongeren om faalangst aan te pakken door te werken aan hun gedachten, gevoelens en gedrag. Dit werkblad biedt uitleg bij de 6 belangrijkste stappen van CGT bij faalangst, met ruimte om in gesprek te gaan en oefeningen te koppelen aan hulpmiddelen zoals een positief dagboekje of reflectieblad.

1. Negatieve gedachten herkennen
Jongeren leren eerst bewust worden van de gedachten die opkomen bij spannende situaties zoals toetsen, spreekbeurten of sportwedstrijden. Ze schrijven deze gedachten op of vertellen ze hardop. Typische faalangstgedachten zijn bijvoorbeeld: “Ik kan dit niet”, “Ik ga falen” of “Iedereen zal me uitlachen”. Gebruik het reflectieblad om te noteren wanneer deze gedachten opduiken.

2. Gedachten uitdagen
Vervolgens leren jongeren hun negatieve gedachten kritisch te onderzoeken. Ze stellen zichzelf vragen zoals: ‘Is dit echt waar?’, ‘Wat is het ergste dat kan gebeuren?’ of ‘Wat zou ik zeggen tegen een vriend(in) die dit denkt?’ Dit helpt hen beseffen dat gedachten geen feiten zijn.

3. Helpende gedachten formuleren
Nu vervangen ze de negatieve gedachten door realistischere, positievere alternatieven. Bijvoorbeeld: ‘Ik mag fouten maken, dat hoort bij leren’ of ‘Ik doe mijn best en dat is genoeg’. Deze helpende gedachten kunnen dagelijks worden opgeschreven in het positief dagboekje als affirmatie of motivatie.

4. Spannende situaties stap voor stap oefenen
Jongeren vermijden vaak wat hen bang maakt. In deze stap leren ze moeilijke situaties geleidelijk op te bouwen. Bijvoorbeeld: eerst oefenen voor zichzelf, dan voor een vriend(in), dan voor een klein groepje. In het reflectieblad kunnen ze hun ervaringen en gevoelens na elke stap bijhouden.

5. Ontspanningstechnieken aanleren
Om de fysieke spanning te verminderen, leren jongeren technieken zoals buikademhaling, yoga, mindfulness,…. Voor het oefenen van deze technieken kan dagelijks een kort moment worden ingepland, eventueel met reflectie in het dagboek.

6. Positieve focus versterken
Tot slot wordt de aandacht bewust verlegd naar wat goed gaat. Het positief dagboekje helpt hierbij: jongeren schrijven 1 tot 3 dingen op die goed gingen, waar ze trots op zijn of wat hen blij maakte. Dit versterkt hun zelfvertrouwen en veerkracht.`

      },
      { title: "Wanneer hulp inschakelen?", content: "Als de faalangst zo ernstig is dat het het dagelijks leven belemmert – bijvoorbeeld als een leerling school vermijdt, constant huilt of slaapproblemen heeft – is professionele hulp aangewezen. Een gesprek met een CLB-medewerker, leerlingbegeleider of psycholoog kan inzicht geven in de oorzaak van de angst. Vaak wordt er gewerkt met cognitieve gedragstherapie waarbij jongeren leren om hun negatieve gedachten uit te dagen en anders te denken over falen. Soms wordt er ook gewerkt in groepjes met andere jongeren die faalangst ervaren, zodat ze leren dat ze niet alleen zijn. Vroegtijdige hulp is belangrijk om te voorkomen dat faalangst leidt tot schooluitval, burn-out of depressie." },
      { title: "Wist u dat...?", content: "Bij faalangst neemt het angstcentrum in je hersenen, de amygdala, de controle over. Hierdoor functioneert je denkvermogen tijdelijk minder goed, wat leidt tot black-outs of paniek. Je lichaam zit dan in een vecht-of-vluchtmodus, ook al is er geen echt gevaar. Door je hersenen te trainen met ademhaling of meditatie, kun je leren om rustiger te reageren op zulke situaties." },
    ],
  },
  {
    id: "Stress",
    title: "Stress",
    subsections: [
      { title: "Inleiding", content: "Stress is een veelvoorkomend fenomeen, ook bij jongeren. Het betreft een natuurlijke reactie van het lichaam en de geest op situaties die als uitdagend of bedreigend worden ervaren. Hoewel stress soms functioneel is en kan aanzetten tot actie, wordt het problematisch wanneer deze te frequent of te intens voorkomt." },
      { title: "Wat is het precies?", content: "Stress ontstaat wanneer het lichaam zich voorbereidt op actie bij een vermeende dreiging. Hierbij komen stresshormonen vrij zoals adrenaline en cortisol, die het lichaam in een staat van paraatheid brengen. Dit mechanisme was in vroegere tijden essentieel voor overleving. Vandaag zijn de bedreigingen vaak mentaal of sociaal van aard, zoals examens, sociale druk of conflicten. Wanneer deze toestand chronisch wordt, raken lichaam en geest uit balans." },
      { title: "Hoe is het te herkennen?", content: "Stress uit zich zowel lichamelijk als psychisch. Veelvoorkomende klachten zijn gespannen spieren, hoofdpijn, vermoeidheid, concentratieproblemen, slaapproblemen, piekergedachten en prikkelbaarheid. Gedragsveranderingen, zoals terugtrekking, uitstelgedrag of verhoogde emotionaliteit, zijn eveneens signalen van aanhoudende stress." },
      {
        title: "Welke aanpak is mogelijk?", content: "Stressmanagement begint met het herkennen van de eigen stresssignalen. Vervolgens kan er gewerkt worden aan stressvermindering via leefstijlaanpassingen: voldoende slaap, gezonde voeding, regelmatige beweging en voldoende ontspanning zijn fundamenteel. Time-management is een belangrijke vaardigheid: jongeren kunnen leren hun taken beter te plannen, prioriteiten te stellen en pauzes in te lassen. Ademhalingsoefeningen, yoga en mindfulness helpen om het zenuwstelsel tot rust te brengen. Verder kan het helpen om piekergedachten op te schrijven of te delen met iemand uit de omgeving. Bij langdurige of hevige stress kunnen psycho-educatie of therapeutische gesprekken met een begeleider of psycholoog structurele verlichting bieden.\n\nConcrete tips:\n\nHet GGGGG-schema en herstellende gewoonten: tools voor veerkracht bij jongeren\n\nSteeds meer jongeren ervaren stress door schooldruk, sociale media en hoge verwachtingen. Binnen leerlingbegeleiding is het daarom belangrijk om jongeren handvaten aan te reiken waarmee ze zichzelf beter leren begrijpen én actief kunnen werken aan hun herstel. Twee waardevolle en praktijkgerichte tools hierbij zijn het GGGGG-schema en herstellende gewoonten.\n\nWat is het GGGGG-schema?\n\nHet GGGGG-schema is een reflectietool uit de Cognitieve Gedragstherapie (CGT) en wordt vaak toegepast in CLB- en begeleidingstrajecten met jongeren. Het helpt leerlingen om inzicht te krijgen in de manier waarop gedachten, gevoelens en gedrag met elkaar verbonden zijn.\n\nHet schema bestaat uit vijf stappen:\n\n&nbsp;&nbsp;&nbsp;&nbsp;1.&nbsp;&nbsp;Gebeurtenis – Wat is er feitelijk gebeurd?\n&nbsp;&nbsp;&nbsp;&nbsp;2.&nbsp;&nbsp;Gedachte – Welke gedachte kwam daarbij op?\n&nbsp;&nbsp;&nbsp;&nbsp;3.&nbsp;&nbsp;Gevoel – Welk gevoel werd daarbij ervaren?\n&nbsp;&nbsp;&nbsp;&nbsp;4.&nbsp;&nbsp;Gedrag – Welk gedrag volgde op dat gevoel?\n&nbsp;&nbsp;&nbsp;&nbsp;5.&nbsp;&nbsp;Gevolg – Wat was het resultaat of gevolg van dat gedrag?\n\nDoor deze stappen te doorlopen, leren jongeren hun automatische gedachten herkennen en ombuigen naar helpende gedachten. Het model is gebaseerd op het werk van Aaron T. Beck, die stelt:\n<i>“Niet de situatie zelf veroorzaakt hoe iemand zich voelt, maar de manier waarop die situatie wordt geïnterpreteerd.”</i>\n\nHet schema is laagdrempelig, visueel inzetbaar en uitermate geschikt voor reflectiegesprekken of individuele begeleiding.\n\nNaast inzicht bieden in reacties, is het belangrijk dat jongeren ook concrete gewoonten aanleren die stress helpen verlagen. Volgens het Vlaams Instituut Gezond Leven en VLESP zijn herstellende gewoonten essentieel om terug te keren naar een toestand van mentale rust ook wel de Window of Tolerance genoemd (Siegel, 1999).\n\nOnderstaande voorbeelden zijn haalbaar en toepasbaar in de leefwereld van leerlingen:\n\nConcrete gewoonten die leerlingen kunnen toepassen\n\n1.&nbsp;&nbsp;Na school minstens 20 minuten naar buiten gaan Wandelen met muziek, fietsen, hond uitlaten.\n&nbsp;&nbsp;&nbsp;&nbsp;→ Verlaagt stresshormonen zoals cortisol.\n2.&nbsp;&nbsp;Elke avond op hetzelfde uur naar bed(uiterlijk 22u30) Geen gsm of laptop vanaf 21u30.\n&nbsp;&nbsp;&nbsp;&nbsp;→ Bevordert diepe slaap en herstelt het zenuwstelsel.\n3.&nbsp;&nbsp;Na een toets of druk moment: 5 minuten ‘niks doen’ Hoofd op tafel, ogen dicht, rustige muziek.\n&nbsp;&nbsp;&nbsp;&nbsp;→ Laat het brein ontladen en tot rust komen.\n4.&nbsp;&nbsp;Tijdens stress: 4 - 4 - 4 ademhalingsoefening 4 seconden in – 4 vasthouden – 4 uit.\n&nbsp;&nbsp;&nbsp;&nbsp;→ Verlaagt spanning merkbaar binnen 2 minuten.\n5.&nbsp;&nbsp;Eén moment per dag zonder schermen of verplichtingen Bijvoorbeeld 20 minuten tekenen, douchen, koken of kleuren.\n&nbsp;&nbsp;&nbsp;&nbsp;→ Vermindert overprikkeling na school.\n6.&nbsp;&nbsp;1 keer per week bewust offline zijn Bijvoorbeeld op zondagvoormiddag gsm wegleggen.\n&nbsp;&nbsp;&nbsp;&nbsp;→ Verbetert concentratie en stemming(aanbevolen door CLB chat).\n7.&nbsp;&nbsp;Emoties bijhouden in een schrift of notitie - app Elke avond: wat voelde ik vandaag en waarom?\n&nbsp;&nbsp;&nbsp;&nbsp;→ Verhoogt zelfinzicht, verlaagt piekeren.\n\nAanbeveling: laat leerlingen één of twee gewoonten kiezen die bij hen passen. Herhaling is belangrijker dan perfectie."
      },
      { title: "Wanneer en waar hulp zoeken?", content: "Professionele hulp is aangewezen wanneer stress het dagelijks functioneren belemmert, zoals bij slaapproblemen, chronische vermoeidheid, emotionele uitputting of terugkerende fysieke klachten. Gesprekken met een schoolpsycholoog, het CLB of externe therapeuten kunnen handvatten bieden om beter met stress om te gaan." },
      { title: "Wist u dat...?", content: "Langdurige stress kan een structurele impact hebben op de hersenen. De activiteit van de prefrontale cortex, verantwoordelijk voor denkvermogen en planning, neemt af, terwijl het angstcentrum (de amygdala) actiever wordt. Hierdoor kunnen stressreacties sneller optreden, maar deze effecten zijn omkeerbaar met rust, therapie en herstellende gewoonten." },
    ],
  },
  {
    id: "Perfectionisme",
    title: "Perfectionisme",
    subsections: [
      { title: "Inleiding", content: "Perfectionisme komt veel voor bij jongeren die hoge eisen aan zichzelf stellen. Hoewel dit in eerste instantie leidt tot inzet en nauwkeurigheid, kan het op langere termijn leiden tot overbelasting, faalangst en uitstelgedrag. Het is belangrijk om perfectionisme te herkennen, bespreekbaar te maken en te leren hoe hiermee om te gaan." },
      { title: "Wat is het precies?", content: "Perfectionisme is een innerlijke drang om altijd foutloos te presteren en te voldoen aan zelfopgelegde of externe normen. Het gaat gepaard met de overtuiging dat fouten onaanvaardbaar zijn en dat succes het enige acceptabele resultaat is. Perfectionisme is geen officiële diagnose, maar wordt vaak gezien als een risicofactor voor psychische klachten zoals burn-out, depressie en angststoornissen. Perfectionisme kan cognitief, gedragsmatig en emotioneel tot uiting komen en wordt vaak gevoed door negatieve zelfspraak en een kritische innerlijke stem." },
      { title: "Hoe is het te herkennen?", content: "Perfectionisme uit zich in gedrag zoals overdreven herhalen of verbeteren van taken, moeite met delegeren, langdurig piekeren over details, of het vermijden van uitdagingen uit angst om te falen. Jongeren met perfectionistische trekken kunnen zichzelf als mislukkeling beschouwen, zelfs wanneer zij objectief gezien goed presteren. Daarnaast komt vaak uitstelgedrag voor: omdat het eindresultaat perfect moet zijn, wordt de taak pas gestart als alles ‘klaar’ is – wat zelden het geval is. Andere tekenen zijn stressklachten, slaapproblemen, verminderde motivatie en een laag zelfbeeld." },
      {
        title: "Welke aanpak is mogelijk?", content: `Veel jongeren ervaren prestatiedruk en ontwikkelen perfectionistische overtuigingen: de gedachte dat alles foutloos moet verlopen om goed genoeg te zijn. Fouten worden daarbij gelijkgesteld aan falen. Dit soort denken kan verlammend werken en leiden tot uitstelgedrag, stress, faalangst of overbelasting.

        Met behulp van <b>cognitieve gedragstherapie (CGT)</b> leren jongeren om deze strenge, onrealistische overtuigingen te onderzoeken en te vervangen door meer helpende en realistische gedachten. Dit proces begint met het bevragen van negatieve zelfspraak. Typische vragen die hierbij ingezet worden zijn:

        &nbsp;&nbsp;&nbsp;&nbsp;– Is deze gedachte eigenlijk waar?
        &nbsp;&nbsp;&nbsp;&nbsp;– Wat zou ik zeggen tegen een vriend(in) die dit denkt?
        &nbsp;&nbsp;&nbsp;&nbsp;– Wat is een mildere, eerlijkere manier om hierover na te denken?

        Een essentieel onderdeel binnen deze aanpak is het ontwikkelen van <b>zelfcompassie</b>. Jongeren leren om mild te zijn voor zichzelf, om fouten te zien als normaal en waardevol onderdeel van leren, en om hun eigenwaarde niet te koppelen aan prestaties. Zelfcompassie betekent niet zwakheid, maar juist kracht: het vormt de basis voor veerkracht.

        <i>“Ik mag fouten maken. Ik doe mijn best, en dat is genoeg.”</i>
        
        Een voorbeeld uit de praktijk illustreert dit proces. Lisa, 14 jaar, bereidt een spreekbeurt voor. Ze is ervan overtuigd dat ze zich geen fouten kan veroorloven. Die gedachte leidt tot uitstel en spanning. Samen met een begeleider onderzoekt ze deze overtuiging en leert ze haar denken bijstellen. De blokkerende gedachte <i>“Als ik een fout maak, vinden mensen me dom”</i> wordt vervangen door <i>“Ik mag fouten maken. Ik doe mijn best, en dat is genoeg.”</i> Daarnaast oefent ze met zelfcompassievolle zinnen zoals <i>“Ik ben oké zoals ik ben. Fouten horen erbij.”</i> Met deze nieuwe mindset durft ze uiteindelijk tóch op te dagen, ondanks de spanning.

        Naast het werken aan gedachtenpatronen, blijkt het waardevol om <b>doelen op te splitsen in haalbare stappen</b>. Door jongeren te stimuleren om regelmatig stil te staan bij wat goed ging — bijvoorbeeld via een groeidagboek of successenkaart — groeit hun zelfvertrouwen en motivatie.

        Een bijkomende strategie die helpend is, is het toepassen van het <b>Pareto-principe (de 80/20-regel)</b>. Deze regel stelt dat een klein deel van de inzet (20%) vaak verantwoordelijk is voor het grootste effect (80%). Jongeren leren zo om zich te focussen op wat écht belangrijk is in een taak of leerproces. Dit verlaagt de druk om alles perfect te doen en vergroot het gevoel van controle.

        In de praktijk betekent dit:
        
        &nbsp;&nbsp;&nbsp;&nbsp;– Niet alles hoeft perfect te zijn  
        &nbsp;&nbsp;&nbsp;&nbsp;– Begin met de onderdelen die het meeste effect hebben  
        &nbsp;&nbsp;&nbsp;&nbsp;– Plan ook ruimte in voor rust, reflectie en herstel
        <div style="display: flex; justify-content: center; margin-top: 1rem;">
  <img
    src="/pareto.jpg"
    alt="Infografiek over pareto principe"
    style="max-width: 100%; border-radius: 0.75rem; box-shadow: 0 2px 10px rgba(0,0,0,0.1);"
  />
</div>

        ` },
      { title: "Wanneer en waar hulp zoeken?", content: "Professionele begeleiding is aangewezen wanneer perfectionisme leidt tot uitputting, depressieve gevoelens, angstklachten of ernstig verminderde schoolprestaties. Gesprekken met een psycholoog, leerlingbegeleider of CLB kunnen jongeren helpen om inzicht te krijgen in hun denkpatronen en om alternatieve strategieën te ontwikkelen. Ook groepstherapie, waarin jongeren ervaringen met perfectionisme delen, kan steun en normalisering bieden." },
      { title: "Wist u dat...?", content: "Perfectionisme komt vaker voor in omgevingen waar prestaties sterk gewaardeerd worden. Het wordt versterkt door sociale media, waarin vooral successen en uiterlijke perfectie worden gedeeld. Uit onderzoek blijkt dat jongeren die dagelijks veel tijd op sociale media doorbrengen, vaker negatieve zelfevaluaties en prestatiegerichte stress ervaren." },

    ],
  },
  {
    id: "Mindfulness",
    title: "Mindfulness",
    subsections: [
      { title: "Inleiding", content: "In een snel veranderende en veeleisende wereld worden jongeren geconfronteerd met constante prikkels, verwachtingen en prestatiedruk. Mindfulness biedt een tegengewicht door hen te leren met aandacht en rust aanwezig te zijn in het hier en nu. Het helpt om beter om te gaan met stress en emoties, en bevordert het welzijn op lange termijn." },
      { title: "Wat is het precies?", content: "Mindfulness is een aandachtstraining die mensen leert om zonder oordeel op te merken wat er in het moment gebeurt, zowel intern als extern. Het wordt vaak aangeleerd via meditatie, ademhalingstechnieken, lichaamsoefeningen en bewuste waarneming van gedachten en gevoelens. Door regelmatige beoefening ontwikkelen jongeren een grotere veerkracht, meer zelfinzicht en een verbeterd concentratievermogen. Mindfulness is geen religie of therapie, maar een universele methode die inzetbaar is in het dagelijks leven." },
      { title: "Hoe is het te herkennen?", content: "Jongeren die baat hebben bij mindfulness ervaren vaak stress, piekeren veel, hebben last van faalangst of moeite met concentratie. Typische klachten zijn lichamelijke spanningen, vermoeidheid, slapeloosheid of prikkelbaarheid. Ook bij jongeren die overmatig nadenken of worstelen met emotieregulatie, kan mindfulness verlichting bieden. Wanneer mindfulness wordt geïntegreerd in het dagelijkse leven, neemt de gevoeligheid voor negatieve prikkels af." },
      { title: "Welke aanpak is mogelijk?", content: "Mindfulness kan worden aangeleerd via groepslessen, apps, audiobegeleiding of individuele begeleiding. Oefeningen zoals de bodyscan, ademruimte of de 5-4-3-2-1-oefening helpen om uit het hoofd te komen en het lichaam als anker te gebruiken. Door dagelijks te oefenen, ontwikkelen jongeren meer innerlijke rust en kunnen zij beter omgaan met moeilijke gedachten of emoties. Scholen kunnen mindfulness inpassen via korte oefeningen tijdens de lesdag, wat bijdraagt aan klasrust en verhoogde leerprestaties." },
      { title: "Wanneer en waar hulp zoeken?", content: "Bij jongeren met aanhoudende stressklachten, angststoornissen of depressieve symptomen kan mindfulness deel uitmaken van een breder behandelingsplan. Therapeuten bieden mindfulness-based cognitive therapy (MBCT) aan, waarin mindfulness gecombineerd wordt met psychologische begeleiding. Het is belangrijk om begeleiding te zoeken bij een gecertificeerde trainer wanneer er sprake is van complexe psychische klachten." },
      { title: "Wist u dat...?", content: "Neurowetenschappelijk onderzoek toont aan dat mindfulness structurele veranderingen teweegbrengt in de hersenen. Gebieden die betrokken zijn bij aandacht, zelfregulatie en empathie worden actiever en beter ontwikkeld. Regelmatige beoefening versterkt het werkgeheugen en vermindert de activiteit van het default mode network, dat geassocieerd wordt met piekergedrag en afleiding." },
    ],
  },
  {
    id: "Yoga",
    title: "Yoga",
    subsections: [
      { title: "Inleiding", content: "Yoga is een eeuwenoude holistische methode die lichaam, geest en ademhaling op elkaar afstemt. In moderne context wordt yoga ingezet als stressverlagende techniek, ter bevordering van concentratie en ter ondersteuning van lichamelijk en psychisch welzijn bij jongeren." },
      { title: "Wat is het precies?", content: "Yoga omvat fysieke houdingen (asana’s), ademhalingstechnieken (pranayama) en mentale focus. Deze elementen werken samen om het zenuwstelsel te kalmeren, de flexibiliteit en kracht van het lichaam te bevorderen, en innerlijke rust te cultiveren. Afhankelijk van de gekozen stijl ligt het accent meer op ontspanning of fysieke inspanning. Yoga is laagdrempelig en kan aangepast worden aan het niveau en de behoefte van jongeren." },
      { title: "Hoe is het te herkennen?", content: "Jongeren met stressklachten, spanning in het lichaam, slaapmoeilijkheden of aandachtsproblemen kunnen baat hebben bij yoga. Ook wie moeite heeft met het herkennen van lichaamssignalen of emotieregulatie, kan via yoga meer lichaamsbewustzijn en zelfcontrole ontwikkelen. Regelmatige beoefening leidt tot verlaging van het stresshormoon cortisol, verbetering van het slaappatroon en versterking van de geestelijke weerbaarheid." },
      { title: "Welke aanpak is mogelijk?", content: "Yoga kan individueel, in groep of klassikaal worden beoefend. Belangrijke houdingen voor ontspanning zijn de kindhouding, de kat-koe-beweging en de houding met benen tegen de muur. Daarnaast worden ademhalingsoefeningen zoals buikademhaling of box breathing gebruikt om het zenuwstelsel te kalmeren. Voor optimale effecten wordt aanbevolen om yoga minstens twee à drie keer per week te beoefenen, maar zelfs korte sessies van 10 minuten per dag kunnen al merkbare voordelen bieden." },
      { title: "Wist u dat...?", content: "Studies tonen aan dat yoga bij adolescenten leidt tot een verbeterd zelfbeeld, verhoogde motivatie op school en een afname van depressieve symptomen. De ademhalingscomponent van yoga heeft bovendien een directe invloed op het autonome zenuwstelsel, wat het herstelvermogen van het lichaam stimuleert." },
    ],
  },
  {
    id: "Angst",
    title: "Angst",
    subsections: [
      { title: "Inleiding", content: "Angst is een fundamentele emotionele reactie die van oudsher diende om gevaar tijdig te herkennen. In de moderne samenleving kan angst echter optreden in situaties die objectief gezien geen direct gevaar vormen. Bij jongeren uit dit zich vaak in schoolse of sociale contexten." },
      { title: "Wat is het precies?", content: "Angst activeert het autonome zenuwstelsel, wat leidt tot een verhoogde hartslag, versnelde ademhaling en gespannen spieren. Deze reactie vindt zijn oorsprong in de amygdala, een hersenstructuur die dreiging detecteert. In situaties zoals toetsen, sociale interacties of onverwachte veranderingen kan deze reactie overdreven of ongepast zijn. Bij frequente of intense angst spreekt men van een angststoornis." },
      { title: "Hoe is het te herkennen?", content: "Angst uit zich fysiek in klachten zoals beven, transpiratie, buikpijn, misselijkheid en kortademigheid. Psychisch komen negatieve gedachten voor, zoals faalangst of rampdenken. Gedragsmatig is er vaak sprake van vermijding van situaties die als bedreigend worden ervaren. Paniekaanvallen kunnen voorkomen, waarbij een gevoel van controleverlies en intense lichamelijke reacties optreden." },
      { title: "Welke aanpak is mogelijk?", content: "De aanpak van angstklachten bestaat vaak uit een combinatie van psycho-educatie, ademhalingstechnieken, en geleidelijke blootstelling aan beangstigende situaties. Jongeren leren hun angstige gedachten te herkennen en er afstand van te nemen. Cognitieve gedragstherapie helpt bij het doorbreken van negatieve denkpatronen. Via stappenplannen kunnen vermeden situaties langzaam opnieuw worden opgebouwd, zoals het geleidelijk spreken in de klas of deelnemen aan sociale activiteiten. Daarnaast is ontspanning via beweging, creatieve expressie of mindfulness effectief bij het kalmeren van het zenuwstelsel. Ouders, leerkrachten en hulpverleners spelen een belangrijke rol door steun te bieden zonder te forceren." },
      { title: "Wanneer en waar hulp zoeken?", content: "Wanneer angst leidt tot schoolverzuim, sociale isolatie of ernstige emotionele klachten, is het raadzaam professionele hulp in te schakelen. Psychologische begeleiding, eventueel in combinatie met groepsbehandeling of medicatie, kan de klachten verlichten en het functioneren verbeteren. Het CLB of een erkend therapeut kunnen hierbij ondersteunen." },
      { title: "Wist u dat...?", content: "Onderzoek wijst uit dat jongeren met angststoornissen zich vaak bewust zijn van het irrationele karakter van hun gedachten. Desondanks ervaren zij hun gevoelens als overweldigend. Door het geleidelijk aangaan van vermeden situaties kan het brein leren dat het 'gevaar' beheersbaar is, wat leidt tot afname van de angstreactie." },
    ],
  },
  {
    id: "Prestatiedruk",
    title: "Prestatiedruk",
    subsections: [
      { title: "Inleiding", content: "Prestatiedruk is een veelvoorkomende vorm van stress bij jongeren, vooral in de context van school en studie. Het verwijst naar de spanning die iemand ervaart door de overtuiging te moeten voldoen aan hoge verwachtingen van zichzelf of van anderen. Hoewel een zekere mate van druk stimulerend kan werken, leidt overmatige prestatiedruk tot psychische en lichamelijke klachten, en kan het het functioneren ernstig belemmeren." },
      { title: "Wat is het precies?", content: "Prestatiedruk ontstaat wanneer iemand voortdurend het gevoel heeft te moeten presteren om aan de norm te voldoen. Deze druk kan intern zijn, zoals perfectionisme en faalangst, of extern, zoals verwachtingen van ouders, leerkrachten of de maatschappij. In een tijd waarin sociale media succes en perfectie benadrukken, voelen jongeren zich steeds vaker beoordeeld op hun prestaties, cijfers en zichtbare resultaten. De constante vergelijking met anderen draagt bij aan een verhoogd gevoel van falen of tekortschieten." },
      { title: "Hoe is het te herkennen?", content: "Jongeren die onder prestatiedruk staan, vertonen vaak signalen zoals overmatige bezorgdheid over cijfers, uitstelgedrag, slapeloosheid en concentratieproblemen. Zij durven vaak geen hulp te vragen uit angst als zwak te worden gezien en zijn voortdurend bezig met het vermijden van fouten. Fysiek kunnen spanningsklachten optreden zoals hoofdpijn, maagpijn of vermoeidheid. Psychisch uit het zich in perfectionisme, zelfkritiek, emotionele uitputting of gevoelens van minderwaardigheid." },
      {
        title: "Welke aanpak is mogelijk?", content: `Een eerste stap in het aanpakken van prestatiedruk is het creëren van een realistisch zelfbeeld en het herdefiniëren van succes. Het is belangrijk om haalbare doelen te stellen en niet te streven naar perfectie. Ondersteuning vanuit de omgeving is cruciaal: ouders, leerkrachten en begeleiders kunnen helpen door erkenning te geven aan inspanning in plaats van enkel aan resultaat. Het aanleren van time-managementvaardigheden, het plannen van ontspanning en het bespreekbaar maken van de ervaren druk dragen bij aan de afname ervan. Verder kunnen ontspanningstechnieken zoals ademhalingsoefeningen, mindfulness of lichaamsbeweging helpen om spanningsklachten te verminderen.

        Hoe kun je time-management aanleren bij jongeren?
        
        Veel jongeren worstelen met drukke agenda’s, uitstelgedrag en stress rond schooltaken. Goede time-managementvaardigheden kunnen helpen om beter te plannen, overzicht te houden én ruimte te maken voor ontspanning. Maar hoe leer je dat aan?
        
        1. Maak plannen zichtbaar en haalbaar
        Jongeren hebben baat bij visuele hulpmiddelen zoals een weekplanner, agenda of app. Laat ze hun schooltaken, hobby’s, rustmomenten en deadlines invullen. Begin eenvoudig, met slechts enkele taken per dag. Succeservaringen bouwen motivatie op.
        
        2. Leer prioriteiten stellen
        Niet alles is even dringend of belangrijk. Help jongeren onderscheid maken tussen:
        
        &nbsp;&nbsp;&nbsp;&nbsp;· Wat nu moet gebeuren  
        &nbsp;&nbsp;&nbsp;&nbsp;· Wat belangrijk is, maar kan wachten  
        &nbsp;&nbsp;&nbsp;&nbsp;· Wat minder prioriteit heeft
        
        Tools zoals de Eisenhower-matrix kunnen hierbij ondersteunen. Dit geeft rust en richting.
        
        3. Stimuleer realistische tijdsinschatting
        Laat jongeren vooraf bedenken hoeveel tijd iets kost en na afloop reflecteren: klopte dat? Zo ontwikkelen ze zelfinzicht en leren ze beter plannen.
        
        4. Werk met vaste routines
        Structuur helpt. Stimuleer jongeren om op vaste momenten te werken, bijvoorbeeld elke dag een halfuur na school. Hierdoor wordt beginnen een gewoonte en neemt uitstelgedrag af.
        
        5. Beloon inzet, niet enkel resultaat
        Time-management vraagt oefening. Geef positieve feedback op het volgen van de planning of het proberen, ook als niet alles gelukt is. Dit versterkt het zelfvertrouwen en bevordert zelfstandigheid.`

      },
      { title: "Wanneer en waar hulp zoeken?", content: "Indien prestatiedruk leidt tot ernstige klachten zoals burn-outsymptomen, depressieve gevoelens of schooluitval, is het noodzakelijk professionele hulp in te schakelen. Het CLB, een psycholoog of een schoolbegeleider kunnen ondersteuning bieden via gesprekken, coaching of therapie gericht op stressmanagement, zelfbeeld en faalangst. Vroegtijdige interventie is belangrijk om chronische klachten en verdere uitval te voorkomen." },
      { title: "Wist u dat...?", content: "Uit Vlaams onderzoek blijkt dat prestatiedruk nauw samenhangt met het gebruik van sociale media, waarbij jongeren zichzelf voortdurend vergelijken met anderen. Ook blijkt dat jongeren vaak meer druk ervaren van zichzelf dan van hun ouders of leerkrachten. Een klimaat waarin fouten maken gezien wordt als leermoment, kan de schadelijke effecten van prestatiedruk aanzienlijk verminderen." },
    ],
  },
  {
    id: "Belang van slapen, gezond eten en voldoende bewegen",
    title: "Belang van slapen, gezond eten en voldoende bewegen",
    subsections: [
      { title: "Inleiding", content: "‘Een gezonde geest in een gezond lichaam’, of in het Latijn ‘Mens sana in corpore sano’, is een bekend motto. Het staat voor het ideaal van de veelzijdigheid. Een mens is maar gezond als hij zowel intellectueel als sportief bezig is.\n\nLichamelijke gezondheid speelt een essentiële rol in het reguleren van de stressniveaus van leerlingen. Factoren zoals slaap, voeding en beweging zijn nauw met elkaar verbonden en hebben een directe invloed op zowel het fysieke als mentale welzijn. Uit de enquête blijkt dat 35% van de leerlingen aangaf onvoldoende te slapen, 40% regelmatig ongezond eet en 30% te weinig beweegt. Deze cijfers bevestigen dat veel jongeren niet voldoen aan de basisvoorwaarden voor een gezond lichaam en een evenwichtige geest." },
      {
        title: "Slaap", content: {
          intro: "Een goede nachtrust is van levensbelang, zeker voor jongeren in de puberteit. Juist in deze levensfase slapen jongeren echter vaak slecht en te weinig, terwijl slaap essentieel is voor zowel lichamelijk als geestelijk herstel. Tijdens de puberteit zijn de hersenen volop in ontwikkeling en ondergaat het lichaam grote hormonale veranderingen. Die ontwikkeling vraagt extra energie en herstel, wat slaap des te belangrijker maakt.\n\nTijdens de slaap vinden cruciale processen plaats. Zo worden spieren hersteld, worden afweerstoffen aangemaakt en ondergaat het brein een soort ‘schoonmaakbeurt’. Hersencellen krimpen tijdelijk, waardoor het hersenvocht afvalstoffen kan afvoeren. Daarnaast wordt tijdens de slaap informatie verwerkt en opgeslagen, wat essentieel is voor het leren en onthouden van nieuwe dingen. Ook het emotionele brein wordt beïnvloed: slaap helpt bij het verwerken van emoties, het verminderen van spanning en het reguleren van stress.\n\nZonder voldoende slaap functioneren jongeren slechter: ze kunnen zich minder goed concentreren, zijn sneller geïrriteerd en voelen zich emotioneel instabiel. Slaaptekort versterkt bovendien negatieve denkpatronen en piekeren, wat leidt tot een vicieuze cirkel waarin stress de slaap verstoort en slaapgebrek op zijn beurt de stress vergroot.\n\nDe oorzaken van slaaptekort bij jongeren zijn divers. Een belangrijke biologische factor is het veranderde slaappatroon door hormonale verschuivingen. Tijdens de puberteit wordt het slaaphormoon melatonine pas later op de avond aangemaakt, waardoor jongeren pas laat slaperig worden. Desondanks blijven de schooltijden hetzelfde: een 15-jarige moet even vroeg opstaan als een 7-jarige, terwijl zijn lichaam pas veel later moe wordt.\n\nNaast biologische oorzaken spelen ook gedragsfactoren een rol:",
          bullets: [
            "Stress: Jongeren ervaren veel druk door school, sociale verwachtingen en een volle agenda. Deze stress kan leiden tot piekeren, wat het inslapen bemoeilijkt.",
            "Te weinig beweging: Slechts 40% van de jongeren tussen 12 en 18 jaar haalt de beweegrichtlijn van één uur matig intensieve beweging per dag. Beweging helpt niet alleen om stress te verminderen, maar verbetert ook de slaapkwaliteit.",
            "Overmatig schermgebruik: Schermgebruik vlak voor het slapengaan verhoogt de alertheid en onderdrukt de aanmaak van melatonine, waardoor jongeren moeilijker in slaap vallen. Jongeren die het laatste uur van de avond nog achter een scherm zitten, slapen gemiddeld een half uur korter, worden ’s nachts vaker wakker en hebben overdag meer moeite om alert te blijven."
          ],
          outro: "Slaaptekort heeft op korte termijn al duidelijke gevolgen: jongeren ervaren meer hoofd-, nek- en schouderpijn, hun immuunsysteem verzwakt en ze zijn vatbaarder voor ziektes. Cognitief gezien lijdt hun leervermogen eronder: ze kunnen zich minder goed concentreren en presteren slechter op school. Op lange termijn leidt chronisch slaaptekort tot een verhoogd risico op overgewicht, diabetes type 2, hoge bloeddruk en hart- en vaatziekten.\n\nDaarnaast hebben jongeren die goed slapen aantoonbaar een betere stemming, minder last van stress en zijn ze mentaal veerkrachtiger. Ze voelen zich energieker, kunnen zich beter concentreren en presteren beter op school. Voldoende slaap is dus niet alleen belangrijk voor lichamelijke gezondheid, maar vormt ook een essentiële pijler voor mentale balans en welzijn.\n\nVolgens wetenschappelijke aanbevelingen hebben jongeren tussen 14 en 18 jaar gemiddeld 8 tot 10 uur slaap per nacht nodig, met een aanbevolen minimum van 9 uur. Toch blijkt uit onderzoek dat bijna 60% van de jongeren deze ondergrens niet haalt. Vooral in het weekend is er bij velen sprake van een inhaalbehoefte, wat erop wijst dat hun dagelijkse slaaptekort structureel is.",

        }
      },
      { title: "Voeding", content: "“Vertel me wat je eet, en ik zal je vertellen wie je bent.” Deze uitdrukking verwijst naar het idee dat voeding een weerspiegeling is van iemands levensstijl en gezondheid. Alles wat iemand eet, wordt namelijk omgezet in bouwstoffen voor het lichaam: spieren, huid, hersenen en zelfs het humeur worden erdoor beïnvloed.\n\nWie gezond eet – met veel groenten, fruit, water en vezels – geeft het lichaam wat het nodig heeft om sterk en energiek te blijven. Maar wie vaak ongezonde dingen eet zoals bewerkt voedsel, suiker of vet, merkt dit ook: vermoeidheid, concentratieproblemen en een verminderde weerstand zijn vaak het gevolg. Voeding is niet enkel vulling, maar brandstof én bouwmateriaal.\n\nEen gezond voedingspatroon is van essentieel belang tijdens de puberteit. In deze periode is de behoefte aan energie en voedingsstoffen verhoogd. Toch blijkt dat veel jongeren onvoldoende water drinken, te veel suikerhoudende dranken consumeren, en onvoldoende groenten, fruit en melkproducten eten. In plaats daarvan wordt vaak gekozen voor wit brood en bewerkte snacks.\n\nEen evenwichtige voeding ondersteunt het energieniveau, bevordert cognitieve functies en helpt bij het reguleren van emoties. Producten rijk aan vezels, eiwitten en gezonde vetten zorgen voor een stabiele bloedsuikerspiegel, terwijl snelle suikers en vetrijke snacks eerder leiden tot energiedips en stemmingswisselingen.\n\nVoedingsonderzoek toont aan dat jongeren vaak te weinig ijzer, calcium en vezels binnenkrijgen. Dit kan gevolgen hebben voor de groei, botontwikkeling en cognitieve prestaties. Het is daarom belangrijk om gevarieerd te eten, met voldoende volle granen, peulvruchten, zuivelproducten en verse groenten en fruit." },
      { title: "Beweging", content: "Beweging speelt een fundamentele rol in de ontwikkeling van jongeren. Het draagt niet alleen bij aan een gezond gewicht en een sterk lichaam, maar ook aan het emotionele en mentale welzijn. Regelmatige fysieke activiteit versterkt het hart, de longen, de spieren en het skelet.\n\nDaarnaast heeft beweging een regulerende werking op stress en stemming. Tijdens het bewegen komen endorfines vrij, die zorgen voor een gevoel van plezier en ontspanning. Beweging verbetert ook de slaapkwaliteit en versterkt het zelfvertrouwen. Het draagt bij aan het ontwikkelen van sociale vaardigheden zoals samenwerken, communicatie en empathie, zeker binnen een sportcontext.\n\nLichamelijke activiteit stimuleert bovendien de hersenontwikkeling. Door verhoogde doorbloeding verbetert het geheugen, de concentratie en het leervermogen. Jongeren die regelmatig bewegen, presteren beter op school en voelen zich vaak beter in hun vel.\n\nDe Wereldgezondheidsorganisatie raadt aan dat jongeren dagelijks minstens 60 minuten matig tot intens bewegen. Dit kan via sport, dans, wandelen, fietsen of andere vormen van actieve vrijetijdsbesteding. Belangrijk is dat beweging plezierig is en aansluit bij de interesses van jongeren, zodat het gemakkelijker vol te houden is." },
    ],
  },
  {
    id: "Veerkracht",
    title: "Veerkracht",
    subsections: [
      { title: "Inleiding", content: "Iedereen krijgt in het leven te maken met moeilijke momenten: een conflict met iemand die belangrijk is, stress voor een toets, onzekerheid over zichzelf, of iets verdrietigs dat gebeurt in de omgeving. Hoe iemand met zulke situaties omgaat, bepaalt voor een groot deel hoe die persoon zich voelt en hoe hij of zij verder kan. Dit heeft alles te maken met veerkracht." },
      { title: "Wat is veerkracht?", content: "Veerkracht betekent dat iemand kan omgaan met tegenslagen, veranderingen of stressvolle gebeurtenissen, én dat diegene daar sterker uit kan komen. Het is het vermogen om zichzelf weer \"recht te trekken\" als het leven even niet loopt zoals gewenst. Veerkracht is vergelijkbaar met een veer: als die wordt ingedrukt, veert hij weer terug in zijn oorspronkelijke vorm. Zo werkt het ook met mensen. Iemand met veerkracht laat zich niet breken door problemen, maar probeert ervan te leren en verder te gaan." },
      {
        title: "Waarom is veerkracht belangrijk?", content: {
          intro: "Veerkracht is niet alleen belangrijk bij grote gebeurtenissen, zoals verlies of een moeilijke thuissituatie. Het speelt ook een belangrijke rol in het dagelijks leven. Denk aan schooldruk, sociale media, groepsdruk of persoonlijke twijfels. Wie veerkrachtig is:",
          bullets: [
            "Kan beter omgaan met stress en spanning.",
            "Heeft meer zelfvertrouwen.",
            "Raakt minder snel uit balans.",
            "Leert sneller van fouten of tegenslagen.",
            "Heeft vaker een positievere kijk op de toekomst.",
          ],
          outro: ""
        }
      },
      {
        title: "Wat zijn belangrijke onderdelen van veerkracht?",
        content: `
          <strong>1. Zelfinzicht en positief denken</strong>\nHet begint met het kennen van zichzelf: wat iemand voelt, waar hij of zij goed in is, wat onzeker maakt en wat nodig is. Als iemand zichzelf goed kent, kan diegene beter voor zichzelf zorgen. Daarbij hoort ook een positieve manier van denken. Dat betekent niet altijd vrolijk zijn, maar wel het vertrouwen dat moeilijke momenten voorbijgaan en overwonnen kunnen worden.<br/>
          <strong>2. Probleemoplossend vermogen</strong>\nIn plaats van vast te blijven zitten in het probleem, is het belangrijk om te kijken wat er wél gedaan kan worden. Dat kan iets kleins zijn, zoals hulp vragen of de planning aanpassen. Veerkracht betekent actief nadenken over oplossingen in plaats van opgeven.<br/>
          <strong>3. Ondersteuning zoeken</strong>\nNiemand hoeft het alleen te doen. Veerkrachtige mensen durven hulp te vragen. Dat kan bij een vriend of vriendin, een ouder, een mentor of een hulpverlener op school. Praten lucht op en anderen kunnen helpen om situaties anders te bekijken.<br/>
          <strong>4. Doelen stellen en ergens naartoe werken</strong>\nEen doel geeft richting, motivatie en hoop. Het hoeft geen groot doel te zijn; ook kleine stappen zijn waardevol. Bijvoorbeeld: op tijd opstaan of hulp zoeken voor een lastig vak. Doelen helpen iemand vooruit te blijven kijken.<br/>
          <strong>5. Leren omgaan met emoties</strong>\nIedereen voelt zich wel eens boos, verdrietig of bang. Het is belangrijk om die gevoelens niet op te kroppen, maar ze te herkennen en ermee om te leren gaan. Voor sommige mensen helpt het om erover te schrijven, muziek te luisteren, te bewegen of met iemand te praten.

        `
      },
      {
        title: "Hoe kan veerkracht versterkt worden?", content: {
          intro: "Veerkracht ontstaat niet vanzelf, maar kan stap voor stap ontwikkeld worden. Enkele manieren om veerkracht te versterken zijn:",
          bullets: [
            "Mild zijn voor zichzelf: perfectie is niet nodig",
            "Leren van wat misgaat: fouten zijn normaal en leerzaam.",
            "Goed zorgen voor lichaam en geest: voldoende rust, beweging en gezonde voeding helpen mentaal sterker te worden.",
            "Tijd besteden aan activiteiten die energie geven: zoals hobby’s, muziek, contact met vrienden of familie.",
            "Blijven geloven in eigen kunnen, ook als iets tijdelijk niet lukt.",
          ],
          outro: ""
        }
      },
    ],
  },
];
const bronContent = [
  "1. Saja Yoga. (z.d.). De wetenschap achter yoga. https://sajayoga.be/over-yoga/de-wetenschap-achter-yoga/",
  "2. Waer Waters. (z.d.). Mindfulness en de wetenschap van stressreductie. https://www.waerwaters.com/nl/blogs/mindfulness-en-de-wetenschap-van-stressreductie",
  "3. Eos Wetenschap. (2022, 5 juli). Minder stress en betere nachtrust dankzij lichaamsbeweging. Geraadpleegd op 23 mei 2025, van https://www.eoswetenschap.eu/psyche-brein/minder-stress-en-betere-nachtrust-dankzij-lichaamsbeweging",
  "4. KU Leuven. (z.d.). Stress, lichamelijke en psychische ondermijning. https://nieuws.kuleuven.be/nl/2012_en_vroeger/0405/07/stress--lichamelijke-en-psychische-ondermijning",
  "5. Gezondheid en wetenschap. (z.d.). Angststoornis · Gezondheid en wetenschap. https://www.gezondheidenwetenschap.be/richtlijnen/angststoornis",
  "6. Nederlands Jeugdinstituut. (2024). Cijfers over prestatiedruk. https://www.nji.nl/cijfers/cijfers-over-prestatiedruk",
  "7. KU Leuven. (z.d.-b). Perfectionisme. https://www.kuleuven.be/stuvo/gezondheid/gezondheidsinformatie/perfectionisme",
  "8. KU Leuven. (z.d.). Faalangst. https://www.kuleuven.be/stuvo/gezondheid/gezondheidsinformatie/faalangst",
  "9. Mindful Me. (z.d.). Artikels en wetenschap over mindfulness. https://www.mindfulme.be/onderzoek-wetenschap-mindfulness.html",
  "10. Universiteit Leiden. (2023). Hoe langzamer ademen echt helpt tegen stress. https://www.universiteitleiden.nl/nieuws/2023/12/hoe-langzamer-ademen-echt-helpt-tegen-stress"
];


export default function HomeContent() {
  const [showIntro, setShowIntro] = useState(false);

  useEffect(() => {
    const hasSeenIntro = localStorage.getItem("hasSeenIntro");
    if (!hasSeenIntro) {
      setShowIntro(true);
      localStorage.setItem("hasSeenIntro", "true");
    }
  }, []);

  return (
    <main className="scroll-pt-20 p-4 pt-24 max-w-3xl mx-auto text-[var(--foreground)] bg-[var(--background)]">
      <Navbar />

      {showIntro && (
        <div className="fixed inset-0 backdrop-blur-sm backdrop-grayscale bg-white/30 z-50 flex items-center justify-center">
          <div className="bg-white rounded-2xl shadow-lg p-6 max-w-md mx-auto text-gray-900 relative">
            <h2 className="text-xl font-bold mb-3">Gids voor het mentale welzijn van jongeren</h2>
            <p className="text-sm mb-4">
              Op deze site vind je duidelijke info over wat jongeren mentaal onder druk kan zetten: stress, faalangst,
              prestatiedruk en meer. Of je nu jongere bent, ouder, leerkracht of hulpverlener: deze website helpt je om
              beter te begrijpen wat jongeren voelen, denken en nodig hebben.
              <br /><br />
              We zetten in op herkenning, praktische tips én toegankelijke uitleg. Alles met één doel: jongeren sterker
              maken in een wereld die soms veel vraagt.
            </p>
            <button
              onClick={() => setShowIntro(false)}
              className="absolute top-3 right-3 text-gray-600 hover:text-black text-lg"
            >
              &times;
            </button>
          </div>
        </div>
      )}

      {sections.map((section) => (
        <section key={section.id} id={section.id} className="mb-8">
          <h2 className="text-2xl font-bold text-black mb-2">{section.title}</h2>
          {section.subsections.map((sub, i) => (
            <CollapsibleSection key={i} title={sub.title} content={sub.content} />
          ))}
        </section>
      ))}

      <section className="mb-8">
        <CollapsibleSection title="Bron" content={bronContent} isBronList centerTitle />
      </section>
    </main>
  );
}
