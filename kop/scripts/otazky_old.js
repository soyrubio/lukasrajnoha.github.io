var otazky = [];

// Otázky na reprezentaci

otazky.push({
    otazka: "Základní jednotkou reprezentace, se kterou pracuje Fast Messy genetický algoritmus, je",
    odpovedi: {
        1: "vektor hodnot",
        2: "dvojice [identifikace proměnné, hodnota]",
        3: "binární řetěz",
        4: "stochastický model závislostí mezi proměnnými"
    },
    spravne: { 1: 0, 2: 1, 3: 0, 4: 0 }
});

otazky.push({
    otazka: "Základní jednotkou reprezentace, se kterou pracuje stochastická optimalizace je",
    odpovedi: {
        1: "Stochastický model závislostí mezi proměnnými",
        2: "Dvojice [identifikace proměnné, hodnota]",
        3: "Dvojice [střední hodnota, standardní odchylka]",
        4: "Binární řetěz"
    },
    spravne: { 1: 1, 2: 0, 3: 0, 4: 0 }
});

otazky.push({
    otazka: "Základní jednotkou reprezentace, se kterou pracuje bayesovská optimalizace, je",
    odpovedi: {
        1: "Vektor hodnot",
        2: "Dvojice [identifikace proměnné, hodnota]",
        3: "Binární řetěz",
        4: "Stochastický model závislostí mezi proměnnými"
    },
    spravne: { 1: 0, 2: 0, 3: 0, 4: 1 }
});

otazky.push({
    otazka: "Co má na vstupu evoluční programování?",
    odpovedi: {
        1: "Automat",
        2: "Binární řetěz",
        3: "Vektor čísel",
        4: "Rozkladový výraz"
    },
    spravne: { 1: 1, 2: 0, 3: 0, 4: 0 }
});

otazky.push({
    otazka: "Evoluční programování pracuje nad reprezentací",
    odpovedi: {
        1: "vektoru reálných čísel",
        2: "rozkladového stromu výrazu",
        3: "binárního řetězu",
        4: "automatu"
    },
    spravne: { 1: 0, 2: 0, 3: 0, 4: 1 }
});

otazky.push({
    otazka: "Evoluční strategie pracuje nad reprezentací",
    odpovedi: {
        1: "vektoru reálných čísel a odchylek",
        2: "rozkladového stromu výrazu",
        3: "binárního řetězu",
        4: "automatu"
    },
    spravne: { 1: 1, 2: 0, 3: 0, 4: 0 }
});

otazky.push({
    otazka: "Genetické programování pracuje nad reprezentací",
    odpovedi: {
        1: "vektoru reálných čísel",
        2: "rozkladového stromu výrazu",
        3: "binárního řetězu",
        4: "automatu"
    },
    spravne: { 1: 0, 2: 1, 3: 0, 4: 0 }
});


// Bayesovská optimalizace

otazky.push({
    otazka: "Nová generace v bayesovské optimalizaci vzniká",
    odpovedi: {
        1: "křížením",
        2: "rozdělením a spojením fragmentů genetické informace",
        3: "generováním podle stochastického modelu",
        4: "ruletovým výběrem"
    },
    spravne: { 1: 0, 2: 0, 3: 1, 4: 0 }
});

otazky.push({
    otazka: "Stochastický model v bayesovské optimalizaci vzniká",
    odpovedi: {
        1: "podle vlastností aktuální generace",
        2: "podle žádaných vlastností řešení",
        3: "křížením z předchozí generace",
        4: "stochastickým výběrem"
    },
    spravne: { 1: 1, 2: 0, 3: 0, 4: 0 }
});

// Fast messy GA

otazky.push({
    otazka: "Stavební bloky ve Fast Messy GA se generují",
    odpovedi: {
        1: "jako podmnožiny ohodnocených genů zadané délky",
        2: "jako reprezentace počáteční populace",
        3: "jako fenotyp individua",
        4: "jako podmnožiny genů zadaného referenčního individua ??????"
    },
    spravne: { 1: 0, 2: 0, 3: 0, 4: 1 }
});

