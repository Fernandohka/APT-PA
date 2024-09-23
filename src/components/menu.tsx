import Link from "next/link";

interface IMenu {
    op1: string,
    op2: string,
    op3: boolean,
    op4: number
}

export const Menu: React.FC<IMenu> = ({op1, op2, op3, op4}) => {
    return(
        <nav className="text-preto font-robFont flex justify-center items-center gap-5 bg-blue-300">
          <p>{op1}</p>
          <p>{op2}</p>
          <p>{op3}</p>
          <p>{op4}</p>
        </nav>
    )
}