namespace Aufgabe_2_4 {

    export let kitJSON: string = 
    `
    {
        "DrumKit":  [
           {"link": "assets/DrumKit/DrumKit_1.PNG", "name": "Kit1", "typ": 0}, 
           {"link": "assets/DrumKit/DrumKit_2.PNG", "name": "Kit2", "typ": 0},      
           {"link": "assets/DrumKit/DrumKit_3.PNG", "name": "Kit3", "typ": 0},
           {"link": "assets/DrumKit/DrumKit_4.PNG", "name": "Kit4", "typ": 0}
        ],

       "RetroKit":  [
            {"link": "assets/RetroKit/RetroKit_1.PNG", "name": "Kit1", "typ": 1}, 
            {"link": "assets/RetroKit/RetroKit_2.PNG", "name": "Kit2", "typ": 1},      
            {"link": "assets/RetroKit/RetroKit_3.PNG", "name": "Kit3", "typ": 1},
            {"link": "assets/RetroKit/RetroKit_4.PNG", "name": "Kit4", "typ": 1}
        ],

       "LoopKit":  [
            {"link": "assets/LoopKit/LoopKit_1.PNG", "name": "Kit1", "typ": 2}, 
            {"link": "assets/LoopKit/LoopKit_2.PNG", "name": "Kit2", "typ": 2},      
            {"link": "assets/LoopKit/LoopKit_3.PNG", "name": "Kit3", "typ": 2},
            {"link": "assets/LoopKit/LoopKit_4.PNG", "name": "Kit3", "typ": 2}
        ]        
    }
    `
    ;
    export let _kit: Kit = JSON.parse(kitJSON);
}