otazky.push({
    otazka: "Referenční jedinec v fmGA",
    odpovedi: {
        1: "slouží pro vyhodnocení zdatnosti",
        2: "slouží pro konstrukci stochastického modelu",
        3: "při použití, jeho proměnné nahrazují proměnné fragmentů genetické informace",
        4: "při použití, jeho proměnné jsou nahrazovány proměnnými fragmentů genetické informace"
    },
    spravne: { 1: 1, 2: 0, 3: 0, 4: 1 }
});

// Dynamické programování - složitosti

otazky.push({
    otazka: "Dynamické programování je aplikováno na grafový problém. Podinstance jsou libovolné podmnožiny hran, v nejhorším případě je třeba projít všechny. Velikost instance se měří počtem uzlů. Algoritmus",
    odpovedi: {
        1: "má složitost rostoucí s třetí mocninou velikosti instance",
        2: "má složitost rostoucí s kvadrátem velikosti instance",
        3: "má složitost exponenciální ve velikosti instance",
        4: "je pseudopolynomiální"
    },
    spravne: { 1: 0, 2: 0, 3: 1, 4: 0 }
});

otazky.push({
    otazka: "Dynamické programování je aplikováno na grafový problém. Používá jako klíč k výběru z paměti řešení podinstancí dvojici diskrétních proměnných (p,q), kde p je index uzlu a q index hrany. Velikost instance se měří počtem uzlů. Algoritmus je",
    odpovedi: {
        1: "lineární",
        2: "kvadratický",
        3: "složitost roste druhou mocninou velikosti instance",
        4: "Složitost roste třetí mocninou velikosti instance (|E| = n*(n-1)/2, |V| = n, O(n) ≈ |N|*|V| ≈ n^3)",
        5: "polynomiální",
        6: "pseudopolynomialní",
        7: "globální metoda"
    },
    spravne: { 1: 0, 2: 0, 3: 0, 4: 1, 5: 1, 6: 0, 7: 1 }
});

otazky.push({
    otazka: "Máte dynamické programování pro problém. Je závislé na podmnožině podproblémů (a nelze to udělat jinak). Jaký je to algoritmus?",
    odpovedi: {
        1: "Exponenciální",
        2: "Pseudopolynomiální",
        3: "Polynomiální",
        4: "Globální optimalizace"
    },
    spravne: { 1: 1, 2: 0, 3: 0, 4: 1 }
});

otazky.push({
    otazka: "Dynamické programování je aplikováno na problém, kde konfigurační proměnné zobrazují graf s uzly očíslovanými 1…n, kde n je velikost instance a dále celé číslo K. Podinstance je tvořena prvními m uzly, každá podinstance může mít jiné K. Algoritmus:",
    odpovedi: {
        1: "má složitost rostoucí s třetí mocninou velikosti instance",
        2: "má složitost rostoucí s kvadrátem velikosti instance",
        3: "má složitost exponenciální ve velikosti instance",
        4: "je pseudopolynomiální"
    },
    spravne: { 1: 0, 2: 0, 3: 0, 4: 1 }
});

otazky.push({
    otazka: "Dynamické programování je aplikováno na problém, kde konfigurační proměnné zobrazují graf s uzly očíslovanými 1…n, kde n je velikost instance. Podinstance je tvořena prvními m uzly. Kompozice a dekompozice mají složitost Omega(n). Algoritmus:",
    odpovedi: {
        1: "má složitost rostoucí s třetí mocninou velikosti instance",
        2: "má složitost rostoucí s kvadrátem (druhou mocninou) velikosti instance",
        3: "má složitost lineární ve velikosti instance",
        4: "má složitost exponenciální ve velikosti instance",
        5: "je pseudopolynomiální"
    },
    spravne: { 1: 0, 2: 1, 3: 0, 4: 0, 5: 0 }
});

