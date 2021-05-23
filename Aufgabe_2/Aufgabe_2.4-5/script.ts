namespace Aufgabe_2_5 {
    
    export let nummerDrumKit: number = 0;
    export let nummerRetroKit: number = 1;
    export let nummerLoopKit: number = 2;
    export let auswahl: Auswahl = {DrumKit: undefined, RetroKit: undefined, LoopKit: undefined};

    export interface Kit {
        DrumKit: BildKit[];
        RetroKit: BildKit[];
        LoopKit: BildKit[];
    }

    export interface BildKit {
        link: string;
        name: string;
        typ: number;
    }

    export interface Auswahl {
        DrumKit: BildKit;
        RetroKit: BildKit;
        LoopKit: BildKit;
    }

    let bildDiv: HTMLElement = <HTMLElement>document.getElementById("auswahlButtons");

    let drumKitButton: HTMLButtonElement = <HTMLButtonElement>document.createElement("button");
    drumKitButton.id = "DrumKit";
    drumKitButton.innerHTML = "DrumKit";
    bildDiv.appendChild(drumKitButton);
    drumKitButton.addEventListener("click", openDrumKit);

    function openDrumKit(): void {
        window.open("auswahlDrumKit.html");
        console.log("auswahlDrumKit");
        
    }
}