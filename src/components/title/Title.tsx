import React, {FC, PropsWithChildren} from 'react'
import './Title.css'

export const Title: FC<PropsWithChildren<any>> = ({ children }) => (
    <span className="title">{children}</span>
)
