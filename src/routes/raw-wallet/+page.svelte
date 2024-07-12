<script lang="ts">
    import { PrivateKey } from '@bsv/sdk'
    
    let WIF:string
    let address:string
    
    function createKeys () {
    
        const privKey = PrivateKey.fromRandom()
        WIF = privKey.toWif()
        console.log("Private Key WIF format is ", WIF)
        address = privKey.toAddress()
        console.log("Your bitcoin address is ", address)
    }
    
    </script>
    
    <section class=" flex flex-col items-center justify-center min-h-screen gap-4">
        <button class=" bg-black text-white p-2 rounded mx-auto" on:click={createKeys}> Generate New Wallet Keys </button>
        <p>Private Key WIF format is <span class="text-green-600">{WIF}</span></p>
        <p>Your BitCoin Address is <span class="text-green-600">{address}</span></p>
    </section>
    
    