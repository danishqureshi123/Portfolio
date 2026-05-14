// Update date dynamically
function updateDate() {
  const dateBtn = document.querySelector("#date-btn");
  const now = new Date();
  const months = ["JANUARY", "FEBRUARY", "MARCH", "APRIL", "MAY", "JUNE", "JULY", "AUGUST", "SEPTEMBER", "OCTOBER", "NOVEMBER", "DECEMBER"];
  const month = months[now.getMonth()];
  const year = now.getFullYear();
  dateBtn.textContent = `${month},${year}`;
}

updateDate();

function locomotive() {
  gsap.registerPlugin(ScrollTrigger);

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true ,
  });
  locoScroll.on("scroll", ScrollTrigger.update);

  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    },

    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },

    pinType: document.querySelector("#main").style.transform
      ? "transform"
      : "fixed",
  });
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
  ScrollTrigger.refresh();
}
locomotive();


const canvas = document.querySelector("canvas");
const context = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


window.addEventListener("resize", function () {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  render();
});

function files(index) {
  var data = `
     ./images/male0001.png
     ./images/male0002.png
     ./images/male0003.png
     ./images/male0004.png
     ./images/male0005.png
     ./images/male0006.png
     ./images/male0007.png
     ./images/male0008.png
     ./images/male0009.png
     ./images/male0010.png
     ./images/male0011.png
     ./images/male0012.png
     ./images/male0013.png
     ./images/male0014.png
     ./images/male0015.png
     ./images/male0016.png
     ./images/male0017.png
     ./images/male0018.png
     ./images/male0019.png
     ./images/male0020.png
     ./images/male0021.png
     ./images/male0022.png
     ./images/male0023.png
     ./images/male0024.png
     ./images/male0025.png
     ./images/male0026.png
     ./images/male0027.png
     ./images/male0028.png
     ./images/male0029.png
     ./images/male0030.png
     ./images/male0031.png
     ./images/male0032.png
     ./images/male0033.png
     ./images/male0034.png
     ./images/male0035.png
     ./images/male0036.png
     ./images/male0037.png
     ./images/male0038.png
     ./images/male0039.png
     ./images/male0040.png
     ./images/male0041.png
     ./images/male0042.png
     ./images/male0043.png
     ./images/male0044.png
     ./images/male0045.png
     ./images/male0046.png
     ./images/male0047.png
     ./images/male0048.png
     ./images/male0049.png
     ./images/male0050.png
     ./images/male0051.png
     ./images/male0052.png
     ./images/male0053.png
     ./images/male0054.png
     ./images/male0055.png
     ./images/male0056.png
     ./images/male0057.png
     ./images/male0058.png
     ./images/male0059.png
     ./images/male0060.png
     ./images/male0061.png
     ./images/male0062.png
     ./images/male0063.png
     ./images/male0064.png
     ./images/male0065.png
     ./images/male0066.png
     ./images/male0067.png
     ./images/male0068.png
     ./images/male0069.png
     ./images/male0070.png
     ./images/male0071.png
     ./images/male0072.png
     ./images/male0073.png
     ./images/male0074.png
     ./images/male0075.png
     ./images/male0076.png
     ./images/male0077.png
     ./images/male0078.png
     ./images/male0079.png
     ./images/male0080.png
     ./images/male0081.png
     ./images/male0082.png
     ./images/male0083.png
     ./images/male0084.png
     ./images/male0085.png
     ./images/male0086.png
     ./images/male0087.png
     ./images/male0088.png
     ./images/male0089.png
     ./images/male0090.png
     ./images/male0091.png
     ./images/male0092.png
     ./images/male0093.png
     ./images/male0094.png
     ./images/male0095.png
     ./images/male0096.png
     ./images/male0097.png
     ./images/male0098.png
     ./images/male0099.png
     ./images/male0100.png
     ./images/male0101.png
     ./images/male0102.png
     ./images/male0103.png
     ./images/male0104.png
     ./images/male0105.png
     ./images/male0106.png
     ./images/male0107.png
     ./images/male0108.png
     ./images/male0109.png
     ./images/male0110.png
     ./images/male0111.png
     ./images/male0112.png
     ./images/male0113.png
     ./images/male0114.png
     ./images/male0115.png
     ./images/male0116.png
     ./images/male0117.png
     ./images/male0118.png
     ./images/male0119.png
     ./images/male0120.png
     ./images/male0121.png
     ./images/male0122.png
     ./images/male0123.png
     ./images/male0124.png
     ./images/male0125.png
     ./images/male0126.png
     ./images/male0127.png
     ./images/male0128.png
     ./images/male0129.png
     ./images/male0130.png
     ./images/male0131.png
     ./images/male0132.png
     ./images/male0133.png
     ./images/male0134.png
     ./images/male0135.png
     ./images/male0136.png
     ./images/male0137.png
     ./images/male0138.png
     ./images/male0139.png
     ./images/male0140.png
     ./images/male0141.png
     ./images/male0142.png
     ./images/male0143.png
     ./images/male0144.png
     ./images/male0145.png
     ./images/male0146.png
     ./images/male0147.png
     ./images/male0148.png
     ./images/male0149.png
     ./images/male0150.png
     ./images/male0151.png
     ./images/male0152.png
     ./images/male0153.png
     ./images/male0154.png
     ./images/male0155.png
     ./images/male0156.png
     ./images/male0157.png
     ./images/male0158.png
     ./images/male0159.png
     ./images/male0160.png
     ./images/male0161.png
     ./images/male0162.png
     ./images/male0163.png
     ./images/male0164.png
     ./images/male0165.png
     ./images/male0166.png
     ./images/male0167.png
     ./images/male0168.png
     ./images/male0169.png
     ./images/male0170.png
     ./images/male0171.png
     ./images/male0172.png
     ./images/male0173.png
     ./images/male0174.png
     ./images/male0175.png
     ./images/male0176.png
     ./images/male0177.png
     ./images/male0178.png
     ./images/male0179.png
     ./images/male0180.png
     ./images/male0181.png
     ./images/male0182.png
     ./images/male0183.png
     ./images/male0184.png
     ./images/male0185.png
     ./images/male0186.png
     ./images/male0187.png
     ./images/male0188.png
     ./images/male0189.png
     ./images/male0190.png
     ./images/male0191.png
     ./images/male0192.png
     ./images/male0193.png
     ./images/male0194.png
     ./images/male0195.png
     ./images/male0196.png
     ./images/male0197.png
     ./images/male0198.png
     ./images/male0199.png
     ./images/male0200.png
     ./images/male0201.png
     ./images/male0202.png
     ./images/male0203.png
     ./images/male0204.png
     ./images/male0205.png
     ./images/male0206.png
     ./images/male0207.png
     ./images/male0208.png
     ./images/male0209.png
     ./images/male0210.png
     ./images/male0211.png
     ./images/male0212.png
     ./images/male0213.png
     ./images/male0214.png
     ./images/male0215.png
     ./images/male0216.png
     ./images/male0217.png
     ./images/male0218.png
     ./images/male0219.png
     ./images/male0220.png
     ./images/male0221.png
     ./images/male0222.png
     ./images/male0223.png
     ./images/male0224.png
     ./images/male0225.png
     ./images/male0226.png
     ./images/male0227.png
     ./images/male0228.png
     ./images/male0229.png
     ./images/male0230.png
     ./images/male0231.png
     ./images/male0232.png
     ./images/male0233.png
     ./images/male0234.png
     ./images/male0235.png
     ./images/male0236.png
     ./images/male0237.png
     ./images/male0238.png
     ./images/male0239.png
     ./images/male0240.png
     ./images/male0241.png
     ./images/male0242.png
     ./images/male0243.png
     ./images/male0244.png
     ./images/male0245.png
     ./images/male0246.png
     ./images/male0247.png
     ./images/male0248.png
     ./images/male0249.png
     ./images/male0250.png
     ./images/male0251.png
     ./images/male0252.png
     ./images/male0253.png
     ./images/male0254.png
     ./images/male0255.png
     ./images/male0256.png
     ./images/male0257.png
     ./images/male0258.png
     ./images/male0259.png
     ./images/male0260.png
     ./images/male0261.png
     ./images/male0262.png
     ./images/male0263.png
     ./images/male0264.png
     ./images/male0265.png
     ./images/male0266.png
     ./images/male0267.png
     ./images/male0268.png
     ./images/male0269.png
     ./images/male0270.png
     ./images/male0271.png
     ./images/male0272.png
     ./images/male0273.png
     ./images/male0274.png
     ./images/male0275.png
     ./images/male0276.png
     ./images/male0277.png
     ./images/male0278.png
     ./images/male0279.png
     ./images/male0280.png
     ./images/male0281.png
     ./images/male0282.png
     ./images/male0283.png
     ./images/male0284.png
     ./images/male0285.png
     ./images/male0286.png
     ./images/male0287.png
     ./images/male0288.png
     ./images/male0289.png
     ./images/male0290.png
     ./images/male0291.png
     ./images/male0292.png
     ./images/male0293.png
     ./images/male0294.png
     ./images/male0295.png
     ./images/male0296.png
     ./images/male0297.png
     ./images/male0298.png
     ./images/male0299.png
     ./images/male0300.png
 `;
  return data.split("\n")[index];
}

