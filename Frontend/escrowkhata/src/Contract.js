import React, {Component} from 'react';
import Web3 from 'web3'
import {ESCROW_KHATA_ADDRESS, ESCROW_KHATA_ABI} from './conConfig.js'
class Contract extends Component {
constructor() {
    super()
    this.state = {owner:'' ,account: '', khatacontract:'', TTP:'',count:0,item:[] }
    }
    componentDidMount() {
    this.loadBlockchainData()
    }
    async loadBlockchainData() {
        const web3 = new Web3("http://localhost:7545")
        const accounts = await web3.eth.getAccounts()
        this.setState({ account: accounts[0] })
        const escrowpayments = new web3.eth.Contract(ESCROW_KHATA_ABI,ESCROW_KHATA_ADDRESS);
        this.setState({ khatacontract: escrowpayments })
        
        const owner = await escrowpayments.methods.owner().call()
        this.setState({ owner: owner })
        if(this.state.count==0)
        {
            this.setState({ count: 2 })
        }
        //await escrowpayments.methods.addTTP(accounts[1]).call()
        const TTP= await escrowpayments.methods.trustedTP().call()
        this.setState({ TTP: TTP })
        
        const it='z'
        const p=50
        //const ha=await escrowpayments.methods.addItem(it,50).call()
        //this.setState({TTP: add })
        const val=await escrowpayments.methods.listItems().call()
        this.setState({ item:val })
        }
render() {
return (
    
        <h2>{this.state.item}</h2> ); }
        
}
export default Contract;
