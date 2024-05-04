import { createWalletClient, http, parseUnits } from "viem";
import { privateKeyToAccount } from "viem/accounts";
import { base } from "viem/chains";
import { clubABI } from "./clubAbi";
import * as readlineSync from 'readline-sync';


const YOURPK = `0x${process.env.YOURPK}` as `0x{string}`
const YOURRPC = process.env.RPC
const YOURADDY = process.env.YOURADDY as `0x{string}`

const account = privateKeyToAccount(YOURPK);

const client = createWalletClient({
    account,
    chain: base,
    transport: http(YOURRPC),
});


async function buyShare(subject: string, maxTokens: bigint, keysOut: number) {
    try {
        const tx = await client.writeContract({
            address: '0x201e95f275F39a5890C976Dc8A3E1b4Af114E635',
            abi: clubABI,
            functionName: 'buyToken',
            args: [subject, maxTokens, keysOut, YOURADDY],
        })
        console.log("Transaction successful:", tx);

    } catch (error) {
        console.log("Tx failed: ", error)

    }

}

function main() {
    let maxFriend = (readlineSync.question('Enter the maximum number of friend tokens to be used: '));
    let maxTokens = parseUnits(maxFriend, 18)
    console.log(maxTokens)
    let expectedKeys = parseInt(readlineSync.question('Enter the expected number of keys: '));

    while (true) {
        let subject = readlineSync.question('Enter subject id (CTRL-C to exit): ');
        buyShare(subject, maxTokens, expectedKeys).then(() => {
            console.log('Buy share completed for subject:', subject);
        });
    }
}

main();