import { ChatOllama } from '@langchain/ollama';
import { CPU_INFO_SCHEMA } from '../schema/cpu_info.js';
import { getCPUInfo } from './cpu_stats.js';
import { cpuPromptTemplate } from '../prompt_templates/cpu.js';

export class CPUAssistant {
    constructor() {
        this.model = new ChatOllama({
            baseUrl: "http://localhost:11434",
            model: "llama3.1",
            temperature: 0,
            functions: [CPU_INFO_SCHEMA]
        });
    }

    async askQuestion(question) {
        try {
            const cpuInfo = await getCPUInfo();
            const chain = cpuPromptTemplate.pipe(this.model, { strict: true });

            const response = await chain.invoke({
                question: question,
                cpu_info: JSON.stringify(cpuInfo, null, 2)
            });

            return response.content;
        } catch (error) {
            console.error('Error processing question:', error);
            throw error;
        }
    }
} 