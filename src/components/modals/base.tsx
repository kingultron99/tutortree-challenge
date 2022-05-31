import { motion } from "framer-motion"
import { X } from "phosphor-react"
import { ModalProps } from "../../types/types"


/**
 * ModalBase defines the base element that is shared by all the modals.
 * It includes a button who's onClick event handler is provided by the parent.
 */
export default function ModalBase({ setModal, buttonTitle, buttonClick, children }: ModalProps) {

    const modal = {
        init: {
            opacity: 0,
        },
        anim: {
            opacity: 1,
            transition: {
                staggerChildren: .1,
            }
        },
        exit: {
            opacity: 0
        }
    }

    const component = {
        init: {
            opacity: 0,
        },
        anim: {
            opacity: 1,
        }
    }

    return (
        <motion.div variants={modal} initial="init" animate="anim" exit="exit" className="modalBackground">
            <div className="modal">
                <motion.div variants={modal} initial="init" animate="anim" className="modalContent">
                    <div className="close" onClick={() => setModal()}><X/></div>
                    {children}
                    <motion.button variants={component} whileHover={{scale: 1.05}} whileTap={{scale:0.95}} className="modalButton" onClick={buttonClick}>{buttonTitle}</motion.button>
                </motion.div>
            </div>
        </motion.div>
    )
}