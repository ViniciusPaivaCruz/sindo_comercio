//Carrossel - BENEFICIOS
document.addEventListener("DOMContentLoaded", () => {
    const cardList = document.querySelector(".card-list"); // Container dos itens
    const cardItems = document.querySelectorAll(".card-item"); // Todos os itens do carrossel
    const nextButton = document.querySelector(".next"); // Botão "próximo"
    const backButton = document.querySelector(".back"); // Botão "voltar"
  
    let currentIndex = 0; 
    let slidesPerView = 3; 
    let isTransitioning = false; 
  
    // Ajusta o tamanho do container dinamicamente
    const itemWidth = cardItems[0].offsetWidth; 
    const totalItems = cardItems.length;
  
    // Função para atualizar a posição do carrossel
    const updateCarousel = () => {
      cardList.style.transition = "transform 0.5s ease-in-out"; // Suaviza o movimento
      cardList.style.transform = `translateX(-${currentIndex * itemWidth}px)`; 
    };
  
    // Corrige o loop infinito
    const handleLoop = () => {
      if (currentIndex >= totalItems - slidesPerView) {
        currentIndex = 0; 
      } else if (currentIndex < 0) {
        currentIndex = totalItems - slidesPerView; 
      }
    };
  
    // Evento para o botão "próximo" (voltar agora)
    nextButton.addEventListener("click", (e) => {
      if (isTransitioning) return;
      isTransitioning = true;
      e.preventDefault();
      currentIndex = Math.max(currentIndex - 1, 0); 
      updateCarousel();
    });
  
    // Evento para o botão "voltar" (avançar agora)
    backButton.addEventListener("click", (e) => {
      if (isTransitioning) return; // Bloqueia cliques durante a transição
      isTransitioning = true;
      e.preventDefault();
      currentIndex = Math.min(currentIndex + 1, totalItems - slidesPerView); 
      updateCarousel();
    });
  
    // Reseta a transição no final do movimento
    cardList.addEventListener("transitionend", () => {
      handleLoop();
      isTransitioning = false; // Permite novos cliques
    });
  
    // Inicializa o carrossel com a posição inicial
    updateCarousel();
  });

//Menu
document.addEventListener("DOMContentLoaded", () => {
    const header = document.querySelector("#menu"); // Barra de menu
    const logo = document.querySelector(".logo_icon"); 
    let lastScrollTop = 0; // Controla a direção do scroll
  
    // Função para detectar o rolar da página
    const onScroll = () => {
      if (window.scrollY > 0) {
        header.classList.add("transparent"); // Adiciona a transparência quando rolar
      } else {
        header.classList.remove("transparent"); // Remove a transparência quando voltar ao topo
      }
  
      // Verifica se o usuário está rolando para baixo ou para cima
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      if (scrollTop > lastScrollTop) {
        // Rolando para baixo
        header.classList.add("transparent");
      } else {
        // Rolando para cima
        header.classList.remove("transparent");
      }
      lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; 
    };
  
    // Detecta o rolar da página
    window.addEventListener("scroll", onScroll);
  
    // Detecta o mouse pairando sobre o menu
    header.addEventListener("mouseover", () => {
      header.classList.remove("transparent"); // Remove a transparência quando o mouse passar sobre
    });
  
    // Restaura a transparência quando o mouse sair do menu
    header.addEventListener("mouseleave", () => {
      if (window.scrollY > 0) {
        header.classList.add("transparent"); // Retorna a transparência se não estiver no topo
      }
    });
  });

//Carrossel - NOTICIAS
document.addEventListener("DOMContentLoaded", () => {
    const carouselWrapper = document.querySelector(".carousel-wrapper");
    const nextButton = document.querySelector(".prox");
    const prevButton = document.querySelector(".prev");
    const totalItems = document.querySelectorAll(".carousel-wrapper a").length;
    let currentIndex = 0;
  
    // Função para atualizar a posição do carrossel
    const updateCarousel = () => {
      const itemWidth = document.querySelector(".carousel-wrapper a").offsetWidth;
      carouselWrapper.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
    };
  
    // Função para ir para o próximo slide
    nextButton.addEventListener("click", () => {
      if (currentIndex < totalItems - 1) {
        currentIndex++;
      } else {
        currentIndex = 0; // Volta ao primeiro item
      }
      updateCarousel();
    });
  
    // Função para ir para o slide anterior
    prevButton.addEventListener("click", () => {
      if (currentIndex > 0) {
        currentIndex--;
      } else {
        currentIndex = totalItems - 1; // Vai para o último item
      }
      updateCarousel();
    });
  
    // Inicializa o carrossel com a posição inicial
    updateCarousel();
  });
  