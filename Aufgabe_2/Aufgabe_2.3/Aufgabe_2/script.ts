namespace Aufgabe02 {
    
    const displayarea: HTMLElement = document.getElementById("displayarea");
    class Person {
        head: string;
        body: string;
        legs: string;
        name: string;

        setHead(_head: string): void {
            this.head = _head;
        }

        setBody(_body: string): void {
            this.body = _body;
        }

        setLegs(_legs: string): void {
            this.legs = _legs;
        }

        setName(_name: string): void {
            this.name = _name;
        }
    }
    let person: Person = new Person();

    for (let i: number = 0; i < productsPics.length; i++) {
        const imgElem: HTMLImageElement = document.createElement("img");
        imgElem.src = productsPics[i];
        imgElem.className = "products";
        imgElem.id = String(i + 1);
        displayarea.appendChild(imgElem);
    }

    const optionsHead: NodeListOf<HTMLElement> = document.querySelectorAll(".products");

    function highlightSelection(element: HTMLElement): void {
        optionsHead.forEach(element => {
            element.style.border = "3px solid transparent";
            element.style.boxShadow = "2px 3px 7px black";
        });

        element.style.border = "4px solid #000";
        element.style.boxShadow = "3px 4px 7px ";
    }
    
    optionsHead.forEach(element => {
        element.addEventListener("click", function (): void {
            person.setHead(element.id);
            highlightSelection(element);
            console.log(person.head);
        });
    });
}