otazky.push({
    otazka: "Dynamické programování je aplikováno na problém, kde konfigurační proměnné zobrazují graf s hranami očíslovanými 1…m, kde m je počet hran instance. Každá hrana je ohodnocena celým číslem 1 … M. Podinstance je tvořena prvními m-1 hranami, každá je vypočítána. Kompozice a dekompozice mají složitost Theta(log(M)). Algoritmus:",
    odpovedi: {
        1: "je lineární",
        2: "je exponenciální",
        3: "je polynomiální",
        4: "je pseudopolynomiální"
    },
    spravne: { 1: 0, 2: 0, 3: 1, 4: 0 }
});

otazky.push({
    otazka: "Dynamické programování používá jako klíč k výběru z paměti řešení podinstancí dvojici proměnných v rozsahu 0..n, kde n je velikost instance. Postup výpočtu je od triviálních podinstancí k finálnímu řešení, každou hodnotu je třeba vypočíst. Algoritmus je",
    odpovedi: {
        1: "exponenciální",
        2: "pseudopolynomiální",
        3: "lineární",
        4: "polynomiální",
        5: "kubický ??????"
    },
    spravne: { 1: 0, 2: 0, 3: 0, 4: 1, 5: 1 }
});

otazky.push({
    otazka: "Dynamické programování používá jako klíč k výběru z paměti řešení podinstancí dvojici diskrétních proměnných (p,q), kde rozsah hodnot p je dán v instanci, ale nesouvisí s její velikostí N, rozsah q je O(N^2), Algoritmus je",
    odpovedi: {
        1: "lineární",
        2: "pseudopolynomiální",
        3: "polynomiální",
        4: "globální metoda"
    },
    spravne: { 1: 0, 2: 1, 3: 0, 4: 1 }
});

otazky.push({
    otazka: "Dynamické programování používá jako klíč k výběru z paměti řešení podinstancí k-tici binárních proměnných, kde k=ln N a N je velikost instance. Postup výpočtu je od triviálních podinstancí k finálnímu řešení, každou hodnotu je třeba vypočíst. Algoritmus je",
    odpovedi: {
        1: "lineární",
        2: "pseudopolynomiální",
        3: "polynomiální",
        4: "globální metoda"
    },
    spravne: { 1: 1, 2: 0, 3: 1, 4: 1 }
});

otazky.push({
    otazka: "Dynamické programování používá jako klíč k výběru z paměti řešení podinstancí N-tici binárních proměnných, kde N je velikost instance. Postup výpočtu je od triviálních podinstancí k finálnímu řešení, každou hodnotu je třeba vypočíst. Algoritmus je",
    odpovedi: {
        1: "lineární",
        2: "pseudopolynomiální ???????",
        3: "polynomiální",
        4: "lokální metoda"
    },
    spravne: { 1: 0, 2: 1, 3: 1, 4: 0 }
});

otazky.push({
    otazka: "Dynamické programování je aplikováno na grafový problém. Podinstance je charakterizována podgrafem grafu zadaného v instanci o nejvýše log2n uzlech, kde n je velikost instance. Algoritmus je ????????",
    odpovedi: {
        1: "exponenciální",
        2: "pseudopolynomiální",
        3: "polynomiální",
        4: "globální metoda"
    },
    spravne: { 1: 0, 2: 0, 3: 1, 4: 1 }
});

otazky.push({
    otazka: "Dynamické programování řeší problém, kde každá instance i podinstance je charakterizována počtem prvků n a celočíselným parametrem P. Postup výpočtu je od triviálních podinstancí k finálnímu řešení. Dá se dokázat, že je třeba vyřešit podinstance pro všechna n, ale pro každé n pouze Theta(log(P)) instancí. Kompozice a dekompozice mají konstantní složitost. Algoritmus je",
    odpovedi: {
        1: "nejméně exponenciální",
        2: "pseudopolynomiální",
        3: "kubický",
        4: "polynomiální"
    },
    spravne: { 1: 0, 2: 0, 3: 1, 4: 1 }
});

