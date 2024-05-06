import { createWalletClient, http, parseUnits } from "viem";
import { privateKeyToAccount } from "viem/accounts";
import { base } from "viem/chains";
import { clubABI } from "./clubAbi";
import * as readlineSync from 'readline-sync';
const { Client } = require('discord.js-selfbot-v13');

const discordToken = "Your discord Token"
const clientDiscord = new Client();

clientDiscord.on('ready', async () => {
    console.log(`${clientDiscord.user.username} is ready!`);
})

clientDiscord.login(discordToken);


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

const maxTokens = parseUnits("550", 18)
const expectedKeys = 3

clientDiscord.on('messageCreate', message => {
    if (message.guild.id === "Guild id ") {
        // Regular expression to find the club number
        const clubNumberRegex = /Club (\d+)/;
        const clubMatch = message.content.match(clubNumberRegex);
        const clubNumber = clubMatch ? clubMatch[1] : 'Not found';

        // Regular expression to find the Twitter username
        const twitterUsernameRegex = /twitter username: (\S+)/;
        const twitterMatch = message.content.match(twitterUsernameRegex);
        const twitterUsername = twitterMatch ? twitterMatch[1] : 'Not found';

        console.log(`${clubNumber}`);
        console.log(`${twitterUsername}`);

        if (twitterUsername === "Choose Your @") {
            buyShare(clubNumber, maxTokens, expectedKeys)

        }

    }


})
