import { PushAPI } from "@pushprotocol/restapi";
import { ethers } from "ethers";
import { ENV } from "@pushprotocol/restapi/src/lib/constants";

export const sendNotification = async (title: string, body: string) => {
    const provider = new ethers.providers.JsonRpcProvider(
        process.env.RPC_ENDPOINT_POLYGON!
    );
    const signer = new ethers.Wallet(process.env.DEV_PK!, provider);
    const adminUser = await PushAPI.initialize(signer, { env: ENV.STAGING });

    const sendNotif = await adminUser.channel.send(["*"], {
        notification: {
            title,
            body,
        },
    });

    return sendNotif.data;
};

export const userSpecificNotification = async (
    wallet_address: string,
    title: string,
    body: string
) => {
    const provider = new ethers.providers.JsonRpcProvider(
        process.env.RPC_ENDPOINT_POLYGON!
    );
    const signer = new ethers.Wallet(process.env.DEV_PK!, provider);
    const adminUser = await PushAPI.initialize(signer, { env: ENV.STAGING });

    const sendNotif = await adminUser.channel.send([wallet_address], {
        notification: {
            title,
            body,
        },
    });

    return sendNotif;
};

export const createChannelSettings = async () => {
    const provider = new ethers.providers.JsonRpcProvider(
        process.env.RPC_ENDPOINT_POLYGON!
    );
    const signer = new ethers.Wallet(process.env.DEV_PK!, provider);
    const adminUser = await PushAPI.initialize(signer, { env: ENV.STAGING });

    const setting = await adminUser.channel.setting([
        {
            description: "New Loan Option",
            type: 1,
            default: 1,
        },
        {
            description: "Warning Notification",
            type: 1,
            default: 1,
        },
        {
            description: "Success Payment",
            type: 1,
            default: 1,
        },
        {
            description: "Moved to Bidding",
            type: 1,
            default: 1,
        },
    ]);

    return setting.transactionHash;
};

export const optOutOfSettings = async (index: number) => {
    const provider = new ethers.providers.JsonRpcProvider(
        process.env.RPC_ENDPOINT_POLYGON!
    );
    const signer = new ethers.Wallet(process.env.DEV_PK!, provider);
    const adminUser = await PushAPI.initialize(signer, { env: ENV.STAGING });

    const res = await adminUser.channel.send(["*"], {
        notification: {
            title: "hi",
            body: "test-targeted",
        },
        payload: {
            title: "testing first notification",
            body: "testing with random body",
            cta: "https://google.com/",
            embed: "https://avatars.githubusercontent.com/u/64157541?s=200&v=4",
            index: {
                index: index,
            },
        },
    });

    return res.data;
};