"use client"

import Carousel from "@/components/carousel"
import Accordion from "@/components/accordion"
import EnhancedAccordion from "@/components/enhanced-accordion"
import Navigation from "@/components/navigation"
import TestimonialCarousel from "@/components/testimonial-carousel"
import {
  Music,
  Mic,
  Headphones,
  Layers,
  Share2,
  Sticker,
  Smile,
  Tablet,
  Printer,
  BrainCircuit,
  MessageSquare,
  Eye,
  PenTool,
  Calendar,
  Users,
  DollarSign,
  MapPin,
  BookOpen,
  Instagram,
  PiggyBankIcon as Pig,
} from "lucide-react"

// Import the new PhotoCarousel component
import PhotoCarousel from "@/components/photo-carousel"

export default function Home() {
  // Дані для відгуків
  const testimonials = [
    {
      text: "Наскільки відповідально і цікаво у вас все розплановано. Через хіхоньки і хахоньки ви доносите до дітей важливі соціальні теми і приділяєте увагу їх ментальному стану.",
      author: "Мама Алла",
      image: "/images/mama-alla.png",
    },
    {
      text: "Для мене Кабан центр - це місце спокою, яке завжди біля мене. Розумієш, що потрапляєш в коло близьких людей, навіть якщо ви ще не знайомі.",
      author: "Катруся",
      image: "/images/katrusia.png",
    },
    {
      text: "Я побувала майже на усіх подіях на Кабан центрі. Тут так багато різних подій, і писанки малювати, і психологічні тички, і кіноклуби! Це комфортний простір, куди хочеться повертатися.",
      author: "Лізуха",
      image: "/images/lizukha.jpeg",
    },
    {
      text: "Кабан Центр — це ріл знахідка для підлітків. На подіях купа крутих рефлексій, приколяшок, роботи в групках. Ментори — окрема любов.",
      author: "Самрія",
      image: "/images/samriia.png",
    },
  ]

  return (
    <main className="bg-gradient-to-b from-white to-secondary/5 pt-10">
      <Navigation />

      {/* Додаємо спеціальні стилі для анімації кнопки */}
      <style jsx>{`
        .signup-button {
          position: relative;
          left: -2.55cm;
          transition: transform 300ms ease-in-out;
        }
        .signup-button:hover {
          transform: scale(1.1);
        }
      `}</style>

      {/* Секція 1: Головне фото з назвою */}
      <section className="relative w-full overflow-hidden">
        <div className="relative">
          {/* Main photo with a simple, clean gradient overlay */}
          <div className="relative">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%D0%92%D0%B5%D1%80%D1%85-BWuQm4qXkrZX2xm4qKOBlmMlGG9Hrp.png"
              alt="Кабан центр"
              className="w-full h-auto animate-fadeIn"
            />

            {/* Active button that overlays the button in the image */}
            <div className="absolute bottom-[18%] left-0 right-0 flex justify-center">
              <a
                href="https://forms.gle/i1EWBsu9s48mRqnz7"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block"
              >
                <button className="signup-button bg-primary text-white font-project-main py-2 px-6 rounded-full shadow-md text-lg flex flex-col items-center active:scale-95 rounded-fix">
                  <span className="block">Записатися</span>
                  <span className="block">на курси</span>
                </button>
              </a>
            </div>

            {/* Ultra-smooth, completely seamless gradient overlay */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background: `linear-gradient(to bottom, 
                  rgba(215, 227, 233, 0) 70%, 
                  rgba(215, 227, 233, 0.1) 75%,
                  rgba(215, 227, 233, 0.2) 80%,
                  rgba(215, 227, 233, 0.3) 85%,
                  rgba(215, 227, 233, 0.4) 88%,
                  rgba(215, 227, 233, 0.5) 90%,
                  rgba(215, 227, 233, 0.6) 92%,
                  rgba(215, 227, 233, 0.7) 94%,
                  rgba(215, 227, 233, 0.8) 96%,
                  rgba(215, 227, 233, 0.9) 98%,
                  rgba(215, 227, 233, 1) 100%)`,
              }}
            ></div>
          </div>
        </div>
      </section>

      {/* Секція 2: Про кабан-центр - with exact background color match */}
      <section id="about" className="container bg-[#d7e3e9] pt-8 pb-8 animate-fadeIn">
        <h2 className="section-title text-black flex items-center justify-center gap-2">
          <Pig className="w-6 h-6 text-primary animate-pulse-slow ml-[-10px]" />
          Про кабан-центр
        </h2>

        <p className="text-lg mb-6 animate-fadeIn delay-100">
          Кабан центр — це креативний освітній простір у самому серці Києва, створений командою Проект табору, де
          підлітки досліджують себе, світ та можливості.
        </p>

        {/* Carousel with Kaban Center photos */}
        <div className="mt-8 mb-12 animate-fadeIn delay-200">
          <PhotoCarousel
            images={[
              "/images/kaban-group-1.jpeg",
              "/images/kaban-group-2.jpeg",
              "/images/kaban-group-3.jpeg",
              "/images/kaban-group-4.jpeg",
              "/images/kaban-group-5.jpeg",
              "/images/kaban-event-1.jpeg",
              "/images/kaban-music-lesson.jpeg",
              "/images/kaban-workshop.jpeg",
              "/images/kaban-outdoor.jpeg",
              "/images/kaban-activity.jpeg",
              "/images/kaban-discussion.jpeg",
              "/images/kaban-teens.jpeg",
            ]}
            alts={[
              "Учасники Кабан центру на вечірньому заході",
              "Творча активність у Кабан центрі",
              "Святкова вечеря у Кабан центрі",
              "Учасники Кабан центру на святкуванні",
              "Підлітки у Кабан центрі",
              "Інтерактивний захід у Кабан центрі",
              "Урок гри на гітарі у Кабан центрі",
              "Воркшоп для підлітків у Кабан центрі",
              "Група підлітків на вулиці біля Кабан центру",
              "Групова активність у просторі Кабан центру",
              "Дискусія підлітків у Кабан центрі",
              "Спілкування підлітків у Кабан центрі",
            ]}
          />
        </div>

        <div className="space-y-2 animate-fadeIn delay-300">
          <Accordion title="Для кого ми?">
            <p>
              Для підлітків 12–17 років, не бояться виражатися та пробувати щось нове. А ще для батьків, які підтримують
              свободу вибору, розвиток і щасливе дорослішання своїх дітей.
            </p>
          </Accordion>

          <Accordion title="Хто ми?">
            <p>
              Ми команда менторів і організаторів, які понад 7 років працюють із підлітками: в таборах, на освітніх
              програмах та навчальних закладаї. У нас за плечима сотні подій, тисячі підлітків, десятки реалізованих
              проєктів — і ми не втомлюємося вигадувати нові формати. Ми знаємо, як зацікавити, як підтримати і як
              створити атмосферу, яку згадують все життя.
            </p>
          </Accordion>

          <Accordion title="Що ми робимо?">
            <p>
              Все що люблять підлітки, від денних таборів і тижневих освітніх програм до лекцій, воркшопів,
              майстер-класів, симуляційних ігор, концертів і вечірок — все, що змушує серце битися частіше і змінює
              погляд на життя.
            </p>
          </Accordion>

          <Accordion title="Локація та Добирання">
            <p>
              Місто Київ, вулиця Михайлівська 24/в Зручна, безпечна локація в центрі міста з обладнаними під заняття
              кабінетами, творчою майстернею та музичним простором. Хороша транспортна розв'язка. Найближчі станції
              метро-Майдан Незалежності (6 хв пішки) та Поштова площа(15 хв пішки).
            </p>
          </Accordion>

          <Accordion title="Безпека та комфорт">
            <p>
              Наш простір- це близько 250м² для найкращого часопроведення підлітків. Мінус перший поверх, обладнаний як
              повноцінне сучасне укриття. Тут розташовані затишні кабінети, де можна продовжувати заняття навіть під час
              повітряної тривоги — без стресу та перерв.
            </p>
          </Accordion>

          <Accordion title="Наша місія">
            <p>
              Допомогти підліткам стати впевненими у собі, зрозуміти свої потреби, знайти власний шлях та кайфувати від
              навчання. З нами діти не просто мріють про майбутнє, вони його створюють.
            </p>
          </Accordion>
        </div>
      </section>

      {/* Секція 4: Курс "Створюємо пісню з нуля" */}
      <section
        id="music-course"
        className="container pt-8 pb-11 animate-fadeIn"
        style={{
          background: "linear-gradient(180deg, #d7e3e9, rgba(231, 150, 156, 0.2))",
        }}
      >
        <h2 className="section-title text-black flex items-center justify-center gap-2">
          <Music className="w-6 h-6 text-primary animate-pulse-slow" />
          Створюємо пісню з нуля
        </h2>
        <h3 className="text-center mb-6 text-primary/80 font-project-main animate-fadeIn delay-100">
          Міні-курс з саунд продюсингу
        </h3>

        <div className="animate-fadeIn delay-200">
          <Carousel
            images={["/images/sound-1.jpeg", "/images/sound-2.jpeg", "/images/sound-3.jpeg"]}
            alt="Саунд продюсинг"
          />
        </div>

        <div className="course-card animate-fadeIn delay-300 hover-lift">
          <h4 className="font-project-main text-xl mb-4">Про що курс?</h4>
          <p className="mb-4">
            Цей курс-{" "}
            <span className="highlight">міні-студія для майбутніх артистів, музикантів і саунд продюсерів</span>. Ми
            пройдемо шлях від ідеї до готової авторської пісні: напишемо текст, створимо мелодію, запишемо вокал і
            зробимо базову зведену демку. Без нудної теорії — тільки практика і живий звук.
          </p>

          <div className="border-t border-b border-gray-200 py-4 my-4">
            <div className="flex items-center gap-4 mb-3">
              <h5 className="font-medium text-[130%]">Вова</h5>
              <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0 border-2 border-primary ml-auto transition-transform duration-300 hover:scale-105 rounded-fix">
                <img src="/images/vova.jpeg" alt="Вова" className="w-full h-full object-cover" />
              </div>
            </div>
            <p className="text-sm text-gray-700">
              Продюсер, музикант і композитор. Активний звукорежисер студії SoundPlant. Співпрацював в ролі
              продюсера\звукорежисера з такими виконавцями, як The Feels, Діти Інженерів, Reread, Лея, Omana, Теорія
              розбитих вікон, Alice Change та багато інших.
            </p>
          </div>

          <div className="course-details">
            <div className="course-detail-item">
              <Calendar className="w-5 h-5 text-primary" />
              <span className="course-detail-label">Тривалість:</span>
              <span className="course-detail-value">5 занять по 1,5 години</span>
            </div>
            <div className="course-detail-item">
              <Calendar className="w-5 h-5 text-primary" />
              <span className="course-detail-label">Формат:</span>
              <span className="course-detail-value">1 раз на тиждень, день-неділя</span>
            </div>
            <div className="course-detail-item">
              <Users className="w-5 h-5 text-primary" />
              <span className="course-detail-label">Вік учасників:</span>
              <span className="course-detail-value">12-17 років</span>
            </div>
            <div className="course-detail-item">
              <DollarSign className="w-5 h-5 text-primary" />
              <span className="course-detail-label">Вартість:</span>
              <span className="course-detail-value">300 грн/заняття; 1500грн/курс 5 занять</span>
            </div>
          </div>
        </div>

        <div className="course-section animate-fadeIn delay-400">
          <h4 className="course-section-title">Програма курсу</h4>

          <EnhancedAccordion title="Заняття 1. Гармонія і ритм" icon={<Music className="w-5 h-5" />}>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Підбираємо акорди і ритмічний малюнок</li>
              <li>Пробуємо різні музичні інструменти та тембри</li>
              <li>Експериментуємо з музичними стилями</li>
            </ul>
          </EnhancedAccordion>

          <EnhancedAccordion title="Заняття 2. Вокал та текст" icon={<Mic className="w-5 h-5" />}>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Створюємо вокальну мелодію</li>
              <li>Як народжується пісня: шукаємо тему, настрій, формат</li>
              <li>Пишемо перші рядки, граємось із римою</li>
              <li>Розбираємо структуру пісні: куплет, приспів, міст</li>
            </ul>
          </EnhancedAccordion>

          <EnhancedAccordion title="Заняття 3. Запис вокалу та інструментів" icon={<Headphones className="w-5 h-5" />}>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Робота з мікрофоном і основи звукозапису</li>
              <li>Записуємо вокал у студійному просторі</li>
              <li>Працюємо з емоцією, дикцією, звучанням</li>
              <li>Слухаємо і редагуємо перші драфти</li>
            </ul>
          </EnhancedAccordion>

          <EnhancedAccordion title="Заняття 4. Зведення" icon={<Layers className="w-5 h-5" />}>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Знайомство з базовим зведенням</li>
              <li>Додаємо бек-вокал, ефекти, атмосферу</li>
              <li>Робимо фінальний трек</li>
            </ul>
          </EnhancedAccordion>

          <EnhancedAccordion title="Заняття 5. Просування треку та презентація" icon={<Share2 className="w-5 h-5" />}>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Що робити з готовим треком?</li>
              <li>Що потрібно знати про авторське право і як опублікувати свою музику в Spotify</li>
              <li>Як презентувати свою пісню слухачам?</li>
              <li>Готуємо презентацію пісні на вечірці у Кабан центрі, на яку можна буде запросити всіх друзів.</li>
            </ul>
          </EnhancedAccordion>
        </div>

        <div className="bg-white p-5 rounded-lg border-l-4 border-primary animate-fadeIn delay-500 hover-lift">
          <p className="text-sm">
            <span className="font-medium">Після курсу</span> учасники отримають готову демо-версію спільної пісні у
            форматі mp3, яку можна надсилати друзям, викладати в соцмережі або...{" "}
            <span className="italic">починати музичну карʼєру</span>
          </p>
        </div>

        <div className="mt-6 text-center animate-fadeIn delay-500">
          <a
            href="https://forms.gle/i1EWBsu9s48mRqnz7"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block"
          >
            <button className="btn-primary rounded-fix">Записатися на курс</button>
          </a>
        </div>
      </section>

      {/* Секція 5: Курс "Створюємо стікери з нуля" */}
      <section
        id="sticker-course"
        className="container pt-8 pb-11 animate-fadeIn"
        style={{
          background: "linear-gradient(180deg, rgba(231, 150, 156, 0.2), rgba(178, 206, 210, 0.3))",
        }}
      >
        <h2 className="section-title text-black flex items-center justify-center gap-2">
          <Sticker className="w-6 h-6 text-primary animate-pulse-slow" />
          Створюємо стікерпак з нуля
        </h2>

        <h3 className="text-center mb-6 text-primary/80 font-project-main animate-fadeIn delay-100">
          Міні-курс з діджитал-арту
        </h3>

        <div className="animate-fadeIn delay-200">
          <Carousel images={["/images/stickers-1.jpeg", "/images/stickers-2.jpeg"]} alt="Діджитал арт" />
        </div>

        <div className="course-card animate-fadeIn delay-300 hover-lift">
          <h4 className="font-project-main text-xl mb-4">Про що курс?</h4>
          <p className="mb-4">
            Ми створимо <span className="highlight">справжній авторський стікерпак</span> — від першого скетчу до
            професійного друку! Учасники вивчать основи діджитал-арту, спробують себе в ролі ілюстраторів, попрацюють з
            різними інструментами.
          </p>

          <p className="mb-4">
            У вартість курсу входить 5 надрукованих стікерпаків власного дизайну на преміальному вініловому матеріалі з
            ламінацією. Також робимо діджитал-версію у форматі стікерів для телеграму.
          </p>

          <div className="border-t border-b border-gray-200 py-4 my-4">
            <div className="flex items-center gap-4 mb-3">
              <h5 className="font-medium text-[130%]">Іра</h5>
              <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0 border-2 border-primary ml-auto transition-transform duration-300 hover:scale-105 rounded-fix">
                <img src="/images/ira.jpeg" alt="Іра" className="w-full h-full object-cover" />
              </div>
            </div>
            <p className="text-sm text-gray-700">
              Художниця та дизайнерка. Має багаторічний досвід роботи як із комерційними компаніями, так і з приватними
              замовниками, створюючи ілюстрації, графіку та візуальні концепти. Володіє професійними навичками роботи в
              таких програмах, як Adobe Photoshop, Illustrator, Procreate, Clip Studio Paint. Менторка Проект табору.
            </p>
          </div>

          <div className="course-details">
            <div className="course-detail-item">
              <Calendar className="w-5 h-5 text-primary" />
              <span className="course-detail-label">Тривалість:</span>
              <span className="course-detail-value">4 заняття по 1,5 години</span>
            </div>
            <div className="course-detail-item">
              <Calendar className="w-5 h-5 text-primary" />
              <span className="course-detail-label">Формат:</span>
              <span className="course-detail-value">1 раз на тиждень, день-понеділок</span>
            </div>
            <div className="course-detail-item">
              <Users className="w-5 h-5 text-primary" />
              <span className="course-detail-label">Вік учасників:</span>
              <span className="course-detail-value">12-17 років</span>
            </div>
            <div className="course-detail-item">
              <DollarSign className="w-5 h-5 text-primary" />
              <span className="course-detail-label">Вартість:</span>
              <span className="course-detail-value">300 грн/заняття; 1200грн/курс 4 заняття</span>
            </div>
          </div>
        </div>

        <div className="course-section animate-fadeIn delay-400">
          <h4 className="course-section-title">Програма курсу</h4>

          <EnhancedAccordion
            title="Заняття 1. Вступ у світ стікерів + створення персонажа"
            icon={<Sticker className="w-5 h-5" />}
          >
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Основи композиції: як зробити стікер зрозумілим, помітним і прикольним</li>
              <li>Скечимо ідеї, шукаємо свій стиль</li>
              <li>Малюємо перших персонажів, придумуємо історії</li>
            </ul>
          </EnhancedAccordion>

          <EnhancedAccordion title="Заняття 2. Робота з персонажами" icon={<Smile className="w-5 h-5" />}>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Доопрацьовуємо скетчі з минулого заняття</li>
              <li>Працюємо над емоціями, рухом і виразністю</li>
              <li>Кольори, текстури, деталі — персонаж стає живим</li>
              <li>Підготовка до перенесення в діджитал</li>
            </ul>
          </EnhancedAccordion>

          <EnhancedAccordion
            title="Заняття 3. Знайомство з діджитал-інструментами"
            icon={<Tablet className="w-5 h-5" />}
          >
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Огляд способів діджитал-малювання: графічний планшет, звичайний планшет, тачпад, ноутбук</li>
              <li>Тестуємо різні інтерфейси та софти</li>
              <li>Малюємо своїх персонажів у діджиталі</li>
              <li>Вивчаємо основи роботи в програмах для ілюстрації</li>
            </ul>
          </EnhancedAccordion>

          <EnhancedAccordion title="Заняття 4. Верстка і підготовка до друку" icon={<Printer className="w-5 h-5" />}>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Що таке лайнинг і навіщо він потрібен</li>
              <li>Обробка готових стікерів</li>
              <li>Верстка стікерпаку</li>
              <li>Підготовка файлів до друку</li>
              <li>Передаємо у друк!</li>
            </ul>
          </EnhancedAccordion>
        </div>

        <div className="bg-white p-5 rounded-lg border-l-4 border-primary animate-fadeIn delay-500 hover-lift">
          <p className="text-sm">
            <span className="font-medium">Після курсу</span> кожен учасник отримає 5 надрукованих стікерпаків власного
            дизайну, які можна використовувати для особистих потреб або як подарунок друзям.
          </p>
        </div>

        <div className="mt-6 text-center animate-fadeIn delay-500">
          <a
            href="https://forms.gle/i1EWBsu9s48mRqnz7"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block"
          >
            <button className="btn-primary rounded-fix">Записатися на курс</button>
          </a>
        </div>
      </section>

      {/* Секція 6: Курс "Створюємо журнал з нуля" */}
      <section
        id="journal-course"
        className="container pt-8 pb-11 animate-fadeIn"
        style={{
          background: "linear-gradient(180deg, rgba(178, 206, 210, 0.3), rgba(231, 150, 156, 0.2))",
        }}
      >
        <h2 className="section-title text-black flex items-center justify-center gap-2">
          <BookOpen className="w-6 h-6 text-primary animate-pulse-slow" />
          Створюємо журнал з нуля
        </h2>
        <h3 className="text-center mb-6 text-primary/80 font-project-main animate-fadeIn delay-100">
          Міні-курс креативного копірайтингу та ідей
        </h3>

        <div className="animate-fadeIn delay-200">
          <Carousel
            images={["/images/copywriting-1.jpeg", "/images/copywriting-2.jpeg"]}
            alt="Креативний копірайтинг"
          />
        </div>
        <div className="course-card animate-fadeIn delay-300 hover-lift">
          <h4 className="font-project-main text-xl mb-4">Про що курс?</h4>
          <p className="mb-4">
            Цей курс для тих, хто хоче{" "}
            <span className="highlight">навчитися мислити нестандартно та писати яскраво</span>. Через вправи на
            фантазію, сторітелінг, роботу з образами та емоційні тригери ми відкриємо креативний потенціал і навчимося
            оформлювати його у текст, який хочеться читати. У фіналі — надрукований журнал з текстами кожного учасника.
            Живий, справжній, як досвід, який залишиться з вами надовго.
          </p>

          <div className="border-t border-b border-gray-200 py-4 my-4">
            <div className="flex items-center gap-4 mb-3">
              <h5 className="font-medium text-[130%]">Марійка</h5>
              <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0 border-2 border-primary ml-auto transition-transform duration-300 hover:scale-105 rounded-fix">
                <img src="/images/mariyka.jpeg" alt="Марійка" className="w-full h-full object-cover" />
              </div>
            </div>
            <p className="text-sm text-gray-700">
              Креативна копірайтерка, продюсерка та медіаменеджерка. Редакторка телеграм каналу «Smak media», випускниця
              Київського національного університету театру, кіно і телебачення ім. І. Карпенка-Карого. Брала участь у
              розробці та втіленні медіакампаній для відомих українських брендів, продюсує TikTok-акаунти для ДТЕК та
              Проект Табір. Кординаторка змін та менторка Проект Табір.
            </p>
          </div>

          <div className="course-details">
            <div className="course-detail-item">
              <Calendar className="w-5 h-5 text-primary" />
              <span className="course-detail-label">Тривалість:</span>
              <span className="course-detail-value">4 заняття по 1,5 години</span>
            </div>
            <div className="course-detail-item">
              <Calendar className="w-5 h-5 text-primary" />
              <span className="course-detail-label">Формат:</span>
              <span className="course-detail-value">1 раз на тиждень, день-субота</span>
            </div>
            <div className="course-detail-item">
              <Users className="w-5 h-5 text-primary" />
              <span className="course-detail-label">Вік учасників:</span>
              <span className="course-detail-value">12-17 років</span>
            </div>
            <div className="course-detail-item">
              <DollarSign className="w-5 h-5 text-primary" />
              <span className="course-detail-label">Вартість:</span>
              <span className="course-detail-value">300 грн/заняття; 1200грн/курс 4 заняття</span>
            </div>
          </div>
        </div>
        <div className="course-section animate-fadeIn delay-400">
          <h4 className="course-section-title">Програма курсу</h4>

          <EnhancedAccordion title="Заняття 1. Уява та фантазія" icon={<BrainCircuit className="w-5 h-5" />}>
            <div className="space-y-4 text-sm">
              <ul className="list-disc pl-5 space-y-2">
                <li>Фрірайтинг та асоціативні карти</li>
                <li>Метод «Що якщо?…»</li>
                <li>Візуальна провокація</li>
              </ul>

              <div className="bg-primary/5 p-3 rounded-md">
                <p className="font-medium mb-2">Техніки генерації ідей:</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Брейнштормінг: правила і вправи</li>
                  <li>Метод шести капелюхів (Едвард де Боно)</li>
                  <li>Метод SCAMPER (як змінювати існуючі ідеї)</li>
                </ul>
              </div>
            </div>
          </EnhancedAccordion>

          <EnhancedAccordion title="Заняття 2. Сторітелінг" icon={<MessageSquare className="w-5 h-5" />}>
            <div className="space-y-4 text-sm">
              <ul className="list-disc pl-5 space-y-2">
                <li>Базова структура і композиція історії</li>
                <li>Емоційні та текстові гачки</li>
                <li>Арка персонажів</li>
              </ul>

              <div className="bg-primary/5 p-3 rounded-md">
                <p className="font-medium mb-2">Креатив у рекламі:</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Емоційні тригери</li>
                  <li>Формули AIDA та PAS</li>
                  <li>Сторітелінг в рекламі</li>
                </ul>
              </div>
            </div>
          </EnhancedAccordion>

          <EnhancedAccordion title="Заняття 3. Візуальне мислення" icon={<Eye className="w-5 h-5" />}>
            <div className="space-y-4 text-sm">
              <ul className="list-disc pl-5 space-y-2">
                <li>Як описувати візуальні образи</li>
                <li>Текст і візуал</li>
                <li>Лайт введення в арт-дирекшн</li>
              </ul>

              <div className="bg-primary/5 p-3 rounded-md">
                <p className="font-medium mb-2">Публіцистика та художній текст:</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Стиль і образність</li>
                  <li>Робота з метафорами і порівняннями</li>
                  <li>Художнє бачення</li>
                  <li>Факти та емоції</li>
                  <li>Будування чіткого меседжу</li>
                </ul>
              </div>

              <p className="font-medium">Розробка журналу «Проект Журнал»</p>
            </div>
          </EnhancedAccordion>

          <EnhancedAccordion title="Заняття 4. Доробка, втілення та друк" icon={<PenTool className="w-5 h-5" />}>
            <p className="text-sm">Доробка, втілення та друк «Проект Журнал»</p>
          </EnhancedAccordion>
        </div>
        <div className="bg-white p-5 rounded-lg border-l-4 border-primary animate-fadeIn delay-500 hover-lift">
          <p className="text-sm">
            <span className="font-medium">Після курсу</span> кожен учасник отримає примірник спільного журналу, який
            може слугувати досвідом і прикладом роботи для майбутніх проектів/роботи.
          </p>
        </div>
        <div className="mt-6 text-center animate-fadeIn delay-500">
          <a
            href="https://forms.gle/i1EWBsu9s48mRqnz7"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block"
          >
            <button className="btn-primary rounded-fix">Записатися на курс</button>
          </a>
        </div>
      </section>

      {/* Нова секція: Відгуки */}
      <section
        id="testimonials"
        className="container pt-8 pb-8 animate-fadeIn"
        style={{
          background: "linear-gradient(180deg, rgba(231, 150, 156, 0.2), rgba(178, 206, 210, 0.2))",
        }}
      >
        <TestimonialCarousel testimonials={testimonials} />
      </section>

      {/* Секція 7: Запитання і відповіді */}
      <section
        id="faq"
        className="container pt-8 pb-11 animate-fadeIn"
        style={{
          background: "linear-gradient(180deg, rgba(178, 206, 210, 0.2), rgba(178, 206, 210, 0.05))",
        }}
      >
        <h2 className="section-title text-black flex items-center justify-center gap-2">
          <MessageSquare className="w-6 h-6 text-primary animate-pulse-slow" />
          Запитання і відповіді
        </h2>

        <div className="space-y-4 animate-fadeIn delay-200">
          <EnhancedAccordion title="Чи потрібно мати попередній досвід?">
            <p className="text-sm">
              Ні, наші курси розраховані на різні рівні підготовки. Ми створюємо комфортне середовище для навчання, де
              кожен може розвиватися у своєму темпі. Викладачі приділяють увагу кожному учаснику.
            </p>
          </EnhancedAccordion>

          <EnhancedAccordion title="Що потрібно брати з собою на заняття?">
            <p className="text-sm">
              Все необхідне обладнання та матеріали для занять надаються Кабан центром. З собою потрібно мати лише
              гарний настрій та бажання творити!
            </p>
          </EnhancedAccordion>

          <EnhancedAccordion title="Чи можна відвідати одне заняття?">
            <p className="text-sm">
              Так, можна! Заповнюйте форму або звертайтесь з таким питанням до менеджерів. За умови наявності вільного
              місця, участь в одному занятті можлива — вартість складає 300 грн.
            </p>
          </EnhancedAccordion>
        </div>
      </section>

      {/* Футер */}
      <footer id="contacts" className="bg-gray-900 text-white py-8 px-4 animate-fadeIn">
        <div className="mb-6">
          <h2 className="font-project-main text-2xl mb-2">КАБАН ЦЕНТР</h2>
          <p className="text-gray-400">Простір який надихає</p>
        </div>

        <div className="grid grid-cols-1 gap-6 mb-6 animate-fadeIn delay-200">
          <div>
            <h3 className="text-lg font-project-main mb-2">Контакти</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li className="flex items-center gap-2 transition-transform duration-300 hover:translate-x-1">
                <MapPin className="w-4 h-4 text-primary" />
                Київ, вул. Михайлівська 24/в
              </li>
              <li className="flex items-center gap-2 transition-transform duration-300 hover:translate-x-1">
                <svg className="w-4 h-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                +380930141779
              </li>
              <li className="flex items-center gap-2 transition-transform duration-300 hover:translate-x-1">
                <svg className="w-4 h-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <a
                  href="mailto:project.kaban.center@gmail.com"
                  className="transition-colors duration-300 hover:text-primary"
                >
                  project.kaban.center@gmail.com
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-project-main mb-2">Соціальні мережі</h3>
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/kaban_center/"
                className="text-gray-300 hover:text-white bg-gray-800 p-2 rounded-full hover:bg-primary/20 transition-all duration-300 hover:scale-110"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="sr-only">Instagram</span>
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <p className="text-center text-gray-500 text-sm animate-fadeIn delay-300">
          © 2024 Кабан Центр. Всі права захищені.
        </p>
      </footer>
    </main>
  )
}
