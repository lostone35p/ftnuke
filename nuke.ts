import { createPublicClient, createWalletClient, http } from "viem";
import { privateKeyToAccount } from "viem/accounts";
import { base } from "viem/chains";
import { clubABI } from "./clubAbi";

interface SubjectBalance {
  subject: string;
  balance: number;
}

const YOURPK = `0x${process.env.YOURPK}` as `0x{string}`
const YOURRPC = process.env.RPC
const YOURADDY = process.env.YOURADDY as `0x{string}`

const account = privateKeyToAccount(YOURPK);
const publicClient = createPublicClient({
  chain: base,
  transport: http(YOURRPC),
});
const client = createWalletClient({
  account,
  chain: base,
  transport: http(YOURRPC),
});

async function sellShare(subject: string, balance: number, nonce: number) {
  try {

    await client.writeContract({
      address: '0x201e95f275F39a5890C976Dc8A3E1b4Af114E635',
      abi: clubABI,
      functionName: 'sellToken',
      args: [subject, 1, balance, '0x1b3552f6dc00c2a804a5e482d2c3f50ca8fcc924'],
      nonce: nonce
    })

  } catch (error) {
    console.log(error)

  }

}

async function getHoldings(address: string, jwt: string) {
  try {
    const response = await fetch(
      `https://prod-api.kosetto.com/chat-list/${address}`,
      {
        headers: {
          Authorization: `${jwt}`,
        },
      },
    );
    const body = await response.json();
    return body.holdings;
  } catch (error) {
    console.log(error);
  }
}

async function sendSell(address: string, jwt: string) {
  const portfolio = await getHoldings(address, jwt);
  const idBalance = portfolio
    .filter((item: SubjectBalance) => !item.subject.includes("0x"))
    .map((item: SubjectBalance) => ({
      subject: item.subject,
      balance: item.balance,
    }));

  let transactionCount = await publicClient.getTransactionCount({
    address: YOURADDY,
  });

  console.log(transactionCount);
  for (const item of idBalance) {
    await sellShare(item.subject, item.balance, transactionCount);
    transactionCount++;
  }
}
sendSell("Your address here", "JWT from FT here, it's stored on the browser");
