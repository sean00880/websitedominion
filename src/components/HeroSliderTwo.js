import { useEffect } from "react";

const HeroSlider = () => {
  // Hero slider
  useEffect(() => {
    const fn_cs_slider = document.querySelectorAll(".fn_cs_slider");
    fn_cs_slider.forEach((element) => {
      let sliderTop = element.getElementsByClassName("slider_top")[0],
        sliderBottom = element.getElementsByClassName("slider_content"),
        activeIndex = 2,
        speed = 6000;

      let myInterval = setInterval(function () {
        activeIndex++;
        activeIndex = sliderDo(sliderTop, sliderBottom, activeIndex);
      }, speed);
      const prev = document.querySelector(".slider_nav .prev"),
        next = document.querySelector(".slider_nav .next"),
        li = element.getElementsByTagName("li");
      prev.addEventListener("click", function (e) {
        e.preventDefault();
        clearInterval(myInterval);
        activeIndex--;
        activeIndex = sliderDo(sliderTop, sliderBottom, activeIndex);
        myInterval = setInterval(function () {
          activeIndex++;
          activeIndex = sliderDo(sliderTop, sliderBottom, activeIndex);
        }, speed);
        return false;
      });
      next.addEventListener("click", (e) => {
        e.preventDefault();
        clearInterval(myInterval);
        activeIndex++;
        activeIndex = sliderDo(sliderTop, sliderBottom, activeIndex);
        myInterval = setInterval(function () {
          activeIndex--;
          activeIndex = sliderDo(sliderTop, sliderBottom, activeIndex);
        }, speed);
        return false;
      });
      for (let i = 0; i < li.length; i++) {
        const liElement = li[i];
        const getClass = liElement.getAttribute("class");
        if (getClass === "next") {
          activeIndex++;
        } else if (getClass === "prev") {
          activeIndex--;
        } else {
          return false;
        }
        clearInterval(myInterval);
        activeIndex = sliderDo(sliderTop, sliderBottom, activeIndex);
        myInterval = setInterval(function () {
          activeIndex++;
          activeIndex = sliderDo(sliderTop, sliderBottom, activeIndex);
        }, speed);
        return false;
      }
    });
  }, []);

  const sliderDo = (sliderTop, sliderBottom, activeIndex) => {
    var topLength = sliderTop.getElementsByTagName("li").length;
    if (activeIndex > topLength) {
      activeIndex -= topLength;
    }
    var indexPrev = activeIndex - 1;
    var indexPrev2 = activeIndex - 2;
    var indexNext = activeIndex + 1;
    var indexNext2 = activeIndex + 2;
    if (indexPrev > topLength) {
      indexPrev -= topLength;
    }
    if (indexPrev2 > topLength) {
      indexPrev2 -= topLength;
    }
    if (indexNext > topLength) {
      indexNext -= topLength;
    }
    if (indexNext2 > topLength) {
      indexNext2 -= topLength;
    }
    if (indexPrev < 1) {
      indexPrev += topLength;
    }
    if (indexPrev2 < 1) {
      indexPrev2 += topLength;
    }
    if (activeIndex < 1) {
      activeIndex += topLength;
    }
    if (indexNext < 1) {
      indexNext += topLength;
    }
    if (indexNext2 < 1) {
      indexNext2 += topLength;
    }
    let li = sliderTop.getElementsByTagName("li");
    for (let i = 0; i < li.length; i++) {
      const element = li[i];
      element.classList.remove("prev", "prev2", "active", "next", "next2");
      // element.setAttribute(`data-index${indexNext}`);
    }
    sliderTop
      .querySelector('li[data-index="' + indexPrev2 + '"]')
      .classList.add("prev2");
    sliderTop
      .querySelector('li[data-index="' + indexPrev + '"]')
      .classList.add("prev");
    sliderTop
      .querySelector('li[data-index="' + activeIndex + '"]')
      .classList.add("active");
    sliderTop
      .querySelector('li[data-index="' + indexNext + '"]')
      .classList.add("next");
    sliderTop
      .querySelector('li[data-index="' + indexNext2 + '"]')
      .classList.add("next2");
    return activeIndex;
  };

  return (
    <section id="home">
      <div className="container">
        <h1
          className="fn__maintitle big"
          data-text="Professional Custom Web Design | San Diego"
          data-align="center"
        >
          Professional Custom Web Design | San Diego
        </h1>
        <hr />
         <h4>Order a high converting website that efficiently drives traffic and generates leads for your small business. <br /> Starting at only <strong style={{"fontStyle":"italic"}}> $79.99/month</strong></h4>
        {/* Slider */}
        <div className="fn_cs_slider" data-responsive="on">
          <div className="slider_top">
            <img src="/img/1x1.jpg" alt="" />
            <ul>
           
              <li className="prev" data-index={1}>
              
                <div className="item has_video">
                <a href="https://www.sitedominion.com/#pricing_section"
                  >
                  <img src="/img/1x1.jpg" alt="" />
                  <div className="item_in" style={{"background":"black"}}>
                    <a
                    className="popup-youtube metaportal_fn_videobutton"
                    href="https://www.sitedominion.com/#pricing_section"
                  >
                     <h2>Official Store</h2>
                  </a>
                    <div className="img" data-bg-img="/img/slider/1.jpg" />
                  </div>
                  </a>
                </div>
                
              </li>
           
              <li className="active" data-index={2}>
                <div className="item has_video">
                  <img src="/img/1x1.jpg" alt="" />
                 
                  <a
                    
                    href="https://www.landscaping.sitedominion.com"
                  >
                  <div className="item_in" style={{"background":"linear-gradient(45deg, #567a59, #113c0c)"}}>
                  <a
                    className="popup-youtube metaportal_fn_videobutton"
                    href="https://www.landscaping.sitedominion.com"
                  >
                     <h2>Landscaping Web Design</h2>
                  </a>
                  
                    <div className="img" data-bg-img="/img/slider/2.jpg" />
                  </div>
                  </a>
                </div>
              </li>
              <li className="next" data-index={3}>
                <div className="item has_video">
                  <img src="/img/1x1.jpg" alt="" />
                  <a
                    
                    href="https://www.sitedominion.com/#portfolio_section"
                  >
                  <div className="item_in" style={{"background":"white"}}>
                  <a
                    className="popup-youtube metaportal_fn_videobutton"
                    href="https://www.sitedominion.com/#portfolio_section"
                  >
                    <h2>Live Projects</h2>
                  </a>
                    <div className="img" data-bg-img="/img/slider/3.jpg" />
                  </div>
                  </a>
                </div>
              </li>
              <li className="next2" data-index={4}>
                <div className="item has_video">
                <a
                    
                    href="https://sitedominion.medium.com/"
                  >
                  <img src="/img/1x1.jpg" alt="" />
                  <div className="item_in" style={{"background":"linear-gradient(45deg, #d5d5d5, #af9d2a)"}}>
                  <a
                    className="popup-youtube metaportal_fn_videobutton"
                    href="https://sitedominion.medium.com/"
                  >
                    <h2>Our Blog</h2>
                  </a>
                    <div className="img" data-bg-img="/img/slider/4.jpg" />
                  </div>
                  </a>
                </div>
              </li>
            </ul>
          </div>
          <div className="slider_nav">
            <a href="#" className="prev">
              <span className="circle" />
              <span className="icon">
                <img src="/svg/down.svg" alt="" className="fn__svg" />
              </span>
              <span className="circle" />
            </a>
            <a href="#" className="next">
              <span className="circle" />
              <span className="icon">
                <img src="/svg/down.svg" alt="" className="fn__svg" />
              </span>
              <span className="circle" />
            </a>
          </div>
        </div>
        {/* !Slider */}
        {/* Description */}
        <div className="fn_cs_desc">
        <img src="/img/banner3.png" />
          <p>
            Looking to transform your business? Hire Site Dominion LLC and let our professionals showcase your brand to perfection. <hr />
            Our websites can help your company elevate to new heights.
          </p>
          
          <a
            href="https://www.sitedominion.com/#pricing_section"
            className="metaportal_fn_button"
            target="_blank"
            rel="noreferrer"
          >
            <span>Order Your Website</span>
          </a>
        </div>
        {/* !Description */}
      </div>
    </section>
  );
};
export default HeroSlider;
