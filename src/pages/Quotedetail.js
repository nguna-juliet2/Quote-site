import { Route, Link,useRouteMatch } from "react-router-dom";
import { useParams } from "react-router-dom";
import Comments from "../components/comments/Comments";
import HighlightedQuote from "../components/quotes/HighlightedQuote";

const DUMMY_DATA=[
    {id:'q1', authour: 'julie', text:'Greact is the best'},
    {id:'q2', authour: 'juliet', text:'Areact is great'},
    {id:'q3', authour:'esther', text:'Hreact is the awesome'},
    {id:'q4', authour:'olivia', text:'Breact is good'}
];
const Quotedetail =()=>{
    const match = useRouteMatch();
    const param =useParams();
    console.log(match )

    const quote = DUMMY_DATA.find((quote)=> quote.id === param.quoteId)
    if(!quote){
        return <h1>no quote found</h1>
    }
    return(
        <section>
            <HighlightedQuote text= {quote.text} author={quote.authour}/>
            <Route path={`/quotes/${match.path}`} exact>
             <div className='centered'>
                <Link className='btn--flat' to={`${match.url}/comments`}>Load Comments</Link>
             </div>
             </Route>
            <Route path={`/quotes/${ match.path}/comments`} >
                <Comments/>
            </Route>
        </section>
        )
}
export default Quotedetail;