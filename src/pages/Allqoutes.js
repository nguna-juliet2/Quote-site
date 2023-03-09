import QuoteList from "../components/quotes/QuoteList";
const DUMMY_DATA=[
    {id:'q1', authour: 'julie', text:'Greact is the best'},
    {id:'q2', authour: 'juliet', text:'Areact is great'},
    {id:'q3', authour:'esther', text:'Hreact is the awesome'},
    {id:'q4', authour:'olivia', text:'Breact is good'}
]


const AllQuote =()=>{
    return (
        <QuoteList quotes={DUMMY_DATA}/>
    )
}
export default AllQuote;