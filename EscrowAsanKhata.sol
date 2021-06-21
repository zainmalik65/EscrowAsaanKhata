pragma solidity >=0.4.0 <0.7.0;
pragma experimental ABIEncoderV2;

contract EscrowAsanKhata
{
    struct Item 
    {
        string title;
        uint price;
        byte status;
        address payable buyer;
    }

    mapping (address => uint) public khatay; //addresses of khataBuyers and their respective amounts
    mapping (address => bool) public khataBuyers;

    address payable public owner; //to send payment to owner
    address public trustedTP; //trusted third party
    Item[] public allItems;
    
    // modifiers

    modifier registered
    {
        require(khataBuyers[msg.sender] == true);
        _;
    }

    modifier onlyOwner
    {
        require(msg.sender == owner);
        _;
    }

    modifier notTTP
    {
        require(trustedTP == address(0));
        _;
    }
    
    modifier onlyTTP
    {
        require(msg.sender == trustedTP);
        _;
    }
    
    // public functions
    constructor() public
    {
        owner = msg.sender;
        trustedTP = address(0);
    }
    
    function addItem(string memory _title, uint _price) public onlyOwner
    {
        Item memory temp = Item (_title, _price, 'A', address(0));
        allItems.push(temp);
		
    }
    
    function listItems() public view returns (Item[] memory)
    {
        return allItems;
    }
    
    function addTTP(address _ttp) public onlyOwner notTTP
    {
        trustedTP = _ttp;
    }
    function addKhata() public payable 
    {
        khatay[msg.sender]+=msg.value;
        khataBuyers[msg.sender]=true;
    }

    function refund() public registered
    {
        msg.sender.transfer(khatay[msg.sender]);
        khatay[msg.sender]=0;
    }
    function buyKhataItem(string memory _title) public registered
    {
      bool itemFound=false;
      for (uint i = 0; i < allItems.length; i++)
        {
            if (keccak256(bytes(allItems[i].title)) == keccak256(bytes(_title)) && allItems[i].status=='A')
            {
                require (khatay[msg.sender]/1 ether >= allItems[i].price, "Not enough money in your account");
                itemFound = true;
                allItems[i].status = 'P';
                allItems[i].buyer= msg.sender;
            }
        }
        require (itemFound == true, "No such item!");

    }
    function buyItem(string memory _title) public payable
    {
        bool itemFound = false;
        for (uint i = 0; i < allItems.length; i++)
        {
            if (keccak256(bytes(allItems[i].title)) == keccak256(bytes(_title)) && allItems[i].status=='A')
            {
                require (msg.value/1 ether >= allItems[i].price, "Pay more!");
                itemFound = true;
                allItems[i].status = 'P';
                allItems[i].buyer= msg.sender;
            }
        }
        require (itemFound == true, "No such item!");
    }
    function confirmKhataPurchase(string memory _title, bool _isOk) public registered
    {
        if (_isOk)
        {
            for (uint i = 0; i < allItems.length; i++)
            {
                if (keccak256(bytes(allItems[i].title)) == keccak256(bytes(_title)) && (allItems[i].buyer == msg.sender))
                {
                    allItems[i].status = 'C';
                    receiveKhataPayment(allItems[i].title);
                }
            }
        }
        else
        {
            for (uint i = 0; i < allItems.length; i++)
            {
                if (keccak256(bytes(allItems[i].title)) == keccak256(bytes(_title)) && (allItems[i].buyer == msg.sender))
                {
                    allItems[i].status = 'D';
                }
            }
        }
    }
    function confirmPurchase(string memory _title, bool _isOk) public 
    {
        if (_isOk)
        {
            for (uint i = 0; i < allItems.length; i++)
            {
                if (keccak256(bytes(allItems[i].title)) == keccak256(bytes(_title)) && (allItems[i].buyer == msg.sender))
                {
                    allItems[i].status = 'C';
                    receivePayment(allItems[i].title);
                }
            }
        }
        else
        {
            for (uint i = 0; i < allItems.length; i++)
            {
                if (keccak256(bytes(allItems[i].title)) == keccak256(bytes(_title)) && (allItems[i].buyer == msg.sender))
                {
                    allItems[i].status = 'D';
                }
            }
        }
    }
    function handleKhataDispute(string memory _title, byte _status) public onlyTTP
    {
        for (uint i = 0; i < allItems.length; i++)
        {
            if (keccak256(bytes(allItems[i].title)) == keccak256(bytes(_title)))
            {
                if (allItems[i].status == 'D' || allItems[i].status == 'P')
				{
					allItems[i].status = _status;
					receiveKhataPayment(allItems[i].title);
				}
            }
        }
    }
    
    function receiveKhataPayment(string memory _title) private
    {
        for (uint i = 0; i < allItems.length; i++)
        {
            if (keccak256(bytes(allItems[i].title)) == keccak256(bytes(_title)))
            {
                if (allItems[i].status == 'C')
                {
                    owner.transfer(allItems[i].price);
                    khatay[allItems[i].buyer]-=allItems[i].price;
                }
                allItems[i].status = 'X';
            }
        }
    }

    function handleDispute(string memory _title, byte _status) public onlyTTP
    {
        for (uint i = 0; i < allItems.length; i++)
        {
            if (keccak256(bytes(allItems[i].title)) == keccak256(bytes(_title)))
            {
                if(allItems[i].status == 'D' || allItems[i].status == 'P')
				{
					allItems[i].status = _status;
					receivePayment(allItems[i].title);
				}
            }
        }
    }
    
    function receivePayment(string memory _title) private
    {
        for (uint i = 0; i < allItems.length; i++)
        {
            if (keccak256(bytes(allItems[i].title)) == keccak256(bytes(_title)))
            {
                if (allItems[i].status == 'C')
                {
                    owner.transfer(allItems[i].price);
                }
                else if (allItems[i].status == 'R')
                {
                    allItems[i].buyer.transfer(allItems[i].price);
                }
                
                allItems[i].status = 'X';
            }
        }
    }
    
}