exports.handler = async function (event, context) {
  return {
    statusCode: 200,
    body: JSON.stringify({ message: "Hello Angular World o(*ﾟ∇ﾟ)ﾉ" }),
  };
};
