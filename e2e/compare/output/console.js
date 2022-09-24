const {formatDurationDiffChange} = require('./format');

const printRegularLine = (entry) => {
    console.debug(` - ${entry.name}: ${formatDurationDiffChange(entry)}`);
};

module.exports = (data) => {
    // No need to log errors or warnings as these were be logged on the fly
    console.debug('');
    console.debug('❇️  Performance comparison results:');

    console.debug('\n➡️  Significant changes to duration');
    data.significant.forEach(printRegularLine);

    console.debug('\n➡️  Meaningless changes to duration');
    data.meaningless.forEach(printRegularLine);

    console.debug('');
};