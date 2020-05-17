const data = require('../results.json');
import Link from 'next/link';

const Index = () => (
    <div>
      <p>Image filtering</p>
        <ul>
        {data.map(function(element, index){
            return <li> 
                    <Link href={{pathname: '/images', query: {hash: element.hash, resultList: element.resultList}}} 
                          as={`/images?hash=${element.hash}`}>
                              <a>{element.hash} - {element.resultList.length}</a>
                    </Link>
                    </li>;
            })}
        </ul>
    </div>
  );
  
  export default Index;