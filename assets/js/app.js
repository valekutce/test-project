document.addEventListener("DOMContentLoaded", () => {

    // Шапка при скролле
    window.addEventListener('scroll', function () {
        document.querySelector('.header').classList.toggle('scrolled', window.scrollY > 200);
      }); 

    setTimeout(() => {
        document.querySelector(".hero-column_two").classList.add("show");
    }, 1000);

    // Для открытия мею
    document.getElementById("menuButton").addEventListener("click", function() {
        this.classList.toggle("active");
        document.querySelector(".nav").classList.toggle("open");
    });

        // Плавный скролл
        /* Этот фрагмент кода настраивает плавное поведение прокрутки для ссылок-якорей на странице. */
        const smoothLinks = document.querySelectorAll('a[href^="#"]');
        for (let smoothLink of smoothLinks) {
            smoothLink.addEventListener('click', function (e) {
                e.preventDefault();
                const id = smoothLink.getAttribute('href');

                document.querySelector(id).scrollIntoView({
                    behavior: 'smooth',
                    block: 'start' 
                });
            });
        };


        // Анимация при появлении
       /**
        * Функция использует Intersection Observer для добавления или удаления класса CSS на основе видимости
        * элементов в области просмотра.
        * @param entry - Параметр `entry` в функции `onEntry` представляет собой массив
        * объектов `IntersectionObserverEntry`. Каждый объект `IntersectionObserverEntry` представляет
        * один целевой элемент, наблюдаемый `IntersectionObserver`. Он содержит информацию
        * о пересечении целевого элемента с корневым элементом или областью просмотра,
        */
        function onEntry(entry) {
            entry.forEach(change => {
              if (change.isIntersecting) {
                change.target.classList.add('element-schow');
              } else {
                change.target.classList.remove('element-schow');
              }
            });
        }
          let options = { threshold: [0.1] };
          let observer = new IntersectionObserver(onEntry, options);
          let elements = document.querySelectorAll('.element-animation');
          for (let elm of elements) {
            observer.observe(elm);
        }




});