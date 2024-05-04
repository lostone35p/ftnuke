
export const clubABI = [
    {
        inputs: [
            { internalType: "contract IPoints", name: "pts", type: "address" },
            { internalType: "contract IBestFriend", name: "bf", type: "address" },
        ],
        stateMutability: "nonpayable",
        type: "constructor",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "owner",
                type: "address",
            },
            {
                indexed: true,
                internalType: "address",
                name: "spender",
                type: "address",
            },
            { indexed: true, internalType: "uint256", name: "id", type: "uint256" },
            {
                indexed: false,
                internalType: "uint256",
                name: "amount",
                type: "uint256",
            },
        ],
        name: "Approval",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            { indexed: true, internalType: "uint256", name: "id", type: "uint256" },
            {
                indexed: true,
                internalType: "uint256",
                name: "pointsIn",
                type: "uint256",
            },
            {
                indexed: true,
                internalType: "uint256",
                name: "keysOut",
                type: "uint256",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "protocolFee",
                type: "uint256",
            },
        ],
        name: "Buy",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            { indexed: true, internalType: "uint256", name: "id", type: "uint256" },
            {
                indexed: true,
                internalType: "address",
                name: "creator",
                type: "address",
            },
        ],
        name: "CoinLaunched",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            { indexed: true, internalType: "address", name: "user", type: "address" },
            {
                indexed: true,
                internalType: "address",
                name: "newOwner",
                type: "address",
            },
        ],
        name: "OwnershipTransferred",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            { indexed: true, internalType: "uint256", name: "id", type: "uint256" },
            {
                indexed: true,
                internalType: "uint256",
                name: "pointsOut",
                type: "uint256",
            },
            {
                indexed: true,
                internalType: "uint256",
                name: "keysIn",
                type: "uint256",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "protocolFee",
                type: "uint256",
            },
        ],
        name: "Sell",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "address",
                name: "caller",
                type: "address",
            },
            { indexed: true, internalType: "address", name: "from", type: "address" },
            { indexed: true, internalType: "address", name: "to", type: "address" },
            { indexed: true, internalType: "uint256", name: "id", type: "uint256" },
            {
                indexed: false,
                internalType: "uint256",
                name: "amount",
                type: "uint256",
            },
        ],
        name: "Transfer",
        type: "event",
    },
    {
        inputs: [
            { internalType: "address", name: "user", type: "address" },
            { internalType: "address", name: "spender", type: "address" },
            { internalType: "uint256", name: "tokenId", type: "uint256" },
        ],
        name: "allowance",
        outputs: [{ internalType: "uint256", name: "amount", type: "uint256" }],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            { internalType: "address", name: "spender", type: "address" },
            { internalType: "uint256", name: "id", type: "uint256" },
            { internalType: "uint256", name: "amount", type: "uint256" },
        ],
        name: "approve",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            { internalType: "address", name: "user", type: "address" },
            { internalType: "uint256", name: "tokenId", type: "uint256" },
        ],
        name: "balanceOf",
        outputs: [{ internalType: "uint256", name: "balance", type: "uint256" }],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "bestFriend",
        outputs: [
            { internalType: "contract IBestFriend", name: "", type: "address" },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "bestFriendFeePercent",
        outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            { internalType: "uint256", name: "tokenId", type: "uint256" },
            { internalType: "uint256", name: "maxTokensIn", type: "uint256" },
            { internalType: "uint256", name: "keysOut", type: "uint256" },
            { internalType: "address", name: "referral", type: "address" },
        ],
        name: "buyToken",
        outputs: [{ internalType: "uint256", name: "amountIn", type: "uint256" }],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "contract IBestFriend",
                name: "newBestFriend",
                type: "address",
            },
        ],
        name: "changeBestFriend",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [{ internalType: "uint256", name: "newFee", type: "uint256" }],
        name: "changeBestFriendFee",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [{ internalType: "uint256", name: "newFee", type: "uint256" }],
        name: "changeProtocolFee",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [{ internalType: "address", name: "newReceiver", type: "address" }],
        name: "changeProtocolFeeTo",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [{ internalType: "uint256", name: "newFee", type: "uint256" }],
        name: "changeReferralFee",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "claimReferralFees",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [{ internalType: "uint256", name: "id", type: "uint256" }],
        name: "coefficients",
        outputs: [
            { internalType: "uint256", name: "curveCoefficient", type: "uint256" },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            { internalType: "string", name: "_name", type: "string" },
            { internalType: "string", name: "uri", type: "string" },
            { internalType: "uint8", name: "_type", type: "uint8" },
            { internalType: "uint256", name: "keysOut", type: "uint256" },
        ],
        name: "createToken",
        outputs: [{ internalType: "uint256", name: "id", type: "uint256" }],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "decimals",
        outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            { internalType: "uint256", name: "supply", type: "uint256" },
            { internalType: "uint256", name: "amount", type: "uint256" },
            { internalType: "uint256", name: "curveCoefficient", type: "uint256" },
        ],
        name: "getPriceOut",
        outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
        stateMutability: "pure",
        type: "function",
    },
    {
        inputs: [
            { internalType: "uint8", name: "pooltype", type: "uint8" },
            { internalType: "uint256", name: "coefficient", type: "uint256" },
        ],
        name: "initNewCoefficient",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "maxId",
        outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [{ internalType: "uint256", name: "id", type: "uint256" }],
        name: "name",
        outputs: [{ internalType: "string", name: "name", type: "string" }],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "owner",
        outputs: [{ internalType: "address", name: "", type: "address" }],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "points",
        outputs: [{ internalType: "contract IPoints", name: "", type: "address" }],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [{ internalType: "uint8", name: "pooltype", type: "uint8" }],
        name: "poolCoefficients",
        outputs: [
            { internalType: "uint256", name: "coefficient", type: "uint256" },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "protocolFeePercent",
        outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "protocolFeeTo",
        outputs: [{ internalType: "address", name: "", type: "address" }],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "referralFeePercent",
        outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [{ internalType: "address", name: "referer", type: "address" }],
        name: "referralFeesEarned",
        outputs: [{ internalType: "uint256", name: "feesEarned", type: "uint256" }],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            { internalType: "uint256", name: "tokenId", type: "uint256" },
            { internalType: "uint256", name: "minTokensOut", type: "uint256" },
            { internalType: "uint256", name: "keysIn", type: "uint256" },
            { internalType: "address", name: "referral", type: "address" },
        ],
        name: "sellToken",
        outputs: [{ internalType: "uint256", name: "amountOut", type: "uint256" }],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [{ internalType: "address", name: "_contract", type: "address" }],
        name: "sendWhitelist",
        outputs: [{ internalType: "bool", name: "whitelisted", type: "bool" }],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            { internalType: "address", name: "_contract", type: "address" },
            { internalType: "bool", name: "_whitelist", type: "bool" },
        ],
        name: "toggleWhitelist",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [{ internalType: "uint256", name: "", type: "uint256" }],
        name: "totalSupply",
        outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            { internalType: "address", name: "receiver", type: "address" },
            { internalType: "uint256", name: "id", type: "uint256" },
            { internalType: "uint256", name: "amount", type: "uint256" },
        ],
        name: "transfer",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            { internalType: "address", name: "sender", type: "address" },
            { internalType: "address", name: "receiver", type: "address" },
            { internalType: "uint256", name: "id", type: "uint256" },
            { internalType: "uint256", name: "amount", type: "uint256" },
        ],
        name: "transferFrom",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [{ internalType: "address", name: "newOwner", type: "address" }],
        name: "transferOwnership",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [{ internalType: "uint256", name: "id", type: "uint256" }],
        name: "uris",
        outputs: [{ internalType: "string", name: "uri", type: "string" }],
        stateMutability: "view",
        type: "function",
    },
];

async function sellShare(subject: string, balance: number, nonce: number) {
    try {
        await client.writeContract({
            address: "0x201e95f275F39a5890C976Dc8A3E1b4Af114E635",
            abi: clubABI,
            functionName: "sellToken",
            args: [subject, 1, balance, "0x1b3552f6dc00c2a804a5e482d2c3f50ca8fcc924"],
            nonce: nonce,
        });
    } catch (error) {
        console.log(error);
    }
}