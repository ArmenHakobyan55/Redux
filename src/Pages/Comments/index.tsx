import { Link } from "react-router-dom"
import { MainLayout } from "../../MainLayout/Layout"

export const Comments = () => {
  return (
    <MainLayout>
        Comments
        <br/>
    <Link to={"/"} > Back </Link>
    </MainLayout>
  )
}
