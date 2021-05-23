namespace Aufgabe_2_5 {

    let completeBundle: HTMLElement = <HTMLElement>document.getElementById("completeBundle");
    let buttonsDiv: HTMLElement = <HTMLElement>document.getElementById("buttons");
    interface Serverresponse {
        message: string;
        error: string;

    }

    function speicherAnzeigen(): void {
        let imgDrumKit: HTMLElement = document.createElement("img");
        imgDrumKit.setAttribute("src", sessionStorage.getItem("DrumKit"));
        completeBundle.appendChild(imgDrumKit);

        let imgRetroKit: HTMLElement = document.createElement("img");
        imgRetroKit.setAttribute("src", sessionStorage.getItem("RetroKit"));
        completeBundle.appendChild(imgRetroKit);

        let imgLoopKit: HTMLElement = document.createElement("img");
        imgLoopKit.setAttribute("src", sessionStorage.getItem("LoopKit"));
        completeBundle.appendChild(imgLoopKit);

    }
    speicherAnzeigen();

    let startseite: HTMLButtonElement = <HTMLButtonElement>document.createElement("button");
    startseite.id = "cancel";
    startseite.innerHTML = "Create New ";
    startseite.addEventListener("click", neuBeginnen);
    buttonsDiv.appendChild(startseite);

    function neuBeginnen(): void {
        window.open("index.html", "_self");
        console.log("canceled");
    }

    if (window.location.pathname.substring(window.location.pathname.lastIndexOf("/") + 1) == "completeBundle.html") {
        servercheck();
}

    async function servercheck(): Promise<void> {
        // tslint:disable-next-line: no-any
        let query: URLSearchParams = new URLSearchParams(<any>sessionStorage);
        let url: string = "https://gis-communication.herokuapp.com";
        url = url + "?" + query.toString();
        let serverresponse: Response = await fetch(url);
        let response: Serverresponse = await serverresponse.json();

        if (response.error != undefined) {
            console.log(response.error);
            let messagediv: HTMLElement = document.getElementById("error");
            messagediv.appendChild(document.createTextNode("" + response.error));
        }
        else if (response.message != undefined) {
            console.log(response.message);
            let messagediv: HTMLElement = document.getElementById("message");
            messagediv.appendChild(document.createTextNode("" + response.message));            
        }

    }
}