import { ROUTES } from "@/app/constants/routes";
import Link from "next/link";

interface IMenu {
    op1: string,
    op2: string,
    op3: string,
    op4: string,
    op5: string,
    op6: string,
    op7: string
}

export const Menu: React.FC<IMenu> = ({op1, op2, op3, op4, op5, op6, op7}) => {
    return(
        <nav className="text-preto font-robFont flex justify-center items-center gap-5 bg-blue-300">
          <Link href={ROUTES.home}><p>{op1}</p></Link>
          <Link href={ROUTES.maths}><p>{op2}</p></Link>
          <Link href={ROUTES.generalFunction}><p>{op3}</p></Link>
          <Link href={ROUTES.cards}><p>{op4}</p></Link>
          <Link href={ROUTES.fetchNativo}><p>{op5}</p></Link>
          <Link href={ROUTES.axiosPage}><p>{op6}</p></Link>
          <Link href={ROUTES.serverPage}><p>{op7}</p></Link>
        </nav>
    )
}