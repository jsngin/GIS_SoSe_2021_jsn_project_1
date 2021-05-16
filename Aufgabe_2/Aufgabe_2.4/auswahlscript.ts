namespace Aufgabe_2_4 {


    let funktionDiv: HTMLElement = <HTMLElement>document.getElementById("functions");
    let path: string = window.location.pathname.substring(window.location.pathname.lastIndexOf("/") + 1);
    let response: HTMLElement = <HTMLElement>document.getElementById("response");
    let currentPick: HTMLElement = <HTMLElement>document.getElementById("currentPick");
    currentKit();

    let speicherButton: HTMLButtonElement = <HTMLButtonElement>document.createElement("button");
    speicherButton.id = "save";
    speicherButton.innerHTML = "save";
    speicherButton.addEventListener("click", nächsteAuswahl);
    funktionDiv.appendChild(speicherButton);

    let abbrechenButton: HTMLButtonElement = <HTMLButtonElement>document.createElement("button");
    abbrechenButton.id = "cancel";
    abbrechenButton.innerHTML = "cancel";
    abbrechenButton.addEventListener("click", abbrechen);
    funktionDiv.appendChild(abbrechenButton);

    let zurückButton: HTMLButtonElement = <HTMLButtonElement>document.createElement("button");
    zurückButton.id = "back";
    zurückButton.innerHTML = "back";
    zurückButton.addEventListener("click", zurück);
    funktionDiv.appendChild(zurückButton);

    function abbrechen(): void {
        window.open("index.html", "_self");
        console.log("Abgebrochen");
    }

   

    function zurück(): void {
        let vorherigeSeite: string;
        if (path == "auswahlRetroKit.html") {
            vorherigeSeite = "auswahlDrumKit.html";
        } else if (path == "auswahlLoopKit.html") {
            vorherigeSeite = "auswahlRetroKit.html";
        } else if (path == "auswahlDrumKit.html") {
            vorherigeSeite = "index.html";
        }
        window.open(vorherigeSeite, "_self");
    }


    let previousElement: HTMLElement = document.getElementById("functions");
   
    function wählen(): BildKit[] {
        let art: BildKit[] = _kit.DrumKit;
        if (window.location.href.includes("auswahlRetroKit.html"))
            art = _kit.RetroKit;
        if (window.location.href.includes("auswahlLoopKit.html")) 
            art = _kit.LoopKit;
        return art;
        }

    function auswählen(): void {
        const gewaehltes: BildKit[] = wählen();
        for (let index: number = 0; index < gewaehltes.length; index++) {

            let posLeft: string = "";
            let posTop: string = "";
            posLeft = (index * 200) + "px";
            posTop = 100 + "px";

            let img: HTMLElement = document.createElement("img");
            img.style.position = "static";
            img.style.left = posLeft;
            img.style.top = posTop;
            img.style.margin = "10px";
            img.style.height = 200 + "px";
            img.style.width = 200 + "px";
            img.setAttribute("src", gewaehltes[index].link);
            img.addEventListener("click", function (): void {speichern(gewaehltes[index].link, gewaehltes[index].typ); currentKit();
            });

            img.id = gewaehltes[index].name; 
            previousElement.appendChild(img);
        }
        
    }   
    auswählen();
    
    function nächsteAuswahl(): void {
        if (window.location.href.includes("auswahlDrumKit.html")) {
            if (sessionStorage.getItem("0") == null) {
                response.innerHTML = "BITTE WÄHLEN SIE ETWAS AUS.";
                return;
            }
            window.open("auswahlRetroKit.html", "_self");
        }
        if (window.location.href.includes("auswahlRetroKit.html")) {
            window.open("auswahlLoopKit.html");
        }
        if (window.location.href.includes("auswahlLoopKit.html")) {
            window.open("completeBundle.html");
        }

    } 

    function speichern(_link: string, _typ: number): void {
        
        sessionStorage.setItem(_typ.toString(), _link);
    }
           
    function currentKit(): void {
        if (path == "auswahlDrumKit.html") {
            currentPick.innerHTML = "";
            let posLeft: string = "";
            let posTop: string = "";
            posLeft = (0 * 200) + "px";
            posTop = 100 + "px";

            let img: HTMLElement = document.createElement("img");
            img.style.position = "static";
            img.style.left = posLeft;
            img.style.top = posTop;
            img.style.margin = "10px";
            img.style.height = 200 + "px";
            img.style.width = 200 + "px";
            img.setAttribute("src", sessionStorage[0]);
            
            currentPick.appendChild(img);
        }
        if (path == "auswahlRetroKit.html") {
            currentPick.innerHTML = "";
            for (let index: number = 0; index < 2; index++) {

            
            let posLeft: string = "";
            let posTop: string = "";
            posLeft = (index * 200) + "px";
            posTop = 100 + "px";

            let img: HTMLElement = document.createElement("img");
            img.style.position = "static";
            img.style.left = posLeft;
            img.style.top = posTop;
            img.style.margin = "10px";
            img.style.height = 200 + "px";
            img.style.width = 200 + "px";
            img.setAttribute("src", sessionStorage[index]);
            
            currentPick.appendChild(img);
            }
        }
        if (path == "auswahlLoopKit.html") {
            currentPick.innerHTML = "";
            for (let index: number = 0; index < 3; index++) {

            
            let posLeft: string = "";
            let posTop: string = "";
            posLeft = (index * 200) + "px";
            posTop = 100 + "px";

            let img: HTMLElement = document.createElement("img");
            img.style.position = "static";
            img.style.left = posLeft;
            img.style.top = posTop;
            img.style.margin = "10px";
            img.style.height = 200 + "px";
            img.style.width = 200 + "px";
            img.setAttribute("src", sessionStorage[index]);
            
            currentPick.appendChild(img);
            }
        }

        
    }   
    

}