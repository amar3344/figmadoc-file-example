import { useNavigate } from "react-router-dom"

const Navigation = (Component : any) => {
    const Content = (props : any) =>{
        const navigation = useNavigate()
        return <Component {...props} navigate={navigation}/>
    }
        return Content
}

export default Navigation