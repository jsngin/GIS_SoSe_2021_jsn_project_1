namespace Aufgabe_2_4 {

    export let nummerDrumKit: number = 0;
    export let nummerRetroKit: number = 0;
    export let nummerLoopKit: number = 0;
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

    let retroKitButton: HTMLButtonElement = <HTMLButtonElement>document.createElement("button");
    retroKitButton.id = "RetroKit";
    retroKitButton.innerHTML = "RetroKit";
    retroKitButton.addEventListener("click", openRetroKit);
    bildDiv.appendChild(retroKitButton);

    let loopKitButton: HTMLButtonElement = <HTMLButtonElement>document.createElement("button");
    loopKitButton.id = "LoopKit";
    loopKitButton.innerHTML = "LoopKit";
    loopKitButton.addEventListener("click", openLoopKit); 
    bildDiv.appendChild(loopKitButton);   

   

    function openDrumKit(): void {
        window.open("auswahlDrumKit.html", "_self");
        console.log("auswahlDrumKit");
    }

    function openRetroKit(): void {
        window.open("auswahlRetroKit.html", "_self");
        console.log("auswahlDrumKit");
    }

    function openLoopKit(): void {
        window.open("auswahlLoopKit.html", "_self");
        console.log("auswahlDrumKit");
    }

    
}