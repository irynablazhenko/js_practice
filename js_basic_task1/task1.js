import chalk from "chalk"

const log = console.log;
console.log(chalk.yellowBright('Automation testing gives a new ', chalk.blue('opportunity') + '!'));

console.log(`${chalk.magenta('Number of internet and social media users worldwide as of January 2024:')} 
    Internet users: ${chalk.red('5.35 billions')}
    Social Media users: ${chalk.green('5.04 billions')}
    `);

const hexColor = chalk.hex('#33FFFF');    
console.log(hexColor('Light blue as hex color'));
