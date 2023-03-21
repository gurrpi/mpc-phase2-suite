import {
    CeremonyState,
    CeremonyType,
    CeremonyTimeoutType,
    ParticipantStatus,
    ParticipantContributionStep
} from "../../src/types/enums"
import {
    generateFakeUser,
    generateFakeCeremony,
    generateFakeParticipant,
    generateFakeCircuit,
    generateFakeContribution
} from "./generators"

const fakeUser1 = generateFakeUser({
    uid: "0000000000000000000000000001",
    data: {
        name: "user1",
        displayName: "user1",
        creationTime: Date.now(),
        lastSignInTime: Date.now() + 1,
        lastUpdated: Date.now() + 2,
        email: "user1@user.com",
        emailVerified: false,
        photoURL: undefined
    }
})

const fakeUser2 = generateFakeUser({
    uid: "0000000000000000000000000002",
    data: {
        name: "user2",
        displayName: undefined,
        creationTime: Date.now(),
        lastSignInTime: Date.now() + 1,
        lastUpdated: Date.now() + 2,
        email: "user2@user.com",
        emailVerified: false,
        photoURL: undefined
    }
})

const fakeUser3 = generateFakeUser({
    uid: "0000000000000000000000000003",
    data: {
        name: "user3",
        displayName: undefined,
        creationTime: Date.now(),
        lastSignInTime: Date.now() + 1,
        lastUpdated: Date.now() + 2,
        email: "user3@gmail.com",
        emailVerified: false,
        photoURL: undefined
    }
})

const fakeUser4 = generateFakeUser({
    uid: "0000000000000000000000000004",
    data: {
        name: "user4",
        displayName: undefined,
        creationTime: Date.now(),
        lastSignInTime: Date.now() + 1,
        lastUpdated: Date.now() + 2,
        email: "user4@gmail.com",
        emailVerified: false,
        photoURL: undefined
    }
})

const fakeCeremonyScheduledFixed = generateFakeCeremony({
    uid: "0000000000000000000A",
    data: {
        coordinatorId: fakeUser1.uid,
        title: "Ceremony Scheduled Fixed",
        description: "Short description for Ceremony Scheduled Fixed",
        prefix: "ceremony-scheduled-fixed",
        penalty: 10, // Penalty in minutes (amount of time a contributor should wait after timeout).
        startDate: Date.now() + 86400000, // Starts in a day.
        endDate: Date.now() + 86400000 * 2, // Ends in two days.
        state: CeremonyState.SCHEDULED,
        type: CeremonyType.PHASE2,
        timeoutMechanismType: CeremonyTimeoutType.FIXED,
        lastUpdated: Date.now()
    }
})

const fakeCeremonyScheduledDynamic = generateFakeCeremony({
    uid: "0000000000000000000B",
    data: {
        coordinatorId: fakeUser1.uid,
        title: "Ceremony Scheduled Dynamic",
        description: "Short description for Ceremony Scheduled Dynamic",
        prefix: "ceremony-scheduled-dynamic",
        penalty: 10, // Penalty in minutes (amount of time a contributor should wait after timeout).
        startDate: Date.now() + 86400000, // Starts in a day.
        endDate: Date.now() + 86400000 * 2, // Ends in two days.
        state: CeremonyState.SCHEDULED,
        type: CeremonyType.PHASE2,
        timeoutMechanismType: CeremonyTimeoutType.DYNAMIC,
        lastUpdated: Date.now()
    }
})

const fakeCeremonyOpenedFixed = generateFakeCeremony({
    uid: "0000000000000000000C",
    data: {
        coordinatorId: fakeUser1.uid,
        title: "Ceremony Opened Fixed",
        description: "Short description for Ceremony Opened Fixed",
        prefix: "ceremony-opened-fixed",
        penalty: 10, // Penalty in minutes (amount of time a contributor should wait after timeout).
        startDate: Date.now() - 86400000, // Started a day ago.
        endDate: Date.now() + 86400000, // Ends in one day.
        state: CeremonyState.OPENED,
        type: CeremonyType.PHASE2,
        timeoutMechanismType: CeremonyTimeoutType.FIXED,
        lastUpdated: Date.now()
    }
})

