/**
 * displayMessage - display a message to the standard output
 * @message: A string repesenting the message to write
 */
function displayMessage(message) {
  process.stdout.write(`${message}\n`);
}
module.exports = displayMessage;
