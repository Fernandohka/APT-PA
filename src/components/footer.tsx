interface IFooter {
    op1: string,
    op2: string
}

export const Footer = ({op1, op2} : IFooter) => {
    return(
        <footer className="fixed bottom-0 w-full bg-blue-300">
            <p>{op1} - {op2}</p>
        </footer>
    )
}