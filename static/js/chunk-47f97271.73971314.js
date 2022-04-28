/*!
 *  build: vue-admin-beautiful 
 *  vue-admin-beautiful author: chuzhixin 1204505056@qq.com 
 *  vue-admin-beautiful QQ Group(QQ群): 972435319、1139183756 
 *  time: 2022-4-28 09:59:36
 */
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-47f97271"],{"1d5e":function(b,e,f){"use strict";f.r(e);var a=f("1da1"),d=(f("96cf"),f("f2bf")),c=f("e9df"),t={class:"ant-card-body"},l=Object(d["n"])('<form><div class="field"><div class="control"><p class="help is-info">Fee: 0.1 BNB</p><p class="help is-info">(Note please add BNB liquidity)*****</p></div></div><div class="field"><label for="tokenName" class="label"> Name <sup class="has-text-danger">*</sup></label><div class="control"><input type="text" class="input" id="tokenName" name="tokenName" placeholder="Ex: Ethereum" maxlength="255"></div></div><div class="field"><label for="tokenSymbol" class="label"> Symbol <sup class="has-text-danger">*</sup></label><div class="control"><input type="text" class="input" id="tokenSymbol" name="tokenSymbol" placeholder="Ex: ETH" maxlength="255"></div></div><div class="field"><label for="totalSupply" class="label"> Total supply <sup class="has-text-danger">*</sup></label><div class="control"><input type="text" class="input" id="totalSupply" name="totalSupply" placeholder="Ex: 100000000000" value="100000000000"></div></div><div class="field"><div class="control"><label for="router" class="label">Router</label><select name="router" id="router" class="input"><option value="" disabled="">---Select Router Exchange---</option><option value="0x10ED43C718714eb63d5aA57B78B54704E256024E"> Pancakeswap </option><option value="0xcF0feBd3f17CEf5b47b0cD257aCf6025c5BFf3b7"> ApeSwap </option></select></div></div><div class="columns"><div class="column"><div class="field"><label for="rewardToken" class="label"> Reward token <sup class="has-text-danger">*</sup></label><div class="control"><input type="text" class="input" id="rewardToken" name="rewardToken" placeholder="Ex: 0x...." maxlength="255" value="0xba2ae424d960c26247dd6c32edc70b295c744c43"><p class="has-text-info mt-1 is-size-7" style="word-break:break-word;"> If you want to reward DOGE, please enter 0xba2ae424d960c26247dd6c32edc70b295c744c43.Please do not enter WBNB token </p></div></div></div><div class="column"><div class="field"><label for="liquidityFee" class="label">Liquidity Fee (%)</label><div class="control"><input class="input" type="number" id="liquidityFee" name="liquidityFee" min="0" max="25" step="0.01" placeholder="0 - 25" value="3"></div></div></div></div><div class="columns"><div class="column"><div class="field"><label for="buybackFee" class="label">Buyback Fee (%)</label><div class="control"><input class="input" type="number" id="buybackFee" name="buybackFee" min="0" max="25" step="0.01" placeholder="0 - 25" value="3"></div></div></div><div class="column"><div class="field"><label for="reflectionFee" class="label">Reflection Fee (%)</label><div class="control"><input class="input" type="number" id="reflectionFee" name="reflectionFee" min="0" max="25" step="0.01" placeholder="0 - 25" value="8"></div></div></div></div><div class="field"><label for="marketingFee" class="label"> Marketing fee (%) <sup class="has-text-danger">*</sup></label><div class="control"><input class="input" type="number" id="marketingFee" name="marketingFee" min="0" max="25" step="0.01" placeholder="0 - 25" value="2"></div></div></form><p> After creation, please check your address in BSC browser and check your token(*) </p>',2),s={class:"has-text-centered mt-6 mb-4"},n=Object(d["m"])("span",null,"Create token",-1),i=[n],r=Object(d["m"])("br",null,null,-1),o={setup:function(b){var e=Object(d["t"])("web3j"),f=Object(d["N"])(""),n=Object(d["r"])().appContext.config.globalProperties;function o(){return u.apply(this,arguments)}function u(){return u=Object(a["a"])(regeneratorRuntime.mark((function b(){var a,d,t,l,s,i,r,o,u,v,m,y,k,x,h,g,w;return regeneratorRuntime.wrap((function(b){while(1)switch(b.prev=b.next){case 0:if(a="0x6080604052604051620041bf380380620041bf83398101604081905262000026916200074f565b600080546001600160a01b0319163390811782558152600160208181526040909220805460ff1916909117905588516200006791600291908b0190620005d0565b5086516200007d9060039060208a0190620005d0565b506004868155600580546001600160a01b038089166001600160a01b0319928316179092556006805492881692909116821790556040805163c45a015560e01b81529051919263c45a0155928282019260209290829003018186803b158015620000e657600080fd5b505afa158015620000fb573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019062000121919062000732565b6001600160a01b031663c9c6539630600660009054906101000a90046001600160a01b03166001600160a01b031663ad5c46486040518163ffffffff1660e01b815260040160206040518083038186803b1580156200017f57600080fd5b505afa15801562000194573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620001ba919062000732565b6040516001600160e01b031960e085901b1681526001600160a01b03928316600482015291166024820152604401602060405180830381600087803b1580156200020357600080fd5b505af115801562000218573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906200023e919062000732565b600760006101000a8154816001600160a01b0302191690836001600160a01b03160217905550848460405162000274906200065f565b6001600160a01b03928316815291166020820152604001604051809103906000f080158015620002a8573d6000803e3d6000fd5b50601c80546001600160a01b0319166001600160a01b0392909216919091179055620002d483620004b5565b620002f460196010556064601181905560c8601255601355610708601555565b6207a120601d55601e805460ff191660011790556004546200031a90614e20906200090d565b601f553360008181526023602090815260408083208054600160ff199182168117909255600780546001600160a01b0390811687526024865284872080548416851790553080885285882080548516861790557fc85df64b997460f9ebf6929eca33c1ed2309802ac6ba41eea1e539280d5c25008054851686179055888852602287528588208054909416909417909255600880546001600160a01b031990811689179091556009805490911688179055600454928652602185528386206006548316875285528386208390555416845281842081905584845282805281842081905590519081527fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef910160405180910390a3604051309033907f56358b41df5fa59f5639228f0930994cbdde383c8a8fd74e06c04e1deebe35629062000467906006906001906200085d565b60405180910390a36040516001600160a01b0383169082156108fc029083906000818181858888f19350505050158015620004a6573d6000803e3d6000fd5b50505050505050505062000981565b80516020820151604083015160608401516080850151620004da9493929190620004dd565b50565b600a859055600b849055600c839055600d82905562000524826200051085818989620005bb602090811b6200152a17901c565b620005bb60201b6200152a1790919060201c565b600e55600f819055620005396004826200090d565b600e5410620005b45760405162461bcd60e51b815260206004820152603b60248201527f546f74616c206665652073686f756c64206e6f7420626520677265617465722060448201527f7468616e20312f34206f66206665652064656e6f6d696e61746f720000000000606482015260840160405180910390fd5b5050505050565b6000620005c98284620008e8565b9392505050565b828054620005de906200092e565b90600052602060002090601f0160209004810192826200060257600085556200064d565b82601f106200061d57805160ff19168380011785556200064d565b828001600101855582156200064d579182015b828111156200064d57825182559160200191906001019062000630565b506200065b9291506200066d565b5090565b6112368062002f8983390190565b5b808211156200065b57600081556001016200066e565b80516001600160a01b03811681146200069c57600080fd5b919050565b600082601f830112620006b2578081fd5b81516001600160401b03811115620006ce57620006ce6200096b565b6020620006e4601f8301601f19168201620008b5565b8281528582848701011115620006f8578384fd5b835b8381101562000717578581018301518282018401528201620006fa565b838111156200072857848385840101525b5095945050505050565b60006020828403121562000744578081fd5b620005c98262000684565b600080600080600080600080610180898b0312156200076c578384fd5b88516001600160401b038082111562000783578586fd5b620007918c838d01620006a1565b995060209150818b015181811115620007a8578687fd5b620007b68d828e01620006a1565b9950505060408a01519650620007cf60608b0162000684565b9550620007df60808b0162000684565b94508a60bf8b0112620007f0578384fd5b620007fa6200088a565b8060a08c016101408d018e81111562000811578788fd5b875b6005811015620008325782518552938501939185019160010162000813565b50829750620008418162000684565b9650505050505061016089015190509295985092959890939650565b60408101600884106200088057634e487b7160e01b600052602160045260246000fd5b9281526020015290565b60405160a081016001600160401b0381118282101715620008af57620008af6200096b565b60405290565b604051601f8201601f191681016001600160401b0381118282101715620008e057620008e06200096b565b604052919050565b600082198211156200090857634e487b7160e01b81526011600452602481fd5b500190565b6000826200092957634e487b7160e01b81526012600452602481fd5b500490565b600181811c908216806200094357607f821691505b602082108114156200096557634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052604160045260246000fd5b6125f880620009916000396000f3fe6080604052600436106103c75760003560e01c806370a08231116101f2578063d51ed1c81161010d578063f1f3bca3116100a0578063f7c618c11161006f578063f7c618c114610b07578063f887ea4014610b27578063fe9fbb8014610b47578063ffa1ad7414610b6757600080fd5b8063f1f3bca314610a87578063f2fde38b14610aa7578063f5cfec0a14610ac7578063f708a64f14610ae757600080fd5b8063e96fada2116100dc578063e96fada214610a01578063ecbf666f14610a21578063eff0dc2214610a37578063f0b37c0414610a6757600080fd5b8063d51ed1c814610966578063d806d12f14610986578063dd62ed3e1461099b578063df20fd49146109e157600080fd5b8063a4b45c0011610185578063b6a5d7de11610154578063b6a5d7de146108f0578063b91854f414610910578063bfe1092814610926578063ca33e64c1461094657600080fd5b8063a4b45c0014610863578063a8aa1b3114610883578063a9059cbb146108bb578063b210b06d146108db57600080fd5b806392258ec8116101c157806392258ec81461080257806395d89b411461081857806398118cb41461082d5780639d1944f51461084357600080fd5b806370a082311461078b57806383ad7994146107c05780638ab6ffc7146107d6578063921250d1146107ec57600080fd5b80632d48e896116102e2578063571ac8b011610275578063658d4b7f11610244578063658d4b7f146107255780636b67c4df146107455780636ddd17131461075b5780636e78eb491461077557600080fd5b8063571ac8b0146106c3578063591cf08d146106e35780635a53c1fb146106f957806360e719621461070f57600080fd5b80633bb8a8d4116102b15780633bb8a8d4146106335780633f4218e01461064d5780634355855a1461067d5780634896a632146106ad57600080fd5b80632d48e896146105b25780632f54bf6e146105d2578063313ce567146106015780633b2d081c1461061d57600080fd5b8063180b0d7e1161035a578063201e799111610329578063201e79911461053d5780632375ce401461055d57806323b872dd1461057d5780632b112e491461059d57600080fd5b8063180b0d7e146104e657806318160ddd146104fc57806319be947b146105115780631df4ccfc1461052757600080fd5b8063095ea7b311610396578063095ea7b3146104605780631023d5d4146104905780631161ae39146104a657806317d43583146104c657600080fd5b80630445b667146103d3578063048c7baf146103fc57806304a66b481461041e57806306fdde031461043e57600080fd5b366103ce57005b600080fd5b3480156103df57600080fd5b506103e9601f5481565b6040519081526020015b60405180910390f35b34801561040857600080fd5b5061041c61041736600461227a565b610b7c565b005b34801561042a57600080fd5b5061041c610439366004612365565b610bd3565b34801561044a57600080fd5b50610453610c0c565b6040516103f39190612417565b34801561046c57600080fd5b5061048061047b36600461221a565b610c9e565b60405190151581526020016103f3565b34801561049c57600080fd5b506103e960155481565b3480156104b257600080fd5b506104806104c13660046122ec565b610d0a565b3480156104d257600080fd5b5061041c6104e13660046121e6565b610d1e565b3480156104f257600080fd5b506103e9600f5481565b34801561050857600080fd5b506004546103e9565b34801561051d57600080fd5b506103e960145481565b34801561053357600080fd5b506103e9600e5481565b34801561054957600080fd5b5061041c6105583660046122ec565b610d6e565b34801561056957600080fd5b5061041c61057836600461230d565b610d9e565b34801561058957600080fd5b506104806105983660046121a6565b610df3565b3480156105a957600080fd5b506103e9610eb7565b3480156105be57600080fd5b5061041c6105cd3660046122ec565b610f27565b3480156105de57600080fd5b506104806105ed366004612136565b6000546001600160a01b0391821691161490565b34801561060d57600080fd5b50604051600981526020016103f3565b34801561062957600080fd5b506103e9600b5481565b34801561063f57600080fd5b506016546104809060ff1681565b34801561065957600080fd5b50610480610668366004612136565b60236020526000908152604090205460ff1681565b34801561068957600080fd5b50610480610698366004612136565b60246020526000908152604090205460ff1681565b3480156106b957600080fd5b506103e960195481565b3480156106cf57600080fd5b506104806106de366004612136565b610fb6565b3480156106ef57600080fd5b506103e960175481565b34801561070557600080fd5b506103e9601a5481565b34801561071b57600080fd5b506103e9601d5481565b34801561073157600080fd5b5061041c6107403660046121e6565b610fca565b34801561075157600080fd5b506103e9600d5481565b34801561076757600080fd5b50601e546104809060ff1681565b34801561078157600080fd5b506103e960185481565b34801561079757600080fd5b506103e96107a6366004612136565b6001600160a01b0316600090815260208052604090205490565b3480156107cc57600080fd5b506103e9600c5481565b3480156107e257600080fd5b506103e960115481565b3480156107f857600080fd5b506103e960125481565b34801561080e57600080fd5b506103e960105481565b34801561082457600080fd5b5061045361101a565b34801561083957600080fd5b506103e9600a5481565b34801561084f57600080fd5b5061041c61085e3660046122b2565b611029565b34801561086f57600080fd5b5061041c61087e36600461216e565b6110a5565b34801561088f57600080fd5b506007546108a3906001600160a01b031681565b6040516001600160a01b0390911681526020016103f3565b3480156108c757600080fd5b506104806108d636600461221a565b6110f8565b3480156108e757600080fd5b5061041c611105565b3480156108fc57600080fd5b5061041c61090b366004612136565b611131565b34801561091c57600080fd5b506103e9601b5481565b34801561093257600080fd5b50601c546108a3906001600160a01b031681565b34801561095257600080fd5b506008546108a3906001600160a01b031681565b34801561097257600080fd5b506103e96109813660046122b2565b611182565b34801561099257600080fd5b506103e96111c5565b3480156109a757600080fd5b506103e96109b636600461216e565b6001600160a01b03918216600090815260216020908152604080832093909416825291909152205490565b3480156109ed57600080fd5b5061041c6109fc36600461225f565b61125e565b348015610a0d57600080fd5b506009546108a3906001600160a01b031681565b348015610a2d57600080fd5b506103e960135481565b348015610a4357600080fd5b50610480610a52366004612136565b60226020526000908152604090205460ff1681565b348015610a7357600080fd5b5061041c610a82366004612136565b61129a565b348015610a9357600080fd5b506103e9610aa2366004612245565b6112e5565b348015610ab357600080fd5b5061041c610ac2366004612136565b6112fd565b348015610ad357600080fd5b5061041c610ae23660046122ca565b611393565b348015610af357600080fd5b5061041c610b023660046121e6565b611409565b348015610b1357600080fd5b506005546108a3906001600160a01b031681565b348015610b3357600080fd5b506006546108a3906001600160a01b031681565b348015610b5357600080fd5b50610480610b62366004612136565b61150c565b348015610b7357600080fd5b506103e9600181565b610b853361150c565b610baa5760405162461bcd60e51b8152600401610ba19061248a565b60405180910390fd5b6016805460ff1916941515949094179093556017919091556000601855601955601a5543601b55565b610bdc3361150c565b610bf85760405162461bcd60e51b8152600401610ba19061248a565b610c058585858585611536565b5050505050565b606060028054610c1b90612559565b80601f0160208091040260200160405190810160405280929190818152602001828054610c4790612559565b8015610c945780601f10610c6957610100808354040283529160200191610c94565b820191906000526020600020905b815481529060010190602001808311610c7757829003601f168201915b5050505050905090565b3360008181526021602090815260408083206001600160a01b038716808552925280832085905551919290917f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92590610cf99086815260200190565b60405180910390a350600192915050565b600082610d1683611182565b119392505050565b610d273361150c565b610d435760405162461bcd60e51b8152600401610ba19061248a565b6001600160a01b03919091166000908152602260205260409020805460ff1916911515919091179055565b610d773361150c565b610d935760405162461bcd60e51b8152600401610ba19061248a565b601091909155601155565b610da73361150c565b610dc35760405162461bcd60e51b8152600401610ba19061248a565b6002610dcf8385612503565b11158015610ddc57508183115b610de557600080fd5b601292909255601355601555565b6004546001600160a01b0384166000908152602160209081526040808320338452909152812054909114610ea2576040805180820182526016815275496e73756666696369656e7420416c6c6f77616e636560501b6020808301919091526001600160a01b0387166000908152602182528381203382529091529190912054610e7d9184906115e9565b6001600160a01b03851660009081526021602090815260408083203384529091529020555b610ead848484611615565b90505b9392505050565b602080527f29ab76e7ca72530a8284597fb76b039d796325740b21528d71ade454c6f2dbe95461dead60009081527fcbaad361c71be11fa6bdbe0e740c6259be964b32182da2da47b54472477c6a17546004549192610f22929091610f1c91906118ff565b906118ff565b905090565b610f303361150c565b610f4c5760405162461bcd60e51b8152600401610ba19061248a565b601c546040516316a4744b60e11b815260048101849052602481018390526001600160a01b0390911690632d48e896906044015b600060405180830381600087803b158015610f9a57600080fd5b505af1158015610fae573d6000803e3d6000fd5b505050505050565b6000610fc482600454610c9e565b92915050565b610fd33361150c565b610fef5760405162461bcd60e51b8152600401610ba19061248a565b6001600160a01b03919091166000908152602360205260409020805460ff1916911515919091179055565b606060038054610c1b90612559565b6110323361150c565b61104e5760405162461bcd60e51b8152600401610ba19061248a565b620b71b081106110a05760405162461bcd60e51b815260206004820152601d60248201527f476173206d757374206265206c6f776572207468616e203735303030300000006044820152606401610ba1565b601d55565b6110ae3361150c565b6110ca5760405162461bcd60e51b8152600401610ba19061248a565b600880546001600160a01b039384166001600160a01b03199182161790915560098054929093169116179055565b6000610eb0338484611615565b61110e3361150c565b61112a5760405162461bcd60e51b8152600401610ba19061248a565b6000601455565b6000546001600160a01b0316331461115b5760405162461bcd60e51b8152600401610ba19061246a565b6001600160a01b03166000908152600160208190526040909120805460ff19169091179055565b6000610fc461118f610eb7565b6007546001600160a01b031660009081526020805260409020546111bf906111b890600261190b565b859061190b565b90611917565b6000426111df60155460145461152a90919063ffffffff16565b111561125757600061120242610f1c60155460145461152a90919063ffffffff16565b90506000611229600e54610f1c6013546111bf601254600e5461190b90919063ffffffff16565b90506112506112476015546111bf858561190b90919063ffffffff16565b600e549061152a565b9250505090565b50600e5490565b6112673361150c565b6112835760405162461bcd60e51b8152600401610ba19061248a565b601e805460ff191692151592909217909155601f55565b6000546001600160a01b031633146112c45760405162461bcd60e51b8152600401610ba19061246a565b6001600160a01b03166000908152600160205260409020805460ff19169055565b600081156112f557610fc46111c5565b5050600e5490565b6000546001600160a01b031633146113275760405162461bcd60e51b8152600401610ba19061246a565b600080546001600160a01b0319166001600160a01b038316908117825580825260016020818152604093849020805460ff191690921790915591519081527f04dba622d284ed0014ee4b9a6a68386be1a4c08a4913ae272de89199cc686163910160405180910390a150565b61139c3361150c565b6113b85760405162461bcd60e51b8152600401610ba19061248a565b6113c48261dead611923565b801561140557426014556015546040519081527f39d2389ec5c1fa77b2c0d374bc61b6d7bd97ccba280fcdeb4e9c7644898d7c3a9060200160405180910390a15b5050565b6114123361150c565b61142e5760405162461bcd60e51b8152600401610ba19061248a565b6001600160a01b038216301480159061145557506007546001600160a01b03838116911614155b61145e57600080fd5b6001600160a01b0382166000908152602460205260409020805460ff191682158015919091179091556114c457601c54604051630a5b654b60e11b81526001600160a01b03848116600483015260006024830152909116906314b6ca9690604401610f80565b601c546001600160a01b03838116600081815260208052604090819020549051630a5b654b60e11b8152600481019290925260248201529116906314b6ca9690604401610f80565b6001600160a01b031660009081526001602052604090205460ff1690565b6000610eb082846124eb565b600a859055600b849055600c839055600d8290556115608261155a8581898961152a565b9061152a565b600e55600f819055611573600482612503565b600e5410610c055760405162461bcd60e51b815260206004820152603b60248201527f546f74616c206665652073686f756c64206e6f7420626520677265617465722060448201527f7468616e20312f34206f66206665652064656e6f6d696e61746f7200000000006064820152608401610ba1565b6000818484111561160d5760405162461bcd60e51b8152600401610ba19190612417565b505050900390565b60255460009060ff16156116355761162e848484611ab7565b9050610eb0565b61163d611b92565b1561164a5761164a611be0565b611652611fd8565b1561165f5761165f612033565b6040805180820182526014815273496e73756666696369656e742042616c616e636560601b6020808301919091526001600160a01b038716600090815290805291909120546116af9184906115e9565b6001600160a01b03851660009081526020808052604080832093909355602390529081205460ff16156116e257826116ed565b6116ed85858561206f565b6001600160a01b0385166000908152602080526040902054909150611712908261152a565b6001600160a01b038086166000908152602080805260408083209490945591881681526024909152205460ff166117b357601c546001600160a01b03868116600081815260208052604090819020549051630a5b654b60e11b8152600481019290925260248201529116906314b6ca9690604401600060405180830381600087803b1580156117a057600080fd5b505af19250505080156117b1575060015b505b6001600160a01b03841660009081526024602052604090205460ff1661184357601c546001600160a01b03858116600081815260208052604090819020549051630a5b654b60e11b8152600481019290925260248201529116906314b6ca9690604401600060405180830381600087803b15801561183057600080fd5b505af1925050508015611841575060015b505b601c54601d546040516001624d3b8760e01b031981526001600160a01b039092169163ffb2c4799161187b9160040190815260200190565b600060405180830381600087803b15801561189557600080fd5b505af19250505080156118a6575060015b50836001600160a01b0316856001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef836040516118ec91815260200190565b60405180910390a3506001949350505050565b6000610eb08284612542565b6000610eb08284612523565b6000610eb08284612503565b6025805460ff191660011790556040805160028082526060820183526000926020830190803683375050600654604080516315ab88c960e31b815290519394506001600160a01b039091169263ad5c464892506004808301926020929190829003018186803b15801561199557600080fd5b505afa1580156119a9573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906119cd9190612152565b816000815181106119ee57634e487b7160e01b600052603260045260246000fd5b60200260200101906001600160a01b031690816001600160a01b0316815250503081600181518110611a3057634e487b7160e01b600052603260045260246000fd5b6001600160a01b03928316602091820292909201015260065460405163b6f9de9560e01b815291169063b6f9de95908590611a76906000908690889042906004016123e2565b6000604051808303818588803b158015611a8f57600080fd5b505af1158015611aa3573d6000803e3d6000fd5b50506025805460ff19169055505050505050565b6040805180820182526014815273496e73756666696369656e742042616c616e636560601b6020808301919091526001600160a01b038616600090815290805291822054611b069184906115e9565b6001600160a01b0380861660009081526020805260408082209390935590851681522054611b34908361152a565b6001600160a01b038481166000818152602080805260409182902094909455518581529092918716917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef910160405180910390a35060019392505050565b6007546000906001600160a01b03163314801590611bb3575060255460ff16155b8015611bc15750601e5460ff165b8015610f22575050601f54306000908152602080526040902054101590565b6025805460ff19166001179055601054601154600091611bff91610d0a565b611c0b57600a54611c0e565b60005b90506000611c3260026111bf600e546111bf86601f5461190b90919063ffffffff16565b90506000611c4b82601f546118ff90919063ffffffff16565b60408051600280825260608201835292935060009290916020830190803683370190505090503081600081518110611c9357634e487b7160e01b600052603260045260246000fd5b6001600160a01b03928316602091820292909201810191909152600654604080516315ab88c960e31b81529051919093169263ad5c4648926004808301939192829003018186803b158015611ce757600080fd5b505afa158015611cfb573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611d1f9190612152565b81600181518110611d4057634e487b7160e01b600052603260045260246000fd5b6001600160a01b03928316602091820292909201015260065460405163791ac94760e01b81524792919091169063791ac94790611d8a9086906000908790309042906004016124af565b600060405180830381600087803b158015611da457600080fd5b505af1158015611db8573d6000803e3d6000fd5b505050506000611dd182476118ff90919063ffffffff16565b90506000611dec611de3886002611917565b600e54906118ff565b90506000611e0160026111bf8481878d61190b565b90506000611e1e836111bf600c548761190b90919063ffffffff16565b90506000611e3b846111bf600d548861190b90919063ffffffff16565b9050601c60009054906101000a90046001600160a01b03166001600160a01b031663d0e30db0836040518263ffffffff1660e01b81526004016000604051808303818588803b158015611e8d57600080fd5b505af193505050508015611e9f575060015b506009546040516001600160a01b039091169082156108fc029083906000818181858888f19350505050158015611eda573d6000803e3d6000fd5b508815611fc25760065460085460405163f305d71960e01b8152306004820152602481018c905260006044820181905260648201526001600160a01b0391821660848201524260a482015291169063f305d71990859060c4016060604051808303818588803b158015611f4c57600080fd5b505af1158015611f60573d6000803e3d6000fd5b50505050506040513d601f19601f82011682018060405250810190611f859190612338565b505060408051858152602081018c90527f424db2872186fa7e7afa7a5e902ed3b49a2ef19c2f5431e672462495dd6b450692500160405180910390a15b50506025805460ff191690555050505050505050565b6007546000906001600160a01b03163314801590611ff9575060255460ff16155b8015612007575060165460ff165b8015612022575043601a54601b5461201f91906124eb565b11155b8015610f2257505060195447101590565b61204160195461dead611923565b43601b556019546018546120549161152a565b6018819055601754101561206d576016805460ff191690555b565b600f5460075460009182916120a191906111bf9061209a906001600160a01b038981169116146112e5565b869061190b565b3060009081526020805260409020549091506120bd908261152a565b3060008181526020808052604091829020939093555183815290916001600160a01b038816917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef910160405180910390a361211883826118ff565b95945050505050565b8035801515811461213157600080fd5b919050565b600060208284031215612147578081fd5b8135610eb0816125aa565b600060208284031215612163578081fd5b8151610eb0816125aa565b60008060408385031215612180578081fd5b823561218b816125aa565b9150602083013561219b816125aa565b809150509250929050565b6000806000606084860312156121ba578081fd5b83356121c5816125aa565b925060208401356121d5816125aa565b929592945050506040919091013590565b600080604083850312156121f8578182fd5b8235612203816125aa565b915061221160208401612121565b90509250929050565b6000806040838503121561222c578182fd5b8235612237816125aa565b946020939093013593505050565b600060208284031215612256578081fd5b610eb082612121565b60008060408385031215612271578182fd5b61223783612121565b6000806000806080858703121561228f578081fd5b61229885612121565b966020860135965060408601359560600135945092505050565b6000602082840312156122c3578081fd5b5035919050565b600080604083850312156122dc578182fd5b8235915061221160208401612121565b600080604083850312156122fe578182fd5b50508035926020909101359150565b600080600060608486031215612321578283fd5b505081359360208301359350604090920135919050565b60008060006060848603121561234c578283fd5b8351925060208401519150604084015190509250925092565b600080600080600060a0868803121561237c578283fd5b505083359560208501359550604085013594606081013594506080013592509050565b6000815180845260208085019450808401835b838110156123d75781516001600160a01b0316875295820195908201906001016123b2565b509495945050505050565b8481526080602082015260006123fb608083018661239f565b6001600160a01b03949094166040830152506060015292915050565b6000602080835283518082850152825b8181101561244357858101830151858201604001528201612427565b818111156124545783604083870101525b50601f01601f1916929092016040019392505050565b60208082526006908201526510a7aba722a960d11b604082015260600190565b6020808252600b908201526a085055551213d49256915160aa1b604082015260600190565b85815284602082015260a0604082015260006124ce60a083018661239f565b6001600160a01b0394909416606083015250608001529392505050565b600082198211156124fe576124fe612594565b500190565b60008261251e57634e487b7160e01b81526012600452602481fd5b500490565b600081600019048311821515161561253d5761253d612594565b500290565b60008282101561255457612554612594565b500390565b600181811c9082168061256d57607f821691505b6020821081141561258e57634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052601160045260246000fd5b6001600160a01b03811681146125bf57600080fd5b5056fea264697066735822122035e729ee0545cffcb92ac71f8f53f9c01f1323ced0bf42146eaafe20fdb89ca164736f6c6343000804003360806040523480156200001157600080fd5b50604051620012363803806200123683398101604081905262000034916200013f565b60008054336001600160a01b0319918216179091556001805482166001600160a01b0385811691821790925560028054909316918416919091179091556ec097ce7bc90715b34b9f1000000000600b55610e10600c556040805163313ce56760e01b8152905163313ce56791600480820192602092909190829003018186803b158015620000c157600080fd5b505afa158015620000d6573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620000fc919062000176565b6200010990600a620001e9565b62000116906001620002aa565b600d5550620002e29050565b80516001600160a01b03811681146200013a57600080fd5b919050565b6000806040838503121562000152578182fd5b6200015d8362000122565b91506200016d6020840162000122565b90509250929050565b60006020828403121562000188578081fd5b815160ff8116811462000199578182fd5b9392505050565b600181815b80851115620001e1578160001904821115620001c557620001c5620002cc565b80851615620001d357918102915b93841c9390800290620001a5565b509250929050565b60006200019960ff8416836000826200020557506001620002a4565b816200021457506000620002a4565b81600181146200022d5760028114620002385762000258565b6001915050620002a4565b60ff8411156200024c576200024c620002cc565b50506001821b620002a4565b5060208310610133831016604e8410600b84101617156200027d575081810a620002a4565b620002898383620001a0565b8060001904821115620002a057620002a0620002cc565b0290505b92915050565b6000816000190483118215151615620002c757620002c7620002cc565b500290565b634e487b7160e01b600052601160045260246000fd5b610f4480620002f26000396000f3fe60806040526004361061011f5760003560e01c8063d0e30db0116100a0578063f0fc6bca11610064578063f0fc6bca1461032e578063f7c618c114610343578063f887ea4014610363578063ffb2c47914610383578063ffd49c84146103a357600080fd5b8063d0e30db0146102ad578063d4fda1f2146102b5578063e2d2e219146102e2578063ecd0c0c3146102f8578063efca2eed1461031857600080fd5b80634fab0ae8116100e75780634fab0ae8146101c557806366817df5146101db578063997664d714610208578063ab377daa1461021e578063ce7c2ac21461025657600080fd5b806311ce023d1461012457806314b6ca961461014d57806328fd31981461016f5780632d48e8961461018f5780633a98ef39146101af575b600080fd5b34801561013057600080fd5b5061013a600b5481565b6040519081526020015b60405180910390f35b34801561015957600080fd5b5061016d610168366004610d55565b6103b9565b005b34801561017b57600080fd5b5061013a61018a366004610d1d565b610531565b34801561019b57600080fd5b5061016d6101aa366004610dd0565b6105ba565b3480156101bb57600080fd5b5061013a60075481565b3480156101d157600080fd5b5061013a600d5481565b3480156101e757600080fd5b5061013a6101f6366004610d1d565b60056020526000908152604090205481565b34801561021457600080fd5b5061013a60085481565b34801561022a57600080fd5b5061023e610239366004610da0565b6105dc565b6040516001600160a01b039091168152602001610144565b34801561026257600080fd5b50610292610271366004610d1d565b60066020526000908152604090208054600182015460029092015490919083565b60408051938452602084019290925290820152606001610144565b61016d610606565b3480156102c157600080fd5b5061013a6102d0366004610d1d565b60046020526000908152604090205481565b3480156102ee57600080fd5b5061013a600a5481565b34801561030457600080fd5b5060005461023e906001600160a01b031681565b34801561032457600080fd5b5061013a60095481565b34801561033a57600080fd5b5061016d6108de565b34801561034f57600080fd5b5060015461023e906001600160a01b031681565b34801561036f57600080fd5b5060025461023e906001600160a01b031681565b34801561038f57600080fd5b5061016d61039e366004610da0565b6108e9565b3480156103af57600080fd5b5061013a600c5481565b6000546001600160a01b031633146103d057600080fd5b6001600160a01b038216600090815260066020526040902054156103f7576103f782610a06565b60008111801561041d57506001600160a01b038216600090815260066020526040902054155b1561048357600380546001600160a01b0384166000818152600460205260408120839055600183018455929092527fc2575a0e9e593c00f959f8c92f12db2869c3395a3b0502d05e2516446f71f85b0180546001600160a01b03191690911790556104b6565b801580156104a857506001600160a01b03821660009081526006602052604090205415155b156104b6576104b682610b31565b6001600160a01b0382166000908152600660205260409020546007546104e79183916104e191610c7e565b90610c91565b6007556001600160a01b038216600090815260066020526040902081905561050e81610c9d565b6001600160a01b0390921660009081526006602052604090206001019190915550565b6001600160a01b03811660009081526006602052604081205461055657506000919050565b6001600160a01b03821660009081526006602052604081205461057890610c9d565b6001600160a01b0384166000908152600660205260409020600101549091508082116105a8575060009392505050565b6105b28282610c7e565b949350505050565b6000546001600160a01b031633146105d157600080fd5b600c91909155600d55565b600381815481106105ec57600080fd5b6000918252602090912001546001600160a01b0316905081565b6000546001600160a01b0316331461061d57600080fd5b6001546040516370a0823160e01b81523060048201526000916001600160a01b0316906370a082319060240160206040518083038186803b15801561066157600080fd5b505afa158015610675573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106999190610db8565b60408051600280825260608201835292935060009290916020830190803683375050600254604080516315ab88c960e31b815290519394506001600160a01b039091169263ad5c464892506004808301926020929190829003018186803b15801561070357600080fd5b505afa158015610717573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061073b9190610d39565b8160008151811061075c57634e487b7160e01b600052603260045260246000fd5b6001600160a01b039283166020918202929092010152600180548351921691839190811061079a57634e487b7160e01b600052603260045260246000fd5b6001600160a01b03928316602091820292909201015260025460405163b6f9de9560e01b815291169063b6f9de959034906107e090600090869030904290600401610df1565b6000604051808303818588803b1580156107f957600080fd5b505af115801561080d573d6000803e3d6000fd5b50506001546040516370a0823160e01b81523060048201526000945061089c93508692506001600160a01b03909116906370a082319060240160206040518083038186803b15801561085e57600080fd5b505afa158015610872573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108969190610db8565b90610c7e565b6008549091506108ac9082610c91565b600855600754600b546108d6916108cd916108c79085610cc0565b90610ccc565b600a5490610c91565b600a55505050565b6108e733610a06565b565b6000546001600160a01b0316331461090057600080fd5b6003548061090c575050565b6000805a905060005b848310801561092357508381105b156109fe5783600e5410610937576000600e555b6109776003600e548154811061095d57634e487b7160e01b600052603260045260246000fd5b6000918252602090912001546001600160a01b0316610cd8565b156109bc576109bc6003600e54815481106109a257634e487b7160e01b600052603260045260246000fd5b6000918252602090912001546001600160a01b0316610a06565b6109d16109ca5a8490610c7e565b8490610c91565b92505a600e805491935060006109e683610ec8565b919050555080806109f690610ec8565b915050610915565b505050505b50565b6001600160a01b038116600090815260066020526040902054610a265750565b6000610a3182610531565b90508015610b2d57600954610a469082610c91565b60095560015460405163a9059cbb60e01b81526001600160a01b038481166004830152602482018490529091169063a9059cbb90604401602060405180830381600087803b158015610a9757600080fd5b505af1158015610aab573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610acf9190610d80565b506001600160a01b03821660009081526005602090815260408083204290556006909152902060020154610b039082610c91565b6001600160a01b038316600090815260066020526040902060028101919091555461050e90610c9d565b5050565b60038054610b4190600190610eb1565b81548110610b5f57634e487b7160e01b600052603260045260246000fd5b60009182526020808320909101546001600160a01b0384811684526004909252604090922054600380549290931692918110610bab57634e487b7160e01b600052603260045260246000fd5b600091825260208083209190910180546001600160a01b0319166001600160a01b03948516179055918316815260049182905260408120546003805491939291610bf790600190610eb1565b81548110610c1557634e487b7160e01b600052603260045260246000fd5b60009182526020808320909101546001600160a01b031683528201929092526040019020556003805480610c5957634e487b7160e01b600052603160045260246000fd5b600082815260209020810160001990810180546001600160a01b031916905501905550565b6000610c8a8284610eb1565b9392505050565b6000610c8a8284610e5a565b6000610cba600b546108c7600a5485610cc090919063ffffffff16565b92915050565b6000610c8a8284610e92565b6000610c8a8284610e72565b600c546001600160a01b03821660009081526005602052604081205490914291610d029190610e5a565b108015610cba5750600d54610d1683610531565b1192915050565b600060208284031215610d2e578081fd5b8135610c8a81610ef9565b600060208284031215610d4a578081fd5b8151610c8a81610ef9565b60008060408385031215610d67578081fd5b8235610d7281610ef9565b946020939093013593505050565b600060208284031215610d91578081fd5b81518015158114610c8a578182fd5b600060208284031215610db1578081fd5b5035919050565b600060208284031215610dc9578081fd5b5051919050565b60008060408385031215610de2578182fd5b50508035926020909101359150565b600060808201868352602060808185015281875180845260a0860191508289019350845b81811015610e3a5784516001600160a01b031683529383019391830191600101610e15565b50506001600160a01b039690961660408501525050506060015292915050565b60008219821115610e6d57610e6d610ee3565b500190565b600082610e8d57634e487b7160e01b81526012600452602481fd5b500490565b6000816000190483118215151615610eac57610eac610ee3565b500290565b600082821015610ec357610ec3610ee3565b500390565b6000600019821415610edc57610edc610ee3565b5060010190565b634e487b7160e01b600052601160045260246000fd5b6001600160a01b0381168114610a0357600080fdfea2646970667358221220ed920347aec7c9fad5e52a9669a33e6c7bbb8ebc5f39973bbfe2ac8bf61ed27764736f6c63430008040033",d=Object(c["IERC20"])().BuybackBabyTokenAbi,t=e.currentProvider.selectedAddress,l=p("tokenName"),s=p("tokenSymbol"),i=p("totalSupply"),r=p("router"),o=p("rewardToken"),o.toLowerCase()!="0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c".toLocaleLowerCase()){b.next=11;break}return n.$message.error("Please do not enter WBNB"),b.abrupt("return");case 11:return u=p("liquidityFee"),v=p("buybackFee"),m=p("reflectionFee"),y=p("marketingFee"),k=[l,s,e.utils.toWei(i,"9"),o,r,[100*parseInt(u)+"",100*parseInt(v)+"",100*parseInt(m)+"",100*parseInt(y)+"","10000"],e.utils.toHex("1445999256331946928210944736789335119173171198836"),"0x16345785d8a0000"],x=e.eth.abi.encodeFunctionCall(d[0],k).substring(10),b.next=19,e.eth.getGasPrice();case 19:return h=b.sent,b.next=22,e.eth.estimateGas({from:t,data:a+x,value:"0x16345785d8a0000"});case 22:return g=b.sent,b.next=25,e.eth.sendTransaction({gas:g,from:t,gasPrice:h,data:a+x,value:"0x16345785d8a0000"});case 25:w=b.sent,f.value=w.contractAddress,"https://bscscan.com/address/"+w.contractAddress,setTimeout((function(){}),4e3);case 29:case"end":return b.stop()}}),b)}))),u.apply(this,arguments)}function p(b){var e=document.getElementById(b);return e.value}return function(b,e){return Object(d["I"])(),Object(d["l"])("div",t,[l,Object(d["m"])("div",s,[Object(d["m"])("button",{type:"submit",class:"ant-btn ant-btn-primary",onClick:e[0]||(e[0]=function(b){return o()})},i)]),r,Object(d["m"])("div",null,"token:"+Object(d["T"])(Object(d["W"])(f)),1)])}}};f("a89e");const u=o;e["default"]=u},a89e:function(b,e,f){"use strict";f("d49a")},d49a:function(b,e,f){}}]);