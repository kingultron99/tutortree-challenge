import { ModalProps } from "../../types/types"

export default function ModalBase({ buttonTitle, buttonClick, children }: ModalProps) {
    return (
        <div className="modalBackground">
            <div className="modal">
                <div className="modalContent">
                    {children}
                    <button className="modalButton" onClick={buttonClick}>{buttonTitle}</button>
                </div>
            </div>
        </div>
    )
}