const fakeCeremonyOpenedDynamic = generateFakeCeremony({
    uid: "0000000000000000000D",
    data: {
        coordinatorId: fakeUser1.uid,
        title: "Ceremony Opened Dynamic",
        description: "Short description for Ceremony Opened Dynamic",
        prefix: "ceremony-opened-dynamic",
        penalty: 10, // Penalty in minutes (amount of time a contributor should wait after timeout).
        startDate: Date.now() - 86400000, // Started a day ago.
        endDate: Date.now() + 86400000, // Ends in one day.
        state: CeremonyState.OPENED,
        type: CeremonyType.PHASE2,
        timeoutMechanismType: CeremonyTimeoutType.DYNAMIC,
        lastUpdated: Date.now()
    }
})

const fakeCeremonyNotCreated = {
    title: "Fake Ceremony Yet to be Created",
    description: "A fake ceremony that has not been created yet",
    startDate: new Date().valueOf(),
    endDate: Date.now() + 86400000,
    timeoutMechanismType: CeremonyTimeoutType.DYNAMIC,
    penalty: 5
}

const fakeCeremonyContributeTest = generateFakeCeremony({
    uid: "0000000000000000000E",
    data: {
        coordinatorId: fakeUser1.uid,
        title: "Ceremony Ready to Contribute Fixed",
        description: "Short description for Ceremony Ready To Contribute Dynamic",
        prefix: "ceremony-contribute-dynamic",
        penalty: 10, // Penalty in minutes (amount of time a contributor should wait after timeout).
        startDate: Date.now() - 86400000, // Started a day ago.
        endDate: Date.now() + 86400000, // Ends in one day.
        state: CeremonyState.OPENED,
        type: CeremonyType.PHASE2,
        timeoutMechanismType: CeremonyTimeoutType.FIXED,
        lastUpdated: Date.now()
    }
})

const fakeCeremonyClosedDynamic = generateFakeCeremony({
    uid: "0000000000000000000D",
    data: {
        coordinatorId: fakeUser1.uid,
        title: "Ceremony Closed Dynamic",
        description: "Short description for Ceremony Closed Dynamic",
        prefix: "ceremony-closed-dynamic",
        penalty: 10, // Penalty in days (amount of time a contributor should wait after timeout).
        startDate: Date.now() - 86400000, // Starts in a day.
        endDate: Date.now(), // Ends now
        state: CeremonyState.CLOSED,
        type: CeremonyType.PHASE2,
        timeoutMechanismType: CeremonyTimeoutType.DYNAMIC,
        lastUpdated: Date.now()
    }
})

const fakeParticipantNeverContributed = generateFakeParticipant({
    uid: fakeUser1.uid,
    data: {
        userId: fakeUser1.uid,
        contributionProgress: 0,
        status: ParticipantStatus.WAITING,
        contributions: [],
        lastUpdated: Date.now(),
        contributionStartedAt: 0
    }
})

const fakeParticipantCurrentContributorStepOne = generateFakeParticipant({
    uid: fakeUser1.uid,
    data: {
        userId: fakeUser1.uid,
        contributionProgress: 1,
        contributionStep: ParticipantContributionStep.DOWNLOADING,
        status: ParticipantStatus.CONTRIBUTING,
        contributions: [],
        lastUpdated: Date.now(),
        contributionStartedAt: Date.now() - 200,
        verificationStartedAt: 0,
        tempContributionData: {
            contributionComputationTime: 0,
            uploadId: "",
            chunks: []
        }
    }
})

const fakeParticipantCurrentContributorStepTwo = generateFakeParticipant({
    uid: fakeUser1.uid,
    data: {
        userId: fakeUser1.uid,
        contributionProgress: 1,
        contributionStep: ParticipantContributionStep.COMPUTING,
        status: ParticipantStatus.CONTRIBUTING,
        contributions: [],
        lastUpdated: Date.now(),
        contributionStartedAt: Date.now() - 200,
        verificationStartedAt: 0,
        tempContributionData: {
            contributionComputationTime: Date.now() - 100,
            uploadId: "001",
            chunks: []
        }
    }
})

