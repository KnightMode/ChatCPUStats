import { ChatPromptTemplate } from '@langchain/core/prompts';

export const cpuPromptTemplate = ChatPromptTemplate.fromTemplate(`
You are a helpful assistant that provides information about the system's CPU.
Use the provided CPU information to answer the following question:

Question: {question}

CPU Information:
{cpu_info}

Provide a natural, conversational response. Do not include any JSON or technical formatting in your response.
Focus only on answering the specific question asked. Be concise and clear.
`);