// Tabu prohledávání

otazky.push({
    otazka: "Reprezentace stavu v tabu prohledávání je binární řetěz konstantní délky. Atributem tahu (akce) je Hammingova vzdálenost původního a výsledného stavu (počet změněných bitů). Tah (akce) je tabu, jestliže atribut překročí určený práh směrem nahoru. Toto opatření je",
    odpovedi: {
        1: "diverzifikace",
        2: "intenzifikace",
        3: "omezení okolí"
    },
    spravne: { 1: 0, 2: 1, 3: 1 }
});

otazky.push({
    otazka: "Reprezentace stavu v tabu prohledávání je binární řetěz konstantní délky. Tah je tabu, pokud se výsledný stav liší ve více než v K bitech. Potřebujete zvýšit diverzifikaci.",
    odpovedi: {
        1: "snížíte K",
        2: "zvýšite K",
        3: "K nemá na diverzifikaci vliv"
    },
    spravne: { 1: 0, 2: 1, 3: 0 }
});

otazky.push({
    otazka: "Reprezentace stavu v tabu prohledávání je cesta v grafu. Tabu pravidla směřují k diverzifikaci. Dlouhodobá paměť dává četnost použití každého uzlu v kandidátní cestě. I když je daný tah tabu, povede se, jestliže tato četnost je nižší než k procent průměru. Potřebujete zvýšit intenzifikaci.",
    odpovedi: {
        1: "snížíte K",
        2: "zvýšíte K",
        3: "K nemá na diverzifikaci vliv"
    },
    spravne: { 1: 1, 2: 0, 3: 0 }
});

otazky.push({
    otazka: "Máme problém zakódovaný binárním vektorem. Definujeme určitou hranici na vzdálenost operace (Hammingova vzdálenost = počet bitů, které se oproti současnému stavu změní). Všechny stavy, které jsou pod hranicí označíme jako tabu v tabu prohledávání. Toto je:",
    odpovedi: {
        1: "Diverzifikace",
        2: "Intenzifikace",
        3: "Omezení prostoru"
    },
    spravne: { 1: 1, 2: 0, 3: 0 }
});

otazky.push({
    otazka: "Reprezentace stavu v tabu prohledávání je cesta v grafu. Atributem tahu (akce) je počet uzlů, které se liší v původní a nové cestě. Tah (akce) je tabu, jestliže atribut překročí určený práh směrem nahoru. Toto opatření je",
    odpovedi: {
        1: "diverzifikace",
        2: "intenzifikace",
        3: "aspirace"
    },
    spravne: { 1: 0, 2: 1, 3: 0 }
});

otazky.push({
    otazka: "Reprezentace stavu v tabu prohledávání je binární řetěz konstatní délky. Dlouhodobá paměť dává statistiku relativní četnosti nastavení jednotlivých proměnných do 1. Tah dostane pokutu, jestliže nastavuje proměnnou do 1 a četnost je větší než 0.8 nebo do 0 a četnost je menší než 0.2. Toto opatření je",
    odpovedi: {
        1: "diverzifikace",
        2: "intenzifikace",
        3: "aspirace"
    },
    spravne: { 1: 1, 2: 0, 3: 0 }
});

otazky.push({
    otazka: "Typická úloha toho, že tah je tabu v tabu prohledávání je",
    odpovedi: {
        1: "diverzifikace",
        2: "intenzifikace",
        3: "omezení okolí"
    },
    spravne: { 1: 1, 2: 0, 3: 1 }
});

otazky.push({
    otazka: "Typická úloha aspiračních kritérií v tabu prohledávání je",
    odpovedi: {
        1: "diverzifikace",
        2: "intenzifikace",
        3: "omezení okolí"
    },
    spravne: { 1: 0, 2: 1, 3: 0 }
});

