// Define the function schema for CPU information
export const CPU_INFO_SCHEMA = {
    name: "get_cpu_info",
    description: "Get detailed CPU information of the system",
    parameters: {
        type: "object",
        properties: {
            manufacturer: {
                type: "string",
                description: "CPU manufacturer (e.g., Intel, AMD)"
            },
            brand: {
                type: "string",
                description: "CPU brand and model"
            },
            speed: {
                type: "number",
                description: "CPU speed in GHz"
            },
            cores: {
                type: "number",
                description: "Number of physical CPU cores"
            },
            physicalCores: {
                type: "number",
                description: "Number of physical CPU cores"
            },
            performanceCores: {
                type: "number",
                description: "Number of performance cores (if applicable)"
            },
            efficiencyCores: {
                type: "number",
                description: "Number of efficiency cores (if applicable)"
            }
        },
        required: ["manufacturer", "brand", "speed", "cores"]
    }
};