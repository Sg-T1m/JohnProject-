import { FectInquiry } from "./FetchInquiry";
const dvdvds: string = `http://localhost:3000/news`
const ddds: string = `svsdv`
const modalNav2 = new FectInquiry(ddds, dvdvds, renderBlogPage)
const openBlogs: Element | null = document.querySelector(`.hrev_Blog`)
const Home_Listners: any = document.querySelector(".content");

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
    <div class="Blog_content_Container">
      <div class="content_Container_heaer">UI Interactions of the week</div>
      <div class="content_Container_middle">
        <div class="Container_middle_time">12 Feb 2019</div>
        <div class="Container_middle_line"></div>
        <div class="Container_middle_text">Express, Handlebars</div>
      </div>
      <div class="content_Container_Footer"><p class="Container_Footer_text">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
        sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
      </div>
    </div>
  </div>
</div>`
    Home_Listners.innerHTML = "";
    Home_Listners.appendChild(BlogHtml);
}
function renderBlogContent(data:string):void{

}