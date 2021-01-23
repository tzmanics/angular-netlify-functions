exports.handler = async (event, context) => {
  console.log('Hello Angular World o(*ﾟ∇ﾟ)ﾉ');
  return {
    statusCode: 200,
    body: JSON.stringify({
      event: event,
      context: context,
    }),
  };
};
