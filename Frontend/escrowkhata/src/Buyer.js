import './Buyer.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link } from 'react-router-dom';
import React, {Component} from 'react';
import Web3 from 'web3'
import {ESCROW_KHATA_ADDRESS, ESCROW_KHATA_ABI} from './conConfig.js'
class Buyer extends Component {
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
      this.setState({ account: accounts[2] })
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
      openaKhata() {
      //this.state.khatacontract.methods.addkhata({value:web3.utils.toWei('50','ether'), this.state.account}).call() 
        alert('New Khata is Opened Successfully with 50 ETH!');
      }

      closeKhata() {
        //this.state.khatacontract.methods.addkhata({value:web3.utils.toWei('50','ether'), this.state.account}).call() 
          alert('Your Khata is closed and remaining amount is refunded!');
        }

        confirm() {
          //this.state.khatacontract.methods.addkhata({value:web3.utils.toWei('50','ether'), this.state.account}).call() 
            alert('You have succesfully confirmed your purchase!');
          }
          buySuccessfully() {
            //this.state.khatacontract.methods.addkhata({value:web3.utils.toWei('50','ether'), this.state.account}).call() 
              alert('Item Bought succesfully!');
            }
            confirmSuccessfully() {
              //this.state.khatacontract.methods.addkhata({value:web3.utils.toWei('50','ether'), this.state.account}).call() 
                alert('Item C is confirmed succesfully!');
            }
  render() {
                
  return (
    
    
    
    
 <>   
    <div className="bg3">
    
    
    </div>
    <div className="continer">
    <div className="row">
    <div className="col-md-1 text-center"> <Link to="/" className="btn btn-primary">Back</Link> </div>
    <div className="col-md-1"></div>
    <div className="col-md-8 text-center display-3">Buyer's Operation</div>
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
      Buy Available Items
      </h3>
      
      </div>
      <div className="col-md-3">

      </div>
      </div>
      <br/>        
      
      
      
      <div className="row">
      
        <div className="col-md-3"></div>
        <div className="col-md-3 text-center ">
   
  
   <label for="Item1" >Enter Title: </label>
   <br/>
   <br/>
   <br/>
   <br/>
   <br/>
   <br/>
   <label for="Item1" >Enter Title: </label>     
  </div>
        <div className="col-lg-3"> 
        <input type="text" class="form-control" id="item`1"  placeholder="Enter Item"/>
        <br/>
        <button type="button" className="btn btn-success btn-block" onClick={this.buySuccessfully}>Buy </button>
        <br/>
        <br/>
        <input type="text" class="form-control" id="item`1"  placeholder="Enter Item"/>
        <br/>
        <button type="button" className="btn btn-warning btn-block" onClick={this.confirmSuccessfully}>Confirm </button>
        <br/>
        
        
        <button type="button" className="btn btn-danger btn-block"onClick={this.addDisputeHandler}>List of Items</button>
        
    </div>
    
      
        <div className="col-md-3"></div>
      </div>

      <br/>

      <div className="row">
        <div className="col-md-3"></div>
        <div className="col-md-3 text-center ">
   
        
  </div>
        <div className="col-lg-3">
    </div>  
        <div className="col-md-3"></div>
      </div>
      <br/>
      <div className="row">
       <div className="col-md-5"></div>
       <div className="col-md-4">
     
     
     </div>
     <div className="col-md-3"></div>
      </div>
    </div>


    <div className="col-md-6">
      <div className="row">
       <div className="col-md-5">
           
       </div>

       <div className="col-md-3">
       <div class="row">
       <h3 className="">
            Other Options
      </h3>
        <br/>
        <br/>

      </div>
        <div class="row">
        
        <button type="button" className="btn btn-block btn-success" onClick={this.openaKhata}>Add Khata </button> 
       
       </div>
       <br/>

       <div class="row">
       <button type="button" className="btn btn-block btn-danger" onClick={this.closeKhata}>Refund </button>
       </div>
       <br/>
       
       
       <br/>
       </div>

       <div className="col-md-4">
           
       </div>
      </div>

    </div>
    
    </div>   
    <br/>
    <br/>
    <br/>
    </div>
    
    </>  
  );
}
}
export default Buyer;

