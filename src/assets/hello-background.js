exports.handler = async function (event, context) {
  return {
    statusCode: 200,
    body: JSON.stringify({ message: "Hello Angular Background o(*ﾟ∇ﾟ)ﾉ" }),
  };
};
