import { FectInquiry } from "./FetchInquiry";
const dvdvds: string = `http://localhost:3000/news`
const ddds: string = `svsdv`
const modalNav2 = new FectInquiry(ddds, dvdvds, renderBlogPage)
const openBlogs: Element | null = document.querySelector(`.hrev_Blog`)

openBlogs?.addEventListener(`click`,  modalNav2.gets)

function renderBlogPage(data:string): void {
    modalNav2.gets()
}
