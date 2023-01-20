import css from "./css/style.css";
import types from "./modulWork.ts"
import navModal from "./OpenModal.ts"
import { CreateModal } from "./OpenModal.ts";
import Fetchinquiryss from "./FetchInquiry.ts";
import { FectInquiry } from "./FetchInquiry.ts";
const navMenu = document.querySelector(`.nav_menuModal`)
var contentHtmlNavModal = ` 
<div class="ModalNav">
      <div class="ModalNav_Close"></div>
      <div class="ModalNav_content">
        <p class="nav_works"><a class="hrew_Works">Works</a></p>
        <p class="nav_Blog"><a class="hrev_Blog">Blog</a></p>
        <p class="nav_Contact"><a class="hrev_Contact">Contact</a></p>
        <p class="nav_Chat"><a class="herv_Chat">Chat</a></p>
      </div>
    </div>
`
const ClassNameNavModal = "ModalShov"
const elemNavModal = document.querySelector(`.main`)
navMenu.addEventListener(`click`, OpenModalNavMenu)



function OpenModalNavMenu() {
  const modalNav = new CreateModal(contentHtmlNavModal, elemNavModal, ClassNameNavModal)
  modalNav.OpenModal()
  const close = document.querySelector(`.ModalShov`)

  close.addEventListener(`click`, CloseNavMenu)
  function CloseNavMenu() {
    modalNav.close()
  }
  const ModalNavNoClose = document.querySelector(`.ModalNav`)
  ModalNavNoClose.addEventListener("click", (e) => e.stopPropagation());
}
const ddd = `svsdv`
const dvdvd = `http://localhost:3000/news`
const test = document.querySelector(`.header_button`)
