import React from 'react';



function Componenttwo() {
  return (
    <div className="">
        <h3>Component Two</h3>
        <hr/>
        <img 
        src="https://images6.fanpop.com/image/photos/39500000/dfsf-maria5151-39540546-299-168.jpg"
        alt="new"
        className="img-responsive center-block"
        />
            <div className="text-center">
            <table class="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">First</th>
                <th scope="col">Last</th>
                <th scope="col">Handle</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Jacob</td>
                <td>Thornton</td>
                <td><a href="http://facebook.com">@facebook</a></td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>Larry</td>
                <td>the Bird</td>
                <td><a href="https://twitter.com/">@twitter</a></td>
              </tr>
            </tbody>
          </table>
          </div>
      
    </div>
  );
}

export default Componenttwo;
