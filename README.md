# EscrowAsaanKhata
EscrowAsanKhata is a contract deployed on Ethereum Blockchain that can be used by any shopkeeper or seller. The purpose of our project is to specifically facilitate those customers who don’t pay on the spot when they buy something and they prefer to pay at the end of the month or at the start of the month. To keep the record of all the purchases the customer has made, shopkeepers usually maintain a ledger in which they write all the details of every purchase made during the whole month. This ledger is called “Khata” in local language. Shopkeepers usually write all the details of purchases, manually on a register. This record can be changed or tempered by the shopkeeper and he/she can add the purchases that customer hasn’t even made.
Customer can’t remember every purchase he/she has made through out the month and even if he maintains his own ledger, there might be discrepancies between the ledger maintained by customer and the ledger maintained by the shopkeeper. History of the purchases are written manually and can be changed or tempered by anyone. This is not at all a transparent method and leads to conflicts between both the parties.
To bring transparency to the whole processes, we deployed a contract on Ethereum in which any customer can open his account (Khata) by paying any amount in advance. Customer can buy anything by calling a function as long as he has enough balance in his account. He won’t have to send money to the contract each time he buys something. Furthermore, if his account has run out of balance, he won’t have to first add the balance to his account and then call another function to buy something. He will also have the facility to buy something by directly sending ethers to the contract like any other normal customer.
In case of a conflict regarding a purchase item, a trusted third party will resolve the issue and will decide either a delivered item should be paid for or it should be returned. Because all the purchases would be made using blockchain, there is no chance of tempering. Neither shopkeeper nor the customer can add a fake payment or deduct balance illegally.
Functionality of the contract is explained below.

− Customer can open his account and add any amount of money in his account by calling a function named addKhata(). If he wants to add more money to his account, he can do so by calling the same function.
− Customer can withdraw money from his account and only the same customer can withdraw money from the account by calling refund() function.
− Customer can see the List of all items available to buy.
− Customer can buy an available item if he has enough money in his account. In case of not enough money in the account, he can also send ethers when calling the function.
− When item is delivered to the customer, he will have to confirm if the item is OK or not, if item is Ok, the price of the item will be automatically deducted from his account and will be transferred to the owner, otherwise third party will have to intervene to resolve the conflict.
− If the item is delivered but the customer dose not confirm, third party will intervene and deduct the price from his account and transfer the money to the owner after a certain time.
− Third party will decide if the item is faulty or not, and will take decision accordingly.
− All these functionalities can be used by a normal customer who doesn’t have an account or doesn’t have enough money in the account by paying on the spot (when calling the function)
− There are two categories of functions. One category is for the account holders and the other category is for customers who don’t have an account and don’t have enough money in the account.
− Only account holders can call those functions that handle account holders.
− Owner can add items, see the list of items and can add trusted third party. Third party and items can only be added by the owner.
How to run the app:
1 Open Ganache workspace and make sure it's connected with your metamask account.
2 Once Ganache is running, open the project folder and deploy “EscrowAsanKhata.sol” using truffle
3. Once “EscrowAsanKhata.sol” is deployed, open a new terminal in the same project folder and start the react app using node package manager, by using the following command: “npm run start”
4. When the EscrowAsanKhata homepage is visible on your web browser, you’ll be presented with different functionality, which you can choose as per your wish.
