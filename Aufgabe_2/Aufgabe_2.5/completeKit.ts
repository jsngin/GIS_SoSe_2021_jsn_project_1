namespace Aufgabe_2_5 {

    let completeKit: HTMLElement = <HTMLElement>document.getElementById("completeKit");
    let buttonsDiv: HTMLElement = <HTMLElement>document.getElementById("buttons");
    interface Serverantwort {
        message: string;
        error: string;
    }

    function speicherAnzeigen(): void {
     
            let imgDrumKit: HTMLElement = document.createElement("img");
            imgDrumKit.setAttribute("src", sessionStorage.getItem("DrumKit"));
            completeKit.appendChild(imgDrumKit);

            let imgRetroKit: HTMLElement = document.createElement("img");
            imgRetroKit.setAttribute("src", sessionStorage.getItem("RetroKit"));
            completeKit.appendChild(imgRetroKit);

            let imgLoopKit: HTMLElement = document.createElement("img");
            imgLoopKit.setAttribute("src", sessionStorage.getItem("LoopKit"));
            completeKit.appendChild(imgLoopKit);
        
        
    }   
    speicherAnzeigen();

    let startseite: HTMLButtonElement = <HTMLButtonElement>document.createElement("button");
    startseite.id = "abbrechen";
    startseite.innerHTML = "Create a new Bundle!";
    startseite.addEventListener("click", neuBeginnen);
    buttonsDiv.appendChild(startseite);

    function neuBeginnen(): void {
        window.open("auswahlDrumKit.html", "_self");
        console.log("Abgebrochen");
    }

    if (window.location.pathname.substring(window.location.pathname.lastIndexOf("/") + 1) == "completeKit.html") {
        servercheck();
    }
    
    async function servercheck(): Promise<void> {
        // tslint:disable-next-line: no-any
        let query: URLSearchParams = new URLSearchParams(<any>sessionStorage);
        let url: string = "https://gis-communication.herokuapp.com";
        url = url + "?" + query.toString();
        let serverantwort: Response = await fetch(url);
        let rückmeldung: Serverantwort = await serverantwort.json();


        if (rückmeldung.error != undefined) {
            console.log(rückmeldung.error);
            let messagediv: HTMLElement = document.getElementById("error");
            messagediv.appendChild(document.createTextNode("" + rückmeldung.error));
        }
        else if (rückmeldung.message != undefined) {
            console.log(rückmeldung.message);
            let messagediv: HTMLElement = document.getElementById("message");
            messagediv.appendChild(document.createTextNode("" + rückmeldung.message));
        }

    }
}