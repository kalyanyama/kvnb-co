import { useState } from "react"

export default function ScrollBtn() {
    const [btnScroll, setBtnScroll] = useState(false)

    const handleBtn = ()=>{
        const scroller = document.documentElement.scrollTop
        if (scroller > 300) {
            setBtnScroll(true)
        } else if(scroller <= 300) {
            setBtnScroll(false)
        }
    }

    const scrollTo =()=>{
        window.scrollTo({
            top : 0,
            behavior : "smooth"
        })
    }

    window.addEventListener("scroll", handleBtn)
  return (
    <div>
      <button className="btn btn-success" style={{display : btnScroll ? "inline" : "none", fontSize :"20px", position : "fixed",
       bottom : "4%", right : "4%", zIndex : "1"}} onClick={scrollTo}>
        <i className="bi bi-arrow-up-circle"></i>
       </button>
    </div>
  )
}
