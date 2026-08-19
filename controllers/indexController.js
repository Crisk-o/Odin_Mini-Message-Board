
const getMessageById = async (req, res) => {
  const { messageId } = req.params;

  const message = getMessageById(Number(messageId));

  if (!message) {
    throw console.error("Author not found");
  }

  res.send(`Message Details: ${message.text}\n${message.user}\n${message.added}`);
};

module.exports = { getMessageById };