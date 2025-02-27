document.addEventListener("DOMContentLoaded", function () {
  if (!document.querySelector("link[href*='bootstrap-icons']")) {
    const bootstrapIcons = document.createElement("link");
    bootstrapIcons.rel = "stylesheet";
    bootstrapIcons.href =
      "https://cdn.jsdelivr.net/npm/bootstrap-icons/font/bootstrap-icons.css";
    document.head.appendChild(bootstrapIcons);
    bootstrapIcons.onload = function () {
      addNav();
      addFooter();
    };
  } else {
    addNav();
    addFooter();
  }
});

function addNav() {
  if (!document.querySelector("nav")){
    const nav = 
  `
  <nav>
    <div class="container">
      <header class="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
        <div class="col-md-3 mb-2 mb-md-0">
          <a href="../../index.html" class="dd-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
            <img src="https://github.com/AIBE-chill-TEAM/travel-secretary/blob/dev/assets/logo.png?raw=true" style="width: 40px;">
  
          <span class="fs-4">여행 비서</span>
        </a>
        </div>
        
        <ul class="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
          <li><a href="../../index.html" class="nav-link px-2 link-secondary">메인</a></li>
          <li><a href="../../html/mateSearch/index.html" class="nav-link px-2 link-secondary">메이트 찾기</a></li>
          <li><a href="../../html/aiPlanner/index.html" class="nav-link px-2 link-secondary">AI 여행 일정</a></li>
        </ul>

        <div class="col-md-3 text-end">
          <div class="flex-shrink-0 dropdown">
            <a href="#" class="d-block link-body-emphasis text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="true">
                <img id="profile"  width="32" height="32" class="rounded-circle">
            </a>
            <ul class="dropdown-menu dropdown-menu-end text-small shadow">
                <li><a class="dropdown-item" id="username"></a></li>
                <hr class="dropdown-divider">
                <li><a class="dropdown-item" href="../account/myprofile.html">마이 프로필</a></li> 
                <li><a class="dropdown-item" href="../account/characterai.html">AI 캐릭터 생성</a></li>
                <hr class="dropdown-divider">
                <li><a class="dropdown-item" href="" id="logout">로그아웃</a></li>
            </ul>
        </div>
      </div>
      </header>
    </div>
    
  </nav>
  `
  document.body.insertAdjacentHTML("afterbegin", nav);
  }
  
}


function addFooter() {
  const currentPath = window.location.pathname;
  const assetsPath =
    currentPath.includes("/mateSearch/") ||
    currentPath.includes("/aiPlanner/") ||
    currentPath.includes("/account/")
      ? "../../assets/"
      : "./assets/";

  const favicons = `
        <link rel="icon" type="image/png" href="${assetsPath}favicon/favicon-96x96.png" sizes="96x96">
        <link rel="icon" type="image/svg+xml" href="${assetsPath}favicon/favicon.svg">
        <link rel="shortcut icon" href="${assetsPath}favicon/favicon.ico">
        <link rel="apple-touch-icon" sizes="180x180" href="${assetsPath}favicon/apple-touch-icon.png">
        <link rel="manifest" href="${assetsPath}favicon/site.webmanifest">
    `;
  document.head.insertAdjacentHTML("beforeend", favicons);

  if (!document.querySelector("footer.custom-footer")) {
    const footer = `
            <footer class="custom-footer py-5">
                <div class="container">
                    <div class="row g-4">
                        <div class="col-lg-6 mb-4 mb-lg-0">
                            <h5 class="text-primary fw-bold mb-3">여행 비서</h5>
                            <p class="text-muted mb-0">
                                당신의 완벽한 여행 동행자를 찾아드립니다<br>
                                새로운 인연과 특별한 추억을 만들어보세요
                            </p>
                        </div>
                        <div class="col-lg-6 col-md-6">
                            <div class="d-flex justify-content-end">
                                <button class="scroll-to-top-circle" onclick="window.scrollTo({top: 0, behavior: 'smooth'})">
                                    <i class="bi bi-arrow-up text-white"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                    <hr class="my-4 border-secondary-subtle">
                    <div class="row align-items-center">
                        <div class="col-md-6 text-center text-md-start">
                            <p class="text-muted small mb-0">&copy; 2025 Travel Secretary. All rights reserved.</p>
                        </div>
                        <div class="col-md-6 text-center text-md-end mt-3 mt-md-0">
                            <a href="#" class="footer-link me-3">개인정보처리방침</a>
                            <a href="#" class="footer-link">이용약관</a>
                        </div>
                    </div>
                </div>
            </footer>
        `;
    document.body.insertAdjacentHTML("beforeend", footer);
  }

  addScrollToTopButtonStyle();
}

function addScrollToTopButtonStyle() {
  const style = document.createElement("style");
  style.innerHTML = `

  .text-primary {
  color: #4a90e2 !important;
  }

  .custom-footer {
  background-color: #f8f9fa;
  border-top: 1px solid rgba(0, 0, 0, 0.05);
  margin-top: 40px;
}

.footer-link {
  color: #6c757d;
  text-decoration: none;
  transition: color 0.2s ease;
}

.footer-link:hover {
  color: #4a90e2;
}

.custom-footer h6 {
  color: #2c3e50;
}
.scroll-to-top-circle {
  all: unset;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: linear-gradient(45deg, #4a90e2, #357abd);
  border: none;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  opacity: 0.9;
  padding: 0;
  position: relative;
}

.scroll-to-top-circle:hover {
  background: linear-gradient(45deg, #357abd, #2a6198);
  transform: translateY(-2px);
  box-shadow: 0 4px 15px rgba(74, 144, 226, 0.2);
  opacity: 0.85;
}

.scroll-to-top-circle i {
  font-size: 1.2rem;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  text-align: center;
  margin: auto;
}
    `;
  document.head.appendChild(style);
}
