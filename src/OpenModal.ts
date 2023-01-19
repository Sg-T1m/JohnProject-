export class CreateModal {
  placeDocument: Element|null;
  htmlCode: string;
  className: string;
  constructor(htmlCode, placeDocument, className) {
    this.htmlCode = htmlCode;
    this.placeDocument = placeDocument;
    this.className = className;
  }
  OpenModal() {
    let main: Element = document.createElement("div");
    main.classList.add(this.className);
    main.innerHTML = this.htmlCode
    this.placeDocument?.appendChild(main)
  }
  close() {
    console.log(`dvdvdv`)
    const Modal: Element | null = document.querySelector(`.${this.className}`)
    Modal?.remove()
  }
}