const frameCount = 300;

const images = [];
const imageSeq = {
  frame: 1,
};

for (let i = 0; i < frameCount; i++) {
  const img = new Image();
  img.src = files(i);
  images.push(img);
}

gsap.to(imageSeq, {
  frame: frameCount - 1,
  snap: "frame",
  ease: `none`,
  scrollTrigger: {
    scrub: 0.15,
    trigger: `#page>canvas`,
    start: `top top`,
    end: `600% top`,
    scroller: `#main`,
  },
  onUpdate: render,
});

const cardData = {
  projects: {
    title: "My Projects",
    content:
      `<div style="display: grid; grid-template-columns: 1fr 1fr; gap: 24px;">
        <div style="border-radius: 16px; overflow: hidden; cursor: pointer; transition: transform 0.3s ease;">
          <video style="width: 100%; height: auto; aspect-ratio: 16/9; object-fit: cover; background: #e0e0e0;" controls>
            <source src="./Prototype/nike_final.mp4" type="video/mp4">
          </video>
          <div style="padding: 12px; background: #fff; border: 1px solid #f0f0f0; border-top: none; border-radius: 0 0 16px 16px;">
            <div style="font-weight: 600; color: #121212; font-size: 14px;">Nike Final</div>
            <div style="font-size: 12px; color: #7c7c7c; margin-top: 4px;">UI/UX Design</div>
          </div>
        </div>
        <div style="border-radius: 16px; overflow: hidden; cursor: pointer; transition: transform 0.3s ease;">
          <video style="width: 100%; height: auto; aspect-ratio: 16/9; object-fit: cover; background: #e0e0e0;" controls>
            <source src="./Prototype/redbull-final.mp4" type="video/mp4">
          </video>
          <div style="padding: 12px; background: #fff; border: 1px solid #f0f0f0; border-top: none; border-radius: 0 0 16px 16px;">
            <div style="font-weight: 600; color: #121212; font-size: 14px;">Red Bull Final</div>
            <div style="font-size: 12px; color: #7c7c7c; margin-top: 4px;">Motion Design</div>
          </div>
        </div>
        <div style="border-radius: 16px; overflow: hidden; cursor: pointer; transition: transform 0.3s ease;">
          <video style="width: 100%; height: auto; aspect-ratio: 16/9; object-fit: cover; background: #e0e0e0;" controls>
            <source src="./Prototype/FRESH_Lemonade%20Final.mp4" type="video/mp4">
          </video>
          <div style="padding: 12px; background: #fff; border: 1px solid #f0f0f0; border-top: none; border-radius: 0 0 16px 16px;">
            <div style="font-weight: 600; color: #121212; font-size: 14px;">Fresh Lemonade</div>
            <div style="font-size: 12px; color: #7c7c7c; margin-top: 4px;">Product Design</div>
          </div>
        </div>
        <div style="border-radius: 16px; overflow: hidden; cursor: pointer; transition: transform 0.3s ease;">
          <video style="width: 100%; height: auto; aspect-ratio: 16/9; object-fit: cover; background: #e0e0e0;" controls>
            <source src="./Prototype/Mclaren.mov" type="video/quicktime">
          </video>
          <div style="padding: 12px; background: #fff; border: 1px solid #f0f0f0; border-top: none; border-radius: 0 0 16px 16px;">
            <div style="font-weight: 600; color: #121212; font-size: 14px;">McLaren Design</div>
            <div style="font-size: 12px; color: #7c7c7c; margin-top: 4px;">Prototype</div>
          </div>
        </div>
        <div style="border-radius: 16px; overflow: hidden; cursor: pointer; transition: transform 0.3s ease;">
          <video style="width: 100%; height: auto; aspect-ratio: 16/9; object-fit: cover; background: #e0e0e0;" controls>
            <source src="./Prototype/Spotlight%20effect.MP4" type="video/mp4">
          </video>
          <div style="padding: 12px; background: #fff; border: 1px solid #f0f0f0; border-top: none; border-radius: 0 0 16px 16px;">
            <div style="font-weight: 600; color: #121212; font-size: 14px;">Spotlight Effect</div>
            <div style="font-size: 12px; color: #7c7c7c; margin-top: 4px;">Animation</div>
          </div>
        </div>
        <div style="border-radius: 16px; overflow: hidden; cursor: pointer; transition: transform 0.3s ease;">
          <img style="width: 100%; height: auto; aspect-ratio: 16/9; object-fit: cover; background: #e0e0e0;" src="./Prototype/IMG_1890.jpg.jpeg" alt="Project Image">
          <div style="padding: 12px; background: #fff; border: 1px solid #f0f0f0; border-top: none; border-radius: 0 0 16px 16px;">
            <div style="font-weight: 600; color: #121212; font-size: 14px;">Design Mockup</div>
            <div style="font-size: 12px; color: #7c7c7c; margin-top: 4px;">Visual Design</div>
          </div>
        </div>
        <div style="border-radius: 16px; overflow: hidden; cursor: pointer; transition: transform 0.3s ease;">
          <video style="width: 100%; height: auto; aspect-ratio: 16/9; object-fit: cover; background: #e0e0e0;" controls>
            <source src="./Prototype/Valorant.mov" type="video/quicktime">
          </video>
          <div style="padding: 12px; background: #fff; border: 1px solid #f0f0f0; border-top: none; border-radius: 0 0 16px 16px;">
            <div style="font-weight: 600; color: #121212; font-size: 14px;">Valorant Design</div>
            <div style="font-size: 12px; color: #7c7c7c; margin-top: 4px;">Game UI Design</div>
          </div>
        </div>
      </div>`,
  },
  experience: {
    title: "Work Experience",
    content:
      `<div style="margin-bottom: 32px;">
        <div style="font-weight: 700; font-size: 18px; color: #121212; margin-bottom: 4px;">SII POLAND GROUP</div>
        <div style="font-size: 15px; color: #7c7c7c; margin-bottom: 12px;">Recruitment Support Associate | 10/2025 – Present</div>
        <ul style="list-style: none; padding: 0; margin: 0; font-size: 15px; line-height: 1.8; color: #4e4e4e;">
          <li>• Managed end-to-end recruitment support for IT roles</li>
          <li>• Built and maintained accurate candidate databases in CRM systems</li>
          <li>• Screened resumes matching technical skills and experience</li>
          <li>• Head-hunted candidates via LinkedIn for senior/mid-level positions</li>
          <li>• Collaborated with cross-functional teams and Poland stakeholders</li>
        </ul>
      </div>
      <div style="margin-bottom: 32px;">
        <div style="font-weight: 700; font-size: 18px; color: #121212; margin-bottom: 4px;">UPS LOGISTICS</div>
        <div style="font-size: 15px; color: #7c7c7c; margin-bottom: 12px;">Employee Service Coordinator | 09/2024 – 05/2025</div>
        <ul style="list-style: none; padding: 0; margin: 0; font-size: 15px; line-height: 1.8; color: #4e4e4e;">
          <li>• Led comprehensive adjudication and background verification processes</li>
          <li>• Increased candidate validation accuracy by 30%</li>
          <li>• Applied advanced Excel analytics to standardize data management</li>
          <li>• Addressed state unemployment inquiries and minimized financial liabilities</li>
          <li>• Optimized forecasting, budgeting, and departmental efficiency</li>
        </ul>
      </div>
      <div>
        <div style="font-weight: 700; font-size: 18px; color: #121212; margin-bottom: 4px;">MOIL LTD</div>
        <div style="font-size: 15px; color: #7c7c7c; margin-bottom: 12px;">HR Intern | 07/2023 – 09/2023</div>
        <ul style="list-style: none; padding: 0; margin: 0; font-size: 15px; line-height: 1.8; color: #4e4e4e;">
          <li>• Assisted in HR program execution and onboarding processes</li>
          <li>• Supported employee engagement activities</li>
          <li>• Improved employee integration and workplace culture</li>
        </ul>
      </div>`,
  },
};

