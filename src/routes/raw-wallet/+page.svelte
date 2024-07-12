<script lang="ts">
    import {PrivateKey} from '@bsv/sdk'

    let WIF:string
    let address:string

    function createKeys(){
        const privKey = PrivateKey.fromRandom()
        WIF = privKey.toWif()

        console.log("Private key WIF format is ", WIF)
        address = privKey.toAddress()
        console.log("Your bitcoin address is ", address)
    }
</script>
<section class="flex flex-col gap-5 items-center">
    <div>
        <button on:click={createKeys} class="border rounded-lg bg-black text-white p-3">
            Generate new wallet keys
        </button>
    </div>
    <div class="flex flex-col gap-5">
        <p>
            Private key WIF format is <span class=" text-green-500">{WIF}</span>
        </p>
        <p>
            Your Bitcoin Address is <span class=" text-green-500">{address}</span>
        </p>
    </div>  
</section>