import si from 'systeminformation';

export async function getCPUInfo() {
    try {
        const cpuData = await si.cpu();
        return {
            manufacturer: cpuData.manufacturer,
            brand: cpuData.brand,
            speed: cpuData.speed,
            cores: cpuData.cores,
            physicalCores: cpuData.physicalCores,
            performanceCores: cpuData.performanceCores,
            efficiencyCores: cpuData.efficiencyCores
        };
    } catch (error) {
        console.error('Error fetching CPU information:', error);
        throw error;
    }
}