otazky.push({
    otazka: "V tabu algoritmu je řešení reprezentováno binárním vektorem. V dlouhodobé paměti máme uložen pro každý bit dosavadní četnost nastavení do 1. Jestliže definujeme aspirační kritérium, které prolomí tabu při nastavení určitého bitu do 0 pro zaznamenanou četnost menší než 0.3 nebo při nastavení do 1 pro zaznamenanou četnost větší než 0.7, je to",
    odpovedi: {
        1: "diverzifikace",
        2: "intenzifikace",
        3: "omezení okolí"
    },
    spravne: { 1: 0, 2: 1, 3: 0 }
});

otazky.push({
    otazka: "Atributy z dlouhodobé paměti v tabu prohledávání mohou být použity k",
    odpovedi: {
        1: "diverzifikaci",
        2: "intenzifikaci",
        3: "omezení okolí"
    },
    spravne: { 1: 1, 2: 1, 3: 1 }
});

otazky.push({
    otazka: "Reprezentace stavu v tabu prohledávání je cesta v grafu. Dlouhodobá paměť dává četnost použití každého uzlu v kandidátní cestě. I když je daný tah tabu, provede se, jestliže tato četnost je nižší než 0,05 průměru. Toto opatření je",
    odpovedi: {
        1: "diverzifikace",
        2: "intenzifikace",
        3: "aspirace"
    },
    spravne: { 1: 1, 2: 0, 3: 1 }
});

// Genetický algoritmus - co je třeba udělat, aby...

otazky.push({
    otazka: "V genetickém algoritmu je třeba zvýšit diverzifikaci. Možností je zvýšit pravděpodobnost mutace nebo snížit selekční tlak. Platí",
    odpovedi: {
        1: "nejdříve zvýšíme pravděpodobnost mutace, abychom se vyhnuli divergenci",
        2: "nejdříve snížíme selekční tlak, abychom neztráceli informaci",
        3: "pokud snížíme selekční tlak, může být potřeba o něco snížit i pravděpodobnost mutace, abychom se vyhnuli divergenci"
    },
    spravne: { 1: 0, 2: 1, 3: 1 }
});

otazky.push({
    otazka: "Selekční tlak v turnajovém výběru PŘÍMO nastavuje",
    odpovedi: {
        1: "velikost turnaje",
        2: "pravděpodobnost výběru nejlepšího jedince"
    },
    spravne: { 1: 1, 2: 0 }
});

otazky.push({
    otazka: "V genetickém algoritmu je třeba urychlit konvergenci. Možností je upravit pravděpodobnost mutace nebo zvýšit selekční tlak. Platí",
    odpovedi: {
        1: "přednostně zvýšíme selekční tlak, pracujeme s minimální potřebnou mutací",
        2: "přednostně zvýšíme pravděpodobnost mutace",
        3: "pokud zvýšíme selekční tlak, může být potřeba o něco zvýšit i pravděpodobnost mutace, abychom se vyhnuli divergenci"
    },
    spravne: { 1: 1, 2: 0, 3: 0 }
});

otazky.push({
    otazka: "V genetickém algoritmu je třeba urychlit konvergenci. Možností je upravit pravděpodobnost mutace nebo selekci. Platí",
    odpovedi: {
        1: "přednostně zvýšíme selekční tlak, pracujeme s minimální potřebnou mutací",
        2: "přednostně zvýšíme pravděpodobnost mutace",
        3: "pokud zvýšíme selekční tlak, může být potřeba o něco zvýšit i pravděpodobnost mutace, abychom se vyhnuli divergenci",
        4: "změna selekčního mechanismu nemá významný vliv, pokud zachováme selekční tlak"
    },
    spravne: { 1: 1, 2: 0, 3: 0, 4: 1 }
});

otazky.push({
    otazka: "Genetický algoritmus tvoří novou generaci stylem u+l, tj. ke generaci o u jedincích se přidá l nových a z celku se vybere opět u jedinců. Pro u = l = 1 je tento algoritmus vlastně",
    odpovedi: {
        1: "metodou pouze nejlepší",
        2: "metodou prvé zlepšení",
        3: "náhodná procházka"
    },
    spravne: { 1: 0, 2: 1, 3: 0 }
});

