export class FectInquiry {
    data: string;
    url: string;
    bodyFunctions: any;
    constructor(data, url, bodyFunctions) {
        this.data = data
        this.url = url
        this.bodyFunctions = bodyFunctions
    }
    async post() {
        await fetch(`${this.url}`, {

            method: "post",
            body: JSON.stringify(this.data),
            headers: {
                "Content-type": "application/json",
            },
        })
    }
    gets() {
        const test = fetch(`${this.url}`)
        test.then((data) => data.json())
            .then((data) => this.bodyFunctions(data))
    }
}
