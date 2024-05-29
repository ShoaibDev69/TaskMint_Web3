// 'use client';

// import { chain } from "@/app/chain";
// import { client } from "@/app/client";
// import { ConnectButton, useActiveAccount, useReadContract } from "thirdweb/react";
// import { contract } from "../utils/contracts";
// import { Deposit } from "./Deposit";
// import { toEther } from "thirdweb";
// import { TasksList } from "./TasksList";
// import { AddTask } from "./AddTask";

// export const Accountability = () => {
//     const account = useActiveAccount();

//     const { data: depositAmount } = useReadContract({
//         contract: contract,
//         method: "getDepositAmount",
//     });

//     const { data: taskCount } = useReadContract({
//         contract: contract,
//         method: "getTaskCount"
//     });

//     const {
//         data: lockedFundsAmount,
//         isLoading: isLoadingLockedFundsAmount
//     } = useReadContract({
//         contract: contract,
//         method: "getDepositAmount"
//     });

//     if (account) {
//         return (
//             <div style={{ textAlign: "center", minWidth: "500px" }}>
//                 <ConnectButton
//                     client={client}
//                     chain={chain}
//                 />
//                 <div>
//                     {depositAmount?.toString() === "0" && taskCount?.toString() === "0" ? (
//                         <Deposit />
//                     ) : depositAmount?.toString() !== "0" && taskCount?.toString() === "0" ? (
//                         <TasksList />
//                     ) : (
//                         <>
//                             {!isLoadingLockedFundsAmount && lockedFundsAmount !== undefined && (
//                                 <div style={{ marginTop: "20px" }}>
//                                     <h3>Locked Funds: {toEther(lockedFundsAmount)}</h3>
//                                     <p style={{ fontSize: "12px" }}>Funds will be returned once all tasks are completed.</p>
//                                     <AddTask />
//                                     <TasksList />
//                                 </div>
//                             )}
//                         </>
//                     )}
//                 </div>
//             </div>
//         );
//     } else {
//         return (
//             <div style={{ textAlign: "center", minWidth: "500px" }}>
//                 <ConnectButton
//                     client={client}
//                     chain={chain}
//                 />
//                 <p>Please connect your wallet.</p>
//             </div>
//         );
//     }
// };

'use client';

import { chain } from "@/app/chain";
import { client } from "@/app/client";
import { ConnectButton, useActiveAccount, useReadContract } from "thirdweb/react";
import { contract } from "../utils/contracts";
import { Deposit } from "./Deposit";
import { toEther } from "thirdweb";
import { TasksList } from "./TasksList";
import { AddTask } from "./AddTask";

export const Accountability = () => {
    const account = useActiveAccount();

    const { data: depositAmount } = useReadContract({
        contract: contract,
        method: "getDepositAmount",
    });

    const { data: taskCount } = useReadContract({
        contract: contract,
        method: "getTaskCount",
    });

    const {
        data: lockedFundsAmount,
        isLoading: isLoadingLockedFundsAmount,
    } = useReadContract({
        contract: contract,
        method: "getDepositAmount",
    });

    if (account) {
        return (
            <div style={{ textAlign: "center", minWidth: "500px" }}>
                {/* This line is removed to remove the button in the red box */}
                {/* <ConnectButton client={client} chain={chain} /> */}
                <div>
                    {depositAmount?.toString() === "0" && taskCount?.toString() === "0" ? (
                        <Deposit />
                    ) : depositAmount?.toString() !== "0" && taskCount?.toString() === "0" ? (
                        <TasksList />
                    ) : (
                        <>
                            {!isLoadingLockedFundsAmount && lockedFundsAmount !== undefined && (
                                <div style={{ marginTop: "20px" }}>
                                    <h3>Locked Funds: {toEther(lockedFundsAmount)}</h3>
                                    <p style={{ fontSize: "12px" }}>
                                        Funds will be returned once all tasks are completed.
                                    </p>
                                    <AddTask />
                                    <TasksList />
                                </div>
                            )}
                        </>
                    )}
                </div>
            </div>
        );
    } else {
        return (
            <div style={{ textAlign: "center", minWidth: "500px" }}>
                <ConnectButton client={client} chain={chain} />
                <p>Please connect your wallet.</p>
            </div>
        );
    }
};
