(async () => {
    const artifactsPath = "browser/contracts/artifacts/Storage.json"

    const metadata = JSON.parse(await remix.call('fileManager', 'getFile', artifactsPath))
        
    const signer = (new ethers.providers.Web3Provider(web3Provider)).getSigner(0)

    const contract = new ethers.Contract("0x7EF2e0048f5bAeDe046f6BF797943daF4ED8CB47", metadata.abi, signer)

    const tx = await contract.store(10)
    
    await tx.wait()
    
    const value = await contract.retrieve()
    
    console.log(value.toString())
 })()