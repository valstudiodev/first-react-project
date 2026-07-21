import React from "react"
import { ButtonLink } from "@/shared/ui";
import './styles.scss'

export default function Home(): React.JSX.Element {
  console.log('Home page');

  return (
    <section>
      <h1 className="text-6xl text-center">Home Page</h1>
      <ButtonLink to='/about'>Перейти на сторінку About</ButtonLink>
    </section>
  )
}