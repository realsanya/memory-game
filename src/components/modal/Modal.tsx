import React, { FC } from 'react'
import ReactDOM from "react-dom"
import './Modal.css'

interface ModalProps {
    isOpen: boolean
    title: string
    subtitle: string
    buttonText: string
    onClick: () => void
}

export const Modal: FC<ModalProps> = (props) => {
    const { title, subtitle, buttonText, onClick, isOpen = false } = props
    return isOpen ?
        ReactDOM.createPortal(
            <>
                <div className="modal-shadow"/>
                <div className="modal">
                    <div className="modal-info">
                        <span className="modal-title">{title}</span>
                        <span className="modal-subtitle">{subtitle}</span>
                    </div>
                    <button className="modal-button" onClick={onClick}>{buttonText}</button>
                </div>
            </>
        , document.body)
        : null
}
