namespace Aufgabe_2_5 {

    export let nummerDrumKit: number = 0;
    export let nummerretrokit: number = 1;
    export let nummerLoopKit: number = 2;
    export let auswahl: Auswahl = {drumkit: undefined, retrokit: undefined, loopkit: undefined};

    export interface Kit {
        drumkit: BildKit[];
        retrokit: BildKit[];
        loopkit: BildKit[];
    }

    export interface BildKit {
        link: string;
        name: string;
        typ: string;
    }

    export interface Auswahl {
        drumkit: BildKit;
        retrokit: BildKit;
        loopkit: BildKit;
    }

    let bildDiv: HTMLElement = <HTMLElement>document.getElementById("auswahlButtons");

    let drumkitButton: HTMLButtonElement = <HTMLButtonElement>document.createElement("button");
    drumkitButton.id = "DrumKit";
    drumkitButton.innerHTML = "DrumKit";
    bildDiv.appendChild(drumkitButton);
    drumkitButton.addEventListener("click", openDrumKit);
    

    function openDrumKit(): void {
        window.open("auswahlDrumKit.html", "_self");
        console.log("auswahlDrumKit");
    }

    

    
}