async loadBlockchainData() {
    const web3 = new Web3("http://localhost:7545")
    const accounts = await web3.eth.getAccounts()
    
    const escrowpayments = new web3.eth.Contract(ESCROW_KHATA_ABI,ESCROW_KHATA_ADDRESS);
    this.setState({ khatacontract: escrowpayments },() =>{

        async function getToken() {

            const owner = await escrowpayments.methods.owner().call()
            //jis function mn koi chz set hni hai wo nhi horha
            // 
            //ye is function mn masla
            //await escrowpayments.methods.addTTP(accounts[1]).call()
            const TTP= await escrowpayments.methods.trustedTP().call()
                    
            const it="Usman";
            const p=50;
            ///
            const s=await escrowpayments.methods.addItem("Zain ",500).call();
            //this.setState({TTP: add })
            const val=await escrowpayments.methods.listItems().call();
            console.log(val);
            this.setState({item: val },() =>{
              console.log(this.state.item);
            })
        }
        getToken();


        
    });    
}