otazky.push({
    otazka: "Algoritmus, který má za běhu upravovat selekční tlak v genetickém algoritmu s turnajovým výběrem, bude přímo nastavovat",
    odpovedi: {
        1: "pravděpodobnost mutace",
        2: "velikost turnaje",
        3: "pravděpodobnost výběru nejlepšího jedince"
    },
    spravne: { 1: 0, 2: 1, 3: 0 }
});

otazky.push({
    otazka: "Algoritmus, který má za běhu upravovat selekční tlak v genetickém algoritmu s výběrem ruletou, může přímo nastavovat",
    odpovedi: {
        1: "konstatní převod ranku (pořadí zdatnosti) na pravděpodobnost výběru ????????? - spíš ne",
        2: "konstanty lineárního škálování",
        3: "pravděpodobnost aplikace operátoru „cut and splice“"
    },
    spravne: { 1: 0, 2: 0, 3: 0 }
});

otazky.push({
    otazka: "Algoritmus, který má za běhu upravovat selekční tlak v genetickém algoritmu, bude zjišťovat",
    odpovedi: {
        1: "diverzitu (rozdílnost) jedinců",
        2: "změnu průměrné zdatnosti mezi generacemi",
        3: "poměr zdatnosti např. nejzdatnějšího jedince a jedince v polovině pořadí"
    },
    spravne: { 1: 1, 2: 1, 3: 0 }
});

otazky.push({
    otazka: "Algoritmus, který má za běhu upravovat selekční tlak v genetickém algoritmu používajícím lineární škálování a ruletový výběr, bude přímo nastavovat",
    odpovedi: {
        1: "poravděpodobnost mutace",
        2: "výseče rulety",
        3: "koeficienty lineární škálování"
    },
    spravne: { 1: 0, 2: 0, 3: 1 }
});

otazky.push({
    otazka: "Máte experimentálně vyhodnotit, zda Vaše aplikace genetického algoritmu správně zachází se selekčním tlakem. ????????",
    odpovedi: {
        1: "Budete sledovat vývoj průměrné, minimální a maximální zdatnosti jednotlivých generací. ????????",
        2: "Použijete lehké i těžké instance. ????????",
        3: "Budete měřit závislost výpočetního času na počtu generací.",
        4: "Výpočet spustíte opakovaně pro každou instanci."
    },
    spravne: { 1: 1, 2: 1, 3: 0, 4: 1 }
});

otazky.push({
    otazka: "Máte experimentálně vyhodnotit, zda algoritmus, který automaticky udržuje slekční tlak v genetickém algoritmu, pracuje uspokojivě. Provedete následující",
    odpovedi: {
        1: "Budete měřit četnost mutace v závislosti na poměrné zdatnosti.",
        2: "Budete měřit četnost výběru (selekce) v závislosti na poměrné zdatnosti.",
        3: "Pro každou velikost instance zvolíte jednu instanci.",
        4: "Zvolíte jednu velikost instance a použijete instance rozdílné obtížnosti."
    },
    spravne: { 1: 0, 2: 1, 3: 0, 4: 0 }
});

otazky.push({
    otazka: "V genetickém algoritmu používáme operátor inverze, jestliže",
    odpovedi: {
        1: "chceme potlačit statistickou nevyváženost uniformního křížení",
        2: "chceme potlačit statistickou nevyváženost jednobodového křížení",
        3: "současně používáme uniformní stochastický výběr "
    },
    spravne: { 1: 0, 2: 1, 3: 0 }
});

otazky.push({
    otazka: "Genetický algoritmus má pravděpodobnost mutace 40 %. Algoritmus tak je",
    odpovedi: {
        1: "metoda pouze nejlepší",
        2: "náhodná procházka",
        3: "zaujatá náhodná procházka"
    },
    spravne: { 1: 0, 2: 0, 3: 1 }
});

