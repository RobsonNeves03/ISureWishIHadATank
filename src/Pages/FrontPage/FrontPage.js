import './FrontPage.css'; 
import {CompBttnLR, FrontPageTextMain} from '../../Componentes/componentes.js';

function FrontPage() {
  return (
    <div className="FrontPage">

      <h1 className = "desc">ISureWishIHadATank</h1>
      <div className = "imgBox">
        <div className = "tnkName" id = "nomeTnk">Panzerkampfwagen I</div>
        <div><img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.EbAjRoCiRJEFfkTA9Kyi5QHaFj%26pid%3DApi&f=1" className= "img" id = "1" alt = "tanque"></img></div>
        <FrontPageTextMain></FrontPageTextMain>
        <CompBttnLR></CompBttnLR>
      </div>

    </div>
  );
}

export default FrontPage;