const fakeParticipantCurrentContributorUploading = generateFakeParticipant({
    uid: fakeUser2.uid,
    data: {
        userId: fakeUser1.uid,
        contributionProgress: 1,
        contributionStep: ParticipantContributionStep.UPLOADING,
        status: ParticipantStatus.CONTRIBUTING,
        contributions: [
            {
                computationTime: Date.now().valueOf() - 1000,
                hash: "0xhash",
                doc: "000001"
            }
        ],
        lastUpdated: Date.now(),
        contributionStartedAt: 0,
        verificationStartedAt: 0,
        tempContributionData: {
            contributionComputationTime: Date.now() - 100,
            uploadId: "001",
            chunks: []
        }
    }
})

const fakeParticipantContributionDone = generateFakeParticipant({
    uid: fakeUser2.uid,
    data: {
        userId: fakeUser2.uid,
        contributionProgress: 1,
        contributionStep: ParticipantContributionStep.COMPLETED,
        status: ParticipantStatus.DONE,
        contributions: [
            {
                computationTime: 1439,
                doc: "000001",
                hash: "Contribution Hash: 0xhash"
            }
        ],
        lastUpdated: Date.now(),
        contributionStartedAt: Date.now() - 100,
        verificationStartedAt: Date.now(),
        tempContributionData: {
            contributionComputationTime: Date.now() - 100,
            uploadId: "001",
            chunks: []
        }
    }
})

const fakeCircuitSmallNoContributors = generateFakeCircuit({
    uid: "000000000000000000A1",
    data: {
        name: "Circuit Small",
        description: "Short description of Circuit Small",
        prefix: "circuit-small",
        sequencePosition: 1,
        fixedTimeWindow: 10,
        zKeySizeInBytes: 45020,
        lastUpdated: Date.now(),
        metadata: {
            constraints: 65,
            curve: "bn-128",
            labels: 79,
            outputs: 1,
            pot: 7,
            privateInputs: 0,
            publicInputs: 2,
            wires: 67
        },
        template: {
            commitHash: "295d995802b152a1dc73b5d0690ce3f8ca5d9b23",
            paramsConfiguration: ["2"],
            source: "https://github.com/0xjei/circom-starter/blob/dev/circuits/exercise/checkAscendingOrder.circom"
        },
        waitingQueue: {
            completedContributions: 0,
            contributors: [],
            currentContributor: "",
            failedContributions: 0
        },
        files: {
            initialZkeyBlake2bHash:
                "eea0a468524a984908bff6de1de09867ac5d5b0caed92c3332fd5ec61004f79505a784df9d23f69f33efbfef016ad3138871fa8ad63b6e8124a9d0721b0e9e32",
            initialZkeyFilename: "circuit_small_00000.zkey",
            initialZkeyStoragePath: "circuits/circuit_small/contributions/circuit_small_00000.zkey",
            potBlake2bHash:
                "34379653611c22a7647da22893c606f9840b38d1cb6da3368df85c2e0b709cfdb03a8efe91ce621a424a39fe4d5f5451266d91d21203148c2d7d61cf5298d119",
            potFilename: "powersOfTau28_hez_final_02.ptau",
            potStoragePath: "pot/powersOfTau28_hez_final_02.ptau",
            r1csBlake2bHash:
                "0739198d5578a4bdaeb2fa2a1043a1d9cac988472f97337a0a60c296052b82d6cecb6ae7ce503ab9864bc86a38cdb583f2d33877c41543cbf19049510bca7472",
            r1csFilename: "circuit_small.r1cs",
            r1csStoragePath: "circuits/circuit_small/circuit_small.r1cs",
            wasmBlake2bHash:
                "00d09469acaba682802bf92df24708cf3d499b759379f959c4b6932b14fe9e6bfccc793c3933eac4a76546171d402cab1ae3ce1b3291dbba8e2fb358d52bd77d",
            wasmFilename: "circuit_small.wasm",
            wasmStoragePath: "circuits/circuit_small/circuit_small.wasm"
        },
        avgTimings: {
            contributionComputation: 0,
            fullContribution: 0,
            verifyCloudFunction: 0
        },
        compiler: {
            commitHash: "ed807764a17ce06d8307cd611ab6b917247914f5",
            version: "2.0.5"
        }
    }
})

