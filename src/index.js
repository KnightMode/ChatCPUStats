import readline from 'readline';
import { CPUAssistant } from './services/cpu_assistant.js';

class ConsoleInterface {
    constructor(assistant) {
        this.assistant = assistant;
        this.rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });
    }

    async start() {
        try {
            console.log('\nCPU Information Assistant - Ask me anything about your CPU!');
            console.log('(Type "exit" to quit)\n');

            while (true) {
                const question = await this.askQuestion();

                if (question.toLowerCase() === 'exit') {
                    console.log('\nGoodbye!');
                    break;
                }

                console.log('\nProcessing...');
                const answer = await this.assistant.askQuestion(question);
                console.log('Answer:', answer, '\n');
            }
        } catch (error) {
            console.error('Error:', error);
        } finally {
            this.rl.close();
        }
    }

    askQuestion() {
        return new Promise((resolve) => {
            this.rl.question('Your question: ', resolve);
        });
    }
}

// Suppress deprecation warning
process.noDeprecation = true;

// Start the application
const assistant = new CPUAssistant();
const consoleInterface = new ConsoleInterface(assistant);
consoleInterface.start();
