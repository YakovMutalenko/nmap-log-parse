export const defaultConfig = {
    logFilesPath: "./logs/logs",
    maxMissingDays: 7,
    dayGetLimit: Infinity,
    logIntervalMinutes: 10,
    minimumUptime: 0.02,
    selfMacAddress: "00:00:00:00:00:00",
    deviceNames: {
        ["00:00:00:00:00:00"]: "me"
    } as { [mac: string]: string | undefined },
}
export type Config = typeof defaultConfig;