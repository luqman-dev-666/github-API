import React , {useState ,useEffect, Fragment} from 'react';
import './App.css';
import Repository from './components/repository';
import axios from 'axios' ;
import Pagination from './components/Pagination';

// import $ from "jquery";

function App() {
  
  const [repositories,setRepositories] = useState([]);
  const [currentPage , setCurrentPage] = useState(1);
  const [totalPages , setTotalPages] = useState(null) ;
  // const [totalRecords , setTotalRecords] = useState(null) ;
  const [records , setRecords] = useState(null) ;

  let date = new Date();
  date.setDate( date.getDate() -  30);
  date = formatDate(date);

  useEffect(() => {
    const url = `https://api.github.com/search/repositories?q=created:>${date}&sort=stars&order=desc&page=${currentPage}&client_id=0940d5637c1f1c597752&client_secret=915c97a2b569d578433e381e058d86b84a8de671`;
    axios.get(url).then(res=>{
    setRepositories(res.data.items);
    setRecords(res.data.total_count)
  }).catch(res  => {
    alert("Only the first 1000 search results are available")
  });
  } ,[currentPage])

  const onPageChanged = data => {
    const { currentPage, totalPages} = data;
    setCurrentPage(currentPage) ;
    setTotalPages(totalPages);
  }

  return (
    <Fragment>
      
      <div className="row justify-content-center">
        {/* <div className="col-md-8 ">
          <h1 className="label label-primary">{repositories.length}</h1>
        </div>
        <div className="col-md-8 ">
          <h1 className="label label-primary">{records}</h1>
        </div> */}
        <div className="col-md-10">
          <Repository repositories={repositories} />
        </div>
        <div className="col-md-8 ">
          <div className="d-flex flex-row py-4 justify-content-center">
            {records && <Pagination totalRecords={records} pageLimit={30} pageNeighbours={3} onPageChanged={onPageChanged} />}
          </div>
        </div>
      </div>
      
    </Fragment>
  );
}

export default App;


function formatDate(date) {
  var d = new Date(date),
      month = '' + (d.getMonth() + 1),
      day = '' + d.getDate(),
      year = d.getFullYear();

  if (month.length < 2) 
      month = '0' + month;
  if (day.length < 2) 
      day = '0' + day;

  return [year, month, day].join('-');
}