// Otázky na experimenty

otazky.push({
    otazka: "Máte experimentálně vyhodnotit, zda algoritmus, který automaticky nastavuje počáteční teplotu simulovaného ochlazování, pracuje uspokojivě.",
    odpovedi: {
        1: "Zjistíte z literatury nebo experimentálně, jaké vlastnosti mají vliv na nutnou počáteční teplotu, a pokryjete jejich rozsah vhodnými instancemi.",
        2: "Použijete instance různé velikosti.",
        3: "Použijete instance s rozdílnou hloubkou lokálních minim.",
        4: "Problému se vyhnete převzetím algoritmu, který fungoval uspokojivě na jiném kombinatorickém optimalizačním problému.",
        5: "Výpočet spustíte opakovaně pro každou instanci.",
        6: "Zvolíme jednotnou velikost instance pro všechny experimenty",
        7: "Zvolíme jednu průměrnou hloubkou lokálních minim pro všechny experimenty"
    },
    spravne: { 1: 1, 2: 1, 3: 1, 4: 0, 5: 1, 6: 0, 7: 0 }
});

otazky.push({
    otazka: "Máte genetický algoritmus a svou teorii ohledně vlastností instance, jak ji ověříte? ??????????",
    odpovedi: {
        1: "Vygeneruji instance s danou vlastností a nad nimi spustím genetický algoritmus",
        2: "Algoritmus spustím opakovaně nad instancemi ",
        3: "Vygeneruji jak malé, tak velké instance a nad nimi spustím algoritmus"
    },
    spravne: { 1: 0, 2: 1, 3: 1 }
});

otazky.push({
    otazka: "Potřebujete plánovací algoritmus, který chcete nasadit do aplikace řízení údržby. Čas výpočtu je omezen na jednu noc. Důležitá je kvalita. Máte dva kandidáty A a B, oba randomizované algoritmy. Potřebujete je experimentálně srovnat.",
    odpovedi: {
        1: "Použijete přednostně instance „nachytané“ při předchozím manuálním řízení.",
        2: "Pro každou instanci srovnáte dosažené optimalizační kritérium algoritmy A a B.",
        3: "Pro každou instanci srovnáte průměrnou hodnotu opt. kritéria pro několik desítek až stovek spuštění.",
        4: "Pokud zjistíte, že B je třikrát rychlejší než A, z každých třech hodnot opt. kritéria pro B vezmete tu nejlepší."
    },
    spravne: { 1: 1, 2: 0, 3: 1, 4: 1 }
});

otazky.push({
    otazka: "Máte experimentálně vyhodnotit, zda randomizovaný plánovací algoritmus, který chcete nasadit do aplikace řízení údržby, pracuje pro toto nasazení uspokojivě.",
    odpovedi: {
        1: "Použijete přednostně instance „nachytané“ při předchozím manuálním řízení.",
        2: "Použijete přednostně instance vygenerované se známými vlastnostmi.",
        3: "Použijete větší počet lehkých instancí k urychlení.",
        4: "Výpočet spustíte opakovaně pro každou instanci. "
    },
    spravne: { 1: 1, 2: 1, 3: 0, 4: 1 }
});

otazky.push({
    otazka: "Máte experimentálně vyhodnotit, zda randomizovaný algoritmus, který vyvíjíte, je citlivý na určitou charakteristickou instanci.",
    odpovedi: {
        1: "Použijete přednostně instance „nachytané“ při provozu podobného algoritmu v praxi, i když zkoumanou charakteristiku u nich nelze zjistit.",
        2: "Použijete přednostně instance vygenerované se známými vlastnostmi.",
        3: "Použijete instance různých vlastností tak, aby bylo možné srovnání podobných instancí, avšak s či bez zkoumané charakteristiky.",
        4: "Výpočet spustíte opakovaně pro každou instanci. "
    },
    spravne: { 1: 0, 2: 0, 3: 1, 4: 1 }
});

