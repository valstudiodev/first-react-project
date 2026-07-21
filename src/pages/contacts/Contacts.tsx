import './_contacts.scss';
import { ButtonLink } from "@/shared/ui";

export default function Contacts() {
  console.log('Contacts page ready');

  return (
    <section className="page-contact text-center">
      <h1 className="page-contact__title">Зворотній зв'язок</h1>
      <ButtonLink to='/'>Back to Home</ButtonLink>
      <p className="page-contact__info">Зв'яжіться з нами електронною поштою або через форму нижче.</p>
      <form className="page-contact__form border 
      p-2 max-w-100 mx-auto" onSubmit={(e) => e.preventDefault()}>
        <input type="text" placeholder="Ваше ім'я" className="form__input" />
        <button type="submit" className="form__button">Надіслати</button>
      </form>
    </section>
  )
}