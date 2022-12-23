import React from "react";
import { Modal, Button } from "react-bootstrap";



class App extends React.Component{
    constructor(props) {
        super(props);

        this.state={
            showModal: false,
            index:0,
            action:"ADD",
            product:[
               {
                   id:1,
                  name:"Coca",
                   price: 2000
               },

               {
                   id:2,
                   name:"Heniken",
                   price: 4000
               },

               {
                   id:3,
                   name:"Chivas",
                   price: 8000
               }
           ]
        }

        this.changeName = this.changeName.bind(this);
        this.changePrice = this.changePrice.bind(this);

    }


    close= ()=> {
        this.setState({ showModal: false });
    }

    open=() => {
        this.setState({ showModal: true });
    }

 addNew= () =>{

     if(!this.state.product.find(item=>item.name===this.state.name)){
         console.log(...this.state.product)
         this.setState({
             product:[
                 ...this.state.product,
                 { name:this.state.name,price:this.state.price}
             ],
             name:"",
             price:""
         })
     }

 }

    changeName = (e)=>{
        this.setState({
            name:e.target.value
        })
    }

    changePrice = (e)=>{
        this.setState({
            price:e.target.value
        })
    }


    deleteItem=(name)=>this.setState({
        product:this.state.product.filter(item=>item.name!==name)
    })


    Edit = (item,index)=>{
        this.setState({
            action:'ADD_ITEM',
            name:item.name,
            price:item.price,
            index: parseInt(index)
        });
    }

    updateItem = ()=> {
        let data = this.state.product;
        data.map((item,index) => {

            if (this.state.index === index) {
                item.name = this.state.name;
                item.price = parseInt(this.state.price);
            }
        })
        this.setState({
            products:data,
            name:"",
            price:"",
            action:'ADD'
        })

    }


        render() {

   return (
       <div className="container-fluid">
           <div className="row">
         <div className="col-md-4">
           <div className="form-group">
             <label>Name</label>
             <input type="text" name="" className="form-control" onChange={this.changeName} value={this.state.name}/>
           </div>
           <div className="form-group">
             <label>Price</label>
             <input type="text" name=""  className="form-control" onChange={this.changePrice} value={this.state.price} />
           </div>
           <div className="form-group">
             <button type="button" className="btn btn-primary"
                     onClick={this.state.action==='ADD'?this.addNew:this.updateItem}>Add</button>
           </div>
         </div>
           </div>
         <div className="row">
             <h1>List Products</h1>
             <table className="table">
                 <thead>
                 <tr>
                     <th>STT</th>
                     <th>Name</th>
                     <th>Price</th>
                     <th>Modify</th>
                     <th>Remove</th>
                 </tr>
                 </thead>
                 <tbody>
                 {
                     this.state.product.map((item,index)=>(
                         <tr key = {index}>
                             <td>{index+1}</td>
                             <td>{item.name}</td>
                             <td>{item.price}</td>
                             <td><button className="btn btn-warning" onClick={()=>this.Edit(item,index)}>Update</button></td>
                             <td><button className="btn btn-danger" onClick={() => this.deleteItem(item.name)}>remove</button></td>
                         </tr>
                     ))
                 }
                 </tbody>
             </table>

             {/*<Button onClick={this.open} >*/}
             {/*    Launch demo modal*/}
             {/*</Button>*/}
         </div>

          <div>
              <Modal show={this.state.showModal} onHide={this.close}>
                  <Modal.Header closeButton>
                      <Modal.Title>Modal heading</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                      Modal body
                  </Modal.Body>
                  <Modal.Footer>
                      <button onClick={this.close}>Close</button>
                  </Modal.Footer>
              </Modal>
          </div>
       </div>
   );
 }



}

export default App;