function initPopup() {
  const popupOverlay = document.querySelector("#popup-overlay");
  const popupTitle = document.querySelector("#popup-title");
  const popupContent = document.querySelector("#popup-content");
  const popupClose = document.querySelector("#popup-close");
  const sideSections = document.querySelectorAll(".side-section");

  function openPopup(key) {
    if (!key || !cardData[key]) return;
    popupTitle.textContent = cardData[key].title;
    popupContent.innerHTML = cardData[key].content;
    popupOverlay.classList.remove("hidden");
  }

  window.openPopup = openPopup;

  sideSections.forEach((section) => {
    section.addEventListener("click", (e) => {
      e.stopPropagation();
      const key = section.dataset.card;
      openPopup(key);
    });
  });

  if (popupClose) {
    popupClose.addEventListener("click", () => {
      popupOverlay.classList.add("hidden");
    });
  }

  if (popupOverlay) {
    popupOverlay.addEventListener("click", (event) => {
      if (event.target === popupOverlay) {
        popupOverlay.classList.add("hidden");
      }
    });
  }
}

document.addEventListener("DOMContentLoaded", initPopup);

images[1].onload = render;

function render() {
  scaleImage(images[imageSeq.frame], context);
}

function scaleImage(img, ctx) {
  var canvas = ctx.canvas;
  var hRatio = canvas.width / img.width;
  var vRatio = canvas.height / img.height;
  var ratio = Math.max(hRatio, vRatio);
  var centerShift_x = (canvas.width - img.width * ratio) / 2;
  var centerShift_y = (canvas.height - img.height * ratio) / 2;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(
    img,
    0,
    0,
    img.width,
    img.height,
    centerShift_x,
    centerShift_y,
    img.width * ratio,
    img.height * ratio
  );
}
ScrollTrigger.create({
  trigger: "#page>canvas",
  pin: true,
  // markers:true,
  scroller: `#main`,
  start: `top top`,
  end: `600% top`,
});



gsap.to("#page1",{
  scrollTrigger:{
    trigger:`#page1`,
    start:`top top`,
    end:`bottom top`,
    pin:true,
    scroller:`#main`
  }
})
gsap.to("#page2",{
  scrollTrigger:{
    trigger:`#page2`,
    start:`top top`,
    end:`bottom top`,
    pin:true,
    scroller:`#main`
  }
})
gsap.to("#page3",{
  scrollTrigger:{
    trigger:`#page3`,
    start:`top top`,
    end:`bottom top`,
    pin:true,
    scroller:`#main`
  }
})