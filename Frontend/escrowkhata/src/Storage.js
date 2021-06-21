import React, {Component} from 'react';
import Web3 from 'web3'
class Storage extends Component {
constructor() {
super()
this.state = { account: '' }
}
componentDidMount() {
this.loadBlockchainData()
}
async loadBlockchainData() {
const web3 = new Web3(Web3.givenProvider || "http://localhost:7545")
const accounts = await web3.eth.getAccounts()
this.setState({ account: accounts[0] })
}
render() {
return (
<h1>{this.state.account}</h1>
); }
}
export default Storage;