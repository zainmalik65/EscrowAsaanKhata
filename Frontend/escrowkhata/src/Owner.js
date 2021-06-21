import './Owner.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, {Component} from 'react';
import Web3 from 'web3'
import {ESCROW_KHATA_ADDRESS, ESCROW_KHATA_ABI} from './conConfig.js'
import {Link } from 'react-router-dom';

class Owner extends Component {
  constructor() {
    super();
    this.state = {
             owner:'' ,
             account: '',
             khatacontract:'',
             TTP:'',
             count:0,
             item:[] 
           
           }   
          
    }
    componentDidMount() {
       this.loadBlockchainData()
    }
    async loadBlockchainData() {
      const web3 = new Web3("http://localhost:7545")
      const accounts = await web3.eth.getAccounts()
      this.setState({ account: accounts[0] })
      const escrowkhata = new web3.eth.Contract(ESCROW_KHATA_ABI,ESCROW_KHATA_ADDRESS);
      this.setState({ khatacontract: escrowkhata })
      
      const owner = await escrowkhata.methods.owner().call()
      this.setState({ owner: owner })
      if(this.state.count==0)
      {
          this.setState({ count: 2 })
      }
      //await escrowpayments.methods.addTTP(accounts[1]).call()
      const TTP= await escrowkhata.methods.trustedTP().call()
      this.setState({ TTP: TTP })
      
      const it='z'
      const p=50
      //const ha=await escrowpayments.methods.addItem(it,50).call()
      //this.setState({TTP: add })
      const val=await escrowkhata.methods.listItems().call()
      this.setState({ item:val })
      }  
      addanItem() {
        //this.state.khatacontract.methods.addkhata({value:web3.utils.toWei('50','ether'), this.state.account}).call() 
          alert('Item added to the list successfully!');
        }
  
      addDisputeHandler() {
          //this.state.khatacontract.methods.addkhata({value:web3.utils.toWei('50','ether'), this.state.account}).call() 
            alert('Account Holder 1 is succesfully added as trusted dispute handler!');
          }
  
  render() {
  const list=this.state.item.map((item1) =>{
    return (
      <tr>
           <td>{item1[0]}</td>
           <td>{item1[1]}</td>
           <td>{item1[2]=="0x50"?"Unavailble":"Available"}</td>
      </tr>
    );


  });
  return (
    <>
      <div className="bg2">
      </div>
      <div className="">
      
      <div className="row">
      <div className="col-md-2">
        <Link to="/" className="btn btn-primary">Back</Link>
      </div>
      <div className="col-md-8 text-center display-2 ">Owner's Operation</div>
      <div className="col-md-2"></div>
      </div>
      <br/>
      <br/>
      <br/>
      <div className="row">
      <div className="col-md-6">

      <div className="row">
        <div className="col-md-3">

        </div>
        <div className="col-md-6 text-center">
       <h3 className="">
        Add New Item
        </h3>
        </div>
        <div className="col-md-3">

        </div>
        </div>
        <br/>        
        
        
        
        <div className="row">
        
          <div className="col-md-3"></div>
          <div className="col-md-3 text-center ">
     
    
     <label for="Item1" >Enter Title </label>
          
    </div>
          <div className="col-lg-3"> <input type="text" class="form-control" id="item`1"  placeholder="Enter Title"/>
      </div>  
          <div className="col-md-3"></div>
        </div>

        <br/>

        <div className="row">
          <div className="col-md-3"></div>
          <div className="col-md-3 text-center ">
     <label for="Item1">Enter Price : </label>
          
    </div>
          <div className="col-lg-3"> <input type="text" class="form-control" id="item`1"  placeholder="Enter Price"/>
      </div>  
          <div className="col-md-3"></div>
        </div>
        <br/>
        <div className="row">
         <div className="col-md-4"></div>
         <div className="col-md-4 text-center">
       <button type="button" className="btn btn-success btn-block" onClick={this.addanItem}>Add Item </button>
       <br/>
       <br/>
       <br/>
       <button type="button" className="btn btn-warning btn-block"onClick={this.addDisputeHandler}>Add Third Party </button>
       <br/>
       <br/>
       <button type="button" className="btn btn-danger btn-block"onClick={this.addDisputeHandler}>List of Items</button>
       </div>
       <div className="col-md-4"></div>
        </div>
      </div>


      <div className="col-md-6">
         <div className="row">
        <div className="col-md-3">

        </div>
        <div className="col-md-6 newfont">
        <div className="row">
          <h3>
          List of Available Items
          </h3>
        </div>
           <table border="1">
             <tr style={{fontWeight:'bold'}}>
               <td>Title</td>
               <td>Price</td>
               <td>Status</td>
             </tr>
             {list}
           </table>
        <br/>
        <br/>
        <br/>
        <br/>
        </div>
        <div className="col-md-3">

        </div>
        </div> 
      </div>
    
      </div>
    

        </div>   
        </> 
  );
}
}
export default Owner;

