var otazky = [];
otazky.push({
    otazka: "Reprezentace stavu v tabu prohledávání je cesta v grafu. Dlouhodobá paměť dává četnost použití každého uzlu v kandidátní cestě. Tah dostane pokutu, jestliže tato četnost je vyšší než průměr. Dlouhodobá paměť však obsahuje hash všech navštívených cest. Pokud se jedná o úplně novou cestu, tabu je prolomeno. Toto poslední opatření je",
    odpovedi: {
        1: "diverzifikace",
        2: "intenzifikace",
        3: "Aspirace",
    },
    spravne: {
        1: 1,
        2: 0,
        3: 1,
    },
});
otazky.push({
    otazka: "Reprezentace stavu v tabu prohledávání je hamiltonova kružnice v grafu. Tah je dvojzáměna na hranách (odebereme z kružnice dvě hrany a přidáme dvě jiné tak, aby výsledek byla opět hamiltonova kružnice).  Uvažujeme, že jako tabu atribut použijeme a) výslednou dvojici hran, b) celou záměnu (obě dvojice). Možnost a)",
    odpovedi: {
        1: "dá větší diverzifikaci",
        2: "dá větší intenzifikaci",
        3: "více omezí aktuální okolí",
    },
    spravne: {
        1: 1,
        2: 0,
        3: 1,
    },
});
otazky.push({
    otazka: "Typická úloha aspiračních kritérií je",
    odpovedi: {
        1: "diverzifikace",
        2: "intenzifikace",
        3: "omezení okolí",
    },
    spravne: {
        1: 0,
        2: 1,
        3: 0,
    },
});
otazky.push({
    otazka: "Tabu prohledávání konverguje velmi pomalu, i když s dobrými výsledky. K nápravě",
    odpovedi: {
        1: "přidáme aspirační kritérium, spuštěné dosud nejlepším řešením",
        2: "přidáme aspirační kritérium, spuštěné malou frekvencí atributů tahu",
        3: "k optimalizačnímu kritériu přidáme odměnu za malou frekvenci atributů",
    },
    spravne: {
        1: 1,
        2: 0,
        3: 0,
    },
});
otazky.push({
    otazka: "Tabu prohledávání často končí v lokálním optimu. K nápravě",
    odpovedi: {
        1: "zkrátíme tabu lhůtu",
        2: "prodloužíme tabu lhůtu",
        3: "přidáme aspirační kritérium, spouštěné malou frekvencí atributů tahu",
        4: "k optimalizačnímu kritériu přidáme odměnu za malou frekvenci atributů tahu",
        5: "při detekci uváznutí, spustíme výpočet znovu od nejlepšího dosaženého řešení",
        6: "při detekci uváznutí, spustíme výpočet znovu od náhodného řešení",
    },
    spravne: {
        1: 0,
        2: 1,
        3: 1,
        4: 1,
        5: 0,
        6: 1,
    },
});
otazky.push({
    otazka: "Metoda prohledávání okolí v tabu prohledávání je",
    odpovedi: {
        1: "prvé zlepšení nebo akceptovatelné zhoršení",
        2: "pouze nejlepší",
    },
    spravne: {
        1: 0,
        2: 0,
    },
});
otazky.push({
    otazka: "Tabu prohledávání používá při transformaci metodu",
    odpovedi: {
        1: "pouze nejlepší",
        2: "prvé zlepšení",
        3: "prvé zlepšení   zhoršení",
        4: "nejlepší nejdříve",
    },
    spravne: {
        1: 1,
        2: 0,
        3: 0,
        4: 0,
    },
});
otazky.push({
    otazka: "Evoluční programování pracuje nad",
    odpovedi: {
        1: "stromovou reprezentací programu",
        2: "reprezentací automatu",
        3: "lineární reprezentací strojového kódu",
        4: "orientovaným acyklickým grafem datových závislostí",
    },
    spravne: {
        1: 0,
        2: 1,
        3: 0,
        4: 0,
    },
});
otazky.push({
    otazka: "Evoluční strategie pracuje nad reprezentací",
    odpovedi: {
        1: "vektoru reálných čísel a odchylek",
        2: "rozkladového stromu výrazu",
        3: "binárního řetězu",
        4: "Automatu",
    },
    spravne: {
        1: 1,
        2: 0,
        3: 0,
        4: 0,
    },
});
otazky.push({
    otazka: "Podle teorie stavebních bloků 2023",
    odpovedi: {
        1: "složitější schémata (vyššího řádu) přežívají lépe",
        2: "schémata, jejichž proměnné jsou rozptýleny po celém genotypu, přežívají hůře",
        3: "mutace zhoršuje přežívání všech schémat (i když ne všech stejně)",
        4: "uvažované jednobodové křížení má za následek závislost přežívání na délce schématu",
    },
    spravne: {
        1: 0,
        2: 1,
        3: 1,
        4: 1,
    },
});
otazky.push({
    otazka: "Genetické programování pracuje nad reprezentací",
    odpovedi: {
        1: "vektoru reálných čísel",
        2: "rozkladu stromu",
        3: "binárního řetězce",
        4: "Automatu",
    },
    spravne: {
        1: 0,
        2: 1,
        3: 0,
        4: 0,
    },
});
otazky.push({
    otazka: "Máte experimentálně vyhodnotit, zda algoritmus, který automaticky udržuje řízení údržby selekční tlak v genetickém algoritmu, pracuje uspokojivě. Provedete následující:",
    odpovedi: {
        1: "Budete měřit četnost mutace v závislosti na poměrné zdatnosti.",
        2: "Budete měřit četnost výběru (selekce) v závislosti na poměrné zdatnosti.",
        3: "Pro každou velikost instance zvolíte jednu instanci.",
        4: "Zvolíte jednu velikost instance a použijete instance rozdílné obtížnosti.",
    },
    spravne: {
        1: 0,
        2: 1,
        3: 0,
        4: 0,
    },
});
otazky.push({
    otazka: "Genetický algoritmus tvoří novou generaci stylem u+l, tj. ke generaci o u jedincích se přidá l nových a z celku se vybere opět u jedinců. Pro u = l = 1 je tento algoritmus vlastně 2023",
    odpovedi: {
        1: "metodou pouze nejlepší",
        2: "metodou prvé zlepšení",
        3: "náhodná procházka",
    },
    spravne: {
        1: 0,
        2: 1,
        3: 0,
    },
});
otazky.push({
    otazka: "Máte genetický algoritmus a svou teorii ohledně vlastností instance, jak ji ověříte?",
    odpovedi: {
        1: "Vygeneruji instance s danou vlastností a nad nimi spustím genetický algoritmus",
        2: "Algoritmus spustím opakovaně nad instancemi",
        3: "Vygeneruji jak malé, tak velké instance a nad nimi spustím algoritmus",
    },
    spravne: {
        1: 0,
        2: 1,
        3: 1,
    },
});
otazky.push({
    otazka: "V genetickém algoritmu je třeba urychlit konvergenci. Možností je upravit pravděpodobnost mutace nebo zvýšit selekční tlak. Platí:",
    odpovedi: {
        1: "přednostně zvýšíme selekční tlak, pracujeme s minimální potřebnou mutací",
        2: "přednostně zvýšíme pravděpodobnost mutace",
        3: "pokud zvýšíme selekční tlak, může být potřeba o něco zvýšit i pravděpodobnost mutace, abychom se vyhnuli divergenci",
        4: "změna selekčního mechanismu nemá významný vliv, pokud zachováme selekční tlak",
    },
    spravne: {
        1: 1,
        2: 0,
        3: 0,
        4: 1,
    },
});
otazky.push({
    otazka: "Algoritmus, který má za běhu upravovat selekční tlak v genetickém algoritmu s výběrem ruletou, může přímo nastavovat",
    odpovedi: {
        1: "konstantní převod ranku (pořadí zdatnosti) na pravděpodobnost výběru",
        2: "konstanty lineárního škálování",
        3: "pravděpodobnost aplikace operátoru „cut and splice“",
    },
    spravne: {
        1: 1,
        2: 1,
        3: 0,
    },
});
otazky.push({
    otazka: "Volba selekčního tlaku v genetických algoritmech",
    odpovedi: {
        1: "je omezena hrozbou divergence při malém selekčním tlaku",
        2: "závisí na obtížnosti instance, obtížnější instance vyžadují pomalejší konvergenci",
        3: "může vyžadovat odpovídající nastavení pravděpodobnosti funkce",
    },
    spravne: {
        1: 1,
        2: 1,
        3: 1,
    },
});
otazky.push({
    otazka: "Když zvýšíme selekční tlak, zvýší se intenzifikace?",
    odpovedi: {
        1: "Ano",
        2: "Ne",
    },
    spravne: {
        1: 1,
        2: 0,
    },
});
otazky.push({
    otazka: "Zvýšení selekčního tlaku může způsobit",
    odpovedi: {
        1: "degeneraci",
        2: "zrychlení konvergence",
        3: "divergenci",
        4: "ztrátu diverzity",
    },
    spravne: {
        1: 1,
        2: 1,
        3: 0,
        4: 1,
    },
});
otazky.push({
    otazka: "Změna parametrů lineárního škálování, která má za následek zvětšení poměru zdatnosti nejlepšího a nejhoršího jedince v genetických algoritmech způsobí diverzifikaci",
    odpovedi: {
        1: "ano",
        2: "ne – způsobí intenzifikaci, protože slabší odpadnou",
        3: "Zvýšení mutace může způsobit",
        4: "degeneraci",
        5: "zrychlení konvergence",
        6: "divergenci",
        7: "ztrátu diverzity",
        8: "zvýšenie intenzifikácie",
        9: "zvýšenie diverzity",
    },
    spravne: {
        1: 0,
        2: 1,
        3: 0,
        4: 0,
        5: 0,
        6: 1,
        7: 0,
        8: 0,
        9: 1,
    },
});
otazky.push({
    otazka: "Zmenšenie turnaja",
    odpovedi: {
        1: "Znižuje intenzifikaci",
        2: "Nezvyšuje selekčný tlak",
    },
    spravne: {
        1: 1,
        2: 1,
    },
});
otazky.push({
    otazka: "Genetické operátory Fast Messy GA algoritmu pracují nad",
    odpovedi: {
        1: "Genetické operátory Fast Messy GA algoritmu pracují nad",
        2: "reprezentací individua",
        3: "zdatností individua",
        4: "množinami hodnot genů",
        5: "reprezentací individua, kde některé geny nejsou ohodnoceny a některé jsou ohodnoceny víckrát",
    },
    spravne: {
        1: 0,
        2: 0,
        3: 0,
        4: 1,
        5: 1,
    },
});
otazky.push({
    otazka: "Genetické operátory Fast Messy GA algoritmu pracují s 2023",
    odpovedi: {
        1: "reprezentací individua",
        2: "podmnožinami genů",
        3: "fenotypem individua",
        4: "zdatností individua",
    },
    spravne: {
        1: 0,
        2: 1,
        3: 0,
        4: 0,
    },
});
otazky.push({
    otazka: "Základní metodou vyhodnocení, se kterou pracuje Fast Messy genetický algoritmus, je",
    odpovedi: {
        1: "stanovení fenotypu přímo z hodnot genů daného jedince a následný výpočet zdatnosti",
        2: "výpočet odlišnosti genotypu jedince od referenčního jedince",
        3: "založena na průměrné délce fragmentu v dané generaci",
        4: "dosazení hodnot fragmentů do referenčního jedince a výpočet jeho zdatnosti",
    },
    spravne: {
        1: 0,
        2: 0,
        3: 0,
        4: 1,
    },
});
otazky.push({
    otazka: "Stavební bloky ve Fast Messy GA se generují",
    odpovedi: {
        1: "jako podmnožiny ohodnocených genů zadané délky",
        2: "jako reprezentace počáteční populace",
        3: "jako fenotyp individua",
        4: "jako podmnožiny genů zadaného referenčního individua",
    },
    spravne: {
        1: 1,
        2: 0,
        3: 0,
        4: 0,
    },
});
otazky.push({
    otazka: "Vnější cyklus fmGA postupně zvyšuje",
    odpovedi: {
        1: "složitost referenčního individua",
        2: "cílovou velikost fragmentů po generování",
        3: "délku referenčního individua",
        4: "selekční tlak",
    },
    spravne: {
        1: 0,
        2: 1,
        3: 0,
        4: 0,
    },
});
otazky.push({
    otazka: "Referenční jedinec v fmGA",
    odpovedi: {
        1: "slouží pro vyhodnocení zdatnosti",
        2: "slouží pro konstrukci stochastického modelu",
        3: "při použití, jeho proměnné nahrazují proměnné fragmentů genetické informace",
        4: "při použití, jeho proměnné jsou nahrazovány proměnnými fragmentů genetické informace",
    },
    spravne: {
        1: 1,
        2: 0,
        3: 0,
        4: 1,
    },
});
otazky.push({
    otazka: "Vyhodnocení zdatnosti ve Fast Messy GA algoritmu je založeno na: 2023",
    odpovedi: {
        1: "reprezentaci individua",
        2: "výpočtu, který pomocí dalších informací vrátí zdatnost libovolné podmnožiny genů",
        3: "fenotypu individua",
        4: "použití referenčního individua",
    },
    spravne: {
        1: 0,
        2: 1,
        3: 0,
        4: 1,
    },
});
otazky.push({
    otazka: "Máte experimentálně vyhodnotit, zda chování algoritmu, který automaticky nastavuje počáteční teplotu simulovaného ochlazování, odpovídá teorii, kterou jste vymysleli, a která zahrnuje několik parametrů instance. Zajímá vás také, zda tyto parametry stačí k charakterizaci instance z hlediska práce algoritmu.",
    odpovedi: {
        1: "Použijete vygenerované instance se stejnými hodnotami parametrů, o kterých se hovoří ve Vaší teorii, ale různé velikosti.",
        2: "Použijete vygenerované instance s různými hodnotami parametrů, o kterých se hovoří ve Vaší teorii.",
        3: "Použijete reprezentativní mix praktických instancí.",
        4: "Výpočet spustíte opakovaně pro každou instanci.",
    },
    spravne: {
        1: 1,
        2: 1,
        3: 0,
        4: 1,
    },
});
otazky.push({
    otazka: "Máte experimentálně vyhodnotit, zda algoritmus, který automaticky nastavuje počáteční teplotu simulovaného ochlazování, pracuje uspokojivě.",
    odpovedi: {
        1: "Zvolíte jeden parametr instancí, o kterých se domníváte, že na počáteční teplotu má vliv, a zkonstruujete zkušební instance.",
        2: "Zvolíte velikost instance, na které budete experiment provádět.",
        3: "Použijete instance s rozdílnou hloubkou lokálních minim.",
        4: "Budete sledovat, zda rychlost ochlazování v algoritmu dává přiměřeně rychlou konvergenci pro nastavenou teplotu.",
    },
    spravne: {
        1: 0,
        2: 0,
        3: 1,
        4: 1,
    },
});
otazky.push({
    otazka: "Heuristika, která nastavuje parametry simulovaného ochlazování",
    odpovedi: {
        1: "vždy bude brát v úvahu rozsah optimalizačního kritéria nebo jej normovat",
        2: "pokud zjistí hloubku lokálních minim, dá se tato hodnota využít",
        3: "efekt, dosažený manipulací s hloubkou ekvilibria, se dá dosáhnout manipulací s koeficientem ochlazování",
    },
    spravne: {
        1: 1,
        2: 1,
        3: 1,
    },
});
otazky.push({
    otazka: "Volba počáteční teploty v simulovaném ochlazování",
    odpovedi: {
        1: "pro dosažení nejlepšího výsledku, může vyžadovat odpovídající volbu koeficientu ochlazování",
        2: "závisí na obtížnosti konkrétní instance",
        3: "závisí na rozsahu optimalizačního kritéria dané instance",
        4: "Koncová teplota v simulovaném ochlazování 2023",
        5: "je-li dost nízká, určuje, jak velká část stavového prostoru bude prohledávána",
        6: "je-li příliš vysoká, omezuje prohledávanou část stavového prostoru",
        7: "vždy musí zůstat konstantní, pokud se mění počáteční teplota",
        8: "dá se s výhodou určovat za běhu sledováním konvergence",
    },
    spravne: {
        1: 1,
        2: 1,
        3: 1,
        4: 0,
        5: 0,
        6: 1,
        7: 0,
        8: 1,
    },
});
otazky.push({
    otazka: "Jaká strategie se používá pro výběr souseda u simulovaného ochlazování?",
    odpovedi: {
        1: "pouze nejlepší",
        2: "prvé zlepšení",
        3: "prvé zlepšení nebo přípustné zhoršení",
        4: "nejlepší nejdříve",
    },
    spravne: {
        1: 0,
        2: 0,
        3: 1,
        4: 0,
    },
});
otazky.push({
    otazka: "Zvýšení počtu iterací při konstantní teplotě u SA (equilibrium), odpovídá:",
    odpovedi: {
        1: "zvýšení koeficientu ochlazování",
        2: "snížení koeficientu ochlazování",
        3: "vztah nelze vyjádřit",
    },
    spravne: {
        1: 1,
        2: 0,
        3: 0,
    },
});
otazky.push({
    otazka: "Pro praktickou aplikaci kombinatorického optimalizačního problému jste zvolili simulované ochlazování bez adaptačních mechanismů a s pevnou hodnotou koncové teploty. Na většině instancí se optimalizační kritérium nejdříve poněkud zhoršuje a přitom vykazuje náhodné změny, posléze se zlepšuje a náhodné změny se zmenšují. Na převážné části instancí konverguje ke stabilnímu a dobrému řešení. Na zbylých stále zlepšuje opt. kritérium a náhodné změny se zmenšují, ale optimalizační kritérium se nedostane ani ke startovací hodnotě. Na vině je:",
    odpovedi: {
        1: "příliš vysoká hodnota počáteční teploty",
        2: "příliš nízká hodnota koncové teploty",
        3: "podmínka ukončení, která nedetekuje konvergenci",
        4: "příliš nízká hodnota koeficientu ochlazování",
    },
    spravne: {
        1: 0,
        2: 0,
        3: 1,
        4: 0,
    },
});
otazky.push({
    otazka: "Máte experimentálně vyhodnotit, zda randomizovaný plánovací algoritmus, který chcete nasadit do aplikace řízení údržby, pracuje pro toto nasazení uspokojivě. Obtížnost instancí řešených v ostrém nasazení je obtížné odhadnout na základě známých charakteristik.",
    odpovedi: {
        1: "Použijete přednostně instance „nachytané“ při předchozím manuálním řízení.",
        2: "Použijete přednostně instance vygenerované se známými vlastnostmi.",
        3: "Použijete větší počet lehkých instancí k urychlení.",
        4: "Výpočet spustíte opakovaně pro každou instanci.",
    },
    spravne: {
        1: 1,
        2: 0,
        3: 0,
        4: 1,
    },
});
otazky.push({
    otazka: "Srovnáváte dva deterministické algoritmy A a B, za účelem teoretického poznání závislosti počtu kroků na velikosti instance. Pro algoritmus B, různé instance jedné velikosti vykazují velký rozptyl v počtu kroků. 2023",
    odpovedi: {
        1: "Počet kroků pro algoritmus B zprůměrujete, protože rozptyl není součástí hodnocení.",
        2: "Zjistíte statistické rozložení počtu kroků a pokud je symetrické, použijete průměr.",
        3: "Zjistíte statistické rozložení počtu kroků pro oba algoritmy a vyhodnotíte, zda se překrývají a jak mnoho.",
        4: "Pokusíte se zjistit, jaká další charakteristika instancí má vliv na počet kroků.",
    },
    spravne: {
        1: 0,
        2: 1,
        3: 1,
        4: 1,
    },
});
otazky.push({
    otazka: "Zjišťujete vliv parametru randomizované lokální iterativní heuristiky na kvalitu výsledku. Provedli jste jeden běh algoritmu na více instancích pro každou hodnotu parametru. Výsledná závislost je zcela chaotická, přestože by k tomu tak být nemělo.",
    odpovedi: {
        1: "Je to důkaz, že kvalita na parametru nezávisí.",
        2: "Použijete vizualizaci vývoje ceny, abyste zjistili, zda jiné parametry nejsou zcela nevhodně nastaveny.",
        3: "Algoritmus spouštíte opakovaně na každé instanci.",
        4: "Pokud to není domácí úkol, použijete statistické testy významnosti, abyste zjistili potřebný počet opakování.",
    },
    spravne: {
        1: 0,
        2: 1,
        3: 1,
        4: 1,
    },
});