const fakeCircuitSmallContributors = generateFakeCircuit({
    uid: "000000000000000000A2",
    data: {
        name: "Circuit Small",
        description: "Short description of Circuit Small",
        prefix: "circuit-small",
        sequencePosition: 1,
        fixedTimeWindow: 10,
        zKeySizeInBytes: 45020,
        lastUpdated: Date.now(),
        metadata: {
            constraints: 65,
            curve: "bn-128",
            labels: 79,
            outputs: 1,
            pot: 7,
            privateInputs: 0,
            publicInputs: 2,
            wires: 67
        },
        template: {
            commitHash: "295d995802b152a1dc73b5d0690ce3f8ca5d9b23",
            paramsConfiguration: ["2"],
            source: "https://github.com/0xjei/circom-starter/blob/dev/circuits/exercise/checkAscendingOrder.circom"
        },
        waitingQueue: {
            completedContributions: 0,
            contributors: [fakeUser1.uid, fakeUser2.uid],
            currentContributor: fakeUser1.uid,
            failedContributions: 0
        },
        files: {
            initialZkeyBlake2bHash:
                "eea0a468524a984908bff6de1de09867ac5d5b0caed92c3332fd5ec61004f79505a784df9d23f69f33efbfef016ad3138871fa8ad63b6e8124a9d0721b0e9e32",
            initialZkeyFilename: "circuit_small_00000.zkey",
            initialZkeyStoragePath: "circuits/circuit_small/contributions/circuit_small_00000.zkey",
            potBlake2bHash:
                "34379653611c22a7647da22893c606f9840b38d1cb6da3368df85c2e0b709cfdb03a8efe91ce621a424a39fe4d5f5451266d91d21203148c2d7d61cf5298d119",
            potFilename: "powersOfTau28_hez_final_07.ptau",
            potStoragePath: "pot/powersOfTau28_hez_final_07.ptau",
            r1csBlake2bHash:
                "0739198d5578a4bdaeb2fa2a1043a1d9cac988472f97337a0a60c296052b82d6cecb6ae7ce503ab9864bc86a38cdb583f2d33877c41543cbf19049510bca7472",
            r1csFilename: "circuit_small.r1cs",
            r1csStoragePath: "circuits/circuit_small/circuit_small.r1cs",
            wasmBlake2bHash:
                "00d09469acaba682802bf92df24708cf3d499b759379f959c4b6932b14fe9e6bfccc793c3933eac4a76546171d402cab1ae3ce1b3291dbba8e2fb358d52bd77d",
            wasmFilename: "circuit_small.wasm",
            wasmStoragePath: "circuits/circuit_small/circuit_small.wasm"
        },
        avgTimings: {
            contributionComputation: 0,
            fullContribution: 0,
            verifyCloudFunction: 0
        },
        compiler: {
            commitHash: "ed807764a17ce06d8307cd611ab6b917247914f5",
            version: "2.0.5"
        }
    }
})