otazky.push({
    otazka: "Pro praktickou aplikaci kombinatorického optimalizačního problému jste zvolili simulované ochlazování bez adaptačních mechanizmů a s pevnou hodnotou koncové teploty. Na většině instancí se optimalizační kritérium nejdříve poněkud zhoršuje a přitom vykazuje náhodné změny, posléze se zlepšuje a náhodné změny se zmenšují. Na převážné části instancí konverguje ke stabilnímu a dobrému řešení. Na zbylých stále zlepšuje opt. kritérium a náhodné změny se zmenšují, ale optimalizační kritérium se nedostane ani ke startovací hodnotě. Na vině je",
    odpovedi: {
        1: "příliš vysoká hodnota počáteční teploty",
        2: "příliš nízká hodnota koncové teploty",
        3: "podmínka ukončení, která nedetekuje konvergenci",
        4: "příliš nízká hodnota koeficientu ochlazování "
    },
    spravne: { 1: 0, 2: 0, 3: 1, 4: 0 }
});

// Jiné

otazky.push({
    otazka: "Globální metody",
    odpovedi: {
        1: "jsou postaveny na myšlence stavového prostoru",
        2: "některé pseudopolynomiální algoritmy pro NP-těžké problémy jsou globálními metodami",
        3: "některé globální metody poskytují exaktní řešení",
        4: "některé globální metody poskytují exaktní řešení některých NP-těžkých problémů v čase, který, kromě jiného, polynomiálně závisí na velikosti instance"
    },
    spravne: { 1: 0, 2: 1, 3: 1, 4: 1 }
});

otazky.push({
    otazka: "Co musí vždy splňovat algoritmus, aby se mohl nazývat dynamickým programováním?",
    odpovedi: {
        1: "používat čistou nebo přesnou dekompozici",
        2: "být rozčleněn na stupně (stages) výpočtu",
        3: "používat paměť na řešení dílčích instancí",
        4: "alespoň v některé fázi postupovat od triviálních dílčích instancí k řešení zadané instance",
        5: "používat přibližnou dekompozici",
        6: "používat dvourozměrné pole pro řešení dílčích instancí",
        7: "rekurzivně počítat řešení větších podinstancí z menších"
    },
    spravne: { 1: 1, 2: 0, 3: 1, 4: 0, 5: 0, 6: 0, 7: 0 }
});

otazky.push({
    otazka: "Globální metoda, která rozdělí problém velikosti n na dva velikosti n-1. Pokud podinstance mají optimální řešení, dostaneme jejich složením optimální řešení problému.",
    odpovedi: {
        1: "Algoritmus je dynamické programování.",
        2: "Algoritmus lze převést na dynamické programování.",
        3: "Složitost O(2^n)",
        4: "Složitost O(n^k)"
    },
    spravne: { 1: 0, 2: 1, 3: 1, 4: 0 }
});

otazky.push({
    otazka: "Dekompozice a kompozice trvají konstantní čas. Algoritmus je:",
    odpovedi: {
        1: "lineární",
        2: "polynomální",
        3: "globální metoda"
    },
    spravne: { 1: 0, 2: 1, 3: 1 }
});

otazky.push({
    otazka: "Algoritmus musí splňovat následující, aby ho bylo možné označit jako Dynamické programování",
    odpovedi: {
        1: "prohledává okolní stavy",
        2: "funguje ve fázích (stages)",
        3: "používá paměť pro výsledky",
        4: "použivá přesné nebo čisté dekompozice"
    },
    spravne: { 1: 0, 2: 0, 3: 1, 4: 1 }
});

otazky.push({
    otazka: "Máte simulované ochlazování s automatickým nastavováním počáteční teploty. Jak ověříte správnost nastavování počáteční teploty?",
    odpovedi: {
        1: "Pustím na instance různých velikostí",
        2: "Pustím na instance různých hloubek",
        3: "Pustím na mnoho malých instancí, aby to urychlil"
    },
    spravne: { 1: 0, 2: 1, 3: 0 }
});
