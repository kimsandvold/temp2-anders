import Button from "../components/Button.component"
import Footer from "../components/Footer.component"
import Header from "../components/Header.component"


const Lotteri = () => {


    return (
        <div>
            <Header />
            <table>
                <tbody>
                    <tr>
                        <td className="container">
                            <Button/>
                        </td>
                        <td className="sideBar">
                            
                        </td>
                    </tr>
                </tbody>
            </table>
            <Footer/>
        </div>
    )
}

export default Lotteri