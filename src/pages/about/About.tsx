import './_about.scss';
import { ButtonLink } from "@/shared/ui";

export default function About() {
  console.log('About page ready');

  return (
    <section className="page-about text-center">
      <h1 className="page-about__title">Про нашу компанію</h1>
      <ButtonLink to='/'>Back to Home</ButtonLink>
      <p className="page-about__text">Ми займаємося веб-розробкою та створюємо сучасні SPA додатки на React + TypeScript.</p>
      <ul className="page-about__list text-black">
        <li>Швидкість</li>
        <li>Надійність</li>
        <li>Чистий код</li>
      </ul>
    </section>
  )
}