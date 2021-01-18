exports.handler = async (event, context) => {
  console.log('deploy-building');
  console.log('event', event);
  console.log('context', context);
  console.log('Hello Angular World o(*ﾟ∇ﾟ)ﾉ');
  return {
    statusCode: 200,
    body: JSON.stringify({
      data: true,
    }),
  };
};
