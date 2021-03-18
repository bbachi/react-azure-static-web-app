module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');

    const headerColor = process.env.HEADER_COLOR;
    const headerTitleColor =  process.env.HEADER_TITLE_COLOR;

    console.log("HEADER_COLOR::::::" + headerColor);
    console.log("HEADER_TITLE_COLOR::::::" + headerTitleColor);

    context.res = {
        status: 200,
        body: {headerColor,  headerTitleColor}
    };
};