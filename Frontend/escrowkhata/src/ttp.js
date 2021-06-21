import './ttp.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link } from 'react-router-dom';
import React, {Component} from 'react';
import Web3 from 'web3'
import {ESCROW_KHATA_ADDRESS, ESCROW_KHATA_ABI} from './conConfig.js'
class TTP extends Component {
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
          statusSuccessfully() {
            //this.state.khatacontract.methods.addkhata({value:web3.utils.toWei('50','ether'), this.state.account}).call() 
              alert('Status Set Successfully!');
            }
            confirmSuccessfully() {
              //this.state.khatacontract.methods.addkhata({value:web3.utils.toWei('50','ether'), this.state.account}).call() 
                alert('Item C is confirmed succesfully!');
            }
  render() {
                
  return (
    
    
    
    
 <>   
    <div className="bg4">
    
    
    </div>
    <div className="continer">
    <div className="row">
    <div className="col-md-1 text-center"> <Link to="/" className="btn btn-primary">Back</Link> </div>
    <div className="col-md-1"></div>
    <div className="col-md-8 text-center display-3">Third Party's Operation</div>
    <div className="col-md-2"></div>
    </div>
    <br/>
    <br/>
    <br/>

      </div>
      <div className="row">
        <div className='col-md-4'></div>
        <div className='col-md-2'>
        <label for="Item1" >Enter Item: </label>
        </div>
        
        <div className='col-md-2'>
        <input type="text" class="form-control" id="item`1"  placeholder="Enter Item"/>
        </div>

        
        <div className='col-md-4'></div>
      </div>
      <br/>
      <div className="row">
        <div className='col-md-4'></div>
        <div className='col-md-2'>
        <label for="Item1" >Enter Status: </label>
        </div>
        
        <div className='col-md-2'>
        <input type="text" class="form-control" id="item`1"  placeholder="Enter Item Status"/>
        </div>

        

        
        <div className='col-md-4'></div>
      </div>
      <br/>
      <div className="row">
        <div className='col-md-5'></div>
        
        
        <div className='col-md-2'>

        <button type="button" className="btn btn-success btn-block" onClick={this.statusSuccessfully}>Handle Dispute </button>
        
        </div>

        

        
        <div className='col-md-5'></div>
      </div>  
    </>  
  );
}
}
export default TTP;

