import { ModalHeaderProps } from "./ModalTypes";

export default function ModalHeader({ title }: ModalHeaderProps): React.JSX.Element {
  return (
    <h2 className="modal__title text-2xl
    text-center mb-10">
      {title}
    </h2>
  )
}