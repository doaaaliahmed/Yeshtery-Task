
import '../../../sass/main.scss';

const ThirdNav = ()=>{
    const list = [
        {id: 'link1', title:'Men'},
        {id: 'link2', title:'Women'},
        {id: 'link3', title:'Unisex'},
        {id: 'link4', title:'Kids'},
        {id: 'link5', title:'Best Sellers'},
        {id: 'link6', title:'New Arrivels'},
        {id: 'link7', title:'Offers'},
    ]
    return (
        <nav className="third-nav">
            <ul>
                {list.map(l=> 
                  <li key={l.id} className="list-item"><a href="men.com" className='link-item'>{l.title}</a></li>
                    )}
            </ul>
        </nav>
    )
}

export default ThirdNav;