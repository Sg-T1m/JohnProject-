import { FectInquiry } from "./FetchInquiry";
const dvdvds: string = `http://localhost:3000/Blog`
const ddds: string = `svsdv`
const modalNav2 = new FectInquiry(ddds, dvdvds, renderBlogContent)
const openBlogs: Element | null = document.querySelector(`.hrev_Blog`)
const Home_Listners: any = document.querySelector(".content");
interface items {
    Headertext: string;
    date: string;
    theme: string;
    content: string;
}

openBlogs?.addEventListener(`click`, () => {
    renderBlogPage()
    
})


function renderBlogPage(): void {
    const BlogHtml: Element = document.createElement("div");
    BlogHtml.classList.add("Blog")
    BlogHtml.innerHTML = ` 
    <div class="Blog_headers">
    <p class="Blog_headers_text">Blog </p>
  </div>
  <div class="Blog_content">
  </div>
</div>`
    Home_Listners.innerHTML = "";
    Home_Listners.appendChild(BlogHtml);
    modalNav2.gets();
    openBlogs?.classList.add("RedText");
}


function renderBlogContent(data: Array<items>): void {
    const inerContent: Element | null = document.querySelector(`.Blog_content`)
    data.forEach((item: items): void => {
        let Blog_contentRender = document.createElement("div");
        Blog_contentRender.classList.add("Blog_content");
        Blog_contentRender.innerHTML = `
        <div class="Blog_content_Container">
        <div class="content_Container_heaer">${item.Headertext}</div>
        <div class="content_Container_middle">
          <div class="Container_middle_time">${item.date}</div>
          <div class="Container_middle_line"></div>
          <div class="Container_middle_text">${item.theme}</div>
        </div>
        <div class="content_Container_Footer"><p class="Container_Footer_text">${item.content}</p>
        </div>
                `;
        inerContent?.appendChild(Blog_contentRender);
    });
}