// create a circuit object that suits our needs for finalization/verification tests
const fakeCircuitForFinalization = generateFakeCircuit({
    uid: "000000000000000000A3",
    data: {
        name: "Circuit",
        description: "Short description of Circuit",
        prefix: "circuit",
        sequencePosition: 1,
        fixedTimeWindow: 10,
        zKeySizeInBytes: 45020,
        lastUpdated: Date.now(),
        metadata: {
            constraints: 65,
            curve: "bn-128",
            labels: 79,
            outputs: 1,
            pot: 2,
            privateInputs: 0,
            publicInputs: 2,
            wires: 67
        },
        template: {
            commitHash: "295d995802b152a1dc73b5d0690ce3f8ca5d9b23",
            paramsConfiguration: ["2"],
            source: "https://github.com/0xjei/circom-starter/blob/dev/circuits/exercise/checkAscendingOrder.circom"
        },
        waitingQueue: {
            completedContributions: 1,
            contributors: [fakeUser1.uid, fakeUser2.uid],
            currentContributor: fakeUser1.uid,
            failedContributions: 0
        },
        files: {
            initialZkeyBlake2bHash:
                "eea0a468524a984908bff6de1de09867ac5d5b0caed92c3332fd5ec61004f79505a784df9d23f69f33efbfef016ad3138871fa8ad63b6e8124a9d0721b0e9e32",
            initialZkeyFilename: "circuit_00000.zkey",
            initialZkeyStoragePath: "circuits/circuit/contributions/circuit_00000.zkey",
            potBlake2bHash:
                "34379653611c22a7647da22893c606f9840b38d1cb6da3368df85c2e0b709cfdb03a8efe91ce621a424a39fe4d5f5451266d91d21203148c2d7d61cf5298d119",
            potFilename: "powersOfTau28_hez_final_02.ptau",
            potStoragePath: "pot/powersOfTau28_hez_final_02.ptau",
            r1csBlake2bHash:
                "0739198d5578a4bdaeb2fa2a1043a1d9cac988472f97337a0a60c296052b82d6cecb6ae7ce503ab9864bc86a38cdb583f2d33877c41543cbf19049510bca7472",
            r1csFilename: "circuit.r1cs",
            r1csStoragePath: "circuits/circuit/circuit.r1cs",
            wasmBlake2bHash:
                "00d09469acaba682802bf92df24708cf3d499b759379f959c4b6932b14fe9e6bfccc793c3933eac4a76546171d402cab1ae3ce1b3291dbba8e2fb358d52bd77d",
            wasmFilename: "circuit.wasm",
            wasmStoragePath: "circuits/circuit/circuit.wasm"
        },
        avgTimings: {
            contributionComputation: 0,
            fullContribution: 0,
            verifyCloudFunction: 0
        },
        compiler: {
            commitHash: "ed807764a17ce06d8307cd611ab6b917247914f5",
            version: "2.0.5"
        }
    }
})

const fakeContributionDone = generateFakeContribution({
    uid: fakeUser2.uid,
    data: {
        participantId: fakeUser1.uid,
        contributionComputationTime: 10000,
        verificationComputationTime: 30000,
        zkeyIndex: "00001",
        verificationSoftware: {
            name: "snarkjs",
            version: "0.5.0",
            commitHash: "6660254b81a3ed86b961df2a9c1b53ccdddc1216"
        },
        valid: true,
        lastUpdated: Date.now(),
        files: {
            lastZkeyBlake2bHash:
                "b3f7822bbb84c6b18d0f793fcb9ba59e7e7c5c9e45e520432a7dbc76c347e8f6a60a1f6b8f0a634f52c1bbd0789d532f7258bbfd31063b43cc4eff98588d1b29",
            lastZkeyFilename: "circuit_00001.zkey",
            lastZkeyStoragePath: "circuits/circuit/contributions/circuit_00001.zkey",
            transcriptBlake2bHash:
                "c7df098fec0209cf8566019988f5aba33074814e4cc2d64e83167284e7b3c5d6f9d1a4bb45d32e8b42e3a1d95820c75cf8a992271a161fe4d0e4aca9df7b399e",
            transcriptFilename: `circuit_00001_${fakeUser1.data.name}_verification_transcript.log`,
            transcriptStoragePath: `circuits/circuit/transcripts/circuit_00001_${fakeUser1.data.name}_verification_transcript.log`
        }
    }
})

export const fakeUsersData = {
    fakeUser1,
    fakeUser2,
    fakeUser3,
    fakeUser4
}

export const fakeCeremoniesData = {
    fakeCeremonyScheduledFixed,
    fakeCeremonyScheduledDynamic,
    fakeCeremonyOpenedFixed,
    fakeCeremonyOpenedDynamic,
    fakeCeremonyNotCreated,
    fakeCeremonyClosedDynamic,
    fakeCeremonyContributeTest
}

export const fakeParticipantsData = {
    fakeParticipantNeverContributed,
    fakeParticipantContributionDone,
    fakeParticipantCurrentContributorStepOne,
    fakeParticipantCurrentContributorStepTwo,
    fakeParticipantCurrentContributorUploading
}

export const fakeCircuitsData = {
    fakeCircuitSmallNoContributors,
    fakeCircuitSmallContributors,
    fakeCircuitForFinalization
}

export const fakeContributions = {
    fakeContributionDone
}
