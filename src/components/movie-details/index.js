import { useState } from "react"
import { DarkerBackground, CloseButton, ModalContainer } from "./styles"

export default function MovieDetails({ openDetails }) {
    const [open, setOpen] = useState(openDetails)

    return (
        <>
            <DarkerBackground open={open}>
                <ModalContainer>
                    <CloseButton onClick={() => setOpen(false)}>
                        Fechar
                    </CloseButton>
                    <p>detalhes do filme</p>
                </ModalContainer>
            </DarkerBackground>
        </>
    )
}